import {
  FileText,
  LayoutDashboard,
  LineChart,
  PlusCircle,
  Settings,
  FileStack,
  House,
  Notebook,
  NotepadText,
  MessageCircle,
  FileUp,
} from "lucide-react";

export const sidebarLinks = [
  {
    section: "Main",
    items: [
      { label: "Quick Create", icon: PlusCircle, href: "#", active: true },
      { label: "Home", icon: House, href: "/" },
      { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      { label: "Analytics", icon: LineChart, href: "#" },
    ],
  },
  {
    section: "Projects",
    items: [
      { label: "Projects", icon: FileStack, href: "/dashboard/projects" },
      {
        label: "Create Project",
        icon: FileUp,
        href: "/dashboard/projects/create",
      },
    ],
  },
  {
    section: "Blogs",
    items: [
      { label: "Blogs", icon: Notebook, href: "/dashboard/blogs" },
      {
        label: "Create Blog",
        icon: NotepadText,
        href: "/dashboard/blogs/create",
      },
    ],
  },
  {
    section: "Message",
    items: [
      {
        label: "Messages",
        icon: MessageCircle,
        href: "/dashboard/messages",
      },
    ],
  },
  {
    section: "Resume",
    items: [
      {
        label: "Update",
        icon: FileText,
        href: "/dashboard/resume",
      },
    ],
  },
  {
    section: "Settings",
    items: [{ label: "Settings", icon: Settings, href: "#" }],
  },
];
