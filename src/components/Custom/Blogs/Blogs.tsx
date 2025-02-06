import { blogsData } from "@/data/data";
import { FC } from "react";

export interface Blog {
  id: number;
  title: string;
  description: string;
  link: string;
}

const BlogPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h1>
        <div className="space-y-4">
          {blogsData.map((blog) => (
            <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <a
                href={blog.link}
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
