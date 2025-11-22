export interface Story {
    id: string;
    title: string;
    summary: string;
    type: string;
    region: string;
}

export const stories: Story[] = [
    {
        id: "1",
        title: "From Supervised Visits to Shared Parenting",
        summary:
            "After three years of supervised contact based on untested claims, this father documented calmly, sought help and now shares parenting of his daughter.",
        type: "Contact",
        region: "South Africa"
    },
    {
        id: "2",
        title: "Rebuilding Trust After Alienation",
        summary:
            "A father whose teenage son rejected him for years slowly rebuilt trust through consistent, pressure-free presence.",
        type: "Reconnection",
        region: "United Kingdom"
    },
    {
        id: "3",
        title: "Holding On Through Delays",
        summary:
            "Court delays stretched a case over four years, but a father stayed sober, stable and present and his son noticed.",
        type: "Resilience",
        region: "Global"
    },
    {
        id: "4",
        title: "Four Years 185 Days of Silence to Weekend Contact",
        summary:
            "How a father used calm documentation and respectful escalation to restore contact.",
        type: "Reconnection",
        region: "South Africa"
    },
    {
        id: "5",
        title: "From Discriminatory Supervised Visits (Based on Lies) to Shared Holidays",
        summary:
            "Working with professionals instead of against them to build a safer parenting plan.",
        type: "Discriminatory Supervised Visits",
        region: "South Africa"
    },
    {
        id: "6",
        title: "False Protection Order Withdrawn",
        summary:
            "An emergency protection order used to block all contact was withdrawn after the court saw the full history of messages and school reports.",
        type: "False Protection Order",
        region: "South Africa"
    },
    {
        id: "7",
        title: "Social Worker Recommends Gradual Reunification",
        summary:
            "By staying respectful and organised with reports, a father helped the social worker see the full picture and recommend a step-up parenting plan.",
        type: "Social Worker",
        region: "South Africa"
    },
    {
        id: "8",
        title: "Immediate Family Brought Back Into the Child's Life",
        summary:
            "A contact plan included time with the child's grandparents, restoring an extended family that had been cut off for almost a year.",
        type: "Immediate Family",
        region: "South Africa"
    },
    {
        id: "9",
        title: "School Records Helped Disprove Neglect Claims",
        summary:
            "Long-term attendance and teacher reports showed the child was thriving with dad, undermining claims that he was unsafe and unreliable.",
        type: "False Claims",
        region: "South Africa"
    },
    {
        id: "10",
        title: "Emergency Contact Order for Hospital Access",
        summary:
            "When a child was admitted to hospital and access was blocked, a rapid contact order ensured the father could be at the bedside.",
        type: "Emergency Contact",
        region: "South Africa"
    },

];

export const featuredStories = stories.slice(0, 10);