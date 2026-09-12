import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote:
            "Paper ko mera professor ne accept kar liya — IEEE formatting exactly jaise bola tha. Time par mila aur clarity top-class. Highly recommended.",
        name: "Aman Verma",
        service: "Research Papers",
        featured: true,
    },
    {
        quote:
            "Published my chapter with their help. Submission process was confusing but the team handled references and the submission mail.",
        name: "Priya Singh",
        service: "Research Publication",
        wide: true,
    },
    {
        quote: "Last din me project bana ke de diya!!",
        name: "Arvind",
        service: "Mini Project",
    },
    {
        quote: "Report format was good, graphs and algorithms were included. Fast service as well.",
        name: "Nisha Patel",
        service: "Project Report",
    },
];

function initials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

export default function Testimonials() {
    return (
        <section className="bg-muted/60 border-border/80 border-y py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="Trusted by students who were out of time."
                    description="From last-minute assignments to research publications, academic-aid has helped 400+ students submit on time."
                />

                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    {testimonials.map((t) => (
                        <figure
                            key={t.name}
                            className={cn(
                                "bg-card flex flex-col justify-between gap-8 rounded-2xl border p-6",
                                t.featured && "sm:col-span-2 lg:row-span-2 lg:p-9",
                                t.wide && "sm:col-span-2"
                            )}
                        >
                            <blockquote>
                                <span aria-hidden className="font-display text-brand block text-5xl leading-none">“</span>
                                <p
                                    className={cn(
                                        "font-display -mt-3 text-pretty leading-snug tracking-tight",
                                        t.featured ? "text-2xl md:text-[2rem] md:leading-[1.2]" : t.wide ? "text-xl" : "text-lg"
                                    )}
                                >
                                    {t.quote}
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center gap-3">
                                <span className="bg-brand-soft text-brand-strong grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold">
                                    {initials(t.name)}
                                </span>
                                <div>
                                    <cite className="block text-sm font-semibold not-italic">{t.name}</cite>
                                    <span className="text-muted-foreground block text-sm">{t.service}</span>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
