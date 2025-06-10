import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type DeleteConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  deleting: boolean;
};

export default function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
  deleting,
}: DeleteConfirmModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="relative">
        {/* Spinner Overlay */}
        {deleting && (
          <div className="absolute inset-0 bg-background/80 z-50 flex items-center justify-center rounded-md">
            <Loader2 className="w-6 h-6 animate-spin text-destructive" />
          </div>
        )}

        {/* Dialog Content */}
        <div className={deleting ? "pointer-events-none opacity-50" : ""}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone. Do you really want to delete this
            item?
          </p>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={onClose} disabled={deleting}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={onConfirm}
              disabled={deleting}
            >
              Delete
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
