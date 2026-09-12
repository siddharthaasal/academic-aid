import { ArrowDown, Check, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '@/components/header'
import { Highlighter } from '@/components/magicui/highlighter'
import HeroVisual from '@/components/HeroVisual'
import Statistics from '@/components/Statistics'
import { site } from '@/lib/site'

const variants = {
    container: {
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    },
    item: {
        hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { type: 'spring' as const, bounce: 0.25, duration: 1.2 },
        },
    },
}

const proofs = ['Free revisions', 'Plagiarism-checked', 'IEEE & Scopus ready']

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <section className="relative overflow-hidden">
                {/* backdrop: dotted paper grid and one warm glow */}
                <div aria-hidden className="paper-grid pointer-events-none absolute inset-0 -z-10" />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,oklch(0.9_0.09_75/.55),transparent)] blur-2xl"
                />

                <div className="mx-auto max-w-6xl px-6 pt-32 md:pt-40">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                        <AnimatedGroup variants={variants} className="text-center lg:text-left">
                            <div className="bg-card inline-flex items-center gap-3 rounded-full border px-4 py-1.5 text-sm shadow-[0_6px_18px_-10px_rgba(31,26,20,0.3)]">
                                <span className="bg-brand size-1.5 rounded-full" />
                                <span className="font-medium">Affordable</span>
                                <span className="bg-border h-3.5 w-px" />
                                <span className="font-medium">Fast</span>
                                <span className="bg-border h-3.5 w-px" />
                                <span className="font-medium">Reliable</span>
                            </div>

                            <h1 className="font-display mt-7 text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.4rem]">
                                Too many assignments?
                                <br />
                                Let us do the{' '}
                                <em className="font-normal italic">
                                    <Highlighter action="underline" color="#F2A33A" strokeWidth={2.5} padding={2} iterations={2} animationDuration={900}>
                                        dirty work.
                                    </Highlighter>
                                </em>
                            </h1>

                            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg text-pretty lg:mx-0">
                                Research papers, publications, thesis and book chapters, mini projects, reports, resumes and course
                                certificates. Brief us on WhatsApp, get a quote, and receive your draft in days.
                            </p>

                            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                                <Button asChild size="lg" className="h-12 rounded-xl px-6 text-base">
                                    <a href={site.whatsapp('Hi! I need help with an assignment.')} target="_blank" rel="noreferrer">
                                        <MessageCircle />
                                        Hire us on WhatsApp
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="ghost" className="h-12 rounded-xl px-5 text-base">
                                    <a href="#services">
                                        Browse services
                                        <ArrowDown />
                                    </a>
                                </Button>
                            </div>

                            <ul className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm lg:justify-start">
                                {proofs.map((p) => (
                                    <li key={p} className="inline-flex items-center gap-1.5">
                                        <Check className="text-brand-strong size-4" strokeWidth={2.5} />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedGroup>

                        <div className="px-2 sm:px-6 lg:px-0">
                            <HeroVisual />
                        </div>
                    </div>

                    <div className="border-border/80 mt-16 border-t pt-10 md:mt-20">
                        <Statistics />
                    </div>
                </div>
            </section>
        </>
    )
}
