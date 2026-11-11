import { BRAND } from '@/config/brand';

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["AutomotiveBusiness", "EmergencyService"],
    "name": BRAND.name,
    "slogan": BRAND.slogan,
    "alternateName": [
      "Abschleppdienst Direkt Bochum",
      "Abschleppdienst Direkt NRW",
      "Abschleppdienst Direkt 24h"
    ],
    "legalName": BRAND.legalName,
    "founder": {
      "@type": "Person",
      "name": BRAND.owner
    },
    "image": `${BRAND.url}${BRAND.assets.logoFull}`,
    "logo": `${BRAND.url}${BRAND.assets.logoHorizontal}`,
    "@id": `${BRAND.url}/#business`,
    "url": BRAND.url,
    "telephone": BRAND.phone.raw,
    "email": BRAND.email,
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "postalCode": BRAND.address.postalCode,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.region,
      "addressCountry": BRAND.address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4682,
      "longitude": 7.2465
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Bochum" },
      { "@type": "City", "name": "Wattenscheid" },
      { "@type": "City", "name": "Herne" },
      { "@type": "City", "name": "Gelsenkirchen" },
      { "@type": "City", "name": "Essen" },
      { "@type": "City", "name": "Dortmund" },
      { "@type": "City", "name": "Witten" },
      { "@type": "City", "name": "Hattingen" },
      { "@type": "AdministrativeArea", "name": "Autobahn A40" },
      { "@type": "AdministrativeArea", "name": "Autobahn A43" },
      { "@type": "AdministrativeArea", "name": "Autobahn A448" },
      { "@type": "AdministrativeArea", "name": "Autobahn A42" },
      { "@type": "AdministrativeArea", "name": "Autobahn A45" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Abschlepp- und Fahrzeugtransportleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24h Abschleppdienst & Pannenhilfe Bochum",
            "description": "Schnelle Bergung und Pannenhilfe in Bochum und Umgebung rund um die Uhr."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeugüberführung von A nach B",
            "description": "Zuverlässiger Transport fahrbereiter oder defekter PKW im Ruhrgebiet und bundesweit."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pannentransport zur Wunschwerkstatt",
            "description": "Sicherer Transport direkt zur Kfz-Werkstatt Ihrer Wahl."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starthilfe & Batterie-Service",
            "description": "Professionelle Starthilfe vor Ort mit speziellem Überspannungsschutz."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektroauto & Automatik Abschleppdienst (100% Plateau)",
            "description": "Spezialisierte, schadenfreie Bergung von Elektrofahrzeugen (Tesla, VW ID, BMW), Hybriden und Automatik-PKW ohne Radrollen mit Plateau und hydraulischen Go-Jak Radrollern."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
