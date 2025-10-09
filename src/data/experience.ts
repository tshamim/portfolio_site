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
    company: "Paperfly Ltd.",
    role: "Head of Product & Technology",
    period: "2022 - Present",
    summary:
      "Own product strategy and engineering delivery for a logistics-tech scale-up, partnering with leadership to improve customer journeys, retention, and operational efficiency.",
    achievements: [
      "Built a roadmap and discovery cadence that cut experiment lead time from 10 weeks to 4 while increasing validated releases",
      "Launched a unified parcel tracking experience that lifted NPS by 18 points and reduced support tickets by 32%",
      "Introduced SLO-driven observability that sustained 99.95% uptime across 150k daily parcel updates",
    ],
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "AWS"],
  },
  {
    company: "Devskamp LLC",
    role: "Engineering Manager (Remote)",
    period: "2015 - 2022",
    summary:
      "Led distributed squads shipping SaaS products for travel and fintech clients, combining coaching, architecture, and hands-on delivery to hit aggressive launch dates.",
    achievements: [
      "Mentored eight engineers into senior roles through capability frameworks, pair programming, and quarterly growth plans",
      "Rolled out trunk-based delivery with CI quality gates, reducing regression-related incidents by 45%",
      "Replatformed the analytics pipeline onto event-driven services, enabling self-serve dashboards with near real-time insights",
    ],
    tech: ["Node.js", "React", "GraphQL", "Kubernetes", "GCP"],
  },
  {
    company: "Oployeelabs",
    role: "Software Engineer",
    period: "2012 - 2015",
    summary:
      "Developed workforce analytics modules for enterprise HR teams, modernising scheduling, payroll, and compliance workflows across APAC.",
    achievements: [
      "Designed modular REST services that processed over one million weekly timesheets with automated anomaly detection",
      "Partnered with UX leads to redesign scheduling dashboards, improving manager task completion time by 28%",
      "Maintained zero-downtime deployments through feature toggles, integration tests, and rollback playbooks",
    ],
    tech: ["C#", ".NET", "AngularJS", "SQL Server", "Redis"],
  },
];
