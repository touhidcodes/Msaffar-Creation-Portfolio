export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type TBlog = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
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
};
