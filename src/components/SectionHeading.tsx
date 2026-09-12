import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    align?: "center" | "left";
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "max-w-2xl",
                align === "center" ? "mx-auto text-center" : "text-left",
                className
            )}
        >
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="text-muted-foreground mt-4 text-lg text-pretty">{description}</p>
            )}
        </div>
    );
}
