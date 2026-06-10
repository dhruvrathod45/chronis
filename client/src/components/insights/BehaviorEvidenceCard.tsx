import { CheckCircle } from "lucide-react";

interface Props {
  title: string;
  evidence: string;
}

export default function BehaviorEvidenceCard({
  title,
  evidence,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <CheckCircle className="text-green-400" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <p className="mt-4 text-zinc-400">
        {evidence}
      </p>
    </div>
  );
}