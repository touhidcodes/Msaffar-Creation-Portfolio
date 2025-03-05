import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h1>
      <div className="grid gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}

import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function Blogs() {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h1>
      <div className="grid gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
