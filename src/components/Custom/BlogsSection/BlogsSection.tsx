"use client";

import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import { blogsData } from "@/data/demoData";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/Button/Button";

const BlogsSection = () => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-16 mx-auto">
      <div className="px-6 py-6 lg:py-10 lg:px-20">
        {/* Blog Section */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Latest Blogs</h2>
          <p className="text-gray-600 mt-4">
            Stay updated with our latest insights, tips, and stories on
            development, design, and tech trends.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.slice(0, 3).map((blog) => (
            <Card key={blog._id} className="overflow-hidden">
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
                  {truncateText(blog.description)}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button
                  text="Read More"
                  link={`/blogs/${blog._id}`}
                  className="w-fit bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* More Button */}
      <div className="mt-10 mb-5 lg:mb-0 flex justify-center">
        <Button
          text="Explore More"
          link="/blogs"
          className="w-fit bg-black border-2 border-black text-white font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default BlogsSection;
