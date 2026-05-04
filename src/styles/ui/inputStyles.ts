import { cn } from "@/lib/utils";

export const inputStyles = cn(
  "h-9 w-full",
  "rounded-lg border border-border-primary",
  "bg-input",
  "px-3 py-2",
  "text-base text-text-primary",
  "placeholder:text-text-secondary",
  "focus:outline-primary"
);

export const startIconStyles = cn(
  "pointer-events-auto",
  "absolute left-3",
  "inline-flex items-center"
);

export const endIconStyles = cn(
  "pointer-events-auto",
  "absolute right-3",
  "inline-flex items-center"
);
