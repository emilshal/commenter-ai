import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Readonly<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}>) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-widest text-indigo-300/80">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

