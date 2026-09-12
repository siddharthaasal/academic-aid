import { site } from "@/lib/site";

/** Floating WhatsApp button, bottom-right. Uses the number from lib/site. */
export default function FloatingWhatsApp({
    message = "Hi! I would like to know about your services.",
    size = 56,
}: {
    message?: string;
    size?: number;
}) {
    return (
        <a
            href={site.whatsapp(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            style={{ marginBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
            className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
        >
            <span className="bg-foreground text-background pointer-events-none hidden rounded-full px-3 py-1.5 text-xs font-medium opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 md:block">
                Chat with us
            </span>
            <span
                className="relative grid place-items-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] transition-transform group-hover:scale-105 group-active:scale-95"
                style={{ height: size, width: size }}
            >
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.4s]" aria-hidden />
                <svg viewBox="0 0 24 24" className="relative size-7 fill-white" aria-hidden>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 1.67c4.54 0 8.23 3.7 8.23 8.24 0 4.54-3.69 8.23-8.23 8.23-1.5 0-2.97-.41-4.25-1.18l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.2 8.3-8.2M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17 0-.32-.05-.45-.06-.12-.54-1.34-.76-1.83-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01" />
                </svg>
            </span>
        </a>
    );
}
