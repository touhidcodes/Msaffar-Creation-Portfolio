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

export type TWorkData = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
};
