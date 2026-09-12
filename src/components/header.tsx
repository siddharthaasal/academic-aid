import React from 'react'
import { GraduationCap, Menu, MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { nav, site } from '@/lib/site'

export const Logo = ({ className }: { className?: string }) => (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="academic-aid">
        <span className="bg-foreground text-background grid size-8 place-items-center rounded-lg">
            <GraduationCap className="size-[18px]" strokeWidth={2.2} />
        </span>
        <span className="font-display text-[1.45rem] leading-none tracking-tight">
            academic<span className="text-brand-strong">-</span>aid
        </span>
    </span>
)

export const HeroHeader = () => {
    const [open, setOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToId = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        const offset = 88
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }

    const handleNav = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        setOpen(false)
        scrollToId(id)
    }

    return (
        <header>
            <nav className="fixed inset-x-0 top-0 z-30 px-3 pt-3">
                <div
                    className={cn(
                        'mx-auto max-w-6xl rounded-2xl border border-transparent px-4 transition-all duration-300 sm:px-6',
                        (scrolled || open) &&
                        'bg-background/80 border-border max-w-5xl shadow-[0_8px_30px_-12px_rgba(31,26,20,0.18)] backdrop-blur-xl'
                    )}
                >
                    <div className="flex h-14 items-center justify-between gap-6 lg:h-16">
                        <a href="/" aria-label="home">
                            <Logo />
                        </a>

                        <ul className="hidden items-center gap-1 lg:flex">
                            {nav.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => handleNav(e, item.id)}
                                        className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-2">
                            <Button asChild size="sm" className="hidden rounded-lg sm:inline-flex">
                                <a href={site.whatsapp('Hi! I need help with an assignment.')} target="_blank" rel="noreferrer">
                                    <MessageCircle />
                                    WhatsApp us
                                </a>
                            </Button>
                            <button
                                onClick={() => setOpen((v) => !v)}
                                aria-label={open ? 'Close menu' : 'Open menu'}
                                aria-expanded={open}
                                className="hover:bg-accent -mr-2 grid size-10 place-items-center rounded-lg lg:hidden"
                            >
                                {open ? <X className="size-5" /> : <Menu className="size-5" />}
                            </button>
                        </div>
                    </div>

                    {open && (
                        <div className="border-border/70 border-t pb-5 pt-3 lg:hidden">
                            <ul className="space-y-1">
                                {nav.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => handleNav(e, item.id)}
                                            className="hover:bg-accent block rounded-lg px-3 py-2.5 text-base font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <Button asChild className="mt-3 w-full rounded-lg sm:hidden">
                                <a href={site.whatsapp('Hi! I need help with an assignment.')} target="_blank" rel="noreferrer">
                                    <MessageCircle />
                                    WhatsApp us
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
