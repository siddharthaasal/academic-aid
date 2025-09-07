import React from "react";
import { Check } from "lucide-react";

export interface ServiceCardProps {
    icon?: React.ReactNode;
    title?: string;
    duration?: string;
    description?: string;
    items?: string[];
    startingAt?: string;
    ctaLabel?: string;
    onCTA?: (() => void) | undefined;
    className?: string;
}

/**
 * ServiceCard
 * - Designed to keep consistent gaps when content length varies.
 * - Use inside a grid with `items-stretch` and cards will align nicely.
 */
export default function ServiceCard({
    icon,
    title = "Service Title",
    duration = "1–2 weeks",
    description = "Short description of the service.",
    items = [],
    startingAt = "$100",
    ctaLabel = "Get Started",
    onCTA,
    className,
}: ServiceCardProps) {

    return (
        <article
            className={
                `h-full flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-transform duration-200 transform-gpu hover:-translate-y-1 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-900 ` +
                (className ?? "")
            }
            role="article"
            aria-label={title}
        >
            {/* HEADER */}
            {/* <header className="mb-2 flex items-center gap-4">
                <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-slate-100 dark:bg-slate-800"
                    aria-hidden={!icon}
                >
                    {icon ?? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-6 w-6 text-slate-700 dark:text-slate-200"
                            aria-hidden
                        >
                            <path
                                d="M12 2.5L3 7v5.9c0 4.9 3.3 9.4 9 9.6 5.7-.2 9-4.7 9-9.6V7L12 2.5z"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-white">
                            {title}
                        </h3>


                        <span className="rounded-md bg-slate-50 px-3 py-1 text-sm font-normal text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {duration}
                        </span>

                    </div>
                </div>
            </header> */}
            <header className="mb-2 flex items-center gap-3">
                <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-slate-100 dark:bg-slate-800"

                >
                    {icon ? icon : (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-6 w-6 text-slate-700 dark:text-slate-200"
                            aria-hidden
                        >
                            <path
                                d="M12 2.5L3 7v5.9c0 4.9 3.3 9.4 9 9.6 5.7-.2 9-4.7 9-9.6V7L12 2.5z"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-between">
                    <h3 className="flex-1 text-lg font-semibold leading-tight text-slate-900 dark:text-white">
                        {title}
                    </h3>

                    <span className="ml-3 flex-shrink-0 whitespace-nowrap rounded-md bg-slate-50 px-3 py-1 text-sm font-normal text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {duration}
                    </span>
                </div>
            </header>

            {/* MIDDLE: description + checklist — flex-1 keeps spacing consistent */}
            <div className="flex flex-1 flex-col justify-between gap-4">
                {/* Description: reserve height so short/long text doesn't break layout */}
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    {description}
                </p>

                {/* Checklist / items: allow flexible growth but keep visual rhythm */}
                <div className="space-y-3">
                    {items && items.length > 0 ? (
                        items.map((it, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className=" flex h-4 w-4 items-center justify-center rounded-lg bg-green-50">
                                    <Check className="h-3 w-3 text-green-600" />
                                </span>
                                <div className="text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    {it}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                            Custom scope — contact us for a tailored quote
                        </div>
                    )}
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                        Starting at {startingAt}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                        Negotiable
                    </div>
                </div>

                {/* Minimal CTA as a link */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onCTA?.();
                    }}
                    aria-label={`Start ${title}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:underline dark:text-accent-400"
                >
                    <span>{ctaLabel}</span>
                    {/* <ArrowRight className="h-4 w-4" /> */}
                </a>
            </div>

        </article>
    );
}
