import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type DeleteConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  projectId: string;
};

export default function DeleteProjectModal({
  open,
  onClose,
  projectId,
}: DeleteConfirmModalProps) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.warning(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "Project deleted successfully");
        onClose();
      }
    } catch (error: any) {
      toast.error(error.message || "Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          This action cannot be undone. Do you really want to delete this item?
        </p>

        <DialogFooter className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose} disabled={deleting}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={deleting}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
