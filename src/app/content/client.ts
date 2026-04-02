export type Language = "bs" | "en";

type LocalizedString = Record<Language, string>;

type Highlight = {
  title: string;
  description: string;
};

type MemberHighlight = {
  title: string;
  accent: string;
  time: string;
};

type MembershipPlan = {
  name: string;
  price: string;
  suffix: string;
  popular: boolean;
  features: string[];
};

type SpotlightCard = {
  name: string;
  specialty: string;
  quote: string;
};

type TrainingFormat = {
  title: string;
  description: string;
};

type SiteContent = {
  meta: {
    pageTitle: string;
  };
  client: {
    businessName: string;
    brandPrimary: string;
    brandSecondary: string;
    tagline: string;
    city: string;
    googleMapsUrl: string;
    addressLine1: string;
    addressLine2: string;
    phoneDisplay?: string;
    facebookUrl?: string;
    facebookHandle?: string;
    fitpassUrl?: string;
    hoursDays: string;
    hoursTime: string;
    hoursShort: string;
    mapEmbedUrl: string;
  };
  nav: {
    home: string;
    about: string;
    facilities: string;
    training: string;
    membership: string;
    gallery: string;
    contact: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    headlineLines: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    statTopTitle: string;
    statTopBody: string;
    statBottomTitle: string;
    statBottomBody: string;
    imageCaption: string;
  };
  about: {
    heading: string;
    description: string;
    highlights: Highlight[];
  };
  facilities: {
    heading: string;
    subheading: string;
    items: string[];
  };
  training: {
    badge: string;
    heading: string;
    description: string;
    highlightLabel: string;
    highlightTitle: string;
    highlightDescription: string;
    formats: TrainingFormat[];
    memberHighlightsHeading: string;
    visitEyebrow: string;
    visitTitle: string;
    visitDescription: string;
    visitCta: string;
  };
  membership: {
    heading: string;
    subheading: string;
    popularLabel: string;
    cta: string;
    plans: MembershipPlan[];
  };
  gallery: {
    heading: string;
    subheading: string;
    titles: string[];
  };
  spotlight: {
    heading: string;
    subheading: string;
    cards: SpotlightCard[];
  };
  map: {
    heading: string;
    subheading: string;
    addressLabel: string;
    contactLabel: string;
    hoursLabel: string;
    mapsCta: string;
    fitpassCta?: string;
    contactBody: string[];
  };
  cta: {
    headingLine1: string;
    headingLine2: string;
    description: string;
    button: string;
  };
  footer: {
    contactHeading: string;
    hoursHeading: string;
    socialHeading: string;
    facebookLabel?: string;
    mapsLabel: string;
    fitpassLabel?: string;
    copyright: string;
  };
};

const sharedMapsUrl =
  "https://www.google.com/maps/place/Flex+Gym+Bodybuilding+%26+Fitness/@43.8514055,18.3599126,2915m/data=!3m1!1e3!4m10!1m2!2m1!1sgym+!3m6!1s0x4758c99b7b6f61f7:0xa974d688c13466dd!8m2!3d43.8560963!4d18.3645262!15sCgNneW1aBSIDZ3ltkgEDZ3ltmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDI1d1VWbDZTakZpTVZGNlVsUkdjRlZWT1ZKTVYxWTBVekE1UTFwWFl4QULgAQD6AQQIABAv!16s%2Fg%2F11x160_twr?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D";

const sharedMapEmbedUrl =
  "https://www.google.com/maps?q=43.8560963,18.3645262&z=16&output=embed";

const sharedClient = {
  businessName: "Flex Gym Bodybuilding & Fitness",
  brandPrimary: "Flex",
  brandSecondary: "Gym",
  city: "Istočno Sarajevo",
  googleMapsUrl: sharedMapsUrl,
  addressLine1: "43.8560963, 18.3645262",
  addressLine2: "Istočno Sarajevo, Bosnia and Herzegovina",
  mapEmbedUrl: sharedMapEmbedUrl,
};

export const siteContent: Record<Language, SiteContent> = {
  bs: {
    meta: {
      pageTitle: "Flex Gym Bodybuilding & Fitness",
    },
    client: {
      ...sharedClient,
      tagline: "Snaga. Forma. Fokus.",
      hoursDays: "Ponedjeljak - Nedjelja",
      hoursTime: "Provjerite radno vrijeme na Google Maps",
      hoursShort: "Lokacija i info dostupni na Google Maps",
    },
    nav: {
      home: "Početna",
      about: "O nama",
      facilities: "Sadržaji",
      training: "Atmosfera",
      membership: "Članstvo",
      gallery: "Galerija",
      contact: "Kontakt",
      cta: "Posjeti nas",
      languageLabel: "Jezik",
    },
    hero: {
      badge: "Bodybuilding & fitness gym",
      headlineLines: ["Treniraj jače.", "Gradi formu.", "Dobrodošli u Flex Gym."],
      description:
        "Flex Gym je prostor za ozbiljan trening, dobar fokus i svakodnevnu disciplinu. Rebrand smo usmjerili na čist, snažan identitet koji odgovara bodybuilding i fitness energiji lokacije.",
      primaryCta: "Otvori lokaciju",
      secondaryCta: "Pogledaj članstvo",
      statTopTitle: "Bodybuilding Fokus",
      statTopBody: "Prostor za snagu, formu i rutinu",
      statBottomTitle: "Lokalna Energija",
      statBottomBody: "Mjesto za redovan i ozbiljan trening",
      imageCaption: "Prostor za snagu, disciplinu i napredak.",
    },
    about: {
      heading: "O Flex Gym",
      description:
        "Flex Gym Bodybuilding & Fitness je namijenjen ljudima koji žele jasan trening fokus, snažnu atmosferu i jednostavnu lokaciju za povratak iz dana u dan.",
      highlights: [
        {
          title: "Bodybuilding Identitet",
          description: "Vizual i ton su usmjereni na snagu, formu i ozbiljan rad.",
        },
        {
          title: "Jasna Trening Atmosfera",
          description: "Poruke, sekcije i vizualni akcenti sada prate intenzivniji gym karakter.",
        },
        {
          title: "Lakši Dolazak",
          description: "Lokacija i kontakt dio su pojednostavljeni za brži pristup sa mape.",
        },
      ],
    },
    facilities: {
      heading: "Gym Sadržaji",
      subheading: "Ključne zone i prednosti predstavljene kroz novi Flex Gym identitet",
      items: [
        "Zona za snagu i bodybuilding",
        "Cardio i kondicija",
        "Prostor za funkcionalni trening",
        "Motivišuća gym atmosfera",
        "Fokus na disciplinu i kontinuitet",
        "Jednostavan dolazak preko Google Maps",
      ],
    },
    training: {
      badge: "Flex Gym iskustvo",
      heading: "Treniraj jako zajedno",
      description:
        "Flex Gym gradi identitet oko ozbiljne energije, jasnog fokusa i osjećaja da je svaki dolazak početak dobrog treninga.",
      highlightLabel: "Izdvojeno",
      highlightTitle: "Više fokusa. Jači identitet. Bolji prvi utisak.",
      highlightDescription:
        "Ova verzija sajta pozicionira Flex Gym kao direktan, snažan i lokalno relevantan bodybuilding i fitness prostor.",
      formats: [
        {
          title: "Ozbiljna Energija",
          description: "Vizualni smjer i copy prenose intenzitet i trening disciplinu bez suvišnih elemenata.",
        },
        {
          title: "Zajednica Koja Gura",
          description: "Ton komunikacije podržava osjećaj pripadnosti ljudima koji dolaze redovno i rade ozbiljno.",
        },
        {
          title: "Atmosfera Koja Aktivira",
          description: "Kontrast, boje i poruke stvaraju jači osjećaj kretanja, fokusa i motivacije.",
        },
      ],
      memberHighlightsHeading: "Izdvojeno za članove",
      visitEyebrow: "Spremni za posjetu",
      visitTitle: "Pogledaj lokaciju i kreni na trening.",
      visitDescription:
        "Za ovaj prvi rebrand fokus je na jasnom predstavljanju imena, energije i lokacije. Dodatne kontakt podatke možemo unijeti čim ih potvrdiš.",
      visitCta: "Prikaži kontakt",
    },
    membership: {
      heading: "Opcije Članstva",
      subheading: "Prvi copy pass koristi informativne planove dok ne potvrdiš tačne cijene i pakete",
      popularLabel: "NAJTRAŽENIJE",
      cta: "Pitaj za ovu opciju",
      plans: [
        {
          name: "Probni Dolazak",
          price: "INFO",
          suffix: "na upit",
          popular: false,
          features: [
            "Idealan za prvi dolazak i upoznavanje prostora",
            "Provjeri uslove direktno preko lokacije",
            "Dobar izbor za novi trening početak",
          ],
        },
        {
          name: "Mjesečno Članstvo",
          price: "FLEX",
          suffix: "članstvo",
          popular: true,
          features: [
            "Namijenjeno redovnom trening ritmu",
            "Bodybuilding i fitness fokus",
            "Najbolja opcija za kontinuitet i napredak",
          ],
        },
        {
          name: "Fleksibilan Pristup",
          price: "ASK",
          suffix: "detalji",
          popular: false,
          features: [
            "Za one koji žele prilagodljiv raspored",
            "Detalji dostupni nakon potvrde ponude",
            "Lako proširivo kad dobijemo tačne informacije",
          ],
        },
      ],
    },
    gallery: {
      heading: "Flex Gym Galerija",
      subheading: "Vizualni smjer koji prati bodybuilding i fitness identitet brenda",
      titles: [
        "Zona Snage",
        "Cardio Fokus",
        "Gym Energija",
        "Koncentracija",
        "Lični Napredak",
        "Ozbiljan Trening",
      ],
    },
    spotlight: {
      heading: "Zašto Flex Gym",
      subheading: "Tri poruke koje nose novi identitet brenda",
      cards: [
        {
          name: "Snažan Prvi Utisak",
          specialty: "Direktan bodybuilding i fitness positioning",
          quote: "Brend sada izgleda kao mjesto za ozbiljan trening, a ne generičan sportski centar.",
        },
        {
          name: "Jasnija Priča",
          specialty: "Copy usklađen s lokalnom publikom",
          quote: "Poruke su kraće, odlučnije i lakše za skeniranje na telefonu.",
        },
        {
          name: "Lakši Kontakt",
          specialty: "Lokacija stavljena u prvi plan",
          quote: "Najvažniji korak za novog posjetioca je da brzo pronađe gym i odluči da dođe.",
        },
      ],
    },
    map: {
      heading: "Pronađi Nas",
      subheading: "Lokacija preuzeta iz dostavljenog Google Maps unosa",
      addressLabel: "Lokacija",
      contactLabel: "Kontakt Info",
      hoursLabel: "Radno Vrijeme",
      mapsCta: "Otvori na Google Maps",
      contactBody: [
        "Google Maps listing: Flex Gym Bodybuilding & Fitness",
        "Dodatni broj telefona i društvene mreže možemo odmah dodati kad ih potvrdiš.",
      ],
    },
    cta: {
      headingLine1: "Fokus na formu.",
      headingLine2: "Kreni sa Flex Gym.",
      description:
        "Otvorite lokaciju, pogledajte novi identitet i pripremite sljedeći korak kad potvrdimo dodatne kontakt podatke.",
      button: "Pogledaj kontakt info",
    },
    footer: {
      contactHeading: "Kontakt",
      hoursHeading: "Radno Vrijeme",
      socialHeading: "Linkovi",
      mapsLabel: "Google Maps",
      copyright: "Sva prava zadržana.",
    },
  },
  en: {
    meta: {
      pageTitle: "Flex Gym Bodybuilding & Fitness",
    },
    client: {
      ...sharedClient,
      tagline: "Strength. Shape. Focus.",
      hoursDays: "Monday - Sunday",
      hoursTime: "Check current hours on Google Maps",
      hoursShort: "Location and details available on Google Maps",
    },
    nav: {
      home: "Home",
      about: "About",
      facilities: "Facilities",
      training: "Atmosphere",
      membership: "Membership",
      gallery: "Gallery",
      contact: "Contact",
      cta: "Visit Us",
      languageLabel: "Language",
    },
    hero: {
      badge: "Bodybuilding & fitness gym",
      headlineLines: ["Train harder.", "Build shape.", "Welcome to Flex Gym."],
      description:
        "Flex Gym is positioned as a serious training space for focus, consistency, and daily discipline. This rebrand pass gives the site a cleaner identity that matches the bodybuilding and fitness energy of the location.",
      primaryCta: "Open Location",
      secondaryCta: "View Membership",
      statTopTitle: "Bodybuilding Focus",
      statTopBody: "A space built for strength, shape, and routine",
      statBottomTitle: "Local Energy",
      statBottomBody: "A place for consistent, serious training",
      imageCaption: "Built for strength, discipline, and progress.",
    },
    about: {
      heading: "About Flex Gym",
      description:
        "Flex Gym Bodybuilding & Fitness is for people who want a clear training mindset, a stronger atmosphere, and an easy location to come back to throughout the week.",
      highlights: [
        {
          title: "Bodybuilding Identity",
          description: "The visual direction and tone now lean into strength, shape, and serious work.",
        },
        {
          title: "Clearer Training Atmosphere",
          description: "The messaging and section copy now reflect a more intense gym character.",
        },
        {
          title: "Easier To Find",
          description: "The location and contact area are simplified around the verified map listing.",
        },
      ],
    },
    facilities: {
      heading: "Gym Facilities",
      subheading: "Key zones and strengths presented through the new Flex Gym identity",
      items: [
        "Strength and bodybuilding zone",
        "Cardio and conditioning",
        "Functional training space",
        "Motivating gym atmosphere",
        "Built around discipline and consistency",
        "Easy access through Google Maps",
      ],
    },
    training: {
      badge: "Flex Gym experience",
      heading: "Train hard together",
      description:
        "Flex Gym builds its identity around serious energy, clear focus, and the feeling that every visit should lead into a strong session.",
      highlightLabel: "Highlights",
      highlightTitle: "More focus. Stronger identity. Better first impression.",
      highlightDescription:
        "This version of the site positions Flex Gym as a direct, confident, locally relevant bodybuilding and fitness destination.",
      formats: [
        {
          title: "Serious Energy",
          description: "The visual direction and copy signal intensity and training discipline without unnecessary noise.",
        },
        {
          title: "Momentum From Community",
          description: "The tone supports people who train regularly and want to feel part of a committed gym culture.",
        },
        {
          title: "Atmosphere That Activates",
          description: "Contrast, colors, and messaging create a stronger sense of movement, focus, and motivation.",
        },
      ],
      memberHighlightsHeading: "Member Highlights",
      visitEyebrow: "Ready to visit",
      visitTitle: "Open the location and start training.",
      visitDescription:
        "This first rebrand pass focuses on name, energy, and location clarity. We can add more contact details as soon as you confirm them.",
      visitCta: "View Contact Details",
    },
    membership: {
      heading: "Membership Options",
      subheading: "This first copy pass uses placeholder offers until you confirm exact pricing and packages",
      popularLabel: "MOST POPULAR",
      cta: "Ask About This Option",
      plans: [
        {
          name: "Intro Visit",
          price: "INFO",
          suffix: "on request",
          popular: false,
          features: [
            "A simple option for a first visit and space check",
            "Confirm the exact terms directly from the location",
            "Good for people testing the gym atmosphere first",
          ],
        },
        {
          name: "Monthly Membership",
          price: "FLEX",
          suffix: "membership",
          popular: true,
          features: [
            "Built for a regular training rhythm",
            "Centered on bodybuilding and fitness",
            "Best fit for consistency and progress",
          ],
        },
        {
          name: "Flexible Access",
          price: "ASK",
          suffix: "details",
          popular: false,
          features: [
            "Useful for members who want a looser schedule",
            "Easy to refine once exact offers are confirmed",
            "Keeps the section honest until pricing is verified",
          ],
        },
      ],
    },
    gallery: {
      heading: "Flex Gym Gallery",
      subheading: "A visual direction built around the bodybuilding and fitness identity",
      titles: [
        "Strength Zone",
        "Cardio Focus",
        "Gym Energy",
        "Concentration",
        "Personal Progress",
        "Serious Training",
      ],
    },
    spotlight: {
      heading: "Why Flex Gym",
      subheading: "Three messages carrying the new brand identity",
      cards: [
        {
          name: "Stronger First Impression",
          specialty: "Direct bodybuilding and fitness positioning",
          quote: "The brand now looks like a gym for serious training instead of a generic sports center.",
        },
        {
          name: "Cleaner Story",
          specialty: "Copy aligned with a local audience",
          quote: "The messaging is shorter, sharper, and easier to scan on mobile.",
        },
        {
          name: "Simpler Contact Path",
          specialty: "Location moved to the front",
          quote: "For a new visitor, the most important step is finding the gym fast and deciding to show up.",
        },
      ],
    },
    map: {
      heading: "Find Us",
      subheading: "Location pulled from the Google Maps place you shared",
      addressLabel: "Location",
      contactLabel: "Contact Info",
      hoursLabel: "Hours",
      mapsCta: "Open in Google Maps",
      contactBody: [
        "Google Maps listing: Flex Gym Bodybuilding & Fitness",
        "We can add phone and social links as soon as you confirm them.",
      ],
    },
    cta: {
      headingLine1: "Focus on shape.",
      headingLine2: "Start with Flex Gym.",
      description:
        "Open the location, review the new brand direction, and we can layer in more contact details once you confirm them.",
      button: "View Contact Info",
    },
    footer: {
      contactHeading: "Contact",
      hoursHeading: "Opening Hours",
      socialHeading: "Links",
      mapsLabel: "Google Maps",
      copyright: "All rights reserved.",
    },
  },
};

export function getSiteContent(language: Language) {
  return siteContent[language];
}
