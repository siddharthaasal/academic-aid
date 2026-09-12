import Marquee from "react-fast-marquee"

const items = [
    "IEEE format",
    "Scopus-indexed conferences",
    "Springer book chapters",
    "Thesis & dissertations",
    "Coursera & LinkedIn Learning",
    "Plagiarism-checked",
    "Free revisions",
    "Deployed mini projects",
    "65+ page project reports",
    "ATS-friendly resumes",
]

/** Thin trust strip under the hero: what we format for, what we check. */
export default function ServicesMarquee() {
    return (
        <section aria-label="What we cover" className="border-border/80 border-y py-5">
            <div className="mx-auto max-w-6xl px-6">
                <Marquee pauseOnHover gradient gradientColor="var(--color-background)" gradientWidth={80} speed={40}>
                    {items.map((label) => (
                        <span key={label} className="text-muted-foreground mx-5 inline-flex items-center gap-3 text-sm font-medium">
                            <span className="bg-brand size-1.5 rounded-full" aria-hidden />
                            {label}
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
