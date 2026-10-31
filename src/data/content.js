// All site copy lives here so components stay presentational.

export const profile = {
  name: 'Shikhar Maheshwari',
  credential: 'MBA • IIM MUMBAI',
  email: 'Shikhar.maheshwari2026@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shikhar-maheshwari-715966166/',
  resume: 'https://drive.google.com/file/d/16D6wbYs1KusG9lN5X7tVCB-17GgOFZCo/view?usp=sharing',
}

export const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'RECOGNITION', href: '#recognition' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

export const hero = {
  badge: 'PRODUCT × AI × TECHNOLOGY',
  headline: ['I BUILD', 'PRODUCTS THAT', 'MOVE BUSINESS'],
  outlined: 'FORWARD.',
  subtext:
    'Product and business professional with 3+ years across sales strategy, business analytics and product engineering. Building AI-enabled products and growing categories at Pidilite; earlier at Accenture and HighRadius.',
  // Cinematic backdrop from /public. Set video to null to fall back to image, then the placeholder.
  media: { image: null, video: `${import.meta.env.BASE_URL}hero.mp4` },
}

export const about = {
  statement:
    'I turn customer and business needs into practical solutions with measurable results, using data and field insight to grow categories, improve customer journeys and ship products people use.',
  stats: [
    { value: '₹36 Cr', label: 'Annual P&L owned' },
    { value: '23+', label: 'Field managers led' },
    { value: '3%→9%', label: 'YTD primary sales growth' },
    { value: '50+', label: 'RPA bots architected' },
  ],
}

export const experience = [
  {
    role: 'Area Sales Manager',
    company: 'Pidilite Industries – Rurban Division',
    location: 'Central UP',
    dates: 'Feb 2026 – Oct 2026',
    summary:
      'Owned P&L for a ₹36 Cr portfolio across Fevicol, M-Seal, Dr. Fixit and Roff, leading 23+ field managers and 27 distributors and lifting YTD primary growth from 3% to 9%. Field marketing raised tertiary sales 37%, and Dr. Fixit LW+ share grew 23% in Kanpur, winning the Spirit of Pidilite Award.',
    tags: ['P&L', 'Channel Expansion', 'GTM'],
  },
  {
    role: 'Management Trainee — Product Management',
    company: 'Pidilite Industries – M-Seal Master’s Club',
    location: 'Mumbai',
    dates: 'Sep 2025 – Jan 2026',
    summary:
      'Owned the MMC loyalty app roadmap from discovery and PRDs to launch; the gamified learning module raised CTR 18% and DAU 15%. Built a RAG-based AI chatbot and lifted NPS by 25 points using user research and behavioural data.',
    tags: ['Roadmap', 'RAG / LLM', 'A/B Testing'],
  },
  {
    role: 'Management Trainee — Business Development',
    company: 'Pidilite Industries – Rurban Division',
    location: 'West Bengal',
    dates: 'Jun 2025 – Aug 2025',
    summary:
      'Researched rural markets across West Bengal and MP for a ₹20 Cr M-Seal business to find distribution and channel opportunities. Consumer insights and competitor benchmarking sharpened positioning and drove 11% premium growth.',
    tags: ['Market Research', 'Positioning', 'Distribution'],
  },
  {
    role: 'Product Management Intern',
    company: 'Pidilite Industries – Dealer App',
    location: 'Mumbai',
    dates: 'Apr 2024 – Jun 2024',
    summary:
      'Owned the Dealer App product lifecycle across research, PRDs, UI/UX reviews, sprint planning and go-live. Set the product vision, roadmap and quarterly OKRs after benchmarking 5 competing dealer apps.',
    tags: ['PRD', 'Roadmap', 'OKRs'],
  },
  {
    role: 'Full Stack Engineering Analyst',
    company: 'Accenture (client: H&M)',
    location: 'Gurgaon',
    dates: 'May 2021 – Jun 2023',
    summary:
      'Led a 15-member cross-functional team on Azure cloud middleware and APIs for H&M, cutting release turnaround 11% and project delivery from 25 to 16 weeks. Cut Azure costs 10% and sped up incident response 20% with Splunk alerting; won the Accenture Celebrates Excellence (ACE) Award.',
    tags: ['Azure', 'APIs', 'Jira', 'Splunk'],
  },
  {
    role: 'Product Engineering Intern',
    company: 'HighRadius',
    location: 'Hyderabad',
    dates: 'Apr 2020 – May 2021',
    summary:
      'Architected 50+ RPA bots for workflow automation and report extraction across customer portals, and streamlined MySQL data architecture to raise operational efficiency 12%. Built an AI-enabled Accounts Receivable dashboard to speed up the Order-to-Cash cycle.',
    tags: ['RPA', 'MySQL', 'O2C'],
  },
]

export const projects = [
  {
    title: 'M-Seal Master’s Club Loyalty Revamp',
    company: 'Pidilite Industries',
    description:
      'Owned the loyalty app roadmap, backlog and UAT, and launched a gamified product-learning module with persona-based content.',
    metrics: [
      { value: '+18%', label: 'CTR' },
      { value: '+15%', label: 'Daily active users' },
      { value: '+25', label: 'NPS points' },
    ],
    tags: ['PRD', 'A/B Testing', 'Funnel Analytics', 'Gamification'],
  },
  {
    title: 'Agentic AI Assistant & RAG Chatbot',
    company: 'Pidilite Industries',
    description:
      'Built a RAG pipeline on LLMs for personalised user help, plus an evaluation framework covering task success, escalation and hallucination checks.',
    metrics: [
      { value: '5%→12%', label: 'Resolution rate' },
      { value: '1,000+', label: 'Test cases' },
    ],
    tags: ['LLM', 'RAG', 'AI Evals', 'CSAT'],
  },
  {
    title: 'Rural GTM & “Pidilite Dil Se” Pilot',
    company: 'Pidilite Industries – Central UP',
    description:
      'Field marketing across contractors, architects and influencers, and a trade pilot in Jhansi that became a GTM playbook for pan-India rollout.',
    metrics: [
      { value: '+13%', label: 'Counter share' },
      { value: '+30%', label: 'Active customers' },
      { value: '+37%', label: 'Tertiary sales' },
    ],
    tags: ['Go-To-Market', 'Channel Expansion', 'P&L'],
  },
  {
    title: 'Azure Middleware for H&M',
    company: 'Accenture',
    description:
      'Maintained Azure cloud middleware and APIs with a 15-member team across India, Europe and US time zones, tracking dependencies in Jira and KPIs in Splunk.',
    metrics: [
      { value: '−11%', label: 'Release TAT' },
      { value: '25→16', label: 'Weeks to deliver' },
      { value: '−10%', label: 'Cloud cost' },
    ],
    tags: ['Azure', 'Docker', 'Splunk', 'Agile'],
  },
]

export const skills = [
  {
    group: 'Product',
    items: ['Product Lifecycle Management', 'PRD / BRD', 'Roadmapping', 'RICE Prioritization', 'A/B Testing', 'Funnel Optimization', 'UAT', 'OKRs'],
  },
  {
    group: 'Business',
    items: ['Category Management', 'P&L & Margin Management', 'Go-To-Market', 'Pricing & Positioning', 'Demand Forecasting', 'Channel Expansion', 'Competitive Benchmarking'],
  },
  {
    group: 'AI & Data',
    items: ['LLMs', 'RAG', 'Agentic AI Evaluation', 'Power BI', 'SQL', 'Advanced Excel', 'Google Analytics', 'Splunk'],
  },
  {
    group: 'Tech',
    items: ['Azure', 'APIs', 'Docker', 'RPA', 'MySQL', 'GitLab', 'Jira', 'ServiceNow'],
  },
]

export const recognition = {
  awards: [
    { title: 'Spirit of Pidilite Award', detail: 'Highest market share gain in the division, Q1 FY27', org: 'PIDILITE' },
    { title: 'Accenture Celebrates Excellence (ACE) Award', detail: 'Cross-functional stakeholder management and release execution', org: 'ACCENTURE' },
    { title: 'Campus Winner, Next Horizon Strategy Challenge', detail: 'Accenture B-School competition', org: 'IIM MUMBAI' },
    { title: 'Campus Winner, Cognoscenti Case Challenge', detail: 'Asian Paints case competition', org: 'IIM MUMBAI' },
  ],
  education: [
    { degree: 'MBA – General Management', school: 'Indian Institute of Management, Mumbai', years: '2023 – 2025' },
    {
      degree: 'B.Tech',
      school: 'KIIT, Bhubaneswar',
      years: '2017 – 2021',
      note: 'Convenor, Kraya & Kuber Marketing Society · Captain, Football team',
    },
  ],
}
