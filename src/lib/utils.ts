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

export function deepSanitize(obj: any): any {
  if (obj === null || obj === undefined) return obj;

  if (obj instanceof Date) return obj.toISOString();

  if (Array.isArray(obj)) {
    return obj.map(deepSanitize);
  }

  if (typeof obj === "object") {
    const cleanObj: any = {};
    for (const key in obj) {
      // convert _id or id to string explicitly
      if ((key === "id" || key === "_id") && obj[key]?.toString) {
        cleanObj[key] = obj[key].toString();
      } else {
        cleanObj[key] = deepSanitize(obj[key]);
      }
    }
    return cleanObj;
  }

  // primitive type (string, number, boolean)
  return obj;
}
