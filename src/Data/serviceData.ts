import { TServiceData } from "@/types";
import {
  Brush,
  PencilRuler,
  Code2,
  Globe,
  LayoutTemplate,
  Megaphone,
  Share2,
  FileText,
  Search,
} from "lucide-react";

export const servicesData: TServiceData[] = [
  {
    title: "Branding",
    description:
      "Creating an identity that is unique, consistent and captivating. Let us craft a brand story that resonates with your audience.",
    icon: Brush,
  },
  {
    title: "Logo Design",
    description:
      "Transform your company’s first impression with a logo that truly represents your business and its values.",
    icon: PencilRuler,
  },
  {
    title: "Development",
    description:
      "Customized development solutions that are visually stunning, user-friendly, and seamlessly functional.",
    icon: Code2,
  },
  {
    title: "Website Design",
    description:
      "Your website is your business’s digital face. Let’s make it an unforgettable one with user-centered designs.",
    icon: Globe,
  },
  {
    title: "App Design",
    description:
      "Impress your mobile audience with a user-friendly app that is visually appealing and engaging.",
    icon: LayoutTemplate,
  },
  {
    title: "Marketing",
    description:
      "From strategy creation to execution, we provide comprehensive marketing services to help your business thrive.",
    icon: Megaphone,
  },
  {
    title: "Social media",
    description:
      "Master the art of online interaction. We'll manage your social media channels to increase your reach and engagement.",
    icon: Share2,
  },
  {
    title: "Content Writing",
    description:
      "Capture your audience’s attention with well-crafted, SEO-driven content that sets you apart from the competition.",
    icon: FileText,
  },
  {
    title: "SEO",
    description:
      "Boost your online visibility. Our SEO strategies will help you rank higher and reach a larger audience.",
    icon: Search,
  },
];
