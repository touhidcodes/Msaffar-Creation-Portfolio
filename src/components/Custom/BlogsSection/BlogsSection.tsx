"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { truncateText } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TBlogData } from "@/types";
import { Loader2 } from "lucide-react";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState<TBlogData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const result = await res.json();

        setBlogs(result.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen pb-8 px-6 lg:px-16 mx-auto">
      <div className="px-6 py-6 lg:py-10 lg:px-20">
        {/* Blog Section Header */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Latest Blogs</h2>
          <p className="text-gray-600 mt-4">
            Stay updated with our latest insights, tips, and stories on
            development, design, and tech trends.
          </p>
        </section>

        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <Card key={blog.id} className="overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {blog.isFeatured && (
                    <Badge className="absolute top-2 right-2 bg-blue-600 text-white hover:bg-blue-700">
                      New
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>
                    {truncateText(blog.description, 120)}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  <Button>
                    <Link href={`/blogs/${blog.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* More Button */}
      <div className="mt-10 mb-5 lg:mb-0 flex justify-center">
        <Button>
          <Link href="/blogs">Explore More</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogsSection;
