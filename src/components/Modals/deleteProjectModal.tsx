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
import { fetchWithAuth } from "@/service/fetchWithAuth";

type DeleteConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  projectId: string;
};

export default function DeleteProjectModal({
  open,
  onClose,
  onSuccess,
  projectId,
}: DeleteConfirmModalProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await fetchWithAuth(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.warning(data.error || "Something went wrong");
      } else {
        toast.success(data.message || "Project deleted successfully");
        onClose();
        onSuccess?.();
      }
    } catch (error: any) {
      toast.error(error.message || "Delete failed");
    } finally {
      setLoading(false);
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
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
