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
    period: "2022 — Present",
    summary:
      "Steering product strategy and engineering execution for a logistics-tech scale-up, aligning teams on customer journeys from idea to rollout.",
    achievements: [
      "Built a cross-functional roadmap process that cut experiment lead time from 10 weeks to 4",
      "Shipped a unified parcel-tracking experience that reduced support tickets by 32% while boosting NPS",
      "Scaled platform reliability with progressive rollouts and SLO-based alerting, driving 99.95% uptime",
    ],
    tech: ["Next.js", "TypeScript", "Go", "PostgreSQL", "AWS"],
  },
  {
    company: "Devskamp LLC",
    role: "Engineering Manager (Remote)",
    period: "2015 — 2022",
    summary:
      "Led distributed squads delivering SaaS products for travel and fintech clients, blending coaching with hands-on architecture work.",
    achievements: [
      "Mentored eight engineers through promotions by setting growth plans and pairing weekly on delivery",
      "Introduced trunk-based delivery with automated CI gates, shrinking release regressions by 45%",
      "Replatformed the analytics pipeline onto event-driven services, unlocking near real-time reporting",
    ],
    tech: ["Node.js", "React", "GraphQL", "Kubernetes", "GCP"],
  },
  {
    company: "Oployeelabs",
    role: "Software Engineer",
    period: "2012 — 2015",
    summary:
      "Developed core workforce analytics modules, modernizing scheduling, payroll, and compliance workflows for enterprise HR teams.",
    achievements: [
      "Delivered modular REST services that handled 1M+ weekly timesheets with automated anomaly detection",
      "Collaborated with UX to redesign scheduling dashboards, improving manager task completion time by 28%",
      "Maintained zero-downtime releases through feature toggles and rigorous integration testing",
    ],
    tech: ["C#", ".NET", "AngularJS", "SQL Server", "Redis"],
  },
];
