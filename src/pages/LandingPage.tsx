import HeroSection from "@/sections/HeroSection"
import Statistics from '@/components/Statistics'
import ServicesGrid from '@/components/ServicesGrid'
import Faq from '@/components/Faq'
import Testimonials from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from "@/components/FloatingWhatsAppMessage"

// LandingPage.jsx
export default function LandingPage() {
    return (
        <>
            <section id="hero">
                <HeroSection />
            </section>

            <section id="statistics" className="py-12">
                <Statistics />
            </section>

            <section id="services" className="py-12">
                <ServicesGrid />
            </section>

            <section id="testimonials" className="py-12">
                <Testimonials />
            </section>

            <section id="faq" className="py-12">
                <Faq />
            </section>

            <section id="contact" className="py-12 mx-auto max-w-6xl">
                <Contact />
            </section>

            <section className="py-12">
                <Footer />
            </section>

            <FloatingWhatsApp
                phone="+91-6283468927" // replace with your number (international)
                message="Hello, I need help with a research paper." // optional
            />
        </>
    )
}
