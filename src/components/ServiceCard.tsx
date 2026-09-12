import React from "react";
import { ArrowUpRight, Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatINR, site } from "@/lib/site";

export interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    duration: string;
    description: string;
    items: string[];
    price: number;
    popular?: boolean;
    className?: string;
}

export default function ServiceCard({
    icon,
    title,
    duration,
    description,
    items,
    price,
    popular = false,
    className,
}: ServiceCardProps) {
    return (
        <article
            aria-label={title}
            className={cn(
                "bg-card group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-28px_rgba(31,26,20,0.35)]",
                popular && "ring-brand/60 shadow-[0_24px_50px_-28px_rgba(31,26,20,0.3)] ring-2",
                className
            )}
        >
            {popular && (
                <span className="bg-brand text-foreground absolute -top-3 left-6 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    Most popular
                </span>
            )}

            <header className="flex items-start justify-between gap-3">
                <span className="bg-brand-soft text-brand-strong grid size-11 shrink-0 place-items-center rounded-xl [&_svg]:size-5">
                    {icon}
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium">
                    <Clock className="size-3.5" />
                    {duration}
                </span>
            </header>

            <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="text-muted-foreground mt-1.5 text-sm text-pretty">{description}</p>

            <ul className="mt-4 space-y-2">
                {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm">
                        <Check className="text-brand-strong mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                        <span>{it}</span>
                    </li>
                ))}
            </ul>

            <footer className="mt-auto flex items-end justify-between gap-4 pt-6">
                <div>
                    <p className="text-muted-foreground text-xs">Starting at</p>
                    <p className="font-display text-3xl leading-none tracking-tight">
                        {formatINR(price)}
                    </p>
                </div>
                <a
                    href={site.whatsapp(`Hi! I'm interested in ${title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-strong inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                >
                    Ask on WhatsApp
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </footer>
        </article>
    );
}
