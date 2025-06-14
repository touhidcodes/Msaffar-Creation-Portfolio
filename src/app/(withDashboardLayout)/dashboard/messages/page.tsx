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
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
// import MessageViewModal from "@/components/Modals/MessageViewModal";
import { TMessageData } from "@/types";

export default function MessagesPage() {
  const [messages, setMessages] = useState<TMessageData[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<TMessageData | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();

      if (!res.ok) {
        toast.warning("Failed to fetch messages!");
        return;
      }

      setMessages(data?.data);
    } catch (err: any) {
      toast.error("Error fetching messages: " + err.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Mark all messages as read
  const markAllAsRead = async () => {
    try {
      const res = await fetch("/api/messages/mark-all-read", {
        method: "PATCH",
      });
      if (!res.ok) throw new Error("Failed");

      toast.success("All messages marked as read");
      fetchMessages(); // refresh list
    } catch {
      toast.error("Failed to mark messages as read");
    }
  };

  // View message
  const handleView = async (message: TMessageData) => {
    // mark as read if unread
    if (!message.isRead) {
      await fetch(`/api/messages/${message.id}/read`, {
        method: "PATCH",
      });
    }

    setSelectedMessage({ ...message, isRead: true });
    setModalOpen(true);
    fetchMessages();
  };

  return (
    <div className="grid w-full space-y-4">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl font-semibold">Messages</h2>
        <Button variant="outline" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-sm">
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

      {/* {selectedMessage && (
        <MessageViewModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          message={selectedMessage}
        />
      )} */}
    </div>
  );
}
