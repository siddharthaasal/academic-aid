import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";




const faqs = [
    {
        id: "faq-1",
        question: "What is the scope of Conferences in which papers are published?",
        answer: "The conferences are either SCOPUS-indexed or IEEE-approved, ensuring global recognition of your work.",
    },
    {
        id: "faq-2",
        question: "What is the format of the paper?",
        answer: "By default, the papers are written in IEEE format. However, customization is available based on journal or conference requirements.",
    },
    {
        id: "faq-3",
        question: "Are there any discounts?",
        answer: "Yes, prices are negotiable depending on deadlines, project complexity, and bulk orders.",
    },
    {
        id: "faq-4",
        question: "What if I need revisions?",
        answer: "Revisions are free within the agreed scope until the final deliverable meets your expectations.",
    },
    {
        id: "faq-5",
        question: "How long does it take to deliver a research paper?",
        answer: "Typically, research papers are completed in 3–4 days, but urgent delivery options are available upon request.",
    },
    {
        id: "faq-6",
        question: "What about Plagiarism?",
        answer: "Every research paper and project report is optimized for plagiarism.",
    },
    {
        id: "faq-7",
        question: "What is included in a Project Report?",
        answer: "Project reports include a detailed write-up with algorithms, graphs, and diagrams formatted as per rubric standards, usually spanning 65+ pages.",
    },
    {
        id: "faq-8",
        question: "Will my Mini Project be deployed on the internet?",
        answer: "Yes, your project will be deployed and accessible through a live public URL along with the working source code.",
    },
];



/**
 * Mobile-optimized FAQ component
 * - Touch-friendly hit targets
 * - Responsive typography & spacing
 * - Full-width accordion on small screens
 */
export default function Faq({
    heading = "Frequently asked questions",
}) {
    return (
        <section className="w-full flex justify-center px-4 sm:px-6 ">
            <div className="w-full max-w-3xl md:max-w-6xl">
                <h1 className="mb-3 text-2xl font-semibold leading-tight sm:mb-6 sm:text-3xl md:text-4xl">
                    {heading}
                </h1>

                {/* Card-like container for visual separation on mobile */}
                <div className=" p-2">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((item, index) => (
                            <AccordionItem
                                key={item.id ?? index}
                                value={`item-${index}`}
                                className="w-full border-b last:border-b-0"
                            >
                                {/*
                  Larger trigger for touch devices. Use flex so you can add an icon
                  or chevron aligned to the right if desired.
                */}
                                <AccordionTrigger
                                    className="flex w-full items-center justify-between gap-3 py-4 px-3 text-left font-medium text-base leading-6
                    touch-manipulation active:scale-[0.995] hover:no-underline sm:text-lg sm:py-5"
                                >
                                    <span className="truncate">{item.question}</span>
                                </AccordionTrigger>

                                <AccordionContent className="px-3 pb-4 pt-0 text-sm leading-6 text-muted-foreground sm:text-base sm:pb-6">
                                    {/* Allow string or React node as answer */}
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
