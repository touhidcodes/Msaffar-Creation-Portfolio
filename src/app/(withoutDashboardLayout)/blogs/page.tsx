"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { truncateText } from "@/lib/utils";
import { TBlogData } from "@/types";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<TBlogData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", {
          cache: "force-cache",
          next: { revalidate: 300 },
        });
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
    <div className="min-h-screen lg:px-16 mx-auto">
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
            {blogs.map((blog) => (
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
    </div>
  );
};

export default BlogPage;
