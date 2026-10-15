import { LucideIcon, Shield, Terminal, Network, Bug, Lock, Crosshair } from "lucide-react";

/** A single day of study: the daily topic and the resource link for it. */
export interface DailyTopic {
  /** e.g. "Day 01" */
  day: string;
  /** The topic to study that day. */
  topic: string;
  /** Free learning/education resource link for the day. */
  link: {
    label: string;
    url: string;
  };
}

export interface Topic {
  id: string;
  title: string;
  xp: number;
  /** Short description of what the topic covers. */
  detail: string;
  /** Free learning/education resource for the topic. */
  link: {
    label: string;
    url: string;
  };
  /** Day-by-day breakdown: each daily topic + its resource link. */
  days: DailyTopic[];
}

export interface RoadmapWeek {
  id: string;
  /** e.g. "Week 01" */
  week: string;
  /** Short theme for the week. */
  title: string;
  topics: Topic[];
}

export interface RoadmapMonth {
  id: string;
  month: string;
  title: string;
  focus: string;
  icon: LucideIcon;
  accent: string;
  weeks: RoadmapWeek[];
}

/**
 * 6-Month Cyber Security Roadmap.
 * Each month is broken down into weekly sprints, each week contains topics, and
 * every topic is broken down into daily study sessions — each day has its own
 * topic and a free learning resource link. Interactive completion logic tracks
 * progress across every topic.
 */
export const roadmap: RoadmapMonth[] = [
  {
    id: "m1",
    month: "Month 01",
    title: "Foundations & Networking",
    focus: "Core IT, networking protocols, and the security mindset.",
    icon: Network,
    accent: "#00f3ff",
    weeks: [
      {
        id: "m1w1",
        week: "Week 01",
        title: "How Networks Talk",
        topics: [
          {
            id: "m1t1",
            title: "OSI & TCP/IP Models",
            xp: 100,
            detail:
              "Understand the 7-layer OSI model and the 4-layer TCP/IP stack — how data is encapsulated and moves across a network.",
            link: {
              label: "Cloudflare — What is the OSI Model?",
              url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
            },
            days: [
              {
                day: "Day 01",
                topic: "The 7 layers of the OSI model & their responsibilities",
                link: {
                  label: "Cloudflare — OSI Model",
                  url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
                },
              },
              {
                day: "Day 02",
                topic: "TCP/IP stack vs OSI & data encapsulation",
                link: {
                  label: "GeeksforGeeks — TCP/IP Model",
                  url: "https://www.geeksforgeeks.org/tcp-ip-model/",
                },
              },
              {
                day: "Day 03",
                topic: "Ports, sockets & the TCP three-way handshake",
                link: {
                  label: "Cloudflare — What is TCP/IP?",
                  url: "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/",
                },
              },
            ],
          },
          {
            id: "m1t2",
            title: "Subnetting & CIDR",
            xp: 120,
            detail:
              "Divide IP address space into subnets, read CIDR notation, and calculate network/broadcast addresses and host ranges.",
            link: {
              label: "Practical Networking — Subnetting Mastery",
              url: "https://www.practicalnetworking.net/stand-alone/ip-subnetting-mastery/",
            },
            days: [
              {
                day: "Day 04",
                topic: "IPv4 addressing, classes & private ranges",
                link: {
                  label: "Cloudflare — What is an IP address?",
                  url: "https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/",
                },
              },
              {
                day: "Day 05",
                topic: "CIDR notation & subnet masks",
                link: {
                  label: "Practical Networking — Subnetting Mastery",
                  url: "https://www.practicalnetworking.net/stand-alone/ip-subnetting-mastery/",
                },
              },
              {
                day: "Day 06",
                topic: "Calculating network, broadcast & host ranges",
                link: {
                  label: "SubnettingPractice.com",
                  url: "https://subnettingpractice.com/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m1w2",
        week: "Week 02",
        title: "Core Protocols",
        topics: [
          {
            id: "m1t3",
            title: "DNS, DHCP & ARP",
            xp: 100,
            detail:
              "Learn how names resolve to IPs, how hosts auto-configure addresses, and how ARP maps IP to MAC on a LAN.",
            link: {
              label: "Cloudflare — What is DNS?",
              url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
            },
            days: [
              {
                day: "Day 07",
                topic: "How DNS resolution works end to end",
                link: {
                  label: "Cloudflare — What is DNS?",
                  url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
                },
              },
              {
                day: "Day 08",
                topic: "DHCP lease process (DORA)",
                link: {
                  label: "GeeksforGeeks — DHCP & DORA",
                  url: "https://www.geeksforgeeks.org/dynamic-host-configuration-protocol-dhcp/",
                },
              },
              {
                day: "Day 09",
                topic: "ARP: mapping IP to MAC on a LAN",
                link: {
                  label: "GeeksforGeeks — ARP Protocol",
                  url: "https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works/",
                },
              },
            ],
          },
          {
            id: "m1t4b",
            title: "HTTP/HTTPS & TLS",
            xp: 110,
            detail:
              "Trace an HTTP request/response, understand headers and status codes, and how TLS secures the channel end to end.",
            link: {
              label: "MDN — HTTP Overview",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
            },
            days: [
              {
                day: "Day 10",
                topic: "HTTP methods, headers & status codes",
                link: {
                  label: "MDN — HTTP Overview",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
                },
              },
              {
                day: "Day 11",
                topic: "The TLS handshake & certificates",
                link: {
                  label: "Cloudflare — What is a TLS handshake?",
                  url: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m1w3",
        week: "Week 03",
        title: "The Security Mindset",
        topics: [
          {
            id: "m1t4",
            title: "CIA Triad & Threat Modeling",
            xp: 150,
            detail:
              "Confidentiality, Integrity & Availability as the core of security, plus STRIDE-style threat modeling to find risks early.",
            link: {
              label: "OWASP — Threat Modeling Cheat Sheet",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
            },
            days: [
              {
                day: "Day 12",
                topic: "The CIA triad & AAA fundamentals",
                link: {
                  label: "Fortinet — CIA Triad",
                  url: "https://www.fortinet.com/resources/cyberglossary/cia-triad",
                },
              },
              {
                day: "Day 13",
                topic: "STRIDE threat modeling methodology",
                link: {
                  label: "OWASP — Threat Modeling Cheat Sheet",
                  url: "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
                },
              },
              {
                day: "Day 14",
                topic: "Attack surface, risk & the attacker mindset",
                link: {
                  label: "OWASP — Attack Surface Cheat Sheet",
                  url: "https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m1w4",
        week: "Week 04",
        title: "Command Line Fluency",
        topics: [
          {
            id: "m1t5",
            title: "Linux & Windows CLI Basics",
            xp: 130,
            detail:
              "Navigate the filesystem, manage files and permissions, and run essential commands in Bash and PowerShell.",
            link: {
              label: "Linux Journey — Command Line",
              url: "https://linuxjourney.com/lesson/the-shell",
            },
            days: [
              {
                day: "Day 15",
                topic: "Navigating the Linux filesystem & the shell",
                link: {
                  label: "Linux Journey — The Shell",
                  url: "https://linuxjourney.com/lesson/the-shell",
                },
              },
              {
                day: "Day 16",
                topic: "Files, pipes, redirection & text processing",
                link: {
                  label: "Linux Journey — Text-Fu",
                  url: "https://linuxjourney.com/lesson/stdout-standard-out-redirect",
                },
              },
              {
                day: "Day 17",
                topic: "Windows PowerShell essentials",
                link: {
                  label: "Microsoft — PowerShell 101",
                  url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/00-introduction",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "m2",
    month: "Month 02",
    title: "Operating Systems & Scripting",
    focus: "Linux internals, Bash & Python for security automation.",
    icon: Terminal,
    accent: "#bc13fe",
    weeks: [
      {
        id: "m2w1",
        week: "Week 01",
        title: "Linux Internals",
        topics: [
          {
            id: "m2t1",
            title: "Linux File Permissions & Users",
            xp: 110,
            detail:
              "Master chmod/chown, ownership, SUID/SGID bits, and user/group management to lock down a Linux host.",
            link: {
              label: "DigitalOcean — Linux Permissions",
              url: "https://www.digitalocean.com/community/tutorials/linux-permissions-basics-and-how-to-use-umask-on-a-vps",
            },
            days: [
              {
                day: "Day 18",
                topic: "chmod, chown & the permission model",
                link: {
                  label: "DigitalOcean — Linux Permissions",
                  url: "https://www.digitalocean.com/community/tutorials/linux-permissions-basics-and-how-to-use-umask-on-a-vps",
                },
              },
              {
                day: "Day 19",
                topic: "SUID/SGID, sticky bits & special permissions",
                link: {
                  label: "Linux Journey — Permissions",
                  url: "https://linuxjourney.com/lesson/file-permissions",
                },
              },
              {
                day: "Day 20",
                topic: "Users, groups & /etc/passwd internals",
                link: {
                  label: "Linux Journey — User Management",
                  url: "https://linuxjourney.com/lesson/users-and-groups",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m2w2",
        week: "Week 02",
        title: "Bash Automation",
        topics: [
          {
            id: "m2t2",
            title: "Bash Scripting for Recon",
            xp: 140,
            detail:
              "Automate reconnaissance with loops, conditionals, and piping tool output into repeatable Bash workflows.",
            link: {
              label: "Learn Shell — Interactive Bash",
              url: "https://www.learnshell.org/",
            },
            days: [
              {
                day: "Day 21",
                topic: "Variables, conditionals & loops in Bash",
                link: {
                  label: "Learn Shell — Interactive Bash",
                  url: "https://www.learnshell.org/",
                },
              },
              {
                day: "Day 22",
                topic: "Functions, arguments & exit codes",
                link: {
                  label: "Bash Guide — Functions",
                  url: "https://mywiki.wooledge.org/BashGuide/Functions",
                },
              },
              {
                day: "Day 23",
                topic: "Piping tool output into recon scripts",
                link: {
                  label: "Explainshell",
                  url: "https://explainshell.com/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m2w3",
        week: "Week 03",
        title: "Python Tooling",
        topics: [
          {
            id: "m2t3",
            title: "Python for Security Tooling",
            xp: 180,
            detail:
              "Build custom scanners, parsers, and exploit helpers using sockets, requests, and standard-library modules.",
            link: {
              label: "TCM — Python for Ethical Hackers",
              url: "https://academy.tcm-sec.com/p/python-101-for-hackers",
            },
            days: [
              {
                day: "Day 24",
                topic: "Python fundamentals & standard library",
                link: {
                  label: "Python Docs — Tutorial",
                  url: "https://docs.python.org/3/tutorial/",
                },
              },
              {
                day: "Day 25",
                topic: "Sockets: writing a simple port scanner",
                link: {
                  label: "Python Docs — socket module",
                  url: "https://docs.python.org/3/library/socket.html",
                },
              },
              {
                day: "Day 26",
                topic: "HTTP automation with requests",
                link: {
                  label: "Requests — Quickstart",
                  url: "https://requests.readthedocs.io/en/latest/user/quickstart/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m2w4",
        week: "Week 04",
        title: "Hardening & Logging",
        topics: [
          {
            id: "m2t4",
            title: "Process & Service Hardening",
            xp: 130,
            detail:
              "Reduce attack surface by disabling unused services, applying least privilege, and hardening systemd units.",
            link: {
              label: "CIS Benchmarks",
              url: "https://www.cisecurity.org/cis-benchmarks",
            },
            days: [
              {
                day: "Day 27",
                topic: "Auditing & disabling unused services",
                link: {
                  label: "CIS Benchmarks",
                  url: "https://www.cisecurity.org/cis-benchmarks",
                },
              },
              {
                day: "Day 28",
                topic: "Hardening systemd units & least privilege",
                link: {
                  label: "ArchWiki — systemd hardening",
                  url: "https://wiki.archlinux.org/title/Systemd/Sandboxing",
                },
              },
            ],
          },
          {
            id: "m2t5",
            title: "Log Analysis Fundamentals",
            xp: 120,
            detail:
              "Read syslog/journald and event logs, spot anomalies, and correlate events to reconstruct an incident timeline.",
            link: {
              label: "SANS — Log Management",
              url: "https://www.sans.org/blog/",
            },
            days: [
              {
                day: "Day 29",
                topic: "Reading syslog & journald logs",
                link: {
                  label: "DigitalOcean — journalctl",
                  url: "https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs",
                },
              },
              {
                day: "Day 30",
                topic: "Spotting anomalies & building a timeline",
                link: {
                  label: "SANS — Blog & Whitepapers",
                  url: "https://www.sans.org/blog/",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "m3",
    month: "Month 03",
    title: "Network Security & Recon",
    focus: "Scanning, enumeration, and defensive network controls.",
    icon: Crosshair,
    accent: "#00ff66",
    weeks: [
      {
        id: "m3w1",
        week: "Week 01",
        title: "Discovery & Enumeration",
        topics: [
          {
            id: "m3t1",
            title: "Nmap & Service Enumeration",
            xp: 150,
            detail:
              "Discover hosts, open ports, and service versions, and use NSE scripts to fingerprint the attack surface.",
            link: {
              label: "Nmap — Official Reference Guide",
              url: "https://nmap.org/book/man.html",
            },
            days: [
              {
                day: "Day 31",
                topic: "Host discovery & scan types",
                link: {
                  label: "Nmap — Host Discovery",
                  url: "https://nmap.org/book/man-host-discovery.html",
                },
              },
              {
                day: "Day 32",
                topic: "Service & version detection",
                link: {
                  label: "Nmap — Service Detection",
                  url: "https://nmap.org/book/man-version-detection.html",
                },
              },
              {
                day: "Day 33",
                topic: "Nmap Scripting Engine (NSE)",
                link: {
                  label: "Nmap — NSE",
                  url: "https://nmap.org/book/nse.html",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m3w2",
        week: "Week 02",
        title: "Traffic Analysis",
        topics: [
          {
            id: "m3t2",
            title: "Wireshark Packet Analysis",
            xp: 160,
            detail:
              "Capture and dissect live traffic, follow TCP streams, and use display filters to isolate suspicious packets.",
            link: {
              label: "Wireshark — User's Guide",
              url: "https://www.wireshark.org/docs/wsug_html_chunked/",
            },
            days: [
              {
                day: "Day 34",
                topic: "Capturing traffic & display filters",
                link: {
                  label: "Wireshark — User's Guide",
                  url: "https://www.wireshark.org/docs/wsug_html_chunked/",
                },
              },
              {
                day: "Day 35",
                topic: "Following TCP streams & protocol dissection",
                link: {
                  label: "Wireshark — Following Streams",
                  url: "https://www.wireshark.org/docs/wsug_html_chunked/ChAdvFollowStreamSection.html",
                },
              },
              {
                day: "Day 36",
                topic: "Hunting anomalies in a PCAP",
                link: {
                  label: "Malware-Traffic-Analysis.net",
                  url: "https://www.malware-traffic-analysis.net/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m3w3",
        week: "Week 03",
        title: "Network Defenses",
        topics: [
          {
            id: "m3t3",
            title: "Firewalls, IDS & IPS",
            xp: 140,
            detail:
              "Configure stateful firewall rules and understand how signature/anomaly IDS & IPS detect and block threats.",
            link: {
              label: "Snort — Documentation",
              url: "https://www.snort.org/documents",
            },
            days: [
              {
                day: "Day 37",
                topic: "Stateful firewalls & rule design",
                link: {
                  label: "Netfilter/iptables — HOWTO",
                  url: "https://www.netfilter.org/documentation/HOWTO/packet-filtering-HOWTO.html",
                },
              },
              {
                day: "Day 38",
                topic: "IDS/IPS with Snort signatures",
                link: {
                  label: "Snort — Documentation",
                  url: "https://www.snort.org/documents",
                },
              },
            ],
          },
          {
            id: "m3t4",
            title: "VPNs & Secure Tunneling",
            xp: 120,
            detail:
              "Compare IPsec, OpenVPN, and WireGuard, and understand encryption, key exchange, and tunneling trade-offs.",
            link: {
              label: "WireGuard — Quick Start",
              url: "https://www.wireguard.com/quickstart/",
            },
            days: [
              {
                day: "Day 39",
                topic: "IPsec vs OpenVPN vs WireGuard",
                link: {
                  label: "WireGuard — Whitepaper",
                  url: "https://www.wireguard.com/papers/wireguard.pdf",
                },
              },
              {
                day: "Day 40",
                topic: "Building a WireGuard tunnel",
                link: {
                  label: "WireGuard — Quick Start",
                  url: "https://www.wireguard.com/quickstart/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m3w4",
        week: "Week 04",
        title: "Finding Weaknesses",
        topics: [
          {
            id: "m3t5",
            title: "Vulnerability Scanning",
            xp: 150,
            detail:
              "Run authenticated and unauthenticated scans, triage findings by CVSS, and reduce false positives.",
            link: {
              label: "OpenVAS / Greenbone — Docs",
              url: "https://greenbone.github.io/docs/",
            },
            days: [
              {
                day: "Day 41",
                topic: "Running scans with OpenVAS/Greenbone",
                link: {
                  label: "Greenbone — Docs",
                  url: "https://greenbone.github.io/docs/",
                },
              },
              {
                day: "Day 42",
                topic: "Triaging findings with CVSS scoring",
                link: {
                  label: "FIRST — CVSS Calculator",
                  url: "https://www.first.org/cvss/calculator/3.1",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "m4",
    month: "Month 04",
    title: "Web Application Security",
    focus: "OWASP Top 10, exploitation, and secure coding.",
    icon: Bug,
    accent: "#fac775",
    weeks: [
      {
        id: "m4w1",
        week: "Week 01",
        title: "The OWASP Top 10",
        topics: [
          {
            id: "m4t1",
            title: "OWASP Top 10 Deep Dive",
            xp: 200,
            detail:
              "Study the ten most critical web risks with real examples, impact, and mitigation for each category.",
            link: {
              label: "OWASP — Top 10",
              url: "https://owasp.org/www-project-top-ten/",
            },
            days: [
              {
                day: "Day 43",
                topic: "Broken access control & crypto failures",
                link: {
                  label: "OWASP — Top 10",
                  url: "https://owasp.org/www-project-top-ten/",
                },
              },
              {
                day: "Day 44",
                topic: "Injection, insecure design & misconfiguration",
                link: {
                  label: "OWASP — A03 Injection",
                  url: "https://owasp.org/Top10/A03_2021-Injection/",
                },
              },
              {
                day: "Day 45",
                topic: "Hands-on labs with OWASP Juice Shop",
                link: {
                  label: "OWASP — Juice Shop",
                  url: "https://owasp.org/www-project-juice-shop/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m4w2",
        week: "Week 02",
        title: "Injection Attacks",
        topics: [
          {
            id: "m4t2",
            title: "SQL Injection & NoSQLi",
            xp: 180,
            detail:
              "Exploit and defend against injection in SQL and NoSQL databases using parameterized queries and input validation.",
            link: {
              label: "PortSwigger — SQL Injection",
              url: "https://portswigger.net/web-security/sql-injection",
            },
            days: [
              {
                day: "Day 46",
                topic: "SQLi fundamentals & UNION attacks",
                link: {
                  label: "PortSwigger — SQL Injection",
                  url: "https://portswigger.net/web-security/sql-injection",
                },
              },
              {
                day: "Day 47",
                topic: "Blind SQLi & NoSQL injection",
                link: {
                  label: "PortSwigger — Blind SQLi",
                  url: "https://portswigger.net/web-security/sql-injection/blind",
                },
              },
            ],
          },
          {
            id: "m4t3",
            title: "XSS, CSRF & SSRF",
            xp: 180,
            detail:
              "Understand cross-site scripting, request forgery, and server-side request forgery — plus tokens and CSP defenses.",
            link: {
              label: "PortSwigger — Cross-Site Scripting",
              url: "https://portswigger.net/web-security/cross-site-scripting",
            },
            days: [
              {
                day: "Day 48",
                topic: "Reflected, stored & DOM-based XSS",
                link: {
                  label: "PortSwigger — Cross-Site Scripting",
                  url: "https://portswigger.net/web-security/cross-site-scripting",
                },
              },
              {
                day: "Day 49",
                topic: "CSRF tokens & SSRF exploitation",
                link: {
                  label: "PortSwigger — SSRF",
                  url: "https://portswigger.net/web-security/ssrf",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m4w3",
        week: "Week 03",
        title: "Testing Toolkit",
        topics: [
          {
            id: "m4t4",
            title: "Burp Suite Workflows",
            xp: 160,
            detail:
              "Intercept, repeat, and fuzz requests; use Intruder and Repeater to test authorization and business logic.",
            link: {
              label: "PortSwigger — Burp Suite Docs",
              url: "https://portswigger.net/burp/documentation",
            },
            days: [
              {
                day: "Day 50",
                topic: "Intercepting & Repeater basics",
                link: {
                  label: "PortSwigger — Burp Suite Docs",
                  url: "https://portswigger.net/burp/documentation",
                },
              },
              {
                day: "Day 51",
                topic: "Fuzzing with Intruder & testing logic",
                link: {
                  label: "PortSwigger — Burp Intruder",
                  url: "https://portswigger.net/burp/documentation/desktop/tools/intruder",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m4w4",
        week: "Week 04",
        title: "Identity & Sessions",
        topics: [
          {
            id: "m4t5",
            title: "Auth & Session Security",
            xp: 150,
            detail:
              "Secure login flows, session tokens, JWTs, MFA, and password storage against common authentication attacks.",
            link: {
              label: "OWASP — Authentication Cheat Sheet",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
            },
            days: [
              {
                day: "Day 52",
                topic: "Session management & JWT security",
                link: {
                  label: "OWASP — Session Management Cheat Sheet",
                  url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
                },
              },
              {
                day: "Day 53",
                topic: "MFA & secure password storage",
                link: {
                  label: "OWASP — Authentication Cheat Sheet",
                  url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "m5",
    month: "Month 05",
    title: "Offensive Security",
    focus: "Exploitation, privilege escalation, and Active Directory.",
    icon: Crosshair,
    accent: "#ff003c",
    weeks: [
      {
        id: "m5w1",
        week: "Week 01",
        title: "Exploitation Frameworks",
        topics: [
          {
            id: "m5t1",
            title: "Metasploit Framework",
            xp: 200,
            detail:
              "Search, configure, and launch exploits and payloads, and manage Meterpreter sessions for post-exploitation.",
            link: {
              label: "Offensive Security — Metasploit Unleashed",
              url: "https://www.offsec.com/metasploit-unleashed/",
            },
            days: [
              {
                day: "Day 54",
                topic: "msfconsole, modules & payloads",
                link: {
                  label: "Metasploit Unleashed — Basics",
                  url: "https://www.offsec.com/metasploit-unleashed/",
                },
              },
              {
                day: "Day 55",
                topic: "Meterpreter & post-exploitation",
                link: {
                  label: "Metasploit Unleashed — Meterpreter",
                  url: "https://www.offsec.com/metasploit-unleashed/about-meterpreter/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m5w2",
        week: "Week 02",
        title: "Escalating Access",
        topics: [
          {
            id: "m5t2",
            title: "Privilege Escalation (Lin/Win)",
            xp: 220,
            detail:
              "Enumerate misconfigurations, kernel exploits, and weak permissions to elevate from user to root/SYSTEM.",
            link: {
              label: "HackTricks — Privilege Escalation",
              url: "https://book.hacktricks.xyz/",
            },
            days: [
              {
                day: "Day 56",
                topic: "Linux privilege escalation techniques",
                link: {
                  label: "HackTricks — Linux PrivEsc",
                  url: "https://book.hacktricks.xyz/linux-hardening/privilege-escalation",
                },
              },
              {
                day: "Day 57",
                topic: "Windows privilege escalation techniques",
                link: {
                  label: "HackTricks — Windows PrivEsc",
                  url: "https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m5w3",
        week: "Week 03",
        title: "Attacking the Domain",
        topics: [
          {
            id: "m5t3",
            title: "Active Directory Attacks",
            xp: 240,
            detail:
              "Perform Kerberoasting, pass-the-hash, and BloodHound path analysis to compromise a Windows domain.",
            link: {
              label: "TryHackMe — Active Directory",
              url: "https://tryhackme.com/module/hacking-active-directory",
            },
            days: [
              {
                day: "Day 58",
                topic: "AD enumeration & BloodHound",
                link: {
                  label: "TryHackMe — Active Directory",
                  url: "https://tryhackme.com/module/hacking-active-directory",
                },
              },
              {
                day: "Day 59",
                topic: "Kerberoasting & pass-the-hash",
                link: {
                  label: "HackTricks — Kerberoast",
                  url: "https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/kerberoast",
                },
              },
            ],
          },
          {
            id: "m5t4",
            title: "Pivoting & Lateral Movement",
            xp: 200,
            detail:
              "Tunnel through compromised hosts with proxychains and SSH to reach segmented internal networks.",
            link: {
              label: "HackTricks — Tunneling & Pivoting",
              url: "https://book.hacktricks.xyz/generic-methodologies-and-resources/tunneling-and-port-forwarding",
            },
            days: [
              {
                day: "Day 60",
                topic: "SSH tunnels & proxychains pivoting",
                link: {
                  label: "HackTricks — Tunneling & Pivoting",
                  url: "https://book.hacktricks.xyz/generic-methodologies-and-resources/tunneling-and-port-forwarding",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m5w4",
        week: "Week 04",
        title: "Reporting & Ethics",
        topics: [
          {
            id: "m5t5",
            title: "Report Writing & Ethics",
            xp: 150,
            detail:
              "Document findings clearly with reproduction steps, risk ratings, and remediation while following legal scope and ethics.",
            link: {
              label: "SANS — Pentest Reporting",
              url: "https://www.sans.org/white-papers/",
            },
            days: [
              {
                day: "Day 61",
                topic: "Structuring a professional pentest report",
                link: {
                  label: "SANS — Whitepapers",
                  url: "https://www.sans.org/white-papers/",
                },
              },
              {
                day: "Day 62",
                topic: "Legal scope, rules of engagement & ethics",
                link: {
                  label: "PTES — Pre-engagement",
                  url: "http://www.pentest-standard.org/index.php/Pre-engagement",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "m6",
    month: "Month 06",
    title: "Defense, Cloud & Certification",
    focus: "Blue-team, cloud security, and certification prep.",
    icon: Shield,
    accent: "#00f3ff",
    weeks: [
      {
        id: "m6w1",
        week: "Week 01",
        title: "Blue-Team Operations",
        topics: [
          {
            id: "m6t1",
            title: "SIEM & Incident Response",
            xp: 200,
            detail:
              "Aggregate and correlate logs in a SIEM, build detections, and follow the IR lifecycle from detect to recover.",
            link: {
              label: "TryHackMe — SOC Level 1",
              url: "https://tryhackme.com/path/outline/soclevel1",
            },
            days: [
              {
                day: "Day 63",
                topic: "SIEM concepts & log correlation",
                link: {
                  label: "TryHackMe — SOC Level 1",
                  url: "https://tryhackme.com/path/outline/soclevel1",
                },
              },
              {
                day: "Day 64",
                topic: "The incident response lifecycle",
                link: {
                  label: "NIST — IR Guide (SP 800-61)",
                  url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m6w2",
        week: "Week 02",
        title: "Securing the Cloud",
        topics: [
          {
            id: "m6t2",
            title: "Cloud Security (AWS/Azure)",
            xp: 220,
            detail:
              "Apply IAM least privilege, secure storage and networking, and audit cloud posture across AWS and Azure.",
            link: {
              label: "AWS — Security Best Practices",
              url: "https://aws.amazon.com/architecture/security-identity-compliance/",
            },
            days: [
              {
                day: "Day 65",
                topic: "IAM least privilege & policies",
                link: {
                  label: "AWS — IAM Best Practices",
                  url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
                },
              },
              {
                day: "Day 66",
                topic: "Securing storage, networking & posture audits",
                link: {
                  label: "AWS — Security Best Practices",
                  url: "https://aws.amazon.com/architecture/security-identity-compliance/",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m6w3",
        week: "Week 03",
        title: "Crypto & Governance",
        topics: [
          {
            id: "m6t3",
            title: "Cryptography & PKI",
            xp: 180,
            detail:
              "Understand symmetric/asymmetric crypto, hashing, digital signatures, and how certificates and CAs establish trust.",
            link: {
              label: "Crypto 101 — Free Book",
              url: "https://www.crypto101.io/",
            },
            days: [
              {
                day: "Day 67",
                topic: "Symmetric, asymmetric crypto & hashing",
                link: {
                  label: "Crypto 101 — Free Book",
                  url: "https://www.crypto101.io/",
                },
              },
              {
                day: "Day 68",
                topic: "Digital signatures, certificates & PKI",
                link: {
                  label: "Cloudflare — What is PKI?",
                  url: "https://www.cloudflare.com/learning/ssl/how-does-public-key-encryption-work/",
                },
              },
            ],
          },
          {
            id: "m6t4",
            title: "GRC & Compliance",
            xp: 150,
            detail:
              "Map controls to frameworks like ISO 27001, NIST CSF, and SOC 2 to manage governance, risk, and compliance.",
            link: {
              label: "NIST — Cybersecurity Framework",
              url: "https://www.nist.gov/cyberframework",
            },
            days: [
              {
                day: "Day 69",
                topic: "NIST CSF & ISO 27001 control mapping",
                link: {
                  label: "NIST — Cybersecurity Framework",
                  url: "https://www.nist.gov/cyberframework",
                },
              },
            ],
          },
        ],
      },
      {
        id: "m6w4",
        week: "Week 04",
        title: "Capstone & Certification",
        topics: [
          {
            id: "m6t5",
            title: "Capstone & Cert Exam Prep",
            xp: 250,
            detail:
              "Consolidate skills in a full-scope lab and prepare for certifications such as Security+, eJPT, or OSCP.",
            link: {
              label: "CompTIA — Security+",
              url: "https://www.comptia.org/certifications/security",
            },
            days: [
              {
                day: "Day 70",
                topic: "Full-scope capstone lab",
                link: {
                  label: "TryHackMe — Offensive Pentesting",
                  url: "https://tryhackme.com/path/outline/pentesting",
                },
              },
              {
                day: "Day 71",
                topic: "Security+ / eJPT / OSCP exam prep",
                link: {
                  label: "CompTIA — Security+",
                  url: "https://www.comptia.org/certifications/security",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

/** Flattened list of every topic across all weeks and months. */
export const allTopics: Topic[] = roadmap.flatMap((m) =>
  m.weeks.flatMap((w) => w.topics)
);

/** Total number of daily study sessions across the whole roadmap. */
export const totalDays: number = allTopics.reduce(
  (sum, t) => sum + t.days.length,
  0
);

export const iconLock = Lock;
