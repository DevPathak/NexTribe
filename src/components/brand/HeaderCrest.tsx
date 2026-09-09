import crestUrl from "@/assets/nextribe-header-crest.png";

export function HeaderCrest({ className }: { className?: string }) {
  return (
    <img
      src={crestUrl}
      alt=""
      aria-hidden="true"
      className={`object-contain object-center ${className ?? ""}`}
    />
  );
}
