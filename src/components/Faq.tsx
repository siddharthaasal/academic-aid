import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

const faqs = [
    {
        question: "Which conferences do you publish in?",
        answer: "Scopus-indexed or IEEE-approved conferences, so your work is recognised globally.",
    },
    {
        question: "What format are papers written in?",
        answer: "IEEE format by default. We adapt to any journal or conference template on request.",
    },
    {
        question: "How long does a research paper take?",
        answer: "Typically 2 to 4 days. Urgent delivery is available, just tell us the deadline when you brief us.",
    },
    {
        question: "What about plagiarism?",
        answer: "Every paper and report is checked for similarity before delivery and kept at a low score.",
    },
    {
        question: "What if I need revisions?",
        answer: "Revisions within the agreed scope are free until the deliverable meets your expectations.",
    },
    {
        question: "Are there any discounts?",
        answer: "Yes. Prices are negotiable depending on deadline, complexity and bulk orders.",
    },
    {
        question: "What is included in a project report?",
        answer: "A detailed write-up with algorithms, graphs and diagrams, formatted to your rubric, usually 65+ pages.",
    },
    {
        question: "Will my mini project be deployed?",
        answer: "Yes. You get a live public URL along with the full working source code.",
    },
];

export default function Faq() {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                    <SectionHeading
                        align="left"
                        eyebrow="FAQ"
                        title="Questions we get every week."
                        description="Anything else? Message us on WhatsApp and we'll answer during working hours."
                        className="lg:sticky lg:top-28 lg:self-start"
                    />

                    <Accordion type="single" collapsible className="border-border/80 border-t">
                        {faqs.map((item, index) => (
                            <AccordionItem key={item.question} value={`item-${index}`} className="border-border/80 border-b">
                                <AccordionTrigger className="py-5 text-left text-base font-medium leading-snug hover:no-underline sm:text-lg [&>svg]:text-brand-strong">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
