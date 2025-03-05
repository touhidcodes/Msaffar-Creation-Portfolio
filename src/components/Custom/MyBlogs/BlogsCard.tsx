import { blogs } from "@/data/blogs";
import { GetStaticProps, GetStaticPaths } from "next";

type BlogProps = {
  title: string;
  date: string;
  content: string;
};

export default function BlogPost({ title, date, content }: BlogProps) {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500 text-sm">{date}</p>
      <div className="mt-4 text-gray-700">{content}</div>
    </div>
  );
}

// Generate static paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogs.map((blog) => ({ params: { id: blog.id } })),
    fallback: false,
  };
};

// Fetch blog data
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = blogs.find((b) => b.id === params?.id);
  return { props: blog || {} };
};
