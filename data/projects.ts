export const projects = [
  {
    slug: "groundwater-decision-support-platform",
    featured: true,
    period: "2024 - Present",
    title: "Groundwater Decision Support Platform",
    shortDescription:
      "Web-based GIS platform for groundwater recharge analysis and spatial data visualization.",
    description:
      "Built a web-based GIS decision support platform for regional groundwater management, enabling spatial data visualization and environmental analysis through an interactive mapping interface.",
    image: "/images/projects/water-management-system.png",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "PostgreSQL", "Leaflet.js"],
    role: "Full Stack Developer (GIS Systems)",
    responsibilities: [
      "Redesigned and modernized the UI using Tailwind CSS for improved usability and responsiveness",
      "Implemented interactive map visualization for 65+ spatial data layers",
      "Integrated Leaflet.js with PostGIS for geospatial data rendering",
      "Built responsive interfaces for environmental data exploration workflows",
      "Improved frontend structure and maintainability of legacy system",
    ],
    company: "MARDSS Chi and Mun River Basin Project",
    status: "Production",
    demo: "https://mardss.kku.ac.th/",
    restricted: false,
  },

  {
    slug: "utility-billing-management-system",
    featured: true,
    period: "2024 - 2025",
    title: "Utility Billing & Collection System",
    shortDescription:
      "Operational billing system for municipal water and waste management services.",
    description:
      "Developed a production billing system for municipal utilities, supporting payment workflows, QR-based transactions, and POS device integration for local government operations.",
    image: "/images/projects/billing-management-system.png",
    tech: ["PHP", "MySQL", "JavaScript", "REST API"],
    role: "Full Stack Developer",
    responsibilities: [
      "Built core billing and payment workflow system for municipal usage",
      "Integrated QR payment flow for real-world transactions",
      "Supported POS devices and thermal printer integration",
      "Maintained system stability in production environments",
    ],
    company: "Survey and GIS Ltd. Part.",
    status: "Production",
    demo: "https://www.surveygis39.com/sw/",
    deployments: ["Used by 3+ local government organizations"],
    restricted: true,
  },

  {
    slug: "e-document-management-system",
    featured: true,
    period: "2025 - Present",
    title: "E-Document Management System",
    shortDescription:
      "Internal document workflow system for government organizations.",
    description:
      "Built an internal document management system to digitize and streamline administrative workflows for government operations, improving document tracking and approval processes.",
    image: "/images/projects/e-document-system.png",
    tech: ["PHP", "MySQL", "JavaScript"],
    role: "Full Stack Developer",
    responsibilities: [
      "Developed document workflow features for internal government use",
      "Translated client requirements into system-level technical design",
      "Deployed production-ready systems for operational environments",
      "Conducted end-user training and system onboarding sessions",
      "Collaborated with stakeholders to improve workflow efficiency",
    ],
    company: "Survey and GIS Ltd. Part.",
    status: "Production",
    demo: "https://www.surveygis39.com/edoc/",
    restricted: true,
  },
];
