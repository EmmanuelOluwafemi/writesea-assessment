import { CoreFillIcon } from "@/components/icons/core-fill";
import { HeartFillIcon } from "@/components/icons/heart-fill";

export const networkMenu = [
    {
        title: "Core",
        icon: CoreFillIcon,
        items: [
            {
                title: "Personal Details",
                link: "/linkedin-analyzer/personal-details",
                children: []
            },
            {
                title: "Profile Section",
                link: "/linkedin-analyzer/profile-section",
                children: [
                    {
                        title: "Headline",
                        link: "/linkedin-analyzer/profile-section/headline"
                    },
                    {
                        title: "About / Summary",
                        link: "/linkedin-analyzer/profile-section/about"
                    },
                    {
                        title: "Current Position",
                        link: "/linkedin-analyzer/profile-section/current-position"
                    },
                    {
                        title: "Top Skills",
                        link: "/linkedin-analyzer/profile-section/top-skills"
                    },
                ]
            },
            {
                title: "Work Experience",
                link: "/linkedin-analyzer/work-experience",
                children: []
            },
            {
                title: "Skills",
                link: "/linkedin-analyzer/skills",
                children: []
            },
            {
                title: "Recommendations",
                link: "/linkedin-analyzer/recommendations",
                children: []
            },
            {
                title: "Education",
                link: "/linkedin-analyzer/education",
                children: []
            },
            {
                title: "Networking",
                link: "/linkedin-analyzer/networking",
                children: []
            },
        ]
    },
    {
        title: "Nice to have",
        icon: HeartFillIcon,
        items: [
            {
                title: "Certifications",
                link: "/linkedin-analyzer/certifications",
                children: []
            },
            {
                title: "Projects",
                link: "/linkedin-analyzer/projects",
                children: []
            },
            {
                title: "Volunteer Experience",
                link: "/linkedin-analyzer/volunteer-experience",
                children: []
            }
        ]
    },
]