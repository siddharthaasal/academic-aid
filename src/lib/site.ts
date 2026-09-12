/**
 * Single source of truth for contact details and links.
 * Change the number here and every CTA on the site follows.
 */
const WHATSAPP_DIGITS = "918818060688";

export const site = {
    name: "academic-aid",
    url: "https://www.academic-aid.in",
    email: "researchhardiksharma@gmail.com",
    phoneDisplay: "+91 88180 60688",
    phoneTel: "+918818060688",
    hours: "Every day, 11am – 9pm IST",
    whatsapp(message?: string) {
        const base = `https://wa.me/${WHATSAPP_DIGITS}`;
        return message ? `${base}?text=${encodeURIComponent(message)}` : base;
    },
};

export const nav = [
    { id: "services", name: "Services" },
    { id: "how-it-works", name: "How it works" },
    { id: "testimonials", name: "Testimonials" },
    { id: "faq", name: "FAQ" },
];

export function formatINR(amount: number) {
    return `₹${amount.toLocaleString("en-IN")}`;
}
