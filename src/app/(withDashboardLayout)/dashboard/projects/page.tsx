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

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stockQuantity: 120,
    supplier: "SoundTech Ltd",
    dateAdded: "2024-01-15",
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
    stockQuantity: 200,
    supplier: "FitGear Inc",
    dateAdded: "2024-01-20",
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
    stockQuantity: 80,
    supplier: "HomeBrew Supplies",
    dateAdded: "2024-02-05",
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
    stockQuantity: 150,
    supplier: "RunWell Co.",
    dateAdded: "2024-03-15",
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
    stockQuantity: 60,
    supplier: "TechTime",
    dateAdded: "2024-04-10",
  },
  {
    id: 106,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 45.0,
    rating: 4.3,
    stockQuantity: 95,
    supplier: "GamePro Gear",
    dateAdded: "2024-04-22",
  },
  {
    id: 107,
    name: "Blender",
    category: "Kitchen Appliances",
    price: 55.0,
    rating: 4.4,
    stockQuantity: 110,
    supplier: "KitchenEssentials",
    dateAdded: "2024-05-05",
  },
  {
    id: 108,
    name: "Electric Kettle",
    category: "Kitchen Appliances",
    price: 30.0,
    rating: 4.1,
    stockQuantity: 130,
    supplier: "HomeEssentials",
    dateAdded: "2024-05-18",
  },
  {
    id: 109,
    name: "Office Chair",
    category: "Furniture",
    price: 150.0,
    rating: 4.6,
    stockQuantity: 50,
    supplier: "FurniPro",
    dateAdded: "2024-06-01",
  },
  {
    id: 110,
    name: "LED Desk Lamp",
    category: "Lighting",
    price: 20.0,
    rating: 4.5,
    stockQuantity: 210,
    supplier: "BrightLight",
    dateAdded: "2024-06-10",
  },
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stockQuantity: 120,
    supplier: "SoundTech Ltd",
    dateAdded: "2024-01-15",
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 25.0,
    rating: 4.8,
    stockQuantity: 200,
    supplier: "FitGear Inc",
    dateAdded: "2024-01-20",
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80.0,
    rating: 4.2,
    stockQuantity: 80,
    supplier: "HomeBrew Supplies",
    dateAdded: "2024-02-05",
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Sportswear",
    price: 70.0,
    rating: 4.6,
    stockQuantity: 150,
    supplier: "RunWell Co.",
    dateAdded: "2024-03-15",
  },
  {
    id: 105,
    name: "Smartwatch",
    category: "Electronics",
    price: 120.0,
    rating: 4.7,
    stockQuantity: 60,
    supplier: "TechTime",
    dateAdded: "2024-04-10",
  },
  {
    id: 106,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 45.0,
    rating: 4.3,
    stockQuantity: 95,
    supplier: "GamePro Gear",
    dateAdded: "2024-04-22",
  },
  {
    id: 107,
    name: "Blender",
    category: "Kitchen Appliances",
    price: 55.0,
    rating: 4.4,
    stockQuantity: 110,
    supplier: "KitchenEssentials",
    dateAdded: "2024-05-05",
  },
  {
    id: 108,
    name: "Electric Kettle",
    category: "Kitchen Appliances",
    price: 30.0,
    rating: 4.1,
    stockQuantity: 130,
    supplier: "HomeEssentials",
    dateAdded: "2024-05-18",
  },
  {
    id: 109,
    name: "Office Chair",
    category: "Furniture",
    price: 150.0,
    rating: 4.6,
    stockQuantity: 50,
    supplier: "FurniPro",
    dateAdded: "2024-06-01",
  },
  {
    id: 110,
    name: "LED Desk Lamp",
    category: "Lighting",
    price: 20.0,
    rating: 4.5,
    stockQuantity: 210,
    supplier: "BrightLight",
    dateAdded: "2024-06-10",
  },
];

export default function ProjectsPage() {
  const handleUpdate = (id: number) => {
    console.log("Update", id);
    // Your update logic here
  };

  const handleDelete = (id: number) => {
    console.log("Delete", id);
    // Your delete logic here
  };
  return (
    <div className="grid w-full [&>div]:h-full [&>div]:border [&>div]:rounded">
      <Table>
        <TableHeader>
          <TableRow className="[&>*]:whitespace-nowrap sticky top-0 bg-background after:content-[''] after:inset-x-0 after:h-px after:bg-border after:absolute after:bottom-0 z-10">
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price (USD)</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock Quantity</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Date Added</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="odd:bg-muted/50 [&>*]:whitespace-nowrap"
            >
              <TableCell className="pl-4">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stockQuantity}</TableCell>
              <TableCell>{product.supplier}</TableCell>
              <TableCell>{product.dateAdded}</TableCell>
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
                      onClick={() => handleUpdate(product.id)}
                      className="hover:bg-indigo-600 hover:text-white transition-colors px-3 py-2 cursor-pointer text-sm flex items-center gap-2"
                    >
                      <Pencil className="w-4 h-4" />
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(product.id)}
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
    </div>
  );
}
