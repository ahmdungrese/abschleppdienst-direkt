"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Phone, MessageCircle, Send, Clock, CheckCircle2, Truck, AlertTriangle, CreditCard, Crosshair, Loader2 } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('Contact');

  // Contact Info
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  // Dynamic Route / Distance Fields (for Überführung & Langstrecke)
  const [routeFrom, setRouteFrom] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleCondition, setVehicleCondition] = useState('Fahrbereit (angemeldet / abgemeldet)');
  const [appointment, setAppointment] = useState('Schnellstmöglich');

  // Dynamic Highway / Emergency Fields (for Abschleppen & Unfall)
  const [autobahn, setAutobahn] = useState('A 40 (Ruhrschnellweg)');
  const [highwayExit, setHighwayExit] = useState('');
  const [destinationWorkshop, setDestinationWorkshop] = useState('');
  const [emergencyCondition, setEmergencyCondition] = useState('Motorschaden / Fahrzeug springt nicht an');

  // Starthilfe Problem
  const [breakdownType, setBreakdownType] = useState('Batterie leer / Starthilfe (12V / 24V)');
  const [localAddress, setLocalAddress] = useState('');

  // Warentransport & Logistik
  const [freightType, setFreightType] = useState('Palettenware / Stückgut');
  const [freightWeight, setFreightWeight] = useState('Bis 1,5 Tonnen');

  // General notes
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [gpsLocationUrl, setGpsLocationUrl] = useState('');

  // Handle subtle GPS location capture
  const handleDetectLocation = (targetSetter: (val: string) => void) => {
    if (!navigator.geolocation) {
      alert("Standortermittlung wird von Ihrem Browser leider nicht unterstützt.");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        const mapsLink = `https://maps.google.com/?q=${lat},${lng}`;
        setGpsLocationUrl(mapsLink);
        targetSetter(`GPS: ${lat}, ${lng} (Standort ermittelt)`);
        setIsLocating(false);
      },
      () => {
        alert("Standortzugriff wurde nicht erlaubt oder konnte nicht ermittelt werden. Bitte Adresse manuell eintragen.");
        setIsLocating(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Key NRW Autobahnen
  const nrwAutobahnen = [
    "A 40 (Ruhrschnellweg: Essen ↔ Bochum ↔ Dortmund)",
    "A 43 (Münster ↔ Recklinghausen ↔ Bochum ↔ Wuppertal)",
    "A 448 (Bochumer Ring: Südring ↔ Wattenscheid)",
    "A 42 (Emscherschnellweg: Gelsenkirchen ↔ Herne ↔ Oberhausen)",
    "A 2 (Ruhr-Achse: Oberhausen ↔ Gladbeck ↔ Dortmund)",
    "A 44 (Bochum / Witten / Dortmund)",
    "A 45 (Sauerlandlinie: Dortmund ↔ Hagen ↔ Siegen)",
    "A 52 (Essen ↔ Düsseldorf)",
    "A 1 (Köln ↔ Wuppertal ↔ Dortmund ↔ Münster)",
    "A 3 (Köln ↔ Duisburg ↔ Oberhausen)",
    "Stadtgebiet Bochum / Innerstädtische Straße",
    "Andere Autobahn / Bundesstraße in NRW"
  ];

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formattedMessage = `Hallo Abschleppdienst Direkt,\n\nNeue Preisanfrage über die Website:\n`;
    formattedMessage += `👤 Name: ${name}\n`;
    formattedMessage += `📞 Telefon: ${phone}\n`;
    formattedMessage += `🔧 Gewünschte Leistung: ${service}\n\n`;

    if (service.includes('Abschleppdienst')) {
      formattedMessage += `📍 Autobahn / Pannenort: ${autobahn}\n`;
      formattedMessage += `🛣️ Nächste Ausfahrt / Straße: ${highwayExit || 'Vor Ort abklären'}\n`;
      formattedMessage += `🏥 Wohin soll geschleppt werden?: ${destinationWorkshop || 'Zur Wunschwerkstatt / nach Hause'}\n`;
      formattedMessage += `🚗 Fahrzeug: ${vehicleModel || 'Fahrzeug'}\n`;
      formattedMessage += `⚠️ Zustand: ${emergencyCondition}\n`;
    } else if (service.includes('Starthilfe')) {
      formattedMessage += `📍 Standort in Bochum: ${localAddress || 'Im Stadtgebiet'}\n`;
      formattedMessage += `⚡ Art der Panne: ${breakdownType}\n`;
      formattedMessage += `🚗 Fahrzeug: ${vehicleModel || 'PKW'}\n`;
    } else if (service.includes('Warentransport')) {
      formattedMessage += `🛣️ Frachtstrecke: Von [${routeFrom || 'Bochum'}] ➔ Nach [${routeTo || 'Zielort'}]\n`;
      formattedMessage += `📦 Art der Fracht: ${freightType}\n`;
      formattedMessage += `⚖️ Gewicht / Maße: ${freightWeight}\n`;
      formattedMessage += `📅 Wunschtermin: ${appointment}\n`;
    } else {
      formattedMessage += `🛣️ Strecke: Von [${routeFrom || 'Bochum'}] ➔ Nach [${routeTo || 'Zielort'}]\n`;
      formattedMessage += `🚗 Fahrzeug: ${vehicleModel || 'PKW'}\n`;
      formattedMessage += `⚙️ Zustand: ${vehicleCondition}\n`;
      formattedMessage += `📅 Wunschtermin: ${appointment}\n`;
    }

    if (gpsLocationUrl) {
      formattedMessage += `📍 Live-Standort (Google Maps): ${gpsLocationUrl}\n`;
    }

    if (notes.trim()) {
      formattedMessage += `\n📝 Hinweise: ${notes}\n`;
    }

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/4915565500442?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const isEmergency = service.includes('Abschleppdienst');
  const isJumpstart = service.includes('Starthilfe');
  const isFreight = service.includes('Warentransport');
  const isTransfer = service.includes('Fahrzeugüberführung');

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-slate-950 text-white relative border-t border-white/10">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-4">
            <span className="w-5 h-px bg-amber-400/80"></span>
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Phone & Calm WhatsApp Option (4 Cols, Single-Layer Buttons) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="space-y-3">
              {/* Direct 24h Emergency Notruf Button (Red exclusively for Notruf) */}
              <a
                href="tel:+4915565500442"
                className="flex items-center gap-4 p-5 rounded-2xl bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/25 transition-all active:scale-95"
              >
                <Phone size={24} className="fill-white shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-extrabold tracking-wider text-red-100">
                    24h Notruf &amp; Soforthilfe
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white">
                    0155 65500442
                  </div>
                  <div className="text-xs text-red-100 font-medium">
                    Hier tippen zum Sofort-Anruf
                  </div>
                </div>
              </a>

              {/* Calm Dark WhatsApp Button (Zero Bright Green, No Inner Box) */}
              <a
                href="https://wa.me/4915565500442?text=Hallo%20Abschleppdienst%20Direkt%2C%20ich%20habe%20eine%20Preisanfrage%20zu%20einem%20Fahrzeugtransport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/15 hover:border-amber-400/50 text-white transition-all active:scale-95"
              >
                <MessageCircle size={24} className="text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">
                    Schriftliche Anfrage
                  </div>
                  <div className="text-base sm:text-lg font-black text-white">
                    Nachricht via WhatsApp
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Standort oder Fotos direkt senden
                  </div>
                </div>
              </a>
            </div>

            {/* Direct Informational Text - Calm Editorial Typography */}
            <div className="pt-6 space-y-6 text-slate-300 border-t border-white/10">
              
              {/* Availability */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Clock size={16} className="text-amber-400 flex-shrink-0" />
                  <span>Rufbereitschaft 24h für Notfälle</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  Als inhabergeführter Dienstleister aus Bochum garantieren wir Ihnen verbindliche telefonische Absprachen ohne versteckte Gebühren.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CreditCard size={16} className="text-amber-400 flex-shrink-0" />
                  <span>Zahlungsmöglichkeiten vor Ort</span>
                </div>
                <ul className="pl-6 pt-1 space-y-1.5 text-xs text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Kartenzahlung (EC-Karte, Kreditkarte &amp; Apple Pay)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Barzahlung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>PayPal &amp; Banküberweisung</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Tailored Inquiry Form (8 Cols, Zero Nested Boxes Inside Form) */}
          <div className="lg:col-span-8 pt-6 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-white/10">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Unverbindliche Preisanfrage
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Geben Sie Ihre Eckdaten ein – unser Team nennt Ihnen vorab den verbindlichen Festpreis.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Kostenlos &amp; unverbindlich</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 space-y-4">
                <div className="flex items-center gap-3 text-amber-400">
                  <CheckCircle2 size={28} />
                  <h4 className="text-xl font-black text-white">
                    Anfrage erfolgreich vorbereitet!
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                  Ihre Angaben wurden übertragen. Sie erhalten umgehend eine verbindliche Rückmeldung mit Ihrem Festpreis.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="tel:+4915565500442"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black text-xs px-5 py-3 rounded-xl transition-all"
                  >
                    <Phone size={14} />
                    <span>24h Notruf: 0155 65500442</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs px-5 py-3 rounded-xl transition-all"
                  >
                    Neue Anfrage stellen
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name & Telefon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Vor- und Nachname"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Ihre Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="015X XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* 2. Gewünschte Leistung Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Gewünschte Leistung *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white font-medium focus:outline-none focus:border-amber-400"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">
                      -- Bitte gewünschte Leistung auswählen --
                    </option>
                    <option value="PKW Abschleppdienst (Panne & Unfall)" className="bg-slate-900 text-white">
                      PKW Abschleppdienst (Schnelle Bergung bei Panne oder Unfall)
                    </option>
                    <option value="Abschleppdienst für SUV" className="bg-slate-900 text-white">
                      Abschleppdienst für SUV (Schwere &amp; breite Fahrzeuge bis 3,5 t)
                    </option>
                    <option value="Abschleppdienst für Busse (bis 7 Meter)" className="bg-slate-900 text-white">
                      Abschleppdienst für Busse &amp; Transporter (bis 7 Meter Länge)
                    </option>
                    <option value="Fahrzeugüberführung (von A nach B)" className="bg-slate-900 text-white">
                      Fahrzeugüberführung von A nach B (bundesweit &amp; ganz Deutschland)
                    </option>
                    <option value="Pannenhilfe & Starthilfe vor Ort" className="bg-slate-900 text-white">
                      Pannenhilfe &amp; Vor-Ort Starthilfe (lokal in Bochum &amp; Autobahnen • 800€ NOCO Boost)
                    </option>
                    <option value="Warentransport & Logistik" className="bg-slate-900 text-white">
                      Warentransport &amp; Logistik (Transportaufträge für Güter aller Art bis 3,5 t)
                    </option>
                  </select>
                </div>

                {/* Helper prompt when no service is selected (Open Typography, No Box) */}
                {!service && (
                  <p className="text-xs text-slate-400 pt-1">
                    Wählen Sie oben Ihre gewünschte Leistung aus, um die passenden Strecken- oder Fahrzeugfelder einzublenden.
                  </p>
                )}

                {/* 3A. DYNAMIC FIELDS FOR EMERGENCY / ABSCHLEPPEN (Clean Divider, No Inner Box) */}
                {isEmergency && (
                  <div className="pt-5 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                      <AlertTriangle size={16} />
                      <span>Notfall-Standort &amp; Autobahn in NRW:</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1">
                        Auf welcher Autobahn / Straße befinden Sie sich? *
                      </label>
                      <select
                        value={autobahn}
                        onChange={(e) => setAutobahn(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        {nrwAutobahnen.map((ab, idx) => (
                          <option key={idx} value={ab} className="bg-slate-900 text-white">
                            {ab}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-200">
                            Nächste Ausfahrt / Straße
                          </label>
                          <button
                            type="button"
                            onClick={() => handleDetectLocation(setHighwayExit)}
                            disabled={isLocating}
                            className="inline-flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 font-semibold transition-colors disabled:opacity-50"
                          >
                            {isLocating ? (
                              <Loader2 size={10} className="animate-spin" />
                            ) : (
                              <Crosshair size={10} />
                            )}
                            <span>GPS ermitteln</span>
                          </button>
                        </div>
                        <input
                          type="text"
                          value={highwayExit}
                          onChange={(e) => setHighwayExit(e.target.value)}
                          placeholder="Z. B. Ausfahrt Bochum-Stadion / Wattenscheid"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1">
                          Wohin soll geschleppt werden? (Zielwerkstatt)
                        </label>
                        <input
                          type="text"
                          value={destinationWorkshop}
                          onChange={(e) => setDestinationWorkshop(e.target.value)}
                          placeholder="Z. B. Vertragswerkstatt oder Haustür"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1">
                          Zustand des Fahrzeugs *
                        </label>
                        <select
                          value={emergencyCondition}
                          onChange={(e) => setEmergencyCondition(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Motorschaden / Fahrzeug springt nicht an">Motorschaden / Springt nicht an</option>
                          <option value="Unfallschaden (Karosserie defekt / Teile lose)">Unfallschaden (Teile lose)</option>
                          <option value="Getriebeschaden / Räder blockiert">Getriebeschaden / Räder blockiert</option>
                          <option value="Fahrzeug rollfähig auf neutralem Gang">Fahrzeug rollfähig</option>
                          <option value="Sportwagen / Tiefergelegt">Sportwagen / Tiefergelegt</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1">
                          Fahrzeugtyp &amp; Modell
                        </label>
                        <input
                          type="text"
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          placeholder="Z. B. VW Golf, BMW 3er, Audi A4..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 3B. DYNAMIC FIELDS FOR FAHRZEUGÜBERFÜHRUNG (Clean Divider, No Inner Box) */}
                {isTransfer && (
                  <div className="pt-5 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                      <Truck size={16} />
                      <span>Fahrzeugdaten &amp; Strecke (Von ➔ Nach):</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Abholort (PLZ / Stadt A) *
                        </label>
                        <input
                          type="text"
                          required
                          value={routeFrom}
                          onChange={(e) => setRouteFrom(e.target.value)}
                          placeholder="Z. B. 44803 Bochum oder Dortmund"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Zielort (PLZ / Stadt B) *
                        </label>
                        <input
                          type="text"
                          required
                          value={routeTo}
                          onChange={(e) => setRouteTo(e.target.value)}
                          placeholder="Z. B. 48143 Münster oder 50667 Köln"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Fahrzeugmodell &amp; Marke *
                        </label>
                        <input
                          type="text"
                          required
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          placeholder="Z. B. Audi RS3, BMW Z3..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Fahrzeugzustand *
                        </label>
                        <select
                          value={vehicleCondition}
                          onChange={(e) => setVehicleCondition(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Fahrbereit (angemeldet / abgemeldet)">Fahrbereit (z.B. Neukauf)</option>
                          <option value="Roll- und lenkfähig (rollfähig)">Roll- &amp; lenkfähig</option>
                          <option value="Motorschaden / Getriebeschaden">Motorschaden / Getriebe defekt</option>
                          <option value="Sportwagen / Tiefergelegt">Sportwagen / Tiefergelegt</option>
                          <option value="Oldtimer / Liebhaberfahrzeug">Oldtimer / Liebhaberfahrzeug</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Wunschtermin
                        </label>
                        <select
                          value={appointment}
                          onChange={(e) => setAppointment(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Schnellstmöglich">Schnellstmöglich (Express)</option>
                          <option value="In den nächsten 1–3 Tagen">In den nächsten 1–3 Tagen</option>
                          <option value="Fester Wunschtermin nach Absprache">Fester Wunschtag</option>
                          <option value="Wochenende">Am Wochenende</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3C. DYNAMIC FIELDS FOR STARTHILFE (Clean Divider, No Inner Box) */}
                {isJumpstart && (
                  <div className="pt-5 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                      <Clock size={16} />
                      <span>Standort für Vor-Ort Pannenhilfe:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-300">
                            Genaue Adresse / Stadtteil in Bochum *
                          </label>
                          <button
                            type="button"
                            onClick={() => handleDetectLocation(setLocalAddress)}
                            disabled={isLocating}
                            className="inline-flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 font-semibold transition-colors disabled:opacity-50"
                          >
                            {isLocating ? (
                              <Loader2 size={10} className="animate-spin" />
                            ) : (
                              <Crosshair size={10} />
                            )}
                            <span>GPS ermitteln</span>
                          </button>
                        </div>
                        <input
                          type="text"
                          required
                          value={localAddress}
                          onChange={(e) => setLocalAddress(e.target.value)}
                          placeholder="Straße, Hausnummer, Stadtteil"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Art des Problems *
                        </label>
                        <select
                          value={breakdownType}
                          onChange={(e) => setBreakdownType(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Batterie leer / Starthilfe (12V / 24V)">Batterie leer / Starthilfe</option>
                          <option value="Reifenpanne / Radwechsel vor Ort">Reifenpanne / Radwechsel</option>
                          <option value="Fahrzeug klickt nur beim Start">Klickgeräusch beim Starten</option>
                          <option value="Sonstiges Problem vor Ort">Sonstige Panne</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3D. DYNAMIC FIELDS FOR WARENTRANSPORT & LOGISTIK (Clean Divider, No Inner Box) */}
                {isFreight && (
                  <div className="pt-5 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
                      <Truck size={16} />
                      <span>Frachtdetails &amp; Transportstrecke (bis 3,5 t):</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Abholort (Startadresse / Stadt) *
                        </label>
                        <input
                          type="text"
                          required
                          value={routeFrom}
                          onChange={(e) => setRouteFrom(e.target.value)}
                          placeholder="Z. B. Bochum, Essen, Dortmund..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Lieferort (Zieladresse / Stadt) *
                        </label>
                        <input
                          type="text"
                          required
                          value={routeTo}
                          onChange={(e) => setRouteTo(e.target.value)}
                          placeholder="Z. B. Münster, Köln, Frankfurt..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Art der Fracht / Güter *
                        </label>
                        <select
                          value={freightType}
                          onChange={(e) => setFreightType(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Palettenware / Stückgut">Palettenware / Stückgut</option>
                          <option value="Maschinen & Geräte">Maschinen &amp; Geräte</option>
                          <option value="Baumaterial & Großteile">Baumaterial &amp; Großteile</option>
                          <option value="Ersatzteile & KFZ-Komponenten">KFZ-Teile &amp; Motoren</option>
                          <option value="Sonstige Fracht">Sonstige Güter</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Ungefähres Gewicht *
                        </label>
                        <select
                          value={freightWeight}
                          onChange={(e) => setFreightWeight(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Bis 500 kg">Bis 500 kg</option>
                          <option value="Bis 1.500 kg">Bis 1.500 kg</option>
                          <option value="Bis 2.500 kg">Bis 2.500 kg</option>
                          <option value="Bis 3.500 kg (Maximalgewicht)">Bis 3.500 kg (Max)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Wunschtermin
                        </label>
                        <select
                          value={appointment}
                          onChange={(e) => setAppointment(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Schnellstmöglich (Express)">Schnellstmöglich (Express)</option>
                          <option value="In den nächsten 1–3 Tagen">In den nächsten 1–3 Tagen</option>
                          <option value="Fester Wunschtermin nach Absprache">Fester Wunschtermin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Notes & Submit Button */}
                {service && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Zusätzliche Hinweise (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Besondere Zufahrt, blockierte Feststellbremse, Schlüssel vorhanden..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 placeholder-slate-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-4 px-6 rounded-xl shadow-lg shadow-amber-500/20 transition-all text-sm active:scale-95 cursor-pointer"
                    >
                      <Send size={16} />
                      <span>Unverbindliche Preisanfrage absenden</span>
                    </button>

                    <p className="text-[11px] text-slate-400">
                      Ihre Anfrage wird direkt an unser Einsatzteam übertragen. Verbindliche Rückmeldung in wenigen Minuten.
                    </p>
                  </div>
                )}

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
