import { motion } from "motion/react";
import { Check, Clock, ShieldCheck } from "lucide-react";

/**
 * A CSS-only stack of the things we actually deliver: an IEEE two-column
 * paper in front, an acceptance email and a course certificate behind it.
 * No images, so it loads instantly and matches the palette exactly.
 */

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24, rotate: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring" as const, bounce: 0.25, duration: 1.1, delay },
});

function Line({ w = "100%", h = 3, className = "" }: { w?: string; h?: number; className?: string }) {
    return (
        <span
            className={`bg-foreground/[0.14] block rounded-full ${className}`}
            style={{ width: w, height: h }}
        />
    );
}

function Column() {
    const widths = ["100%", "96%", "100%", "88%", "100%", "93%", "100%", "72%", "100%", "97%", "90%", "100%", "64%"];
    return (
        <div className="space-y-[5px]">
            {widths.map((w, i) => (
                <Line key={i} w={w} h={2.5} />
            ))}
        </div>
    );
}

export default function HeroVisual() {
    return (
        <div className="relative mx-auto aspect-[5/4.9] w-full max-w-[540px] select-none" aria-hidden>
            {/* acceptance email, behind, top-left */}
            <motion.div
                {...rise(0.35)}
                className="bg-card border-border absolute left-0 top-0 z-10 w-[58%] -rotate-[5deg] rounded-xl border p-4 shadow-[0_18px_40px_-20px_rgba(31,26,20,0.35)]"
            >
                <div className="flex items-center gap-2">
                    <span className="bg-brand-soft text-brand-strong grid size-7 place-items-center rounded-full text-[11px] font-bold">IC</span>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-semibold">Conference Chair</p>
                        <p className="text-muted-foreground truncate text-[10px]">to me</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                        <Check className="size-3" /> Accepted
                    </span>
                </div>
                <p className="mt-3 text-[12px] font-semibold leading-snug">Decision on Paper #1187 — Accepted for presentation</p>
                <div className="mt-2.5 space-y-[5px]">
                    <Line w="100%" />
                    <Line w="92%" />
                    <Line w="60%" />
                </div>
            </motion.div>

            {/* certificate, behind, top-right */}
            <motion.div
                {...rise(0.5)}
                className="border-border absolute -right-2 top-[9%] z-0 w-[44%] rotate-[7deg] rounded-xl border bg-[oklch(0.99_0.01_85)] p-4 shadow-[0_18px_40px_-22px_rgba(31,26,20,0.3)]"
            >
                <div className="border-brand/50 rounded-lg border-2 border-double p-3 text-center">
                    <p className="text-brand-strong text-[9px] font-semibold uppercase tracking-[0.2em]">Certificate</p>
                    <p className="font-display mt-1 text-[15px] leading-tight">of Completion</p>
                    <Line w="70%" h={2} className="mx-auto mt-3" />
                    <Line w="50%" h={2} className="mx-auto mt-1.5" />
                    <div className="bg-brand mx-auto mt-3 size-6 rounded-full ring-4 ring-brand/25" />
                </div>
            </motion.div>

            {/* the paper, in front */}
            <motion.div
                {...rise(0.2)}
                className="bg-card border-border absolute bottom-0 left-[13%] z-20 w-[64%] rotate-[1.5deg] rounded-xl border px-5 pb-6 pt-5 shadow-[0_30px_60px_-24px_rgba(31,26,20,0.45)]"
            >
                <p className="font-display text-center text-[15px] leading-tight tracking-tight">
                    A Hybrid Deep Learning Approach for Early Detection of Crop Disease from Leaf Imagery
                </p>
                <p className="text-muted-foreground mt-1.5 text-center text-[9px]">
                    Department of Computer Science &amp; Engineering
                </p>
                <div className="mt-3.5 grid grid-cols-2 gap-4">
                    <div>
                        <p className="mb-1.5 text-[9px] font-bold italic">Abstract—</p>
                        <Column />
                        <p className="mb-1.5 mt-3 text-[9px] font-bold">I. INTRODUCTION</p>
                        <Column />
                    </div>
                    <div>
                        <div className="border-border bg-muted/60 mb-2 rounded-md border p-2">
                            <div className="flex h-12 items-end gap-1">
                                {[40, 65, 50, 85, 70, 95].map((h, i) => (
                                    <span key={i} className={`flex-1 rounded-sm ${i === 5 ? "bg-brand" : "bg-foreground/20"}`} style={{ height: `${h}%` }} />
                                ))}
                            </div>
                            <p className="text-muted-foreground mt-1.5 text-center text-[8px]">Fig. 1. Accuracy across model variants</p>
                        </div>
                        <Column />
                    </div>
                </div>
            </motion.div>

            {/* floating proof chips */}
            <motion.div
                {...rise(0.75)}
                className="bg-foreground text-background absolute bottom-[14%] left-0 z-30 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-medium shadow-lg"
            >
                <Clock className="text-brand size-3.5" />
                Delivered in 3 days
            </motion.div>
            <motion.div
                {...rise(0.9)}
                className="bg-card border-border absolute bottom-[34%] right-0 z-30 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-medium shadow-md"
            >
                <ShieldCheck className="size-3.5 text-emerald-600" />
                Similarity 6%
            </motion.div>
        </div>
    );
}
