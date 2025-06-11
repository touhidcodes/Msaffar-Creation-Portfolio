"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { truncateText } from "@/lib/utils";
// import UpdateBlogModal from "@/components/Modals/updateBlogModal";
// import DeleteBlogModal from "@/components/Modals/deleteBlogModal";

type TBlogData = {
  id: string;
  title: string;
  description: string;
  image: string;
  isFeatured: boolean;
  isDeleted: boolean;
  content: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<TBlogData[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<TBlogData | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", {
          next: { tags: ["blogs"] },
        });
        const data = await res.json();

        if (!res.ok) {
          toast.warning("Failed to fetch blogs!");
        }

        setBlogs(data?.data);
      } catch (err: any) {
        toast.error("Failed to fetch blogs: " + err.message);
      }
    };

    fetchBlogs();
  }, []);

  const handleUpdate = (blog: TBlogData) => {
    setSelectedBlog(blog);
    setEditModalOpen(true);
  };

  const handleDelete = (blog: TBlogData) => {
    setSelectedBlog(blog);
    setDeleteModalOpen(true);
  };

  return (
    <div className="grid w-full [&>div]:h-full [&>div]:border [&>div]:rounded">
      <Table>
        <TableHeader>
          <TableRow className="[&>*]:whitespace-nowrap sticky top-0 bg-background after:content-[''] after:inset-x-0 after:h-px after:bg-border after:absolute after:bottom-0 z-10">
            <TableHead className="pl-6">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {blogs?.map((blog) => (
            <TableRow
              key={blog.id}
              className="odd:bg-muted/50 [&>*]:whitespace-nowrap"
            >
              <TableCell className="font-medium pl-6">{blog.title}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {truncateText(blog.description, 40)}
              </TableCell>
              <TableCell>
                <Badge
                  variant={blog.isFeatured ? "default" : "destructive"}
                  className={
                    blog.isFeatured
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : ""
                  }
                >
                  {blog.isFeatured ? "Yes" : "No"}
                </Badge>
              </TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-accent/40 transition"
                    >
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="w-44 bg-background border border-border rounded-md shadow-xl animate-in fade-in-0 zoom-in-95"
                  >
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    <DropdownMenuItem
                      onClick={() => handleUpdate(blog)}
                      className="hover:bg-indigo-600 hover:text-white transition-colors px-3 py-2 cursor-pointer text-sm flex items-center gap-2"
                    >
                      <Pencil className="w-4 h-4" />
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(blog)}
                      className="hover:bg-red-600 hover:text-white transition-colors px-3 py-2 cursor-pointer text-sm flex items-center gap-2"
                    >
                      <Trash className="w-4 h-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedBlog && (
        <div>
          {/* <UpdateBlogModal
            open={editModalOpen}
            onClose={() => {
              setEditModalOpen(false);
              setSelectedBlog(null);
            }}
            blogData={selectedBlog}
          />
          <DeleteBlogModal
            open={deleteModalOpen}
            onClose={() => {
              setDeleteModalOpen(false);
              setSelectedBlog(null);
            }}
            blogId={selectedBlog?.id}
          /> */}
        </div>
      )}
    </div>
  );
}
