// Central source of truth for personal details, SEO, contact and appearance.
export const site = {
  websiteUrl: '', // Add your own domain before publishing; canonical is omitted until set.
  storageKey: 'jai-rane-portfolio-motion',
  seoDescription: 'Jai Rane — Computer Science student focused on cybersecurity, threat analysis, and AI-driven security applications.',
  identity: {
    fullName: 'Jai Rane',
    displayName: 'JAI RANE',
    profession: 'Cybersecurity Student',
    roleLine2: 'Security Operations · Threat Analysis · AI Security',
    focusAreas: ['THREAT ANALYSIS', 'NETWORK SECURITY', 'BLUE TEAM', 'AI SECURITY', 'INCIDENT RESPONSE'],
    location: 'Mumbai, Maharashtra, India',
    availability: '',
    headline: 'SECURITY\nMINDED.\nBUILT TO\nINVESTIGATE.',
    intro: 'Computer Science student exploring the intersection of cybersecurity, threat detection, and AI-driven security applications.',
    about: 'I am a Computer Science student specializing in cybersecurity, with practical learning experience across SOC workflows, vulnerability assessment, penetration-testing fundamentals, and AI-driven security applications. I enjoy understanding how systems behave, identifying potential risks, and exploring practical ways to strengthen security. My current learning focus includes Blue Team operations, threat detection, incident response, Python, and security automation.',
    portrait: '/assets/portrait.webp',
    resume: '/assets/resume.pdf',
    favicon: '/assets/logos/logo.svg'
  },
  contact: { email: 'ranejai954@gmail.com', phone: '', whatsapp: '', linkedin: '', github: '', instagram: '', youtube: '', otherLinks: [] },
  appearance: { background: '#090909', text: '#f2efeb', accent: '#e32b3c', muted: '#a09c9a', displayFont: 'Anton', bodyFont: 'Manrope', accentFont: 'Caveat', animationIntensity: 'balanced' },
  preferences: { showAwards: false, showEducation: true, showExperience: true, showContactForm: true, showDownloadResume: true, showProjectArchive: true }
};
