import { Hibiscus } from "@/components/art";

export default function Loading() {
  return (
    <div
      className="flex min-h-svh items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <Hibiscus className="bloom-pulse h-24 w-24 text-mango" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
