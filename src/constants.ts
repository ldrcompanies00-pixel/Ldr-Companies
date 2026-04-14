export const CONTENT = {
  nav: {
    services: "Servicii",
    portfolio: "Portofoliu",
    testimonials: "Recenzii",
    blog: "Blog",
    contact: "Contact",
    cta: "Începe Acum"
  },
  hero: {
    title: "Viitorul Digital al Afacerii Tale Începe cu",
    brand: "Webbly",
    subtitle: "Agenție de marketing full-service și constructor de website-uri de ultimă generație. Transformăm ideile în experiențe digitale memorabile.",
    ctaPrimary: "Vezi Serviciile",
    ctaSecondary: "Portofoliu"
  },
  services: {
    title: "Serviciile Noastre",
    subtitle: "Soluții complete pentru creșterea prezenței tale online.",
    items: [
      {
        id: "web-design",
        title: "Web Design",
        description: "Creăm website-uri uimitoare, optimizate pentru conversie și experiență utilizator superioară.",
        packages: [
          {
            name: "Basic",
            price: "500€",
            description: "Ideal pentru prezentare personală sau afaceri mici.",
            features: ["Până la 5 pagini", "Design Responsiv", "Formular Contact", "Optimizare SEO de bază", "Suport Email"]
          },
          {
            name: "Standard",
            price: "1200€",
            description: "Perfect pentru afaceri în creștere care au nevoie de funcționalități avansate.",
            features: ["Până la 15 pagini", "Design Personalizat", "Integrare Blog", "Optimizare Viteză", "Suport Prioritar"]
          },
          {
            name: "Premium",
            price: "2500€",
            description: "Soluția completă pentru branduri care vor să domine piața.",
            features: ["Pagini Nelimitate", "E-commerce Complet", "Animații Avansate", "Mentenanță 6 luni", "Manager Proiect Dedicat"]
          }
        ]
      },
      {
        id: "app-dev",
        title: "Dezvoltare Aplicații",
        description: "Aplicații mobile și web scalabile, construite cu cele mai noi tehnologii.",
        packages: [
          {
            name: "MVP",
            price: "1500€",
            description: "Lansează-ți ideea rapid pe piață.",
            features: ["Funcționalități de Bază", "Design UI/UX Simplu", "O singură platformă", "Integrare API", "Suport 30 zile"]
          },
          {
            name: "Professional",
            price: "4500€",
            description: "Aplicație robustă pentru utilizatori reali.",
            features: ["Funcționalități Avansate", "Design UI/UX Premium", "iOS & Android", "Sistem Notificări", "Suport 90 zile"]
          },
          {
            name: "Enterprise",
            price: "10000€+",
            description: "Sisteme complexe și scalabile la nivel global.",
            features: ["Arhitectură Microservicii", "Securitate Avansată", "Analitice Personalizate", "Mentenanță 1 an", "Suport 24/7"]
          }
        ]
      },
      {
        id: "seo",
        title: "Optimizare SEO",
        description: "Urcă în primele rezultate Google și atrage trafic organic calificat.",
        packages: [
          {
            name: "Local",
            price: "300€/lună",
            description: "Fii vizibil în orașul tău.",
            features: ["Google My Business", "Audit SEO Lunar", "5 Cuvinte Cheie", "Optimizare On-Page", "Raport Progres"]
          },
          {
            name: "National",
            price: "700€/lună",
            description: "Extinde-ți prezența la nivel național.",
            features: ["Analiză Competiție", "Content Marketing", "20 Cuvinte Cheie", "Link Building", "Suport Strategie"]
          },
          {
            name: "Global",
            price: "1500€/lună",
            description: "Domină rezultatele la nivel internațional.",
            features: ["SEO Multilingv", "Strategie PR Digital", "Cuvinte Cheie Nelimitate", "Monitorizare 24/7", "Manager SEO Dedicat"]
          }
        ]
      },
      {
        id: "content",
        title: "Creare Conținut",
        description: "Povestea brandului tău spusă prin texte captivante și vizualuri de impact.",
        packages: [
          {
            name: "Starter",
            price: "200€",
            description: "Conținut esențial pentru social media.",
            features: ["8 Postări Social Media", "Copywriting de Bază", "Grafică Simplă", "1 Revizie", "Planificare Postări"]
          },
          {
            name: "Growth",
            price: "500€",
            description: "Crește-ți comunitatea cu conținut de calitate.",
            features: ["15 Postări Social Media", "4 Articole Blog", "Video Reels (2)", "3 Revizii", "Strategie Conținut"]
          },
          {
            name: "Authority",
            price: "1200€",
            description: "Devino un lider de opinie în industria ta.",
            features: ["Postări Zilnice", "8 Articole Blog", "Video Marketing (5)", "Revizii Nelimitate", "Branding Vizual Complet"]
          }
        ]
      },
      {
        id: "builder",
        title: "Website Builder",
        description: "Platforma noastră proprie pentru a-ți construi singur site-ul visat în câteva minute.",
        packages: [
          {
            name: "Personal",
            price: "15€/lună",
            description: "Perfect pentru bloguri sau portofolii.",
            features: ["Domeniu .ro Inclus", "Hosting 5GB", "Template-uri Standard", "Fără Reclame", "Certificat SSL"]
          },
          {
            name: "Business",
            price: "35€/lună",
            description: "Tot ce ai nevoie pentru afacerea ta online.",
            features: ["Domeniu .com/.ro", "Hosting Nelimitat", "Template-uri Premium", "Integrare Plăți", "Analitice Avansate"]
          },
          {
            name: "E-commerce",
            price: "75€/lună",
            description: "Magazin online complet la cheie.",
            features: ["Produse Nelimitate", "Gestiune Stocuri", "Cupoane Reducere", "Recuperare Coș", "Suport VIP"]
          }
        ]
      }
    ]
  },
  portfolio: {
    title: "Proiecte Recente",
    subtitle: "O selecție a celor mai bune lucrări realizate pentru clienții noștri.",
    items: [
      {
        title: "E-commerce Fashion",
        category: "Web Design",
        image: "https://picsum.photos/seed/fashion/800/600"
      },
      {
        title: "Aplicație Delivery",
        category: "App Development",
        image: "https://picsum.photos/seed/delivery/800/600"
      },
      {
        title: "Campanie Brand Auto",
        category: "Marketing",
        image: "https://picsum.photos/seed/car/800/600"
      }
    ]
  },
  testimonials: {
    title: "Ce Spun Clienții",
    subtitle: "Încrederea este fundamentul succesului nostru.",
    items: [
      {
        name: "Andrei Ionescu",
        role: "CEO, TechStart",
        content: "Webbly a transformat complet modul în care suntem percepuți online. Rezultatele au depășit așteptările.",
        avatar: "https://i.pravatar.cc/150?u=andrei"
      },
      {
        name: "Elena Popescu",
        role: "Fondator, GreenBoutique",
        content: "Echipa este extrem de profesionistă. Site-ul creat de ei ne-a dublat vânzările în primele 3 luni.",
        avatar: "https://i.pravatar.cc/150?u=elena"
      }
    ]
  },
  blog: {
    title: "Resurse și Articole",
    subtitle: "Noutăți din lumea marketingului și tehnologiei.",
    items: [
      {
        title: "Tendințe Web Design 2024",
        excerpt: "Descoperă ce se poartă în designul digital anul acesta...",
        date: "10 Aprilie 2024"
      },
      {
        title: "Importanța SEO pentru Afaceri Mici",
        excerpt: "De ce SEO este vital pentru vizibilitatea afacerii tale locale...",
        date: "5 Aprilie 2024"
      }
    ]
  },
  contact: {
    title: "Hai să Vorbim",
    subtitle: "Ești gata să îți duci afacerea la nivelul următor?",
    form: {
      name: "Nume Complet",
      email: "Email",
      message: "Mesaj",
      submit: "Trimite Mesajul"
    }
  },
  footer: {
    rights: "© 2024 Webbly. Toate drepturile rezervate.",
    location: "București, România"
  }
};
