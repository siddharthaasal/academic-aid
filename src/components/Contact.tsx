import { Mail, Phone } from "lucide-react";

interface Contact7Props {
    title?: string;
    description?: string;
    emailLabel?: string;
    emailDescription?: string;
    email?: string;
    officeLabel?: string;
    officeDescription?: string;
    officeAddress?: string;
    phoneLabel?: string;
    phoneDescription?: string;
    phone?: string;
    chatLabel?: string;
    chatDescription?: string;
    chatLink?: string;
}

const Contact = ({
    title = "Contact Us",
    description = "Contact the team at academic-aid",
    emailLabel = "Email",
    emailDescription = "We respond to all emails within 24 hours.",
    email = "researchhardiksharma@gmail.com",
    phoneLabel = "Phone",
    phoneDescription = "We're available every day, 11am-9pm.",
    phone = "+91-6283468927",
}: Contact7Props) => {
    return (
        <section className="bg-background">
            <div className="container">

                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
                    <p className="text-muted-foreground mt-3">
                        {description}
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mx-8">
                    <div className="bg-muted rounded-lg p-6">
                        <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                            <Mail className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
                        <p className="text-muted-foreground mb-3">{emailDescription}</p>
                        <a
                            href={`mailto:${email}`}
                            className="font-semibold hover:underline"
                        >
                            {email}
                        </a>
                    </div>

                    <div className="bg-muted rounded-lg p-6">
                        <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                            <Phone className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
                        <p className="text-muted-foreground mb-3">{phoneDescription}</p>
                        <a href={`tel:${phone}`} className="font-semibold hover:underline">
                            {phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
