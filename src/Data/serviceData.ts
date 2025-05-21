import { TServiceData } from "@/types";
import {
  PenTool,
  Palette,
  Image,
  Layers,
  MonitorSmartphone,
  FileText,
} from "lucide-react";

export const servicesData: TServiceData[] = [
  {
    title: "Logo Design",
    description:
      "Crafting unique and memorable logos that capture the essence of your brand and make a lasting impression.",
    icon: PenTool,
  },
  {
    title: "Brand Identity",
    description:
      "Building a consistent visual identity with color schemes, typography, and design systems for strong brand recognition.",
    icon: Palette,
  },
  {
    title: "Social Media Graphics",
    description:
      "Designing engaging social media posts, banners, and ads tailored for platforms like Instagram, Facebook, and LinkedIn.",
    icon: Image,
  },
  {
    title: "Print Design",
    description:
      "Creating stunning brochures, flyers, posters, and other print materials that communicate your message effectively.",
    icon: Layers,
  },
  {
    title: "UI Design",
    description:
      "Designing intuitive user interfaces for websites and mobile apps that blend aesthetics with usability.",
    icon: MonitorSmartphone,
  },
  {
    title: "Presentation Design",
    description:
      "Transforming your ideas into compelling slide decks for business pitches, webinars, or educational content.",
    icon: FileText,
  },
];
