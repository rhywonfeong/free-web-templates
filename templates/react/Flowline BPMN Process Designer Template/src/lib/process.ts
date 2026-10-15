/* ==========================================================================
   Flowline — process model + serializers

   The canvas, the export page and the publish preflight all read from this one
   model, so an export can never drift out of sync with what is drawn.
   ========================================================================== */

export type NodeKind = "event" | "gateway" | "task" | "artifact";

export type ProcessNode = {
  id: string;
  name: string;
  /** BPMN element type, e.g. "bpmn:ServiceTask". */
  type: string;
  kind: NodeKind;
  x: number;
  y: number;
  width: number;
  height: number;
  documentation?: string;
};

export type ProcessFlow = {
  id: string;
  source: string;
  target: string;
  label?: string;
  condition?: string;
};

export type ProcessModel = {
  id: string;
  name: string;
  version: string;
  nodes: ProcessNode[];
  flows: ProcessFlow[];
};

export const PROCESS: ProcessModel = {
  id: "Process_OrderFulfillment",
  name: "Order Fulfillment",
  version: "2.4",
  nodes: [
    {
      id: "StartEvent_1",
      name: "Order received",
      type: "bpmn:StartEvent",
      kind: "event",
      x: 60,
      y: 325,
      width: 60,
      height: 60,
      documentation: "Entry point. Triggered by an inbound order message.",
    },
    {
      id: "Task_receiveOrder",
      name: "Receive Order",
      type: "bpmn:ReceiveTask",
      kind: "task",
      x: 200,
      y: 300,
      width: 240,
      height: 110,
      documentation: "Normalises the inbound payload into an order object.",
    },
    {
      id: "Gateway_paymentValid",
      name: "Payment valid?",
      type: "bpmn:ExclusiveGateway",
      kind: "gateway",
      x: 500,
      y: 319,
      width: 72,
      height: 72,
    },
    {
      id: "Task_0f2ab13",
      name: "Verify Payment",
      type: "bpmn:ServiceTask",
      kind: "task",
      x: 650,
      y: 160,
      width: 250,
      height: 210,
      documentation:
        "Calls the payment gateway and returns an approval flag used by the exclusive gateway.",
    },
    {
      id: "Task_requestDetails",
      name: "Request Details",
      type: "bpmn:UserTask",
      kind: "task",
      x: 650,
      y: 500,
      width: 250,
      height: 140,
      documentation: "Assigned to billing-team. SLA of 24 hours before escalation.",
    },
    {
      id: "Gateway_fork",
      name: "Fork",
      type: "bpmn:ParallelGateway",
      kind: "gateway",
      x: 964,
      y: 199,
      width: 72,
      height: 72,
    },
    {
      id: "Task_reserveStock",
      name: "Reserve Stock",
      type: "bpmn:ScriptTask",
      kind: "task",
      x: 1120,
      y: 110,
      width: 250,
      height: 120,
      documentation: "inventory.hold(items)",
    },
    {
      id: "Task_sendConfirmation",
      name: "Send Confirmation",
      type: "bpmn:SendTask",
      kind: "task",
      x: 1120,
      y: 350,
      width: 250,
      height: 130,
      documentation: "Sends the order-confirmed template to the customer.",
    },
    {
      id: "EndEvent_completed",
      name: "Completed",
      type: "bpmn:EndEvent",
      kind: "event",
      x: 1438,
      y: 250,
      width: 60,
      height: 60,
    },
    {
      id: "EndEvent_onHold",
      name: "On hold",
      type: "bpmn:EndEvent",
      kind: "event",
      x: 980,
      y: 525,
      width: 60,
      height: 60,
    },
    {
      id: "DataObject_payment",
      name: "Payment.json",
      type: "bpmn:DataObjectReference",
      kind: "artifact",
      x: 640,
      y: 40,
      width: 110,
      height: 70,
    },
    {
      id: "TextAnnotation_sla",
      name: "SLA — customer must respond within 24 hours, otherwise the case escalates.",
      type: "bpmn:TextAnnotation",
      kind: "artifact",
      x: 700,
      y: 668,
      width: 230,
      height: 60,
    },
  ],
  flows: [
    { id: "Flow_1", source: "StartEvent_1", target: "Task_receiveOrder" },
    { id: "Flow_2", source: "Task_receiveOrder", target: "Gateway_paymentValid" },
    {
      id: "Flow_3",
      source: "Gateway_paymentValid",
      target: "Task_0f2ab13",
      label: "Yes",
      condition: "${payment.valid == true}",
    },
    {
      id: "Flow_4",
      source: "Gateway_paymentValid",
      target: "Task_requestDetails",
      label: "No",
      condition: "${payment.valid == false}",
    },
    { id: "Flow_5", source: "Task_0f2ab13", target: "Gateway_fork" },
    { id: "Flow_6", source: "Gateway_fork", target: "Task_reserveStock" },
    { id: "Flow_7", source: "Gateway_fork", target: "Task_sendConfirmation" },
    { id: "Flow_8", source: "Task_reserveStock", target: "EndEvent_completed" },
    { id: "Flow_9", source: "Task_sendConfirmation", target: "EndEvent_completed" },
    { id: "Flow_10", source: "Task_requestDetails", target: "EndEvent_onHold" },
  ],
};

/* ------------------------------------------------------------- utilities */

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Strips the "bpmn:" prefix for use as a raw XML tag name. */
function tag(type: string): string {
  return type.includes(":") ? type.slice(type.indexOf(":") + 1) : type;
}

export function flowsFrom(model: ProcessModel, nodeId: string): ProcessFlow[] {
  return model.flows.filter((flow) => flow.source === nodeId);
}

export function flowsTo(model: ProcessModel, nodeId: string): ProcessFlow[] {
  return model.flows.filter((flow) => flow.target === nodeId);
}

/* ----------------------------------------------------------- serializers */

export function toBpmnXml(model: ProcessModel): string {
  const flowNodes = model.nodes.filter((node) => node.kind !== "artifact");

  const elements = flowNodes
    .map((node) => {
      const name = escapeXml(node.name);
      const incoming = flowsTo(model, node.id)
        .map((flow) => `      <incoming>${flow.id}</incoming>`)
        .join("\n");
      const outgoing = flowsFrom(model, node.id)
        .map((flow) => `      <outgoing>${flow.id}</outgoing>`)
        .join("\n");
      const doc = node.documentation
        ? `      <documentation>${escapeXml(node.documentation)}</documentation>\n`
        : "";
      const body = [doc, incoming, outgoing].filter(Boolean).join("\n");

      return `    <${tag(node.type)} id="${node.id}" name="${name}">\n${body}\n    </${tag(node.type)}>`;
    })
    .join("\n");

  const sequenceFlows = model.flows
    .map((flow) => {
      const name = flow.label ? ` name="${escapeXml(flow.label)}"` : "";
      const condition = flow.condition
        ? `\n      <conditionExpression xsi:type="tFormalExpression">${escapeXml(
            flow.condition,
          )}</conditionExpression>\n    `
        : "";
      return `    <sequenceFlow id="${flow.id}"${name} sourceRef="${flow.source}" targetRef="${flow.target}">${condition}</sequenceFlow>`;
    })
    .join("\n");

  const shapes = model.nodes
    .map(
      (node) =>
        `      <bpmndi:BPMNShape id="${node.id}_di" bpmnElement="${node.id}">\n` +
        `        <dc:Bounds x="${node.x}" y="${node.y}" width="${node.width}" height="${node.height}" />\n` +
        `      </bpmndi:BPMNShape>`,
    )
    .join("\n");

  const edges = model.flows
    .map(
      (flow) =>
        `      <bpmndi:BPMNEdge id="${flow.id}_di" bpmnElement="${flow.id}" />`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  id="Definitions_flowline"
  targetNamespace="http://flowline.dev/bpmn"
  exporter="Flowline Process Designer"
  exporterVersion="${model.version}">
  <process id="${model.id}" name="${escapeXml(model.name)}" isExecutable="true">
${elements}
${sequenceFlows}
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="${model.id}">
${shapes}
${edges}
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`;
}

export function toJson(model: ProcessModel): string {
  return `${JSON.stringify(
    {
      exporter: "Flowline Process Designer",
      schema: "flowline/process@1",
      process: {
        id: model.id,
        name: model.name,
        version: model.version,
      },
      nodes: model.nodes.map((node) => ({
        id: node.id,
        name: node.name,
        type: node.type,
        kind: node.kind,
        bounds: { x: node.x, y: node.y, width: node.width, height: node.height },
        ...(node.documentation ? { documentation: node.documentation } : {}),
      })),
      flows: model.flows,
    },
    null,
    2,
  )}\n`;
}

export function toMermaid(model: ProcessModel): string {
  const shapeFor = (node: ProcessNode, label: string) => {
    if (node.kind === "event") return `${node.id}(["${label}"])`;
    if (node.kind === "gateway") return `${node.id}{"${label}"}`;
    return `${node.id}["${label}"]`;
  };

  const lines = model.flows.map((flow) => {
    const source = model.nodes.find((node) => node.id === flow.source);
    const target = model.nodes.find((node) => node.id === flow.target);
    if (!source || !target) return "";
    const arrow = flow.label ? `-- ${flow.label} -->` : "-->";
    return `  ${shapeFor(source, source.name)} ${arrow} ${shapeFor(target, target.name)}`;
  });

  return `flowchart LR\n${lines.filter(Boolean).join("\n")}\n`;
}

/** Minimal standalone SVG so the diagram can be dropped into docs or a PR. */
export function toSvg(model: ProcessModel): string {
  const padding = 40;
  const flowNodes = model.nodes.filter((node) => node.kind !== "artifact");
  const width =
    Math.max(...flowNodes.map((node) => node.x + node.width)) + padding * 2;
  const height =
    Math.max(...flowNodes.map((node) => node.y + node.height)) + padding * 2;

  const center = (node: ProcessNode) => ({
    x: node.x + node.width / 2 + padding,
    y: node.y + node.height / 2 + padding,
  });

  const edges = model.flows
    .map((flow) => {
      const source = flowNodes.find((node) => node.id === flow.source);
      const target = flowNodes.find((node) => node.id === flow.target);
      if (!source || !target) return "";
      const a = center(source);
      const b = center(target);
      return `  <line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#94a3b8" stroke-width="2" />`;
    })
    .filter(Boolean)
    .join("\n");

  const shapes = flowNodes
    .map((node) => {
      const x = node.x + padding;
      const y = node.y + padding;
      const label = escapeXml(node.name);
      const fill =
        node.kind === "gateway" ? "#fffbeb" : node.kind === "event" ? "#ecfdf5" : "#ffffff";
      const stroke =
        node.kind === "gateway" ? "#fbbf24" : node.kind === "event" ? "#34d399" : "#e2e8f0";
      const rx = node.kind === "event" ? node.height / 2 : 12;
      return (
        `  <g>\n` +
        `    <rect x="${x}" y="${y}" width="${node.width}" height="${node.height}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="2" />\n` +
        `    <text x="${x + node.width / 2}" y="${y + node.height / 2}" text-anchor="middle" dominant-baseline="middle" font-family="Inter, system-ui, sans-serif" font-size="14" fill="#334155">${label}</text>\n` +
        `  </g>`
      );
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="#f8fafc" />
${edges}
${shapes}
</svg>
`;
}

/* -------------------------------------------------------------- download */

/**
 * Browser-only file download. Uses a Blob + object URL rather than a data URI
 * so large exports do not hit the ~2MB data-URL ceiling in some browsers.
 */
export function downloadFile(filename: string, content: string, mime: string): void {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  // Revoke on the next tick so Safari has time to start the download.
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path below */
  }

  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}
