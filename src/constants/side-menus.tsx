import { AutoApplyIcon } from "@/components/icons/auto-apply";
import { CoverLetterIcon } from "@/components/icons/cover-letter";
import { HelpIcon } from "@/components/icons/help";
import { HomeIcon } from "@/components/icons/home";
import { InterviewIcon } from "@/components/icons/interview";
import { JobIcon } from "@/components/icons/job";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { NotificationIcon } from "@/components/icons/notification";
import { ResumeIcon } from "@/components/icons/resume";

export const menuItems = [
    {
        name: "Dashboard",
        href: "/",
        icon: HomeIcon
    },
    {
        name: "Job Board",
        href: "/jobs",
        icon: JobIcon
    },
    {
        name: "Resume",
        href: "/resume",
        icon: ResumeIcon
    },
    {
        name: "Cover Letter",
        href: "/cover-letter",
        icon: CoverLetterIcon
    },
    {
        name: "LinkedIn Analyzer",
        href: "/linkedin-analyzer",
        icon: LinkedinIcon
    },
    {
        name: "Interview",
        href: "/interview",
        icon: InterviewIcon
    },
    {
        name: "Auto Apply",
        href: "/auto-apply",
        icon: AutoApplyIcon
    }
]

export const sidebarFooterMenuItems = [
    {
        name: "Help and Support",
        href: "/help",
        icon: HelpIcon
    },
    {
        name: "Notifications",
        href: "/notifications",
        icon: NotificationIcon
    }
]