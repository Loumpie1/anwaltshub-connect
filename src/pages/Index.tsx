
import { FC } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const lawyerProfiles = [
  {
    id: 1,
    name: "Dr. Thomas Weber",
    specialization: "Wirtschaftsrecht",
    description: "Spezialist für Unternehmensrecht und M&A Transaktionen mit über 15 Jahren Erfahrung in der Beratung von nationalen und internationalen Unternehmen.",
    image: "/lawyer1.jpg", // We'll need this image
    link: "/weber",
  },
  {
    id: 2,
    name: "Dr. Sarah Mueller",
    specialization: "Arbeitsrecht",
    description: "Expertin für Arbeitsrecht und Vertragsgestaltung. Begleitet Unternehmen bei Restrukturierungen und komplexen arbeitsrechtlichen Fragestellungen.",
    image: "/lawyer2.jpg", // We'll need this image
    link: "/mueller",
  },
  {
    id: 3,
    name: "Dr. Michael Schmidt",
    specialization: "Immobilienrecht",
    description: "Fokus auf Immobilienrecht und Baurecht. Berät bei Immobilientransaktionen und vertritt Mandanten in baurechtlichen Streitigkeiten.",
    image: "/lawyer3.jpg", // We'll need this image
    link: "/schmidt",
  },
];

const Index: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with background image */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-white border-b overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
            style={{ 
              backgroundImage: 'url("/lovable-uploads/b4951fb9-07a3-43c3-b624-c0f60af2ee14.png")',
              willChange: 'transform',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 transition-opacity duration-500" />
          </div>
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-6xl font-light text-white mb-8 leading-tight">
              Rechtliche Expertise auf höchstem Niveau
            </h1>
            <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl">
              Unsere Kanzlei verbindet jahrelange Erfahrung mit innovativen Lösungsansätzen für Ihre rechtlichen Herausforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {lawyerProfiles.map((lawyer, index) => (
              <div
                key={lawyer.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-law-dark">
                    {lawyer.name}
                  </h3>
                  <p className="text-lg font-light text-law-gray">
                    {lawyer.specialization}
                  </p>
                  <p className="text-law-gray font-light leading-relaxed">
                    {lawyer.description}
                  </p>
                  <a
                    href={lawyer.link}
                    className="inline-flex items-center text-law-dark hover:text-law-accent transition-colors duration-300 mt-4 text-lg"
                  >
                    Profil ansehen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-light text-law-dark mb-12">Kontakt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <Phone className="h-6 w-6 text-law-dark" />
                <p className="text-lg font-light text-law-dark">+49 (0) 123 456789</p>
              </div>
              <div className="space-y-4">
                <Mail className="h-6 w-6 text-law-dark" />
                <p className="text-lg font-light text-law-dark">kontakt@kanzlei.de</p>
              </div>
              <div className="space-y-4">
                <MapPin className="h-6 w-6 text-law-dark" />
                <p className="text-lg font-light text-law-dark">
                  Musterstraße 123<br />10115 Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
