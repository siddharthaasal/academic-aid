import ServiceCard from "./ServiceCard";
import { BookOpen, BookCheck, Code, BookText, FileUser, LucideLinkedin } from 'lucide-react';


const services = [
    {
        icon: <BookOpen />,
        title: "Research Papers",
        duration: "2–4 days",
        description:
            "Complete research papers tailored for coursework, conferences, or journals.",
        items: ["IEEE Format", "With Graphs & Diagrams", "Optimized Plagarism"],
        startingAt: "Rs.799",
        ctaLabel: "See Demo",
    },
    {
        icon: <BookCheck />,
        title: "Research Publication",
        duration: "1-4 days",
        description:
            "Submission of your Research and bringing guaranteed acceptance. ",
        items: ["SCOPUS Conferences", "Acceptance Mail"],
        startingAt: "Rs.999",
        ctaLabel: "See Demo",
    },
    {
        icon: <Code />,
        title: "Mini Projects",
        duration: "1 week",
        description:
            "End-to-end project",
        items: ["Working Code", "Deployment Link"],
        startingAt: "Rs.499",
        ctaLabel: "See Demo",
    },
    {
        icon: <BookText />,
        title: "Project Reports",
        duration: "2–3 days",
        description:
            "Well-researched technical reports written to brief your Project",
        items: ["Rubric Format", "With Garphs, Algorithms & Diagrams", "65+ Pages"],
        startingAt: "Rs.899",
        ctaLabel: "See Demo",
    },
    {
        icon: <FileUser />,
        title: "Resumes & LinkedIn",
        duration: "1-2 days",
        description:
            "Career-ready resumes and LinkedIn profiles for Off-Campus Placements",
        items: ["ATS-friendly resume", "LinkedIn rewrite", "Project highlights"],
        startingAt: "Rs.499",
        ctaLabel: "See Demo",
    },
    {
        icon: <LucideLinkedin />,
        title: "Courses & Certificates",
        duration: "1 day",
        description:
            "Completing Coursera/LinkedIn/whatever virtual courses and assignments.",
        items: ["Course Certificates", "Course Assignments", "Peer Graded Assignments"],
        startingAt: "Rs.250",
        ctaLabel: "See Demo",
    },
];

export default function ServicesGrid() {
    return (
        <section className="pt-12">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">Our Services</h2>
                    <p className="text-muted-foreground mt-3">
                        Fast, reliable, and affordable academic support — pick a service and hand us the deadline.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {services.map((svc) => (
                        <ServiceCard
                            icon={svc.icon}
                            key={svc.title}
                            title={svc.title}
                            duration={svc.duration}
                            description={svc.description}
                            items={svc.items}
                            startingAt={svc.startingAt}
                            ctaLabel={svc.ctaLabel}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
