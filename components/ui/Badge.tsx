import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "dark" | "light";
  className?: string;
}

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full",
        variant === "primary" && "bg-primary-100 text-primary",
        variant === "dark" && "bg-dark-800 text-gray-light",
        variant === "light" && "bg-gray-100 text-gray",
        className
      )}
    >
      {children}
    </span>
  );
}
