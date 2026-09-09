import crestAsset from "@/assets/nextribe-crest.png.asset.json";

export function HeaderCrest({ className }: { className?: string }) {
  return (
    <img
      src={crestAsset.url}
      alt=""
      aria-hidden="true"
      className={`object-contain object-center ${className ?? ""}`}
    />
  );
}