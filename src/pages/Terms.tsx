const heading = {
    h1: 'font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight',
    h2: 'font-sans text-2xl sm:text-3xl font-semibold leading-tight mt-6',
    h3: 'font-sans text-xl sm:text-2xl font-semibold leading-snug mt-4',
    h4: 'font-sans text-lg sm:text-xl font-semibold mt-3',
    h5: 'font-sans text-base font-medium mt-2',
    h6: 'font-sans text-sm font-medium text-muted-foreground mt-2',
}

export default function Terms({ lastUpdated = 'September 10, 2025' }) {
    return (
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <header className="mb-6">
                <h1 className={heading.h1}>Terms &amp; Conditions</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Last updated: <strong>{lastUpdated}</strong>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                    These terms govern your use of services provided by <strong>academic-aid</strong> ("we", "our", "us"). Please read them carefully.
                </p>
            </header>

            <section className="prose max-w-none mb-6 dark:prose-invert">
                <h2 className={heading.h2}>1. Services</h2>
                <p>
                    We provide a range of academic and career-support services, including but not limited to: research papers, research publication assistance, mini
                    projects, project reports, resumes &amp; LinkedIn optimization, and course/certificate completions (the "Services"). Descriptions, timelines and starting
                    prices for each service appear on our Services page.
                </p>

                <h2 className={heading.h2}>2. Orders, Pricing &amp; Payment</h2>
                <p>
                    By placing an order you confirm the details you provide are accurate. Prices shown are starting prices and may change based on complexity, required
                    deliverables, or tight deadlines. Payment terms will be provided at checkout or in your service agreement.
                </p>

                <h2 className={heading.h2}>3. Delivery, Revisions &amp; Timelines</h2>
                <p>
                    Estimated delivery times are provided for each service (for example: Research Papers — 2–4 days; Mini Projects — 1 week). These are estimates. We will
                    use reasonable efforts to meet agreed timelines. Minor revisions within the agreed scope are included; additional work may incur extra charges.
                </p>

                <h2 className={heading.h2}>4. Publication &amp; Acceptance</h2>
                <p>
                    We assist with preparing and submitting manuscripts to conferences and journals (e.g., SCOPUS-indexed or IEEE). While we strive to produce
                    high-quality submissions and will support the submission process, <strong>we do not guarantee acceptance</strong>. Acceptance decisions are made solely by
                    the conference or journal and are outside our control.
                </p>

                <h2 className={heading.h2}>5. Originality &amp; Plagiarism</h2>
                <p>
                    We aim to produce original work and offer plagiarism-optimization services. It is the client's
                    responsibility to ensure the final use of delivered content complies with institutional and legal rules regarding originality and authorship.
                </p>

                <h2 className={heading.h2}>6. Client Responsibilities</h2>
                <ul>
                    <li>Provide accurate, timely and complete project requirements, data and any materials needed for us to perform the Services.</li>
                    <li>Obtain any necessary permissions for third-party materials you provide.</li>
                    <li>Not use our Services to facilitate academic dishonesty. We provide services to support learning and professional development; how you use
                        deliverables is your responsibility.</li>
                </ul>

                <h2 className={heading.h2}>7. Confidentiality &amp; Data</h2>
                <p>
                    We treat client-provided data as confidential and will not share it with third parties except where required to deliver the Service (for example,
                    submitting to a conference system) or where required by law.
                </p>

                <h2 className={heading.h2}>8. Intellectual Property</h2>
                <p>
                    Ownership of final deliverables will be as set out in your order confirmation or service agreement. Unless otherwise agreed, we grant the client
                    ownership of the final deliverables upon receipt of full payment. We may retain copies for record-keeping and quality assurance.
                </p>

                <h2 className={heading.h2}>9. Refunds &amp; Cancellations</h2>
                <p>
                    Refunds and cancellation policies depend on the service and the work already completed. If you cancel before work begins, you may receive a full or
                    partial refund as stated in the service agreement. Once substantial work has begun, refunds may be limited.
                </p>

                <h2 className={heading.h2}>10. Limitations of Liability</h2>
                <p>
                    To the maximum extent permitted by law, academic-aid and its affiliates are not liable for indirect, incidental, consequential or special damages
                    arising from use of our Services. Our total aggregate liability for claims related to any order shall not exceed the fees paid by you for that order.
                </p>

                <h2 className={heading.h2}>11. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of the jurisdiction in which our company operates unless otherwise stated in a signed agreement. Any disputes will
                    be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.
                </p>

                <h2 className={heading.h2}>12. Changes to Terms</h2>
                <p>
                    We may update these Terms from time to time. When we do, we will post the revised Terms with a new "Last updated" date. Continued use of our Services
                    after changes are posted constitutes acceptance of the updated Terms.
                </p>

                <h2 className={heading.h2}>13. Contact</h2>
                <p>
                    If you have questions about these Terms, please contact us at <a href="mailto:researchhardiksharma@gmail.com" className="hover:underline">researchhardiksharma@gmail.com</a>.
                </p>

                <h2 className={heading.h2}>14. Acknowledgement</h2>
                <p>
                    By using our Services, you acknowledge that you have read and understood these Terms and agree to be bound by them.
                </p>
            </section>

            <footer className="mt-8 text-sm text-muted-foreground">
                <p>academic-aid • <a href="/terms" className="hover:underline">Terms &amp; Conditions</a> </p>
            </footer>
        </main>
    )
}
