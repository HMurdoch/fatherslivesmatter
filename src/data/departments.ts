export interface Department {
    name: string;
    summary: string;
    path: string;
}

export const departments: Department[] = [
    {
        name: "Legal & Advocacy",
        summary: "Guides, templates and referrals to help you navigate the legal system.",
        path: "/departments/legal-advocacy",
    },
    {
        name: "Social Services",
        summary: "Working with social workers, family advocates and welfare structures.",
        path: "/departments/social-services",
    },
    {
        name: "Psychology & Child Welfare",
        summary: "Understanding the emotional impact of conflict and alienation on children.",
        path: "/departments/psychology",
    },
    {
        name: "Workplace & HR Support",
        summary: "Balancing your job with court dates, emergencies and emotional strain.",
        path: "/departments/workplace-hr",
    },
    {
        name: "Investigations",
        summary: "Gathering evidence lawfully and safely when facts are being hidden.",
        path: "/departments/investigations",
    },
    {
        name: "Media, PR & Campaigns",
        summary: "Giving fathers and children a public voice through campaigns.",
        path: "/departments/media-pr",
    },
    {
        name: "IT, Research & Data",
        summary: "Turning individual stories into anonymised data and tools for change.",
        path: "/departments/it-research",
    },
];