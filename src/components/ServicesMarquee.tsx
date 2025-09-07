import Marquee from "react-fast-marquee"
import { GraduationCap, FileText, BookOpen, Briefcase, ClipboardList } from "lucide-react"

const services = [
    { label: "Research Papers", icon: <FileText className="size-4 mr-2" /> },
    { label: "Journal Publications", icon: <BookOpen className="size-4 mr-2" /> },
    { label: "Book Chapters", icon: <BookOpen className="size-4 mr-2" /> },
    { label: "Capstone Projects", icon: <Briefcase className="size-4 mr-2" /> },
    { label: "Mini Projects", icon: <ClipboardList className="size-4 mr-2" /> },
    { label: "Reports", icon: <FileText className="size-4 mr-2" /> },
    { label: "Resumes & LinkedIn", icon: <GraduationCap className="size-4 mr-2" /> },
    { label: "Courses & Certificates", icon: <BookOpen className="size-4 mr-2" /> },
]

export default function ServicesMarquee() {
    return (
        <section className="bg-background">
            <div className="mx-auto max-w-6xl px-6">
                <Marquee
                    pauseOnHover
                    gradient
                    gradientColor="var(--color-background)"
                    speed={50}
                >
                    {services.map((service, idx) => (
                        <span
                            key={idx}
                            className="mx-4 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm"
                        >
                            {service.icon} {service.label}
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
