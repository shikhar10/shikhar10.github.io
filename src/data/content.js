// All site copy lives here so components stay presentational.

export const profile = {
  name: 'Shikhar Maheshwari',
  credential: 'MBA • IIM MUMBAI',
  email: 'Shikhar.maheshwari2026@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shikhar-maheshwari-715966166/',
  resume: 'https://drive.google.com/file/d/1f4NgVcdMtTFHZ68EWuHGvr7YuN5g1r9U/view?usp=sharing',
}

export const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

export const hero = {
  badge: 'PRODUCT × AI × TECHNOLOGY',
  headline: ['I BUILD', 'PRODUCTS THAT', 'MOVE BUSINESS'],
  outlined: 'FORWARD.',
  subtext:
    'Product Manager with experience across consumer durables, IT analytics, and product engineering. Combining business strategy, workflow automation, and AI.',
  // Cinematic backdrop from /public. Set video to null to fall back to image, then the placeholder.
  media: { image: null, video: `${import.meta.env.BASE_URL}hero.mp4` },
}

export const about = {
  statement:
    'I work where customer problems, commercial growth and technology meet — turning research into product bets, and product bets into numbers the business can see.',
  stats: [
    { value: '450+', label: 'Stakeholders researched' },
    { value: '50+', label: 'RPA bots architected' },
    { value: '15', label: 'Person team led' },
    { value: '17%', label: 'Lift in E2E conversion' },
  ],
}

export const experience = [
  {
    role: 'Growth Product Manager',
    company: 'Pidilite Industries',
    dates: 'Dec 2025 – Present',
    summary:
      'Leading growth and product strategy across categories, from GTM plans to funnel performance. Earlier Dealer App and trade-marketing work lifted scheme comprehension 35% and cut app bounce rate 34%.',
    tags: ['Growth', 'Category', 'GTM'],
  },
  {
    role: 'Technical Product Manager',
    company: 'Accenture',
    dates: 'May 2021 – Jun 2023',
    summary:
      'Led a 15-member cross-functional team modernizing Azure cloud middleware and CI/CD, cutting release turnaround 11%. Ran A/B-tested campaigns that raised end-to-end conversion 17%, CTR 15% and AOV 12%.',
    tags: ['Azure', 'APIs', 'A/B Testing'],
  },
  {
    role: 'Product Engineering Intern',
    company: 'HighRadius',
    dates: 'Apr 2020 – May 2021',
    summary:
      'Architected 50+ RPA bots and an AI-enabled Accounts Receivable dashboard for Order-to-Cash teams. The automation improved operational efficiency by 12%.',
    tags: ['RPA', 'AI Analytics', 'O2C'],
  },
]

export const projects = [
  {
    title: 'Trade Marketing & Dealer App Funnel',
    company: 'Pidilite Industries',
    description:
      'Primary research with 450+ stakeholders, 12 retailer tiers and a North Star metric to fix scheme comprehension and Dealer App drop-off.',
    metrics: [
      { value: '+35%', label: 'Scheme comprehension' },
      { value: '−34%', label: 'App bounce rate' },
    ],
    tags: ['Go-To-Market', 'Cohort Analysis', 'Primary Research', 'Experimentation'],
    featured: true,
  },
  {
    title: 'AI Accounts Receivable Dashboard',
    company: 'HighRadius',
    description:
      'An AI-enabled dashboard tracking B2B debtor KPIs, fed by 50+ RPA bots that automated report extraction.',
    metrics: [{ value: '+12%', label: 'Operational efficiency' }],
    tags: ['RPA', 'AI Analytics', 'Data Architecture'],
  },
  {
    title: 'Cloud Middleware Modernization',
    company: 'Accenture',
    description:
      'Azure middleware, core APIs and CI/CD rebuilt with a 15-member team, which sped up releases and campaign testing.',
    metrics: [
      { value: '−11%', label: 'Release turnaround' },
      { value: '+17%', label: 'E2E conversion' },
    ],
    tags: ['Azure', 'CI/CD', 'A/B Testing', 'Agile'],
  },
]

export const skills = [
  {
    group: 'Product & Business',
    items: ['Product Strategy', 'Growth & GTM', 'Category Management', 'Funnel Optimization', 'User Journey Mapping', 'Stakeholder Management', 'Agile'],
  },
  {
    group: 'Analytics',
    items: ['A/B Testing', 'Cohort Analysis', 'North Star Metrics', 'Google Analytics', 'Predictive Analytics', 'Market Research'],
  },
  {
    group: 'Technology',
    items: ['Azure', 'APIs', 'CI/CD', 'RPA', 'SQL', 'Docker', 'Kubernetes', 'Salesforce', 'SAP', 'Jira', 'Figma'],
  },
]
