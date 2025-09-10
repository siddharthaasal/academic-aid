import React from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Simple classnames helper (lightweight substitute for `cn`/`classnames`)
 * Accepts strings or falsy values and joins truthy ones with spaces.
 */
const cn = (...args: (string | boolean)[]) => args.filter(Boolean).join(' ')

export const Logo = ({ className = '', size = 36 }) => (
    <svg
        className={className}
        width={size * 4} // scale width so text fits
        height={size}
        viewBox="0 0 240 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Academic Aid logo"
    >
        {/* Graduation cap */}
        <path
            d="M24 8L4 16l20 8 20-8-20-8Zm0 24v8M12 20v8c0 4 12 8 12 8s12-4 12-8v-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* Text: Academic Aid */}
        <text
            x="56"
            y="28"
            fontFamily="sans-serif"
            fontSize="20"
            fontWeight="600"
            fill="currentColor"
        >
            academic-aid
        </text>
    </svg>
)


const menuItems = [
    { id: 'services', name: 'Services' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'faq', name: 'FAQ' },
    { id: 'contact', name: 'Contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // scroll to element with header offset
    const scrollToId = (id: any) => {
        const el = document.getElementById(id)
        if (!el) return
        // header offset - compute dynamically or hardcode
        const nav = document.querySelector('nav')
        const headerOffset = nav ? nav.offsetHeight : 50
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset  // extra gap
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }

    const handleNavClick = (e: any, id: any) => {
        e.preventDefault() // prevent default anchor jump
        setMenuState(false) // close mobile menu
        scrollToId(id)
    }

    return (
        <header>
            <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2">
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
                    )}
                >
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="m-auto size-6" />
                                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => handleNavClick(e, item.id)}
                                            className="text-foreground hover:text-accent-foreground block duration-150"
                                        >
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn(
                            'bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none',
                            menuState && 'in-data-[state=active]:block'
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={(e) => handleNavClick(e, item.id)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild size="sm" variant="outline">
                                    <a href="https://wa.me/916283468927" target="_blank" rel="noreferrer">WhatsApp</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

