import React from "react";

export default function Statistics() {
    const stats = [
        { id: "mini-projects", value: 35, label: "Mini Projects", prefix: "+" },
        { id: "papers-delivered", value: 450, label: "Research Papers Delivered", prefix: "+" },
        { id: "papers-published", value: 75, label: "Research Papers Published", prefix: "+" },
        { id: "courses", value: 250, label: "LinkedIn / Coursera Courses", prefix: "+" },
    ];

    const [display, setDisplay] = React.useState(() => stats.map(() => 0));
    const containerRef = React.useRef(null);
    const startedRef = React.useRef(false);

    React.useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !startedRef.current) {
                        startedRef.current = true;
                        runCountUp();
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        obs.observe(el);
        return () => obs.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function runCountUp() {
        const duration = 1200;
        const start = performance.now();

        function frame(now: any) {
            const elapsed = now - start;
            const t = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - t, 3);

            const newVals = stats.map((s) =>
                Math.round(s.value * eased)
            );
            setDisplay(newVals);

            if (t < 1) requestAnimationFrame(frame);
            else setDisplay(stats.map((s) => s.value));
        }

        requestAnimationFrame(frame);
    }

    return (
        <section ref={containerRef} className="py-6">
            <div className="mx-auto max-w-5xl px-6">
                {/* Add dividers: vertical on md+, horizontal on mobile */}
                <div className="grid gap-8 text-center divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <div
                            key={stat.id}
                            role="listitem"
                            className="flex flex-col items-center justify-center space-y-2 px-4 py-6"
                        >
                            <div
                                className="text-4xl font-extrabold leading-tight md:text-5xl"
                                aria-hidden="true"
                            >
                                <span>{stat.prefix}</span>
                                <span>{display[idx].toLocaleString()}</span>
                            </div>

                            <p className="text-sm text-muted-foreground max-w-[10rem]">
                                {stat.label}
                            </p>

                            <span className="sr-only" aria-live="polite">
                                {stat.prefix}
                                {display[idx]} {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
