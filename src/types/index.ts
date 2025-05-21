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

export type TRecentWorkData = {
  id: string;
  name: string;
  description: string;
  images: string[];
  tags: string[];
  category: string;
  client: string;
  tools: string[];
  binanceProfileUrl: string;
};

export type TServiceData = {
  title: string;
  description: string;
  icon: LucideIcon;
};
