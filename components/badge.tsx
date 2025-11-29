import { CheckCircle2 } from "lucide-react";

export default function Badge({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm shadow-sm">
      <CheckCircle2 className="w-4 h-4" />
      {text}
    </span>
  );
}
