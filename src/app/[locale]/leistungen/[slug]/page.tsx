import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Truck, Wrench, Zap, Map, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Phone, MessageCircle, Clock, ChevronRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import ServiceInquirySection from '@/components/services/ServiceInquirySection';
import { blogArticles } from '@/data/blogArticles';

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  overview: string;
  scenarios: string[];
  processSteps: { title: string; desc: string }[];
  guarantees: string[];
  pricingHint: string;
  realPhoto?: {
    src: string;
    alt: string;
    caption: string;
  };
}

const serviceDatabase: Record<string, ServiceDetail> = {
  'abschleppdienst-pkw': {
    slug: 'abschleppdienst-pkw',
    title: 'PKW Abschleppdienst & Unfallbergung',
    subtitle: 'Schnelle und sichere Bergung sowie Transport von Fahrzeugen bei Panne oder Unfall in Bochum und Ruhrgebiet.',
    tag: 'PKW Abschleppdienst',
    overview: 'Schnelle und sichere Bergung sowie Transport von Fahrzeugen bei Panne oder Unfall. Ob akuter Motorschaden auf der A40, Getriebeschaden auf der A43 oder Unfall im Stadtverkehr Bochum: Wir rücken innerhalb von 20–40 Minuten mit unserem Spezial-Plateau und starker elektrischer Funkseilwinde aus. Ihr PKW wird behutsam und ohne Schürzen- oder Fahrwerksschäden aufgeladen und direkt zu Ihrer Wunschwerkstatt oder nach Hause gebracht.',
    scenarios: [
      'Akuter Motorschaden, Getriebeschaden oder Elektronikausfall',
      'Unfallfahrzeuge mit Karosserie-, Rad- oder Achsschaden',
      'Liegenbleiber auf Autobahnen (A40, A43, A448) oder im Stadtverkehr',
      'Fahrzeuge mit blockierten Rädern, defekter Handbremse oder ohne Schlüssel'
    ],
    processSteps: [
      {
        title: '1. Notruf & Standort erfassen',
        desc: 'Kurzer Anruf oder WhatsApp mit Autobahnausfahrt oder Straßenname in Bochum und Umgebung.'
      },
      {
        title: '2. Express-Anfahrt (20–40 Min.)',
        desc: 'Schnelles Eintreffen direkt an der Pannenstelle und vorschriftsmäßige Absicherung der Gefahrenstelle.'
      },
      {
        title: '3. Behutsames Seilwinden-Aufladen',
        desc: 'Schonender Zug über flache Rampen ohne Bodenkontakt oder Schürzenbeschädigung.'
      },
      {
        title: '4. Direkter Transport zur Wunschwerkstatt',
        desc: 'Sichere Fahrt zur freien Werkstatt Ihrer Wahl, zum Vertragshändler oder vor Ihre Haustür.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-bmw-ramp.jpg',
      alt: 'PKW Abschleppdienst Bochum Verladung mit Plateau',
      caption: 'Originale Einsatzaufnahme: Behutsame Plateau-Verladung mit 4-Punkt-Radverzurrung'
    },
    guarantees: [
      'Express-Eintreffzeit in 20–40 Minuten im Ruhrgebiet',
      'Elektrische Seilwinde für schonendes, ruckfreies Hochziehen',
      'Ordnungsgemäße Rechnung für Kfz-Schutzbrief & Versicherung',
      'Unser erfahrener Fahrer Adam persönlich am Einsatzort'
    ],
    pricingHint: 'Faire Notfall-Grundpauschale zzgl. gefahrener Kilometer. Keine versteckten Fantasiegebühren.'
  },
  'abschleppdienst-suv': {
    slug: 'abschleppdienst-suv',
    title: 'Abschleppdienst für SUV & schwere Fahrzeuge',
    subtitle: 'Fachgerechter Transport auch größerer Fahrzeuge mit passender Ausstattung bis 3,5 t Gesamtgewicht.',
    tag: 'SUV Abschleppdienst',
    overview: 'Fachgerechter Transport auch größerer Fahrzeuge mit passender Ausstattung. Schwere Premium-SUV, Elektro-Geländewagen und allradgetriebene Großfahrzeuge dürfen nicht auf eigener Achse geschleppt werden, um Antriebsstrang und Differenziale vor Schäden zu schützen. Mit unserem verstärkten Aluminium-Plateau, hoher Nutzlast bis 3,5 Tonnen und schonender 4-Punkt-Radverzurrung transportieren wir Ihr SUV erschütterungsarm und absolut sicher.',
    scenarios: [
      'Schwere SUV, Geländewagen und Elektro-SUV bis 3,5 t Gesamtgewicht',
      'Allradfahrzeuge (AWD, Quattro, xDrive, 4Matic) ohne Achsbelastung',
      'Fahrzeuge mit breiter Spur, großen Felgen oder langem Radstand',
      'SUV mit Elektronik-Notlauf, Reifenschaden oder blockierter Feststellbremse'
    ],
    processSteps: [
      {
        title: '1. Traglast- und Modell-Check',
        desc: 'Genaue Abstimmung auf hohes Fahrzeuggewicht und Radstand bis 3,5 Tonnen.'
      },
      {
        title: '2. Schonendes Plateau-Verfahren',
        desc: '100% Vollaufnahme auf das Plateau – kein Schleppen auf eigener Achse.'
      },
      {
        title: '3. 4-Punkt-Spezialsicherung',
        desc: 'Sicherung an allen 4 Rädern mit verstärkten Spezialgurten und weichen Felgenschonern.'
      },
      {
        title: '4. Erschütterungsarmer Transfer',
        desc: 'Sicherer Transport zum Hersteller-Servicezentrum oder zu Ihrem Kfz-Meisterbetrieb.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-audi-clean-user.jpg',
      alt: 'Abschleppdienst für SUV und Sportwagen Bochum',
      caption: 'Originale Einsatzaufnahme: Schonender Transport moderner, schwerer SUV auf Spezialplateau'
    },
    guarantees: [
      'Bis 3,5 Tonnen Gesamtgewicht zugelassen',
      'Schutz moderner Allradsysteme durch 100% Plateau-Verladung',
      'Felgenschonende Spezialgurte nach VDI 2700',
      'Transparente Festpreiskalkulation vorab'
    ],
    pricingHint: 'Transparente Festpreiskalkulation nach Fahrzeugkategorie und Entfernung.'
  },
  'abschleppdienst-busse': {
    slug: 'abschleppdienst-busse',
    title: 'Abschleppdienst für Busse & Transporter (bis 7 m)',
    subtitle: 'Zuverlässiges Abschleppen und Umsetzen von Kleinbussen und Transportern bis 7 Meter Länge.',
    tag: 'Busse & Transporter',
    overview: 'Zuverlässiges Abschleppen und Umsetzen von Kleinbussen und Transportern (bis 7 Meter Länge). Handwerker, Lieferdienste und Flottenbetreiber sind auf schnelle Einsatzbereitschaft angewiesen. Bei Pannen oder Unfällen von Kastenwagen, Sprintern oder 9-Sitzer-Kleinbussen sorgen wir mit unserer extralangen Plateau-Ladefläche für zügiges Abschleppen und direkte Zustellung zu Ihrer Flottenwerkstatt, um Ausfallzeiten auf ein Minimum zu reduzieren.',
    scenarios: [
      'Kastenwagen, Transporter & Sprinter mit Panne oder voller Ladung',
      'Kleinbusse, 9-Sitzer und Firmen-Vans bis 7 m Gesamtlänge',
      'Wohnmobile und Kastenwagen mit Motor- oder Getriebeschaden',
      'Umsetzen von Handwerker- und Flottenfahrzeugen im Ruhrgebiet'
    ],
    processSteps: [
      {
        title: '1. Radstand & Gesamtlänge erfassen',
        desc: 'Genaue Abstimmung auf Fahrzeugüberhang bis 7 Meter und Gewichtsverteilung.'
      },
      {
        title: '2. Kraftvoller Seilwindenzug',
        desc: 'Kontrolliertes Hochziehen langer Nutzfahrzeuge ohne Aufsetzen.'
      },
      {
        title: '3. Feste Achsen- & Radverzurrung',
        desc: 'Vorschriftsmäßige Schwerlastsicherung nach VDI 2700.'
      },
      {
        title: '4. Schnelle Zustellung',
        desc: 'Minimierung von Betriebsausfällen durch Direktfahrt zur Nutzfahrzeug-Meisterwerkstatt.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-street.jpg',
      alt: 'Abschleppdienst für Busse und Transporter Bochum',
      caption: 'Originale Einsatzaufnahme: Transporter für Kleinbusse und gewerbliche Kastenwagen bis 7 Meter'
    },
    guarantees: [
      'Spezialisiert auf Fahrzeuge bis 7 Meter Gesamtlänge',
      'Starke elektrische Seilwinde für schwere Nutzfahrzeuge',
      'Ordnungsgemäße Rechnung für Gewerbe & Fuhrparks (§ 19 UStG)',
      '24h Notfall-Bereitschaft für Handwerker & Firmen'
    ],
    pricingHint: 'Faire gewerbliche und private Pauschalen mit verbindlicher Preiszusage vorab.'
  },
  'warentransport-logistik': {
    slug: 'warentransport-logistik',
    title: 'Warentransport & Express-Logistik (bis 3,5 t)',
    subtitle: 'Professionelle Durchführung von Transportaufträgen für unterschiedlichste Güter regional & überregional.',
    tag: 'Warentransport & Logistik',
    overview: 'Professionelle Durchführung von Transportaufträgen für unterschiedlichste Güter. Ob eilige Palettenware, Baustellengeräte, Maschinen, Motoren oder Sonderfracht bis 3,5 Tonnen: Wir bieten Ihnen termintreue Express-Direktfahrten von Punkt A nach Punkt B im Ruhrgebiet, in ganz Nordrhein-Westfalen und bundesweit – ohne Beiladung und ohne zeitaufwendige Zwischenlagerung.',
    scenarios: [
      'Eilige Direkttransporte von Paletten- und Handelswaren',
      'Transport von Baustellengeräten, Maschinen & Sondergeräten bis 3,5 t',
      'Ersatzteil-Logistik für Kfz-Meisterwerkstätten und Industrie',
      'Termintransporte ohne Zwischenstopps von A nach B'
    ],
    processSteps: [
      {
        title: '1. Frachtabstimmung',
        desc: 'Erfassung von Maßen, Gewicht und Sicherungspunkten.'
      },
      {
        title: '2. Fachgerechte Beladung',
        desc: 'Sichere Verzurrung auf der ebenen Plateau-Fläche mit VDI-2700-Gurten.'
      },
      {
        title: '3. Direkte Expressfahrt',
        desc: 'Fahrt ohne Umwege und ohne Umladen direkt zum Empfänger.'
      },
      {
        title: '4. Dokumentierte Übergabe',
        desc: 'Quittierung und ordnungsgemäße Frachtübergabe am Bestimmungsort.'
      }
    ],
    realPhoto: {
      src: '/images/real/plateau-ramp-bochum.jpg',
      alt: 'Warentransport und Express-Logistik Bochum',
      caption: 'Originale Einsatzaufnahme: Rutschfeste Aluminium-Ladefläche für Güter aller Art bis 3,5 Tonnen'
    },
    guarantees: [
      '100% Direktfahrten ohne Umladen oder Zwischenlagerung',
      'Ladungssicherung nach VDI 2700 mit Schwerlast-Gurten',
      'Pünktliche Einhaltung vereinbarter Lieferfenster',
      'Transparente Kilometerabrechnung ohne versteckte Nebenkosten'
    ],
    pricingHint: 'Transparente Streckenkalkulation auf Kilometerbasis. Verbindliche Festpreise nach Vereinbarung.'
  },
  'fahrzeugueberfuehrung': {
    slug: 'fahrzeugueberfuehrung',
    title: 'Fahrzeugüberführung von A nach B (Bundesweit)',
    subtitle: 'Exklusiver, sicherer und pünktlicher Einzeltransport von PKW aller Art von A nach B – in NRW und ganz Deutschland.',
    tag: 'Bundesweit & ganz Deutschland',
    overview: 'Sie haben ein Auto ohne Zulassung gekauft, möchten einen Oldtimer sicher transportieren oder ein Fahrzeug zwischen zwei Standorten überführen? Wir bieten Ihnen einen individuellen Einzeltransport auf einem modernen Spezialplateau. Ihr Fahrzeug wird nicht mit Fremdfahrzeugen auf Sammeltransportern zusammengepfercht, sondern genießt volle Aufmerksamkeit und maximalen Schutz.',
    scenarios: [
      'Überführung von neu gekauften Fahrzeugen ohne Kennzeichen / ohne TÜV',
      'Schonender Transport von Oldtimern, Liebhaber- und Sportwagen',
      'Fahrzeugtransfers für Autohäuser, Werkstätten und Fuhrparks',
      'Transport bei Wohnortwechsel oder Umzug in eine andere Stadt',
      'Überführung von rollfähigen Unfallwagen oder Projektautos'
    ],
    processSteps: [
      {
        title: '1. Termingerechte Bereitstellung',
        desc: 'Wir stimmen den genauen Abholtermin flexibel mit Ihnen ab und erscheinen pünktlich am vereinbarten Abholort.'
      },
      {
        title: '2. Schonendes Verladen & 4-Punkt-Sicherung',
        desc: 'Über flache Auffahrrampen oder Seilwinde wird das Fahrzeug behutsam auf das Plateau geladen und mit Spezial-Spanngurten an allen vier Rädern felgenschonend fixiert.'
      },
      {
        title: '3. Sichere Direktfahrt ohne Umladen',
        desc: 'Ihr Fahrzeug bleibt während der gesamten Fahrt sicher auf unserem Spezial-Plateau fixiert – ohne Zwischenlagerung.'
      },
      {
        title: '4. Übergabe am Zielort',
        desc: 'Sichere Abladung direkt am gewünschten Zielort (Haustür, Garage oder Werkstatt) inklusive ordentlichem Übergabeprotokoll.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-audi-rs3-wide.jpg',
      alt: 'Transporter mit Plateau und geladenem Audi RS3 Sportback in Bochum',
      caption: 'Originale Einsatzaufnahme: Unser Transporter bei der Überführung eines Audi RS3 Sportback zur Kfz-Meisterwerkstatt'
    },
    guarantees: [
      '100% Einzelfahrt ohne Umladen oder Zwischenstopps',
      'Fachgerechte Ladungssicherung nach VDI 2700 inklusive',
      'Schonende Felgensicherung mit weichen Spezialgurten',
      'Feste und transparente Kilometerpreise'
    ],
    pricingHint: 'Innerhalb von Bochum Pauschalpreise ab 70 €. Außerhalb transparente Abrechnung nach tatsächlichen Kilometern (ca. 1,50 €/km).'
  },
  'abschleppdienst-werkstatt': {
    slug: 'abschleppdienst-werkstatt',
    title: 'Abschleppen bei Fahrzeugschaden & Motorschaden',
    subtitle: 'Schnelle Notfallhilfe und verlässlicher Transport Ihres defekten Fahrzeugs direkt zur Werkstatt Ihres Vertrauens.',
    tag: 'Fahrzeugschaden & Motorschaden',
    overview: 'Ihr Motor geht plötzlich während der Fahrt aus, klappert verdächtig oder ein Unfall hat Ihr Auto fahruntüchtig gemacht? Wir wissen genau, wie nervenaufreibend und stressig diese Situation für Sie ist. Machen Sie sich keine Sorgen und lassen Sie sich nicht unter Druck setzen: Rufen Sie uns einfach an, atmen Sie durch und überlassen Sie uns die Arbeit. In diesem schwierigen Moment sind wir Ihr verlässlicher Retter vor Ort. Wir rücken sofort mit unserem Spezial-Plateau aus, sichern die Pannenstelle fachgerecht ab und ziehen Ihr Fahrzeug behutsam per elektrischer Seilwinde auf die Ladefläche – ohne den Unterboden, das Getriebe oder die Stoßstange zu beschädigen. Danach bringen wir Sie und Ihren Wagen direkt zu Ihrer Wunschwerkstatt oder nach Hause.',
    scenarios: [
      'Akuter Motorschaden: Motor stirbt ab, Zylinderkopf- oder Zahnriemendefekt',
      'Unfallfahrzeuge: Kollisionsschäden, abgerissene Räder oder Achsschäden',
      'Getriebeschaden: Blockierte Automatik oder blockiertes Schaltgetriebe',
      'Liegenbleiber auf Autobahnen (A40, A43, A448) oder im Stadtverkehr Bochum',
      'Schonender Transport direkt zur ADAC-Partnerwerkstatt oder Vertragswerkstatt'
    ],
    processSteps: [
      {
        title: '1. Sofortige Alarmierung',
        desc: 'Ein Anruf genügt: Wir erfassen Ihren genauen Standort und senden unsere Schaufel / das Plateau sofort los (ca. 20-40 Minuten im Raum Bochum).'
      },
      {
        title: '2. Absicherung der Pannenstelle',
        desc: 'Vor Ort sichern wir die Gefahrenstelle mit professioneller Warnbeleuchtung ab, um Sie und andere Verkehrsteilnehmer zu schützen.'
      },
      {
        title: '3. Professionelle Bergung mittels Seilwinde',
        desc: 'Selbst fahruntüchtige oder blockierte Fahrzeuge ziehen wir behutsam und ohne Ruckeln auf die Ladefläche.'
      },
      {
        title: '4. Transport & Abstellung bei der Werkstatt',
        desc: 'Direkter Transport zu Ihrer Wunschwerkstatt inklusive Übergabe des Fahrzeugschlüssels und der Papiere.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-bmw-ramp.jpg',
      alt: 'Abschleppdienst Verladung BMW Z3 mit Plateau und Seilwinde in Bochum',
      caption: 'Originale Einsatzaufnahme: Behutsame Plateau-Verladung mit 4-Punkt-Radverzurrung'
    },
    guarantees: [
      'Express-Eintreffzeit im gesamten Ruhrgebiet',
      'Elektrische Seilwinde für schonendes Hochziehen',
      'Rechnungen für Versicherung oder Schutzbrief geeignet',
      'Rufbereitschaft rund um die Uhr erreichbar'
    ],
    pricingHint: 'Faire Notfall-Pauschalen zzgl. Kilometer. Keine versteckten Fantasiegebühren wie bei unlauteren Vermittlern.'
  },
  'pannenhilfe-starthilfe': {
    slug: 'pannenhilfe-starthilfe',
    title: 'Pannenhilfe & Vor-Ort Starthilfe (Bochum & Autobahnen)',
    subtitle: 'Schnelle Soforthilfe bei leerer Batterie mit dem 800 € Profi-Booster NOCO Boost Max (5250A) lokal in Bochum und auf A40, A43, A448.',
    tag: 'Lokal in Bochum & Autobahnen',
    overview: 'Nicht jede Panne erfordert gleich einen teuren Werkstattaufenthalt. Oft sind es alltägliche Missgeschicke: Sie wachen an einem frostigen Wintermorgen auf, möchten zur Arbeit fahren und beim Drehen des Schlüssels hören Sie nur ein mattes Klacken. Bei extremer Kälte verlangsamen sich die elektrochemischen Prozesse in der Starterbatterie, wodurch geschwächte Akkus schlagartig einbrechen. Ein anderes typisches Szenario: Sie haben das Auto abgestellt und unbemerkt das Standlicht brennen lassen. Am nächsten Tag ist die Batterie tiefentladen. WICHTIG: Billige Starthilfekabel können bei modernen Autos mit Dutzenden vernetzten Steuergeräten verheerende Überspannungsschäden verursachen. Deshalb setzen wir auf Werkstatt-Technik der Spitzenklasse: Mit unserem 800 Euro teuren NOCO Boost Max GB250+ (5.250 Ampere Spitzenstrom) starten wir Ihr Fahrzeug 100% funkenfrei und mit aktivem Verpolungsschutz – absolut sicher für moderne Steuergeräte, Mild-Hybride und Premium-Fahrzeuge.',
    scenarios: [
      'Winter-Kälteschock: Batterie bricht bei Minusgraden elektrochemisch zusammen',
      'Licht versehentlich angelassen: Batterie über Nacht tiefentladen',
      'Fahrzeug springt morgens nicht an (Klickendes Starterrelais)',
      'Reifenpanne: Montage des Reserverads oder Notrads direkt vor Ort',
      'Starthilfe für 12V PKW, SUV, Sportwagen & schwere Diesel-Transporter'
    ],
    processSteps: [
      {
        title: '1. Schnelle Anfahrt in 20–40 Minuten',
        desc: 'Wir machen uns unmittelbar nach Ihrem Anruf auf den Weg zu Ihrem Standort in Bochum, Wattenscheid und Autobahnen.'
      },
      {
        title: '2. Elektronik-Schonende Diagnose',
        desc: 'Wir prüfen die Batteriespannung und das Ladesystem vor Ort mit dem integrierten digitalen Voltmeter.'
      },
      {
        title: '3. Sichere Überbrückung mit NOCO Boost Max (5250A)',
        desc: 'Startvorgang mit unserem 800 € Profi-Booster: 100% funkenfrei, mit aktivem Verpolungsschutz und sauberer Spannung ohne gefährliche Spannungsspitzen.'
      },
      {
        title: '4. Weiterfahrt oder direkte Transport-Option',
        desc: 'Sollte die Batterie oder Lichtmaschine komplett defekt sein, steht unser Plateau-Transporter bereit für die direkte Fahrt zu Ihrer Wunschwerkstatt.'
      }
    ],
    realPhoto: {
      src: '/images/real/noco-boost-starthilfe.jpg',
      alt: 'NOCO Boost Max GB250+ 5250A Profi-Starthilfegerät in Bochum',
      caption: 'Originale Werkstatt-Ausrüstung: 800 € NOCO Boost Max GB250+ (5250A) – 100% funkenfrei & sicherer Schutz für moderne Steuergeräte'
    },
    guarantees: [
      '800 € NOCO Boost Max GB250+ mit 5250A Spitzenstrom',
      '100% funkenfreie Sicherheitstechnologie & aktiver Verpolungsschutz',
      'Absoluter Schutz für empfindliche Steuergeräte moderner PKW & Transporter',
      'Schnelles Eintreffen in ca. 20–40 Min. in ganz Bochum',
      'Faire, transparente Starthilfe-Pauschale ohne versteckte Kosten'
    ],
    pricingHint: 'Faire Starthilfe-Pauschale innerhalb von Bochum. Rufen Sie uns einfach kurz an.'
  },
  'bundesweite-ueberfuehrung': {
    slug: 'bundesweite-ueberfuehrung',
    title: 'Bundesweite Fahrzeugüberführung',
    subtitle: 'Zuverlässiger Fahrzeugtransfer über weite Strecken quer durch ganz Deutschland zu festen Konditionen.',
    tag: 'Fernverkehr & Deutschlandweit',
    overview: 'Sie haben Ihren Traumwagen am anderen Ende der Republik gefunden oder müssen ein Fahrzeug in eine andere Stadt überführen lassen? Wir bieten Ihnen professionelle Fernüberführungen von und nach Bochum / Ruhrgebiet in jede Region Deutschlands – von Hamburg bis München, von Köln bis Berlin.',
    scenarios: [
      'Fahrzeugkauf bei Online-Auktionen, Händlern oder Privat bundesweit',
      'Rückholung defekter oder verunfallter Fahrzeuge aus dem Urlaub',
      'Transfer von Neufahrzeugen direkt vom Werk / Auslieferungszentrum',
      'Gewerbliche Fuhrparkverlagerungen und Ausstellungstransporte'
    ],
    processSteps: [
      {
        title: '1. Individuelle Streckenplanung',
        desc: 'Wir berechnen die genaue Distanz und unterbreiten Ihnen vorab ein verbindliches Festpreisangebot.'
      },
      {
        title: '2. Terminabstimmung mit Verkäufer / Abholort',
        desc: 'Wir koordinieren die Abholung auf Wunsch direkt mit dem Verkäufer oder Autohaus vor Ort.'
      },
      {
        title: '3. Sicherer Langstreckentransport',
        desc: 'Direkter Autobahntransport ohne Umladen, überwacht und vorschriftsmäßig nach VDI 2700 gesichert.'
      },
      {
        title: '4. Pünktliche Haustürlieferung',
        desc: 'Abladung direkt an Ihrer Wunschadresse zur vereinbarten Uhrzeit.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-bmw-side.jpg',
      alt: 'Bundesweite Fahrzeugüberführung auf eigenem Spezial-Plateau',
      caption: 'Originale Einsatzaufnahme: 100% Einzelfahrt auf eigenem Plateau ohne riskantes Umladen'
    },
    guarantees: [
      'Verbindlicher Festpreis ohne nachträgliche Maut- oder Treibstoffzuschläge',
      'Fachgerechte Ladungssicherung nach VDI 2700 inklusive',
      'Regelmäßige Status- und Standort-Updates während der Fahrt',
      'Flexibel auch an Wochenenden nach Vereinbarung'
    ],
    pricingHint: 'Transparenter Kilometersatz auf Basis der einfachen Fahrtstrecke. Nutzen Sie unseren Kostenrechner oder fragen Sie direkt an.'
  },
  'elektroauto-automatik-abschleppen': {
    slug: 'elektroauto-automatik-abschleppen',
    title: 'Elektroauto & Automatik Abschleppdienst Bochum',
    subtitle: '100% akkuschonende und getriebesichere Plateau-Bergung von E-Autos, Hybriden und Automatik-Fahrzeugen im Ruhrgebiet.',
    tag: 'E-Mobilität & Automatikgetriebe',
    overview: 'Elektroautos (Tesla, VW ID, Hyundai, BMW, Mercedes) und moderne Automatik- oder Doppelkupplungsfahrzeuge dürfen unter keinen Umständen mit einem herkömmlichen Abschleppseil gezogen werden. Die Permanentmagnet-Motoren wirken als unkontrollierte Generatoren und zerstören den Inverter, während Automatikgetriebe mangels Ölpumpendruck trockenlaufen. Abschleppdienst Direkt in Bochum birgt Ihr Fahrzeug absolut schadensfrei mit absenkbarem Spezial-Plateau, hydraulischen Go-Jak Radrollern und schonender 4-Punkt-Radverzurrung.',
    scenarios: [
      'Liegenbleiber von Elektrofahrzeugen mit leerem Hauptakku oder defektem 12V-System',
      'Blockierte elektronische Feststellbremse (EPB) oder verriegelter Transportmodus',
      'Getriebeschaden, Notlauf oder blockierte Parksperre (P) bei Automatik- & DSG-Fahrzeugen',
      'Bergung von Allrad- und Hybrid-Fahrzeugen (AWD, Quattro, xDrive, 4Motion) ohne Achsbodenkontakt',
      'Direkter, versicherter Transport zum Hersteller-Servicezentrum oder zu Ihrer Wunschwerkstatt'
    ],
    processSteps: [
      {
        title: '1. Analyse von Modell & Antriebsart',
        desc: 'Bereits beim Anruf erfassen wir den genauen Fahrzeugtyp und rücken mit passenden Radrollern (Go-Jaks) und Bordnetz-Stützgeräten aus.'
      },
      {
        title: '2. Elektronik-Aktivierung oder Radroller-Einsatz',
        desc: 'Wir unterstützen bei der Aktivierung des Transportmodus oder heben blockierte Räder mit hydraulischen Rollern an, sodass kein Rad auf der Straße dreht.'
      },
      {
        title: '3. Ruckfreie Plateau-Verladung per Funkseilwinde',
        desc: 'Über flache Auffahrrampen wird das Fahrzeug behutsam auf das Plateau gezogen – ohne Unterboden- oder Batteriekontakt.'
      },
      {
        title: '4. 4-Punkt-Felgenschonende Sicherung nach VDI 2700',
        desc: 'Sicherung ausschließlich über das Reifenprofil mit weichen Trapezgurten ohne Belastung der empfindlichen Aluguss-Querlenker.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-bmw-ramp.jpg',
      alt: 'Abschleppdienst Verladung auf Spezialplateau mit Seilwinde in Bochum',
      caption: 'Originale Einsatzaufnahme: Behutsame Plateau-Verladung mit extrem flachem Auffahrwinkel für empfindliche Unterböden'
    },
    guarantees: [
      'Garantierter Schutz vor Getriebe- und Inverterschäden durch 100% Vollverladung',
      'Go-Jak hydraulische Radroller für blockierte Feststellbremsen an Bord',
      'Spezial-Plateau mit extrem flachem Winkel für tiefe Akkupacks und Spoiler',
      'Anerkannte Rechnungen nach § 14 UStG für Kfz-Schutzbriefe & Versicherungen'
    ],
    pricingHint: 'Faire Festpreise für E-Auto & Automatikbergung ab 70 € in Bochum. Kostenübernahme bei Schutzbrief oder Vollkasko in den meisten Fällen garantiert.'
  },
  'werkstatt-autoplatz': {
    slug: 'werkstatt-autoplatz',
    title: 'Werkstatt-Überführung & Autoplatz-Transport Bochum',
    subtitle: 'Transport zu Ihrer Wunschwerkstatt oder zu seriösen Händlern und Autoplätzen für Altfahrzeuge & Unfallwagen.',
    tag: 'Werkstatt & Autoplatz',
    overview: 'Sie möchten Ihr defektes oder verunfalltes Auto zu Ihrer Stammwerkstatt bringen lassen oder suchen einen seriösen Händler für den Verkauf? Wir unterstützen Sie ehrlich: Wir überführen Ihr Fahrzeug direkt zu Meisterbetrieben in ganz NRW oder zu geprüften Autoplätzen und Exporteuren, die faire Ankaufspreise ohne Feilschen zahlen.',
    scenarios: [
      'Transport zur Wunschwerkstatt für Reparatur oder Kostenvoranschlag',
      'Wirtschaftlicher Totalschaden nach Unfall: Verkauf an renommierte Autoplätze',
      'Fahrzeuge ohne TÜV oder mit Motorschaden an vertrauensvolle Händler vermitteln',
      'Direkte Schlüsselübergabe und Schadensprotokollierung vor Ort'
    ],
    processSteps: [
      {
        title: '1. Zielabstimmung',
        desc: 'Nennen Sie uns Ihre bevorzugte Werkstatt oder lassen Sie sich seriöse Händlerkontakte empfehlen.'
      },
      {
        title: '2. Pünktliche Abholung',
        desc: 'Schonende Verladung bei Ihnen vor der Haustür, am Arbeitsplatz oder an der Pannenstelle.'
      },
      {
        title: '3. Direkter Transfer ohne Umwege',
        desc: 'Transport ohne Zwischenlagerung auf eigenem Plateau direkt zum Meisterbetrieb oder Autoplatz.'
      },
      {
        title: '4. Fachgerechte Übergabe',
        desc: 'Persönliche Übergabe an das Werkstattpersonal oder den Händler mit Quittung.'
      }
    ],
    realPhoto: {
      src: '/images/real/tow-truck-bmw-ramp.jpg',
      alt: 'Werkstatt-Überführung und Autoplatz-Transport Bochum',
      caption: 'Originale Einsatzaufnahme: Schonende Plateau-Verladung für Direktüberführungen zur Wunschwerkstatt'
    },
    guarantees: [
      'Freie Werkstattwahl im gesamten Ruhrgebiet und ganz NRW',
      'Ehrliche Kontakte aus 10 Jahren Fahrzeughandel-Praxis',
      '100% Einzelfahrten auf eigenem Plateau',
      'Faire Pauschalpreise ohne Vermittlungsprovision'
    ],
    pricingHint: 'Faire Bochumer Stadtpauschale ab 70 € oder transparente Kilometerabrechnung (ca. 1,50 €/km).'
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDatabase[slug];
  if (!service) return {};

  return {
    title: `${service.title} | Abschleppdienst Direkt`,
    description: service.subtitle,
    alternates: {
      canonical: `/leistungen/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Abschleppdienst Direkt`,
      description: service.subtitle,
      url: `https://abschleppdienst-direkt.de/de/leistungen/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = serviceDatabase[slug];
  if (!service) {
    notFound();
  }

  const isAr = locale === 'ar';
  const isEn = locale === 'en';
  const currentLang = (locale === 'ar' ? 'ar' : locale === 'en' ? 'en' : 'de') as 'de' | 'ar' | 'en';

  // Semantic Hub: Related Articles for this specific service
  const relatedGuides = blogArticles.filter((article) => {
    if (article.serviceSlugLink === slug) return true;
    if (slug === 'werkstatt-autoplatz' && (article.slug.includes('motorschaden') || article.slug.includes('überführung') || article.slug.includes('ueberfuehrung'))) return true;
    return false;
  }).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: `https://abschleppdienst-direkt.de/${locale}` },
          { name: "Leistungen", url: `https://abschleppdienst-direkt.de/${locale}/leistungen` },
          { name: service.tag, url: `https://abschleppdienst-direkt.de/${locale}/leistungen/${slug}` },
        ]}
      />
      <main className="min-h-screen bg-slate-950 text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>Startseite</span>
          </Link>
          <span>/</span>
          <Link href="/leistungen" className="hover:text-amber-400 transition-colors font-semibold">
            Leistungen
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-bold truncate">{service.tag}</span>
        </div>

        {/* Hero Header of Service - Clean Editorial Style */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-4">
            <span className="w-5 h-px bg-amber-400/80"></span>
            <span>{service.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {service.subtitle}
          </p>

          {/* Quick CTAs - Emergency Call + Smooth Scroll to Bottom Inquiry */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+4915565500442"
              className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl shadow-xl shadow-red-600/30 text-sm transition-all active:scale-95"
            >
              <Phone size={18} className="fill-white" />
              <span>24h Notruf: 0155 65500442</span>
            </a>

            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md text-sm transition-all"
            >
              <span>Preisanfrage &amp; Kalkulation ↓</span>
            </a>
          </div>
        </div>

        {/* Detailed Sections - Pure Editorial Typography, No Boxes */}
        <div className="space-y-12">
          
          {/* Real Operational Photo Showcase */}
          {service.realPhoto && (
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl group">
              <img
                src={service.realPhoto.src}
                alt=""
                loading="eager"
                width={900}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
          
          {/* 1. Detaillierte Leistungsbeschreibung */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
              <ShieldCheck size={22} className="text-amber-400 flex-shrink-0" />
              <span>Detaillierte Leistungsbeschreibung</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {service.overview}
            </p>
          </div>

          {/* 2. Wann benötigen Sie diese Leistung? (Clean Bullet List) */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Wann benötigen Sie diese Leistung?
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {service.scenarios.map((sc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{sc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Ablauf Schritt für Schritt (Clean Editorial Steps) */}
          <div className="pt-8 border-t border-white/10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              So läuft die Durchführung Schritt für Schritt ab:
            </h2>
            <div className="space-y-4">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 font-black flex items-center justify-center flex-shrink-0 text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Verbindliche Garantien */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Unsere verbindlichen Qualitätsgarantien
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              {service.guarantees.map((g, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Dynamische Preiskalkulation & Konfigurator nach Leistungstyp */}
          <ServiceInquirySection
            slug={slug}
            title={service.title}
            pricingHint={service.pricingHint}
          />

          {/* 6. Contextual Semantic Silo: Praxis-Ratgeber & Fachwissen passend zu dieser Leistung */}
          {relatedGuides.length > 0 && (
            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {isAr ? "دليل الخبرة والممارسة الميدانية" : isEn ? "Practical Knowledge & Insights" : "Praxiswissen & Fach-Ratgeber"}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <BookOpen size={18} className="text-amber-400" />
                    <span>
                      {isAr
                        ? "أدلة وحالات عملية مرتبطة بهذه الخدمة بالتحديد:"
                        : isEn
                        ? "Helpful Guides Related to This Service:"
                        : "Praxis-Ratgeber & Erfahrungsberichte zu dieser Leistung:"}
                    </span>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isAr ? "جميع مقالات المدونة" : "Alle Ratgeber"}</span>
                  <ChevronRight size={14} className="rtl:rotate-180" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {relatedGuides.map((guide) => {
                  const gTrans = guide.translations[currentLang];
                  return (
                    <Link
                      key={guide.slug}
                      href={`/blog/${guide.slug}`}
                      className="group p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 mb-1.5 block">
                          {guide.categoryLabel[currentLang]}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-3 leading-snug line-clamp-3">
                          {gTrans.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-semibold group-hover:text-white pt-2 border-t border-white/5">
                        <span>{isAr ? "قراءة الدليل" : "Ratgeber lesen"}</span>
                        <ArrowRight size={12} className="rtl:rotate-180 text-amber-400" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Return Button */}
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-slate-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft size={16} className="rtl:rotate-180" />
              <span>Zurück zur Startseite</span>
            </Link>

            <Link
              href="/leistungen"
              className="font-bold text-amber-400 hover:underline"
            >
              Alle Leistungen ansehen
            </Link>
          </div>

        </div>

      </div>
    </main>
    </>
  );
}