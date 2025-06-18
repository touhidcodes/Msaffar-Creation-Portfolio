"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { TMessageData } from "@/types";
import ViewMessageModal from "@/components/Modals/viewMessageModal";

export default function MessagesPage() {
  const [messages, setMessages] = useState<TMessageData[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<TMessageData | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch messages
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();

      if (!res.ok) {
        toast.warning("Failed to fetch messages!");
        return;
      }

      setMessages(data?.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Mark all messages as read
  const markAllAsRead = async () => {
    try {
      const res = await fetch("/api/messages", {
        method: "PATCH",
      });
      if (!res.ok) {
        toast.warning("Failed to update!");
        return;
      }

      toast.success("All messages marked as read");
      fetchMessages();
    } catch {
      toast.error("Failed to mark messages as read");
    }
  };

  // View message
  const handleView = async (message: TMessageData) => {
    if (!message.isRead) {
      await fetch(`/api/messages/${message.id}`, {
        method: "PATCH",
      });
    }

    setSelectedMessage({ ...message, isRead: true });
    setModalOpen(true);
    fetchMessages();
  };

  return (
    <div className="grid w-full space-y-2 mt-2">
      <div className="flex justify-between items-center px-6">
        <h2 className="text-xl font-semibold">Messages</h2>
        <Button variant="outline" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>
      <div className="grid w-full [&>div]:h-full [&>div]:border [&>div]:rounded">
        <Table>
          <TableHeader>
            <TableRow className="[&>*]:whitespace-nowrap sticky top-0 bg-background after:content-[''] after:inset-x-0 after:h-px after:bg-border after:absolute after:bottom-0 z-10">
              <TableHead className="pl-6">Sender</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((msg) => (
              <TableRow key={msg.id} className="odd:bg-muted/50">
                <TableCell className="pl-6">{msg.name}</TableCell>
                <TableCell>{msg.subject}</TableCell>
                <TableCell>
                  <Badge variant={msg.isRead ? "default" : "destructive"}>
                    {msg.isRead ? "Read" : "Unread"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    className="hover:bg-accent/40 transition px-2"
                    onClick={() => handleView(msg)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedMessage && (
        <ViewMessageModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          message={selectedMessage}
        />
      )}
      {loading && (
        <div className="flex justify-center items-center h-[300px]">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      )}
    </div>
  );
}
