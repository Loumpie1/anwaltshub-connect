
import { FC } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const lawyerProfiles = [
  {
    id: 1,
    name: "Dr. Thomas Weber",
    specialization: "Wirtschaftsrecht",
    description: "Spezialist für Unternehmensrecht und M&A Transaktionen",
    image: "photo-1581092795360-fd1ca04f0952",
    link: "/weber",
  },
  {
    id: 2,
    name: "Dr. Sarah Mueller",
    specialization: "Arbeitsrecht",
    description: "Expertin für Arbeitsrecht und Vertragsgestaltung",
    image: "photo-1581091226825-a6a2a5aee158",
    link: "/mueller",
  },
  {
    id: 3,
    name: "Dr. Michael Schmidt",
    specialization: "Immobilienrecht",
    description: "Fokus auf Immobilienrecht und Baurecht",
    image: "photo-1486312338219-ce68d2c6f44d",
    link: "/schmidt",
  },
];

const Index: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-law-light">
        <div className="container mx-auto px-6 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-semibold text-law-dark mb-6">
              Ihre Experten für Rechtsfragen
            </h1>
            <p className="text-xl text-law-gray mb-8">
              Kompetente rechtliche Beratung durch erfahrene Fachanwälte
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Anwälte</h2>
            <p className="section-subtitle">Experten in ihrem Fachgebiet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lawyerProfiles.map((lawyer, index) => (
              <div
                key={lawyer.id}
                className="lawyer-card group"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="aspect-w-3 aspect-h-2 mb-6">
                  <img
                    src={`https://source.unsplash.com/${lawyer.image}`}
                    alt={lawyer.name}
                    className="object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-law-dark mb-2">
                  {lawyer.name}
                </h3>
                <p className="text-sm font-medium text-law-gray mb-2">
                  {lawyer.specialization}
                </p>
                <p className="text-law-gray mb-4">{lawyer.description}</p>
                <a
                  href={lawyer.link}
                  className="inline-flex items-center text-law-accent hover:text-law-dark transition-colors duration-300"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-law-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Kontakt</h2>
            <p className="section-subtitle">Vereinbaren Sie einen Termin</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Phone className="h-8 w-8 text-law-accent mb-4" />
                <p className="text-law-gray">+49 (0) 123 456789</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Mail className="h-8 w-8 text-law-accent mb-4" />
                <p className="text-law-gray">kontakt@kanzlei.de</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <MapPin className="h-8 w-8 text-law-accent mb-4" />
                <p className="text-law-gray">Musterstraße 123<br />10115 Berlin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
