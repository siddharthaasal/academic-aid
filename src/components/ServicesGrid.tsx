import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import { Book, BookOpen, BookCheck, Code, BookText, FileUser, Award, GraduationCap } from "lucide-react";

const tracks = [
    {
        id: "research",
        index: "01",
        title: "Research & publishing",
        blurb: "From a blank page to an acceptance mail. Written to your rubric or the venue's template.",
        services: [
            {
                icon: <BookOpen />,
                title: "Research Papers",
                duration: "2–4 days",
                description: "Complete papers for coursework, conferences or journals, in the venue's template.",
                items: ["IEEE format by default", "Graphs, tables & diagrams", "Low similarity score"],
                price: 1499,
                popular: true,
            },
            {
                icon: <BookCheck />,
                title: "Research Publication",
                duration: "1–4 days",
                description: "We submit your paper to Scopus-indexed or IEEE conferences and manage it through to the decision.",
                items: ["Scopus-indexed conferences", "Submission handled end to end", "Acceptance mail forwarded to you"],
                price: 999,
            },
            {
                icon: <Book />,
                title: "Book Chapter Writing",
                duration: "2–4 days",
                description: "Chapter drafting with figures, formatting and citations that match the publisher's guidelines.",
                items: ["Complete draft", "Low plagiarism & AI score", "Proper citations"],
                price: 1199,
            },
            {
                icon: <GraduationCap />,
                title: "Thesis Writing",
                duration: "3–7 days",
                description: "A full thesis draft with your university's formatting, citations and originality checks.",
                items: ["Full thesis draft", "Low plagiarism & AI score", "Proper citations"],
                price: 14999,
            },
        ],
    },
    {
        id: "projects",
        index: "02",
        title: "Projects & reports",
        blurb: "Working code you can demo, and a report that fits the rubric.",
        services: [
            {
                icon: <Code />,
                title: "Mini Projects",
                duration: "1 week",
                description: "An end-to-end working project with source code and a live deployment link.",
                items: ["Working code", "Deployment link", "Walkthrough of how it works"],
                price: 499,
            },
            {
                icon: <BookText />,
                title: "Project Reports",
                duration: "2–3 days",
                description: "Well-researched technical reports that explain your project the way examiners expect.",
                items: ["Rubric format", "Graphs, algorithms & diagrams", "65+ pages"],
                price: 899,
            },
        ],
    },
    {
        id: "career",
        index: "03",
        title: "Career & courses",
        blurb: "For placements and the certificates that go with them.",
        services: [
            {
                icon: <FileUser />,
                title: "Resumes & LinkedIn",
                duration: "1–2 days",
                description: "Career-ready resumes and LinkedIn profiles built for off-campus placements.",
                items: ["ATS-friendly resume", "LinkedIn rewrite", "Project highlights"],
                price: 499,
            },
            {
                icon: <Award />,
                title: "Courses & Certificates",
                duration: "1 day",
                description: "We complete Coursera, LinkedIn Learning and similar online courses, including graded assignments.",
                items: ["Course certificate", "Course assignments", "Peer-graded assignments"],
                price: 250,
            },
        ],
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    eyebrow="Services"
                    title="Pick a service, hand us the deadline."
                    description="Starting prices below. Every price is negotiable depending on scope, deadline and volume."
                />

                <div className="mt-16 space-y-16">
                    {tracks.map((track) => (
                        <div key={track.id} className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
                            <div className="lg:sticky lg:top-28 lg:self-start">
                                <p className="font-display text-brand-strong text-2xl italic">{track.index}</p>
                                <h3 className="font-display mt-2 text-3xl leading-tight tracking-tight">{track.title}</h3>
                                <p className="text-muted-foreground mt-3 text-pretty">{track.blurb}</p>
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                                {track.services.map((svc) => (
                                    <ServiceCard key={svc.title} {...svc} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
