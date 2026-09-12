import SectionHeading from "./SectionHeading";

const steps = [
    {
        title: "Brief us",
        body: "Message us on WhatsApp with your topic, format, rubric and due date. Attach anything your professor shared.",
    },
    {
        title: "Get a quote",
        body: "We reply during working hours with a price and a timeline. Prices are negotiable for tight deadlines or bulk work.",
    },
    {
        title: "Review the draft",
        body: "We share the draft, you tell us what to change. Revisions within the agreed scope are free.",
    },
    {
        title: "Receive and submit",
        body: "Final files with a similarity check, plus submission support if you're publishing.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    eyebrow="How it works"
                    title="Four messages from brief to delivery."
                    description="No forms, no accounts. It all happens in one WhatsApp thread."
                />

                <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
                    {/* connecting rule on desktop */}
                    <div aria-hidden className="bg-border absolute left-0 right-0 top-6 hidden h-px md:block" />
                    {steps.map((step, i) => (
                        <li key={step.title} className="relative">
                            <div className="bg-background border-border relative z-10 grid size-12 place-items-center rounded-full border">
                                <span className="font-display text-brand-strong text-xl italic leading-none">{i + 1}</span>
                            </div>
                            <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-pretty">{step.body}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
