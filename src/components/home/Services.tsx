"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { 
  Truck, 
  Zap, 
  Map, 
  ArrowRight, 
  Check, 
  X, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  ExternalLink, 
  Car, 
  Wrench,
  HelpCircle,
  Clock
} from 'lucide-react';

interface ServiceData {
  slug: string;
  icon: any;
  title: string;
  tag: string;
  desc: string;
  empathyNote?: string;
  features: string[];
  h1: string;
  scenarios: string[];
  processSteps: { title: string; desc: string }[];
  equipment: string[];
  pricing: string;
  hasCalculator?: boolean;
  realPhoto?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export default function Services() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [calcKm, setCalcKm] = useState(75);

  const servicesList: ServiceData[] = [
    {
      slug: 'fahrzeugueberfuehrung',
      icon: Truck,
      title: isAr ? "نقل وشحن السيارات من A إلى B (في عموم ألمانيا)" : isEn ? "Vehicle Transfer from A to B (Nationwide)" : "Fahrzeugüberführung von A nach B (Bundesweit)",
      tag: isAr ? "في عموم ألمانيا وكامل NRW • حتى 3.5 طن" : isEn ? "Nationwide & NRW • Up to 3.5 Tons" : "Bundesweit & NRW • Bis 3,5 Tonnen",
      desc: isAr 
        ? "نقل فردي متخصص 100% بدون أي تفريغ أو وسيط لسيارات الركاب، السيارات بدون لوحات، سيارات المعارض والتجار، والسيارات الرياضية والكلاسيكية من أي نقطة A إلى B في عموم ألمانيا مباشرة للعنوان المطلوب."
        : isEn 
        ? "Dedicated direct single-vehicle transport for passenger cars, unregistered purchases, dealership fleets, and sports/classic cars from point A to B anywhere in Germany directly to your door."
        : "Sicherer und termingerechter Einzeltransport von PKW aller Art von Punkt A nach Punkt B – in ganz Nordrhein-Westfalen und bundesweit. Schonender Transport für Neuwagen, abgemeldete PKW, Oldtimer und Sportwagen auf Spezialplateau bis 3,5 t.",
      hasCalculator: true,
      features: [
        isAr ? 'رحلات فردية 100% في عموم ألمانيا' : '100% Einzelfahrten bundesweit ohne Umladen',
        isAr ? 'سيارات جديدة وبدون لوحات' : 'Abgemeldete & Neufahrzeuge',
        isAr ? 'استلام وتسليم مباشر من الباب للباب' : 'Haustürabholung & bundesweite Zustellung',
        isAr ? 'تثبيت العجلات بـ 4 نقاط VDI 2700' : '4-Punkt-Radverzurrung nach VDI 2700'
      ],
      h1: "Fahrzeugüberführung & Autotransport von A nach B bundesweit & in NRW",
      realPhoto: {
        src: '/images/real/tow-truck-audi-rs3-wide.jpg',
        alt: 'Abschleppdienst Direkt - Transporter mit Plateau und geladenem Audi RS3',
        caption: 'Originale Einsatzaufnahme: Unser Transporter bei der Überführung eines Audi RS3 Sportback zur Kfz-Meisterwerkstatt'
      },
      scenarios: [
        "Fahrzeugkauf ohne Kennzeichen / abgemeldete Fahrzeuge bundesweit",
        "Transport zwischen Werkstätten, Autohäusern oder Privatpersonen",
        "Schonender Transport von Oldtimern und Sportwagen",
        "Überführung rollfähiger Autos bei Wohnortwechsel oder Umzug quer durch Deutschland"
      ],
      processSteps: [
        { title: "1. Termingerechte Bereitstellung", desc: "Pünktliche Anfahrt zum vereinbarten Abholort nach Absprache." },
        { title: "2. 4-Punkt-Radverzurrung", desc: "Felgenschonende Sicherung mit weichen Spezial-Spanngurten auf dem Plateau." },
        { title: "3. Sichere Direktfahrt", desc: "Einzeltransport auf eigenem Plateau ohne Zwischenlagerung oder Umladen." },
        { title: "4. Übergabe am Ziel", desc: "Sicheres Abladen direkt an der Haustür, Garage oder Werkstatt." }
      ],
      equipment: [
        "Flacher Auffahrwinkel – ideal für tiefergelegte Autos",
        "Spezial-Spanngurte mit Felgenschonern",
        "Ordnungsgemäße Ladungssicherung nach VDI 2700"
      ],
      pricing: "Transparente Grundpauschale (50 €) zzgl. ca. 1,50 € pro gefahrenem Kilometer (gemäß § 19 UStG ohne MwSt)."
    },
    {
      slug: 'abschleppdienst-werkstatt',
      icon: AlertTriangle,
      title: isAr ? "خدمة السحب وإنقاذ الحوادث (سيارات، SUV وباصات حتى 7م)" : isEn ? "Towing & Accident Recovery (Cars, SUVs & Vans up to 7m)" : "Abschleppdienst (PKW, SUV & Busse bis 7m)",
      tag: isAr ? "أعطال وحوادث • حتى 7 أمتار طولاً" : isEn ? "Breakdowns & Accidents • Up to 7m Length" : "Panne & Unfall • Bis 7 Meter Länge",
      desc: isAr 
        ? "سحب فوري عند تعطل المحرك، الجير، أو حوادث السير. مجهزون بونش سحب كهربائي وسطحة طويلة تتسع حتى للباصات والفانات حتى 7 أمتار ونقلها لورشة الزبون."
        : isEn 
        ? "Rapid roadside recovery and towing for engine failures, transmission faults, and accident damage for cars, SUVs, and commercial vans up to 7m directly to your chosen repair shop."
        : "Schnelle und sichere Bergung sowie Transport von Fahrzeugen bei Panne oder Unfall. Fachgerechter Transport für PKW, schwere SUV sowie Kleinbusse und Transporter bis 7 Meter Länge direkt zur Wunschwerkstatt.",
      empathyNote: "Ihr Motor geht plötzlich aus oder Sie hatten einen Unfall? Machen Sie sich keine Sorgen: Wir nehmen Ihnen in diesem stressigen Moment die Last ab, sichern die Gefahrenstelle und bringen Ihr Auto schonend zur Werkstatt.",
      features: [
        isAr ? 'سيارات ركاب، SUV وباصات حتى 7 أمتار' : 'PKW, SUV & Busse bis 7m',
        isAr ? 'ونش سحب لاسلكي وسطحة عريضة' : 'Elektrische Seilwinde & Plateau',
        isAr ? 'حرية اختيار الورشة في كامل NRW' : 'Freie Werkstattwahl in ganz NRW',
        isAr ? 'تأمين الحوادث بشبك مخصص' : 'Sicherungsnetz gegen lose Kleinteile'
      ],
      h1: "Abschleppdienst für PKW, SUV & Busse bis 7m bei Panne & Unfall in Bochum",
      realPhoto: {
        src: '/images/real/tow-truck-bmw-ramp.jpg',
        alt: 'Abschleppdienst Direkt - Verladung BMW Z3 mit Plateau und Seilwinde in Bochum',
        caption: 'Originale Einsatzaufnahme: Behutsame Plateau-Verladung mit 4-Punkt-Radverzurrung'
      },
      scenarios: [
        "PKW Abschleppdienst: Schnelle und sichere Bergung sowie Transport von Fahrzeugen bei Panne oder Unfall",
        "Abschleppdienst für SUV: Fachgerechter Transport auch größerer und schwerer Fahrzeuge mit passender Ausstattung bis 3,5 t",
        "Abschleppdienst für Busse (bis 7 Meter): Zuverlässiges Abschleppen und Umsetzen von Kleinbussen und Transportern (Kastenwagen, Sprinter & Vans)",
        "Unfallfahrzeuge mit Karosserie- oder Achsschaden, blockierte Räder oder ohne Schlüssel"
      ],
      processSteps: [
        { title: "1. Notruf & Standort", desc: "Kurzer Anruf oder WhatsApp mit Autobahnausfahrt oder Straßenname." },
        { title: "2. Express-Anfahrt", desc: "Eintreffen in ca. 20–40 Minuten direkt bei Ihrem Fahrzeug." },
        { title: "3. Behutsames Aufladen", desc: "Schonender Seilwindenzug ohne Beschädigung von Frontschürze oder Fahrwerk." },
        { title: "4. Wunschwerkstatt", desc: "Direkter Transport zu Ihrem Kfz-Meisterbetrieb oder nach Hause." }
      ],
      equipment: [
        "Elektrische Seilwinde mit Funkfernbedienung",
        "Radroller (Go-Jaks) für blockierte Räder",
        "VDI-2700-zertifizierte 4-Punkt-Radverzurrung",
        "Verlängerte Plateau-Ladefläche für Überlängen bis 7 m"
      ],
      pricing: "Faire Notfall-Grundpauschale (50 €) zzgl. Kilometer. Ordnungsgemäße Rechnung zur Vorlage bei Ihrer Kfz-Versicherung."
    },
    {
      slug: 'pannenhilfe-starthilfe',
      icon: Zap,
      title: isAr ? "المساعدة على الطريق وشحن البطارية (محلياً في بوخوم)" : isEn ? "Roadside Assistance & Pro Jump Start (Bochum)" : "Pannenhilfe & Vor-Ort Starthilfe (Bochum)",
      tag: isAr ? "نطاق بوخوم والأوتوبان • وصول خلال 20–40 دقيقة" : isEn ? "Bochum & Highways • On-Site in 20–40 Min." : "Lokal in Bochum & Autobahnen • 20–40 Min.",
      desc: isAr 
        ? "مساعدة فورية ومباشرة في موقع العطل داخل مدينة بوخوم وأحيائها وعلى الطرق السريعة (A40, A43, A448). تشغيل فوري للبطاريات الفارغة بجهاز البوستر NOCO Boost Max (5250A) بقيمة 800€ دون أي خطر على حواسيب السيارة، مع خدمة تبديل الإطارات."
        : isEn 
        ? "Rapid local roadside assistance directly on site in Bochum and on motorways (A40, A43, A448). Spark-proof jump start with our 800 € NOCO Boost Max GB250+ (5250A) plus fast spare wheel change."
        : "Schnelle Soforthilfe direkt vor Ort im Stadtgebiet Bochum und auf den Autobahnen A40, A43 & A448. Professionelle Starthilfe mit dem 800 € Profi-Booster NOCO Boost Max (5250A) ohne Risiko für die Bordelektronik sowie schneller Radwechsel vor Ort.",
      empathyNote: "Auto springt morgens bei Kälte nicht an oder Licht vergessen? In Bochum und auf den Autobahnen A40/A43 sind wir in ca. 20–40 Minuten bei Ihnen vor Ort und bringen Ihr Fahrzeug sicher wieder in Gang.",
      features: [
        isAr ? 'وصول سريع خلال 20–40 دقيقة في بوخوم' : 'In 20–40 Min. vor Ort in Bochum & A40/A43',
        isAr ? 'بوستر احترافي NOCO 5250A (قيمة 800€)' : '800 € Profi-Booster (NOCO 5250A)',
        isAr ? '100% حماية ضد الشرر وحماية الحواسيب' : '100% Funkenfrei & Schutz für Steuergeräte',
        isAr ? 'تبديل الإطارات في موقع التوقف' : 'Radwechsel bei Reifenpanne vor Ort'
      ],
      h1: "Pannenhilfe & Vor-Ort Starthilfe in Bochum & Autobahnen mit NOCO Boost Max",
      realPhoto: {
        src: '/images/real/noco-boost-starthilfe.jpg',
        alt: 'NOCO Boost Max GB250+ 5250A Profi-Starthilfegerät in Bochum',
        caption: 'Originale Werkstatt-Ausrüstung: 800 € NOCO Boost Max GB250+ (5250A) – 100% funkenfrei & sicherer Schutz für moderne Steuergeräte'
      },
      scenarios: [
        "Winter-Kälteschock: Batterie bricht bei Frost elektrochemisch zusammen",
        "Licht versehentlich angelassen: Batterie über Nacht tiefentladen",
        "Klickendes Starterrelais beim Startversuch im Raum Bochum",
        "Reifenpanne: Montage des Reserverads direkt vor Ort auf Straßen & Autobahnen",
        "Starthilfe für 12V PKW, SUV, Sportwagen & schwere Diesel-Transporter"
      ],
      processSteps: [
        { title: "1. Direkte Anfahrt", desc: "Wir kommen in ca. 20–40 Min. zu Ihnen nach Hause, zur Firma oder an den Straßenrand in Bochum." },
        { title: "2. Spannungsdiagnose", desc: "Prüfung von Batteriespannung und Ladesystem mit dem integrierten Digital-Voltmeter." },
        { title: "3. Schonende Überbrückung", desc: "Startvorgang mit dem 800 € NOCO Boost Max GB250+ (funkenfrei, keine Überspannungsspitzen)." },
        { title: "4. Transport-Option parat", desc: "Sollte die Batterie oder Lichtmaschine defekt sein, steht unser Plateau-Transporter bereit." }
      ],
      equipment: [
        "NOCO Boost Max GB250+ (5250A Spitzenstrom, Wert ca. 800 €)",
        "100% Funkenfreie Technologie & aktiver Verpolungsschutz",
        "Schutz moderner Steuergeräte (keine gefährlichen Spannungsspitzen)",
        "Startet selbst eiskalte V8/V10 & schwere Nutzfahrzeug-Dieselaggregate",
        "Hydraulischer Wagenheber & Spezial-Radwechselwerkzeug für Reifenpannen"
      ],
      pricing: "Günstige Starthilfe-Pauschale innerhalb von Bochum. Anrufen und Standort durchgeben."
    },
    {
      slug: 'bundesweite-ueberfuehrung',
      icon: Map,
      title: isAr ? "نقل البضائع والمعدات والآليات حتى 3.5 طن (في عموم ألمانيا)" : isEn ? "Freight & Cargo Transport up to 3.5t (Nationwide)" : "Warentransport & Fracht-Express bis 3,5 t (Bundesweit)",
      tag: isAr ? "بضائع، آليات ومعدات • في عموم ألمانيا" : isEn ? "Pallets, Machinery & Freight • Nationwide" : "Paletten, Maschinen & Fracht • Bundesweit",
      desc: isAr 
        ? "تنفيذ رحلات نقل مباشر للبضائع والطرود الثقيلة، الباليتات، الآليات والمعدات حتى 3.5 طن من النقطة A إلى B في عموم ألمانيا على سطحة مخصصة بدون تفريغ وسيط أو تأخير."
        : isEn 
        ? "Dedicated direct transport for urgent freight, pallets, machines, and diverse cargo up to 3.5 tonnes between the Ruhr area and all German federal states."
        : "Professionelle Durchführung von Express-Transportaufträgen für eilige Fracht, Palettenware, Baustellen- und Maschinenfracht bis 3,5 t quer durch ganz Deutschland zu transparenten Festpreisen.",
      hasCalculator: true,
      features: [
        isAr ? 'نقل بضائع ومعدات حتى 3.5 طن' : 'Warentransport & Fracht bis 3,5 t',
        isAr ? 'مواعيد دقيقة بدون تفريغ وسيط' : 'Pünktliche Direktfahrten bundesweit',
        isAr ? 'تأمين الحمولة معتمد VDI 2700' : 'Ladungssicherung nach VDI 2700',
        isAr ? 'أسعار تفضيلية للمسافات فوق 200 كم' : 'Attraktive Fernstreckensätze'
      ],
      h1: "Bundesweiter Warentransport & Express-Fracht bis 3,5 t",
      realPhoto: {
        src: '/images/real/tow-truck-bmw-side.jpg',
        alt: 'Bundesweite Fahrzeugüberführung auf eigenem Spezial-Plateau',
        caption: 'Originale Einsatzaufnahme: 100% Einzelfahrt auf eigenem Plateau ohne riskantes Umladen'
      },
      scenarios: [
        "Warentransport & Logistik: Durchführung von Transportaufträgen für unterschiedlichste Güter, Paletten & Maschinen bis 3,5 t",
        "Fahrzeugkauf in Münster, Bielefeld, Köln, Düsseldorf, Frankfurt oder Berlin",
        "Rückholung defekter oder verunfallter Fahrzeuge aus dem Urlaub",
        "Termintransporte ohne Zwischenlagerung von Punkt A nach Punkt B"
      ],
      processSteps: [
        { title: "1. Feste Streckenkalkulation", desc: "Transparenter Festpreis vorab ohne versteckte Maut- oder Spritzuschläge." },
        { title: "2. Terminabsprache", desc: "Wir koordinieren die Abholung gerne direkt mit dem Verkäufer oder Absender." },
        { title: "3. Direktfahrt ohne Umladen", desc: "Ihre Fracht oder Ihr Wagen bleibt während der gesamten Strecke sicher auf unserem Plateau." },
        { title: "4. Pünktliche Haustürlieferung", desc: "Abladung und dokumentierte Frachtübergabe am Bestimmungsort." }
      ],
      equipment: [
        "Ebene Plateau-Ladefläche mit hoher Nutzlast bis 3,5 t",
        "Schwerlast-Zurrpunkte & VDI-2700-Spanngurte",
        "Rutschfeste Aluminium-Fahrspuren & Wetterschutz",
        "Persönliche Erreichbarkeit während des gesamten Transports"
      ],
      pricing: "Transparente Abrechnung nach Streckenkilometern (ca. 1,50 €/km). Nutzen Sie unseren Rechner für eine erste Schätzung."
    },
    {
      slug: 'elektroauto-automatik-abschleppen',
      icon: Car,
      title: isAr ? "نقل وإنقاذ السيارات الكهربائية والهجينة (E-Autos)" : isEn ? "Electric & Hybrid Vehicle Specialized Towing" : "Spezial-Transport für E-Autos & Hybrid",
      tag: isAr ? "حماية المحركات والبطارية • Go-Jaks" : isEn ? "Drivetrain Protection • Go-Jak Dollies" : "Schonend • Bis 3,5 t • Go-Jaks",
      desc: isAr 
        ? "سحب متخصص لسيارات تسلا والسيارات الكهربائية عند نفاد بطارية 12V أو قفل الفرامل الإلكترونية، باستخدام بكرات المناورة (Go-Jaks) لمنع تدوير المحركات الكهربائية دون تزييت."
        : isEn 
        ? "Specialized transport for Tesla and EVs with dead 12V batteries or stuck electronic parking brakes. We deploy Go-Jak dollies to eliminate drivetrain friction."
        : "Schonender Transport von Elektrofahrzeugen mit leerer 12V-Batterie oder blockierter Feststellbremse. Einsatz von Rangierrollern (Go-Jaks) zum Schutz des elektrischen Antriebsstrangs.",
      features: [
        isAr ? 'حماية تامة لمحركات الدفع الكهربائي' : 'Schutz vor Getriebe- & Motorschäden',
        isAr ? 'بكرات مناورة خاصة (Go-Jaks) للعجلات المقفلة' : 'Einsatz von Go-Jak Rangierrollern',
        isAr ? 'نقل مباشر لمراكز صيانة تسلا وماركات E-Auto' : 'Direktfahrt zu Tesla & E-Werkstätten',
        isAr ? 'معرفة دقيقة بإجراءات Tow Mode للكهرباء' : 'Kenntnis aller E-Auto Freilaufmodi'
      ],
      h1: "Spezialtransport für E-Autos & Hybridfahrzeuge in Bochum & NRW",
      realPhoto: {
        src: '/images/real/tow-truck-audi-clean-user.jpg',
        alt: 'Abschleppdienst Direkt - Sicherer Transport von modernen Fahrzeugen in Bochum',
        caption: 'Fachgerechter Transport moderner E-Autos und Plug-in Hybride mit Radverzurrung nach Herstellervorgaben'
      },
      scenarios: [
        "Tesla Model 3, Y, S oder X mit toter 12V-Batterie und blockierter Feststellbremse",
        "E-Auto lässt sich nicht in den Freilauf- oder Abschleppmodus (Tow Mode) schalten",
        "Transport zu zertifizierten Hochvolt-Werkstätten oder Tesla Service Centern",
        "Hybrid-Fahrzeuge mit elektronischer Getriebesperre"
      ],
      processSteps: [
        { title: "1. Fachdiagnose vor Ort", desc: "Prüfung ob Bordnetz reagiert oder Rangierroller angebracht werden müssen." },
        { title: "2. Schonende Go-Jak-Verladung", desc: "Anheben der blockierten Räder ohne Kraftaufwand auf den Antriebsstrang." },
        { title: "3. Seilwindenzug ohne Reibung", desc: "Behutsames Aufziehen auf das Plateau." },
        { title: "4. Hochvolt-Werkstatt", desc: "Direkte Zustellung beim autorisierten Service-Partner." }
      ],
      equipment: [
        "Spezielle Schwerlast-Rangierroller (Go-Jaks)",
        "Isolierte Werkzeuge für 12V-Stützspannung",
        "Schonende Reifengurte ohne Felgenkontakt",
        "Seilwinde mit variabler Zugkraft"
      ],
      pricing: "Transparente Grundpauschale zzgl. geringer Go-Jak-Erschwerniszuschlag (25 €) bei blockierten Rädern."
    },
    {
      slug: 'werkstatt-autoplatz',
      icon: Wrench,
      title: isAr ? "نقل للورشة المفضلة والمساعدة ببيع السيارة بالمعارض" : isEn ? "Workshop Transfers & Car Yard Trading Transport" : "Werkstatt-Überführung & Transport zum Autoplatz",
      tag: isAr ? "حرية اختيار الورشة • بيع وشراء" : isEn ? "Free Workshop Choice • Export & Trade" : "Fahrzeugverkauf & Reparatur",
      desc: isAr 
        ? "نقل سيارتك المعطلة لورشتك المفضلة أو ورشات شريكة موثوقة في بوخوم، أو نقلها إلى معارض السيارات ومواقع التصدير (Autoplätze) لمساعدتك في بيعها بسعر عادل دون استغلال."
        : isEn 
        ? "Direct transfer to your preferred repair shop or trusted partner facilities in Bochum. Plus honest support and transport to established trading yards for selling your old or damaged car."
        : "Transport Ihres verunfallten oder defekten Autos zur Wunschwerkstatt oder zu seriösen Händlern und Autoplätzen. Auf Wunsch ehrliche Beratung und Vermittlung bewährter Kontakte.",
      features: [
        isAr ? 'حرية كاملة لاختيار الورشة في بوخوم و NRW' : 'Freie Werkstattwahl in ganz NRW',
        isAr ? 'نقل لمعارض السيارات ومراكز التصدير الموثوقة' : 'Transport zu seriösen Autoplätzen',
        isAr ? 'خبرة 10 سنوات بأسواق السيارات دون عمولات خفية' : 'Ehrliche Kontakte aus 10 Jahren Praxis',
        isAr ? 'تسليم رسمي وموثق للسيارة' : 'Dokumentierte Fahrzeugübergabe'
      ],
      h1: "Werkstatt-Überführung & Transport zum Autoplatz in Bochum & Umgebung",
      realPhoto: {
        src: '/images/real/tow-truck-bmw-ramp.jpg',
        alt: 'Abschleppdienst Direkt - Transport zur Meisterwerkstatt in Bochum',
        caption: 'Direkte Überführung zur Wunschwerkstatt oder zum Autoplatz ohne Umwege'
      },
      scenarios: [
        "Wagen nicht fahrbereit: Transfer zur Stammwerkstatt für Kostenvoranschlag",
        "Wirtschaftlicher Totalschaden nach Unfall: Verkauf an renommierte Autoplätze",
        "Altfahrzeug ohne TÜV: Überführung zu Exporteuren oder Händlern",
        "Zweitmeinung einholen: Transfer zwischen zwei Kfz-Fachbetrieben"
      ],
      processSteps: [
        { title: "1. Beratung & Zielabsprache", desc: "Sie bestimmen die Zielwerkstatt oder bitten um Empfehlung seriöser Händler." },
        { title: "2. Schnelle Abholung", desc: "Schonende Verladung bei Ihnen vor der Haustür oder am Straßenrand." },
        { title: "3. Direkter Transfer", desc: "Fahrt ohne Zwischenlagerung direkt zum Meisterbetrieb oder Autoplatz." },
        { title: "4. Schlüsselübergabe", desc: "Ordnungsgemäße Übergabe an den Werkstattleiter oder Händler vor Ort." }
      ],
      equipment: [
        "Plateau mit niedriger Auffahrhöhe",
        "4-Punkt-Spanngurte nach VDI 2700",
        "Seilwinde für nicht anspringende Motoren"
      ],
      pricing: "Faire Bochumer Stadtpauschale oder transparente Kilometerabrechnung (ca. 1,50 €/km)."
    }
  ];

  return (
    <section id="leistungen" className="py-20 sm:py-28 bg-slate-900/60 text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header - Calm, Prestigious & Editorial */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-3">
            <ShieldCheck size={16} className="text-amber-400 shrink-0" />
            <span>{isAr ? "دليل خدماتنا الشامل • حتى 3.5 طن" : isEn ? "Full Service Scope • Up to 3.5 Tonnes" : "Leistungsspektrum • Bis 3,5 Tonnen"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {isAr ? "خدماتنا بالتفصيل: سحب، نقل وإغاثة على مدار 24 ساعة" : isEn ? "Our Services at a Glance: 24h Towing, Transfer & Roadside" : t('title')}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {isAr
              ? "نقدم حزمة خدمات متكاملة تغطي كافة احتياجات السيارات حتى وزن 3.5 طن: من سحب الحوادث الطارئة على الأوتوبان، إلى النقل المجدول بين المدن، واشتراك البطاريات بأحدث التجهيزات الألمانية."
              : isEn
              ? "Comprehensive automotive transport solutions up to 3.5 tonnes: from 24h highway recovery to scheduled nationwide transfers and electronics-safe jump starts."
              : "Vom schnellen Pannen-Notruf auf A40 und A43 über termingerechte Überführungen bis hin zur Hochleistungs-Starthilfe – alle Dienstleistungen persönlich und verlässlich durch unser eingespieltes Einsatzteam rund um Fahrer Adam."}
          </p>
        </div>

        {/* Editorial Service Catalog (No Box Cards! Clean, Prestigious Editorial Rows with Dividers) */}
        <div className="border-t border-b border-white/10 divide-y divide-white/10">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="py-8 sm:py-10 transition-colors hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Column: Icon + Header + Narrative Description */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                          {service.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal pl-0 sm:pl-13">
                      {service.desc}
                    </p>

                    {/* Feature Bullets (Clean Editorial Text with subtle amber dots, NOT boxed tags) */}
                    <div className="pt-2 pl-0 sm:pl-13 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                      {service.features.map((feat, fIdx) => (
                        <span key={fIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                          <span className="text-slate-300 font-medium">{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Pricing & Clean Action Triggers (No Boxes) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5 space-y-4">
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-200 font-semibold block mb-1">
                        {isAr ? "التسعير المعتمد:" : isEn ? "Transparent Pricing:" : "Abrechnung & Richtpreis:"}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {service.pricing}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-500/15"
                      >
                        <span>{t('viewDetails')}</span>
                        <ArrowRight size={15} className="rtl:rotate-180" />
                      </button>

                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-amber-400 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
                      >
                        <span>{isAr ? "طلب الخدمة ↓" : isEn ? "Request Service ↓" : "Anfragen ↓"}</span>
                      </a>

                      <Link
                        href={`/leistungen/${service.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 font-semibold px-2 py-1 transition-colors"
                      >
                        <span>{isAr ? "صفحة التفاصيل" : isEn ? "Specialist Page" : "Fachseite"}</span>
                        <ExternalLink size={12} />
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Editorial Assurance */}
        <div className="mt-12 text-center sm:text-left text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            {isAr
              ? "هل تحتاج إلى خدمة غير مذكورة أعلاه أو لديك حالة خاصة؟ تواصل معنا هاتفياً مباشرة لنقدم لك الحل الأمسب."
              : isEn
              ? "Need a specialized transport not listed here? Call our driver Adam directly for a customized solution."
              : "Haben Sie eine spezielle Transportanfrage oder einen Problemfall? Rufen Sie unser Team oder Fahrer Adam direkt an."}
          </p>
          <a
            href="tel:+4915565500442"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold whitespace-nowrap text-sm"
          >
            <Phone size={15} />
            <span>0155 65500442</span>
          </a>
        </div>

      </div>

      {/* ======================================================== */}
      {/* INTERACTIVE DETAIL WINDOW (MODAL WITH H1, H2 & DETAILS) */}
      {/* ======================================================== */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-slate-900 border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 bg-slate-950 pr-14">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                {selectedService.tag}
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {selectedService.h1}
              </h2>
              
              <p className="mt-2 text-sm text-slate-300">
                {selectedService.desc}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Real Operational Photo Showcase */}
              {selectedService.realPhoto && (
                <div className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-lg">
                  <div className="relative h-48 sm:h-64 w-full">
                    <img
                      src={selectedService.realPhoto.src}
                      alt=""
                      loading="eager"
                      width={700}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Empathy Note */}
              {selectedService.empathyNote && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <strong className="block text-white mb-1">Beruhigende Hilfe vor Ort:</strong>
                  <span>{selectedService.empathyNote}</span>
                </div>
              )}

              {/* Typische Szenarien (Clean Editorial List) */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold text-white mb-2">
                  Wann benötigen Sie diesen Service?
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedService.scenarios.map((sc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                      <span>{sc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ablauf Schritt für Schritt (Clean Numbered List) */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold text-white mb-2.5">
                  So läuft die Durchführung ab:
                </h3>
                <div className="space-y-2.5 text-xs">
                  {selectedService.processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="font-mono font-bold text-amber-400 text-xs w-4">
                        {idx + 1}.
                      </span>
                      <div>
                        <strong className="text-white">{step.title}: </strong>
                        <span className="text-slate-300 leading-relaxed">{step.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ausrüstung & Sicherheit */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold text-white mb-2">
                  Ausrüstung &amp; Ladungssicherung
                </h3>
                <ul className="space-y-1 text-xs text-slate-300">
                  {selectedService.equipment.map((eq, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={13} className="text-amber-400 flex-shrink-0" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preise */}
              <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
                <strong className="block text-white mb-1">Preise &amp; Abrechnung:</strong>
                <p>{selectedService.pricing}</p>
              </div>

              {/* Calculator for transfers */}
              {selectedService.hasCalculator && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Richtpreiskalkulation:</span>
                    <span className="text-xs text-slate-400">50 € Basis + ca. 1,50 €/km</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Fahrtstrecke:</span>
                    <span className="text-white font-bold">{calcKm} km</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={350}
                    step={5}
                    value={calcKm}
                    onChange={(e) => setCalcKm(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />

                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Kalkulierter Richtpreis (§ 19 UStG):</span>
                      <span className="text-xl font-bold text-amber-400">ca. {Math.max(50, Math.round(50 + (calcKm * 1.50)))} €</span>
                    </div>
                    <a
                      href="#kontakt"
                      onClick={() => setSelectedService(null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                    >
                      <span>Termin anfragen ↓</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Direct Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+4915565500442"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all active:scale-95"
                >
                  <Phone size={15} />
                  <span>24h Notruf: 0155 65500442</span>
                </a>

                <a
                  href="#kontakt"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <span>Zur Preisanfrage ↓</span>
                </a>

                <Link
                  href={`/leistungen/${selectedService.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-slate-300 py-3 px-4 rounded-xl text-xs font-semibold transition-colors"
                >
                  <span>Fachdetails</span>
                  <ExternalLink size={13} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
