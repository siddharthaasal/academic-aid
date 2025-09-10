import { Button } from '@/components/ui/button'
import { TextEffect } from '../components/ui/text-effect'
import { AnimatedGroup } from '../components/ui/animated-group'
import { HeroHeader } from '@/components/header'
import { Highlighter } from '@/components/magicui/highlighter'

const transitionVariants: any = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}


export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                loading="lazy"
                            />
                        </AnimatedGroup>

                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants as any}>
                                    <div
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-2 rounded-full border p-1 px-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm"> Affordable</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-zinc-500 dark:bg-zinc-700"></span>
                                        <span className="text-foreground text-sm">Fast</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-zinc-500 dark:bg-zinc-700"></span>
                                        <span className="text-foreground text-sm">Reliable</span>
                                    </div>
                                </AnimatedGroup>

                                {/* <TaglinePill /> */}

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.75}
                                    as="h1"
                                    className="mt-8 text-balance text-4xl lg:mt-16 xl:text-6xl">
                                    Too many Assignments? Let us do the Dirty Work.
                                </TextEffect>
                                {/* <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    From reports, research papers, and academic publishing to LinkedIn courses, resumes, and projects — "academic-aid" takes over the grind so you don’t burn out.
                                </TextEffect> */}
                                <p className="mx-auto mt-8 max-w-3xl text-balance text-lg">
                                    From reports, research papers, and academic publishing to LinkedIn courses, resumes, and projects — {" "}
                                    <Highlighter action="underline" color="#FF9800">
                                        "academic-aid"
                                    </Highlighter>{" "}
                                    takes over the grind so you don’t burn out.{" "}
                                </p>


                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <a href="https://wa.me/916283468927" target="_blank" rel="noreferrer">Hire Us</a>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <a href="#services">
                                            <span className="text-nowrap">Browse Services</span>
                                        </a>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}
