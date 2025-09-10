interface FooterProps {
    companyName?: string
    termsHref?: string
}

export default function Footer({
    companyName = 'academic-aid',
    termsHref = '/terms',
}: FooterProps) {
    return (
        <footer className="border-t bg-background py-4 text-sm">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                    <div className="order-2 sm:order-1">
                        <span className="text-muted-foreground">© {new Date().getFullYear()} {companyName}. All rights reserved.</span>
                    </div>

                    <div className="order-1 sm:order-2">
                        <a
                            href={termsHref}
                            className="text-muted-foreground hover:text-foreground rounded px-2 py-1"
                            aria-label="Terms and Conditions"
                        >
                            Terms &amp; Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
