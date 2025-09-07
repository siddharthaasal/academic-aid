export default function Statistics() {
    return (
        <section className="py-12 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                {/* <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">academic-aid in numbers</h2>
                    <p>We’re a young, fast-growing team — trusted by students for reliable, on-time academic support at student-friendly prices.</p>
                </div> */}

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-4 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+10</div>
                        <p>Mini Projects</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+100</div>
                        <p>Research Papers Delivered</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+50</div>
                        <p>ResearchPapers Published</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+150</div>
                        <p>LinkedIn/ Coursera Courses</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
