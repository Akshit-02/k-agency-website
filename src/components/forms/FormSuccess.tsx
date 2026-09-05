import { CheckCircle2 } from "lucide-react";

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-sm border border-line bg-lime/20 p-8 sm:p-10" role="status">
      <CheckCircle2 className="size-9 text-ink" />
      <div>
        <p className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{title}</p>
        <p className="mt-2 max-w-md text-ink/65">{body}</p>
      </div>
    </div>
  );
}
