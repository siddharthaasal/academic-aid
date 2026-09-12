import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const details = [
    { icon: <MessageCircle />, label: "WhatsApp", value: site.phoneDisplay, href: site.whatsapp() },
    { icon: <Phone />, label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
    { icon: <Mail />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <Clock />, label: "Hours", value: site.hours },
];

const Contact = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="bg-foreground text-background relative overflow-hidden rounded-3xl px-6 py-12 sm:px-8 md:px-14 md:py-16">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,oklch(0.76_0.165_68/.45),transparent)] blur-2xl"
                    />
                    <div className="relative grid min-w-0 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                        <div>
                            <p className="eyebrow text-brand">Contact</p>
                            <h2 className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
                                Deadline this week? <em className="italic">Let's talk.</em>
                            </h2>
                            <p className="text-background/70 mt-5 max-w-lg text-lg text-pretty">
                                Send your topic, format and due date. We reply during working hours with a price and a timeline.
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-brand text-foreground hover:bg-brand/90 mt-8 h-12 rounded-xl px-6 text-base"
                            >
                                <a href={site.whatsapp("Hi! I have a deadline this week and need help.")} target="_blank" rel="noreferrer">
                                    <MessageCircle />
                                    Message on WhatsApp
                                </a>
                            </Button>
                        </div>

                        <dl className="divide-background/10 min-w-0 divide-y self-center">
                            {details.map((d) => (
                                <div key={d.label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                                    <span className="bg-background/10 text-brand grid size-10 shrink-0 place-items-center rounded-lg [&_svg]:size-[18px]">
                                        {d.icon}
                                    </span>
                                    <div className="min-w-0">
                                        <dt className="text-background/60 text-xs font-medium uppercase tracking-wider">{d.label}</dt>
                                        <dd className="break-words text-base font-medium [overflow-wrap:anywhere]">
                                            {d.href ? (
                                                <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-brand">
                                                    {d.value}
                                                </a>
                                            ) : (
                                                d.value
                                            )}
                                        </dd>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
