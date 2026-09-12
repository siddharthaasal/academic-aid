import { Logo } from "@/components/header";
import { nav, site } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="border-border/80 border-t py-10">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xs">
                        <Logo />
                        <p className="text-muted-foreground mt-3 text-sm text-pretty">
                            Academic writing, publishing and project support for students and early-career professionals.
                        </p>
                    </div>
                    <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3">
                        {nav.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="text-muted-foreground hover:text-foreground">
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
                        <a href="/terms" className="text-muted-foreground hover:text-foreground">Terms &amp; Conditions</a>
                    </nav>
                </div>
                <div className="text-muted-foreground border-border/80 mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
                    <span>Replies {site.hours.toLowerCase()}</span>
                </div>
            </div>
        </footer>
    );
}
