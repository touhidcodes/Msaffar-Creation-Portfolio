"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Badge, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { TBlogData } from "@/types";

const BlogDetailsPage = () => {
  const params = useParams();
  const slug = params.id;

  const [blog, setBlog] = useState<TBlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          if (res.status === 500) {
            notFound();
          }
        }
        const data = await res.json();

        if (data?.data) {
          setBlog(data.data);
        } else {
          notFound();
        }
      } catch (error) {
        notFound();
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[300px]">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );

  if (!blog) {
    notFound();
  }
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
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
