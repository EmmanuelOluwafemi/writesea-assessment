import { CoreFillIcon } from "@/components/icons/core-fill";
import { HeartFillIcon } from "@/components/icons/heart-fill";

export const networkMenu = [
    {
        title: "Core",
        icon: CoreFillIcon,
        items: [
            {
                title: "Personal Details",
                link: "/dashboard/linkedin-analyzer/personal-details"
            },
            {
                title: "Profile Section",
                link: "/dashboard/linkedin-analyzer/profile-section"
            },
            {
                title: "Work Experience",
                link: "/dashboard/linkedin-analyzer/work-experience"
            },
            {
                title: "Skills",
                link: "/dashboard/linkedin-analyzer/skills"
            },
            {
                title: "Recommendations",
                link: "/dashboard/linkedin-analyzer/recommendations"
            },
            {
                title: "Education",
                link: "/dashboard/linkedin-analyzer/education"
            },
            {
                title: "Networking",
                link: "/dashboard/linkedin-analyzer/networking"
            },
        ]
    },
    {
        title: "Nice to have",
        icon: HeartFillIcon,
        items: [
            {
                title: "Certifications",
                link: "/dashboard/linkedin-analyzer/certifications"
            },
            {
                title: "Projects",
                link: "/dashboard/linkedin-analyzer/projects"
            },
            {
                title: "Volunteer Experience",
                link: "/dashboard/linkedin-analyzer/volunteer-experience"
            }
        ]
    },
]