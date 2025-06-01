import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to combine and merge Tailwind CSS class names
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Function to truncate description text if it's too long
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
