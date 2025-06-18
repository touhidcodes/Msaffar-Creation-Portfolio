import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to combine and merge Tailwind CSS class names
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Function to truncate description text if its too long
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export function deepSanitize<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;

  if (obj instanceof Date) {
    return obj.toISOString() as unknown as T;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepSanitize(item)) as unknown as T;
  }

  if (typeof obj === "object") {
    const cleanObj: Record<string, unknown> = {};
    for (const key in obj as Record<string, unknown>) {
      const value = (obj as Record<string, unknown>)[key];

      // Convert _id or id to string explicitly
      if (
        (key === "id" || key === "_id") &&
        typeof value?.toString === "function"
      ) {
        cleanObj[key] = value.toString();
      } else {
        cleanObj[key] = deepSanitize(value);
      }
    }
    return cleanObj as T;
  }

  // primitive type (string, number, boolean)
  return obj;
}
