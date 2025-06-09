import { LucideIcon } from "lucide-react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type TBlogData = {
  _id: string;
  title: string;
  description: string;
  image: string;
  isFeatured: boolean;
  content: string;
};

export type TProjectsData = {
  id: string;
  name: string;
  description: string;
  images: string[];
  tags: string[];
  isFeatured: boolean;
  isDeleted: boolean;
  binanceProfileUrl?: string;
  tools: string[];
  client?: string;
  projectDuration?: string;
  createdAt: string;
  updatedAt: string;
};

export type TServiceData = {
  title: string;
  description: string;
  icon: LucideIcon;
};
