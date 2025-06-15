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

export type TProjectData = {
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

export type TMessageData = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

export type TResumeData = {
  id: string;
  title: string;
  url: string;
  downloadUrl: string;
  updatedAt: string;
};
