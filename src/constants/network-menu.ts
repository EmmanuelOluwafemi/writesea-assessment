import { CoreFillIcon } from "@/components/icons/core-fill";
import { HeartFillIcon } from "@/components/icons/heart-fill";

export const networkMenu = [
    {
        title: "Core",
        icon: CoreFillIcon,
        items: [
            {
                title: "Personal Details",
                link: "/linkedin-analyzer/personal-details"
            },
            {
                title: "Profile Section",
                link: "/linkedin-analyzer/profile-section"
            },
            {
                title: "Work Experience",
                link: "/linkedin-analyzer/work-experience"
            },
            {
                title: "Skills",
                link: "/linkedin-analyzer/skills"
            },
            {
                title: "Recommendations",
                link: "/linkedin-analyzer/recommendations"
            },
            {
                title: "Education",
                link: "/linkedin-analyzer/education"
            },
            {
                title: "Networking",
                link: "/linkedin-analyzer/networking"
            },
        ]
    },
    {
        title: "Nice to have",
        icon: HeartFillIcon,
        items: [
            {
                title: "Certifications",
                link: "/linkedin-analyzer/certifications"
            },
            {
                title: "Projects",
                link: "/linkedin-analyzer/projects"
            },
            {
                title: "Volunteer Experience",
                link: "/linkedin-analyzer/volunteer-experience"
            }
        ]
    },
]