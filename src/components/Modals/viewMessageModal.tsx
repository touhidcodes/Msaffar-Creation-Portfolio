import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TMessageData } from "@/types";
import { Mail, CalendarDays, User, CornerDownRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type Props = {
  open: boolean;
  onClose: () => void;
  message: TMessageData;
};

export default function ViewMessageModal({ open, onClose, message }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
              {message.name[0].toUpperCase()}
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-xl flex items-center gap-2">
                {message.name}
              </p>
              <div className="flex gap-2">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <CornerDownRight className="w-4 h-4" />
                  {message.email}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(message.createdAt).toLocaleDateString()} (
                  {formatDistanceToNow(new Date(message.createdAt), {
                    addSuffix: true,
                  })}
                  )
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="pt-2 space-y-2">
          <h3 className="text-2xl font-semibold">{message.subject}</h3>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {message.message}
          </p>
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
