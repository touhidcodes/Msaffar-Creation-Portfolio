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
import { TProjectData } from "@/types";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { truncateText } from "@/lib/utils";
import UpdateProjectModal from "@/components/Modals/updateProjectModal";
import DeleteProjectModal from "@/components/Modals/deleteProjectModal";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<TProjectData[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProjectData | null>(
    null
  );

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects", {
        next: { tags: ["projects"] },
      });
      const data = await res.json();

      if (!res.ok) {
        toast.warning("Failed to fetch projects!");
      }

      setProjects(data?.data);
    } catch (err: any) {
      toast.error("Failed to fetch projects: " + err.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleUpdate = (project: TProjectData) => {
    setSelectedProject(project);
    setEditModalOpen(true);
  };

  const handleDelete = (project: TProjectData) => {
    setSelectedProject(project);
    setDeleteModalOpen(true);
  };
  return (
    <div className="grid w-full [&>div]:h-full [&>div]:border [&>div]:rounded">
      <Table>
        <TableHeader>
          <TableRow className="[&>*]:whitespace-nowrap sticky top-0 bg-background after:content-[''] after:inset-x-0 after:h-px after:bg-border after:absolute after:bottom-0 z-10">
            <TableHead className="pl-6">Project Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="overflow-hidden">
          {projects?.map((project) => (
            <TableRow
              key={project.id}
              className="odd:bg-muted/50 [&>*]:whitespace-nowrap"
            >
              <TableCell className="font-medium pl-6">{project.name}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {truncateText(project.description, 40)}
              </TableCell>
              <TableCell>{project.client || "N/A"}</TableCell>
              <TableCell>{project.projectDuration}</TableCell>
              <TableCell>
                <Badge
                  variant={project.isFeatured ? "default" : "destructive"}
                  className={
                    project.isFeatured
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : ""
                  }
                >
                  {project.isFeatured ? "Yes" : "No"}
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
                      onClick={() => handleUpdate(project)}
                      className="hover:bg-indigo-600 hover:text-white transition-colors px-3 py-2 cursor-pointer text-sm flex items-center gap-2"
                    >
                      <Pencil className="w-4 h-4" />
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(project)}
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
      {selectedProject && (
        <div>
          {/* Update project modal */}
          <UpdateProjectModal
            open={editModalOpen}
            onClose={() => {
              setEditModalOpen(false);
              setSelectedProject(null);
            }}
            onSuccess={() => {
              fetchProjects();
            }}
            projectData={selectedProject}
          />
          {/* Delete project modal */}
          <DeleteProjectModal
            open={deleteModalOpen}
            onClose={() => {
              setDeleteModalOpen(false);
              setSelectedProject(null);
            }}
            onSuccess={() => {
              fetchProjects();
            }}
            projectId={selectedProject?.id}
          />
        </div>
      )}
    </div>
  );
}
