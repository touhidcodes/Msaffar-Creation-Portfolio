"use client";

import { blogsData } from "@/data/demoData";
import { ArrowLeft, Badge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const BlogDetailsPage = () => {
  const params = useParams();
  const slug = params.id;

  const blog = blogsData.find((p) => p.id === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/blogs"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blogs
        </Link>
        {blog.isFeatured && <Badge>Featured</Badge>}
      </div>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-muted-foreground text-base mb-6">{blog.description}</p>

      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {/* If content is markdown, parse it. Otherwise render as HTML/text */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
