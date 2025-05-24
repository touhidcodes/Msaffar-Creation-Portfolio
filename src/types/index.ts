import { LucideIcon } from "lucide-react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type TBlogData = {
  id: string;
  title: string;
  description: string;
  image: string;
  isFeatured: boolean;
  content: string;
};

export type TProjectsData = {
  _id: string;
  name: string;
  description: string;
  images: string[];
  timeline: string;
  tags: string[];
  category: string;
  tools: string[];
  client: string;
  status: "Completed" | "Ongoing" | "In Development";
  binanceProfileUrl: string;
};

export type TServiceData = {
  title: string;
  description: string;
  icon: LucideIcon;
};
