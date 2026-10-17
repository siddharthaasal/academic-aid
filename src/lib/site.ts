/**
 * Single source of truth for contact details and links.
 * Contact details come from VITE_* env vars (see .env.example); the build
 * fails in vite.config.ts if any are missing. Change them there and every
 * CTA on the site follows.
 */
const env = import.meta.env;
const PHONE = env.VITE_CONTACT_PHONE; // E.164, e.g. +919876543210
const WHATSAPP_DIGITS = env.VITE_WHATSAPP_NUMBER.replace(/\D/g, "");

/** "+919876543210" -> "+91 98765 43210"; other formats are shown as-is. */
function formatPhone(e164: string) {
    const m = e164.match(/^\+91(\d{5})(\d{5})$/);
    return m ? `+91 ${m[1]} ${m[2]}` : e164;
}

export const site = {
    name: "academic-aid",
    url: "https://www.academic-aid.in",
    email: env.VITE_CONTACT_EMAIL,
    phoneDisplay: formatPhone(PHONE),
    phoneTel: PHONE,
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
