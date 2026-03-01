import { cn } from "@/lib/utils";

interface SectionDividerProps {
  from?: "dark" | "light" | "white";
  to?: "dark" | "light" | "white";
  className?: string;
}

const colorMap = {
  dark: "#1A1714",
  light: "#FAF8F4",
  white: "#FFFFFF",
};

/**
 * Elegant curved SVG divider for section transitions.
 * Replaces the muddy gradient fades between dark ↔ light sections.
 */
export function SectionDivider({ from = "dark", to = "light", className }: SectionDividerProps) {
  const fillColor = colorMap[from];
  const accentColor = from === "dark" ? "rgba(194,113,12,0.15)" : "rgba(194,113,12,0.1)";

  return (
    <div
      className={cn("relative -mt-px w-full overflow-hidden", className)}
      style={{ backgroundColor: colorMap[to] }}
    >
      {/* Main curved shape */}
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1440V20C1440 20 1320 56 720 56C120 56 0 20 0 20V0Z"
          fill={fillColor}
        />
      </svg>

      {/* Thin amber accent line following the curve */}
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20C0 20 120 56 720 56C1320 56 1440 20 1440 20"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}
