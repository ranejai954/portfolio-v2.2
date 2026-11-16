export const projects = [
  {
    id: 'project-1', title: 'PhishShield AI', category: 'AI / Cybersecurity', year: '2026',
    summary: 'An AI-based phishing detection application for analysing suspicious URLs and email content.',
    description: 'Developed an AI-based phishing detection application that analyses URLs and email content using machine-learning and NLP techniques. Designed a feature-extraction workflow to support phishing classification and analysis. The supplied dashboard demonstrates risk scoring, threat indicators, explanations, and recommended actions.',
    role: 'Developer', tools: ['Python', 'NLP', 'Machine Learning'], coverImage: '/assets/projects/1-cover.webp', liveUrl: '', sourceUrl: '', featured: true
  },
  {
    id: 'project-2', title: 'Network Packet Sniffer', category: 'Network Security', year: '2026',
    summary: 'A packet-capture tool for inspecting network traffic and examining protocols.',
    description: 'Built a packet-capture tool to inspect network traffic and examine protocols for networking and security analysis. Implemented traffic filtering and inspection functionality for network monitoring. The supplied interface presents a live packet stream, protocol counters, and JSON, CSV, and TXT export controls.',
    role: 'Developer', tools: ['Python', 'Scapy', 'Networking'], coverImage: '/assets/projects/2-cover.webp', liveUrl: '', sourceUrl: '', featured: true
  },
  {
    id: 'project-3', title: 'AI Emotion & Sentiment Analysis', category: 'AI / NLP', year: '2026',
    summary: 'An NLP dashboard that analyses text sentiment and emotion signals.',
    description: 'A text-analysis dashboard showing sentiment classification and an emotion spectrum. The supplied interface identifies VADER for sentiment and NRCLex for emotion analysis, with visual summaries including sentiment intensity and a word cloud.',
    role: 'Developer', tools: ['Python', 'VADER', 'NRCLex'], coverImage: '/assets/projects/3-cover.webp', liveUrl: '', sourceUrl: '', featured: true
  },
  {
    id: 'project-4', title: 'Network Port Scanner', category: 'Network Security', year: '',
    summary: 'A desktop utility for scanning a target host across a configurable port range.',
    description: 'The supplied desktop interface accepts an IP address or hostname and a start/end port range, then displays discovered open ports and scan status. It also includes a control to save scan results as a text file.',
    role: 'Developer', tools: ['Python', 'Networking'], coverImage: '/assets/projects/4-cover.webp', liveUrl: '', sourceUrl: '', featured: true
  }
];
