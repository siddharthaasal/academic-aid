import React from "react";

const stats = [
    { id: "papers-delivered", value: 1450, label: "Research papers delivered" },
    { id: "papers-published", value: 875, label: "Papers published" },
    { id: "courses", value: 900, label: "Courses completed" },
    { id: "mini-projects", value: 175, label: "Mini projects shipped" },
];

/** Trust strip. Counts up once when it scrolls into view. */
export default function Statistics() {
    const [display, setDisplay] = React.useState(() => stats.map(() => 0));
    const ref = React.useRef<HTMLDivElement>(null);
    const started = React.useRef(false);

    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting) && !started.current) {
                    started.current = true;
                    runCountUp();
                    obs.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        // Fallback: if the observer never fires (reduced motion, odd viewports), show final values.
        const fallback = window.setTimeout(() => {
            if (!started.current) {
                started.current = true;
                setDisplay(stats.map((s) => s.value));
                obs.disconnect();
            }
        }, 2500);
        return () => {
            obs.disconnect();
            window.clearTimeout(fallback);
        };
    }, []);

    function runCountUp() {
        const duration = 1400;
        const start = performance.now();
        const frame = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(stats.map((s) => Math.round(s.value * eased)));
            if (t < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    }

    return (
        <div ref={ref} className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {stats.map((stat, i) => (
                <div
                    key={stat.id}
                    className="border-border/80 flex flex-col items-center px-4 text-center md:items-start md:border-l md:text-left md:first:border-l-0 md:first:pl-0"
                >
                    <div className="font-display text-4xl leading-none tracking-tight tabular-nums md:text-5xl" aria-hidden>
                        {display[i].toLocaleString("en-IN")}
                        <span className="text-brand-strong">+</span>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
                    <span className="sr-only">
                        {stat.value.toLocaleString("en-IN")}+ {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
