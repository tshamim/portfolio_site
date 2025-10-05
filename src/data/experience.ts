export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Northwind Labs",
    role: "Senior Product Engineer",
    period: "2022 — Present",
    summary:
      "Lead the delivery of full-stack product experiments for high-growth SaaS teams, shipping new revenue-driving flows in weeks instead of quarters.",
    achievements: [
      "Partnered with product and GTM to launch a modular onboarding system that lifted trial-to-paid conversions by 18%",
      "Created a performance-focused component library shared across 4 squads, cutting design-to-dev handoff time in half",
      "Introduced observability workflows that reduced mean time to recovery from frontend incidents by 35%",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Postgres", "tRPC"],
  },
  {
    company: "Orbit Analytics",
    role: "Frontend Chapter Lead",
    period: "2019 — 2022",
    summary:
      "Scaled a data visualization platform while mentoring a team of five engineers and aligning roadmaps with design, analytics, and marketing stakeholders.",
    achievements: [
      "Rebuilt the reporting suite with server components and suspense-friendly data fetching, improving load times by 40%",
      "Stood up visual regression testing to prevent UI drift across 3,000+ customer dashboards",
      "Implemented accessibility guidelines that brought the application to WCAG 2.1 AA compliance",
    ],
    tech: ["React", "Storybook", "GraphQL", "Playwright"],
  },
  {
    company: "Freelance",
    role: "Product Designer & Engineer",
    period: "2015 — 2019",
    summary:
      "Designed and built marketing sites, internal dashboards, and MVPs for startups in healthcare, climate, and fintech.",
    achievements: [
      "Delivered end-to-end brand and web presence for 20+ clients with an average NPS of 9/10",
      "Optimized lighthouse scores above 95 by default through static generation and prudent asset budgets",
      "Automated deployment and preview pipelines so non-technical teams could ship updates confidently",
    ],
    tech: ["Next.js", "Figma", "Netlify", "Contentful"],
  },
];
