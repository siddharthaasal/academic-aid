import HeroSection from "@/sections/HeroSection"
import ServicesMarquee from "@/components/ServicesMarquee"
import ServicesGrid from "@/components/ServicesGrid"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import { Contact } from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingWhatsApp from "@/components/FloatingWhatsAppMessage"

export default function LandingPage() {
    return (
        <>
            <section id="hero">
                <HeroSection />
            </section>

            <ServicesMarquee />

            <section id="services">
                <ServicesGrid />
            </section>

            <section id="how-it-works">
                <HowItWorks />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="faq">
                <Faq />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />

            <FloatingWhatsApp message="Hello, I need help with a research paper." />
        </>
    )
}
