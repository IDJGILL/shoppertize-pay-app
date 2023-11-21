import { ShieldCheckIcon } from "lucide-react";

export default function SecureBadge({
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-medium">
      <ShieldCheckIcon className="h-10 w-10 fill-green-600 stroke-white" />{" "}
      <div>
        <div className="text-green-600">Secured with</div>
        <div className="text-muted-foreground font-mono text-xs">
          256-bit SSL Encryption
        </div>
      </div>
    </div>
  );
}
