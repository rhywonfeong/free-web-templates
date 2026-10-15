export function generateMarkdown(data) {
    let md = `# Design System: ${data.site}\n*${data.personality}*\n\n`;
    
    md += `## Colors\n| Token | Hex | Role |\n|---|---|---|\n`;
    (data.colors || []).forEach(c => {
        md += `| \`${c.name}\` | \`${c.hex}\` | ${c.role} |\n`;
    });

    md += `\n## Typography\n`;
    (data.typography || []).forEach(t => {
        md += `### ${t.role}\n- **Family**: \`${t.family}\`, ${t.substitute}\n- **Weights**: ${t.weights?.join(', ')}\n- **Sizes**: ${t.sizes?.join(', ')}\n- **Line Height**: ${t.lineHeight}\n\n`;
    });

    md += `## Spacing\n| Token | Value | Context |\n|---|---|---|\n`;
    (data.spacing || []).forEach(s => {
        md += `| \`${s.name}\` | \`${s.value}\` | ${s.usage} |\n`;
    });

    return md;
}

export function generateCSS(data) {
    let css = `/* CSS Variables for ${data.site} */\n:root {\n`;
    
    css += `  /* Colors */\n`;
    (data.colors || []).forEach(c => css += `  --color-${c.name.replace(/\s+/g, '-')}: ${c.hex};\n`);
    
    css += `\n  /* Typography */\n`;
    (data.typography || []).forEach(t => {
        const prefix = t.role.replace(/\s+/g, '-');
        css += `  --font-${prefix}: '${t.family}', ${t.substitute || 'sans-serif'};\n`;
    });

    css += `\n  /* Spacing */\n`;
    (data.spacing || []).forEach(s => css += `  --space-${s.name}: ${s.value};\n`);
    
    css += `\n  /* Radii */\n`;
    (data.borderRadius || []).forEach(r => css += `  --radius-${r.name}: ${r.value};\n`);

    css += `\n  /* Shadows */\n`;
    (data.shadows || []).forEach(s => css += `  --shadow-${s.name}: ${s.value};\n`);

    css += `}\n`;
    return css;
}

export function generateTailwind(data) {
    const colors = {};
    (data.colors || []).forEach(c => colors[c.name.replace(/\s+/g, '-')] = c.hex);
    
    const fontFamily = {};
    (data.typography || []).forEach(t => {
        const safeName = t.family.replace(/['"]/g, '');
        fontFamily[t.role.replace(/\s+/g, '-')] = [safeName, t.substitute].filter(Boolean);
    });

    const spacing = {};
    (data.spacing || []).forEach(s => spacing[s.name] = s.value);

    const borderRadius = {};
    (data.borderRadius || []).forEach(r => borderRadius[r.name] = r.value);

    const config = {
        theme: {
            extend: {
                colors,
                fontFamily,
                spacing,
                borderRadius
            }
        }
    };

    const jsonStr = JSON.stringify(config, null, 2);
    return `/** @type {import('tailwindcss').Config} */\nmodule.exports = ${jsonStr.replace(/"([^"]+)":/g, '$1:')};`;
}

export function generateTokens(data) {
    const tokens = {};
    
    if(data.colors?.length) {
        tokens.color = {};
        data.colors.forEach(c => {
            tokens.color[c.name.replace(/\s+/g, '-')] = { $value: c.hex, $type: 'color', $description: c.role };
        });
    }

    if(data.typography?.length) {
        tokens.font = { family: {} };
        data.typography.forEach(t => {
            tokens.font.family[t.role.replace(/\s+/g, '-')] = { $value: t.family, $type: 'fontFamily' };
        });
    }

    if(data.spacing?.length) {
        tokens.spacing = {};
        data.spacing.forEach(s => {
            tokens.spacing[s.name] = { $value: s.value, $type: 'dimension', $description: s.usage };
        });
    }

    return tokens;
}

export function highlightSyntax(code, type) {
    let html = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    if(type === 'css') {
        html = html.replace(/(--[a-zA-Z0-9-]+)/g, '<span class="token property">$1</span>');
        html = html.replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="token number">$1</span>');
        html = html.replace(/(px|rem|em|%)/g, '<span class="token string">$1</span>');
    } else if (type === 'tokens' || type === 'raw') {
        html = html.replace(/"(.*?)":/g, '<span class="token property">"$1"</span>:');
        html = html.replace(/: "(.*?)"/g, ': <span class="token string">"$1"</span>');
        html = html.replace(/: ([0-9.]+)/g, ': <span class="token number">$1</span>');
    } else if (type === 'tailwind') {
        html = html.replace(/'(.*?)'/g, '<span class="token string">\'$1\'</span>');
        html = html.replace(/([a-zA-Z0-9]+):/g, '<span class="token property">$1</span>:');
    }
    
    return html;
}