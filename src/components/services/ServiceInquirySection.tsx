"use client";

import { useState } from 'react';
import { Calculator, Phone, MessageCircle, Truck, Zap, ShieldCheck, MapPin, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';

interface Props {
  slug: string;
  title: string;
  pricingHint: string;
}

export default function ServiceInquirySection({ slug, title, pricingHint }: Props) {
  // Mode 1: Fahrzeugüberführung km slider
  const [calcKm, setCalcKm] = useState(60);
  const [routeFrom, setRouteFrom] = useState('Bochum');
  const [routeTo, setRouteTo] = useState('Düsseldorf');

  // Mode 2 & 4: Vehicle & Drive Selection
  const [vehicleCategory, setVehicleCategory] = useState(
    slug.includes('suv') ? 'SUV / Geländewagen (bis 3,5 t)' :
    slug.includes('bus') ? 'Bus / Transporter (bis 7 m)' :
    slug.includes('elektro') ? 'Elektrofahrzeug (BEV / Hybrid)' :
    'PKW / Kombi / Limousine'
  );

  const [driveType, setDriveType] = useState(
    slug.includes('elektro') ? 'Elektro / Hybrid (Akkuschonende Verladung)' : 'Automatikgetriebe (DSG / Wandler)'
  );

  const [locationBochum, setLocationBochum] = useState('Bochum (Stadtgebiet / A40 / A43)');
  const [destinationWorkshop, setDestinationWorkshop] = useState('Zur Wunschwerkstatt / nach Hause');

  const isTransfer = slug === 'fahrzeugueberfuehrung';
  const isJumpstart = slug === 'pannenhilfe-starthilfe';
  const isLongDistance = slug === 'bundesweite-ueberfuehrung' || slug === 'warentransport-logistik';
  const isTowing = !isTransfer && !isJumpstart && !isLongDistance;

  // Transfer price calculation
  const calculatedTransferPrice = Math.max(50, Math.round(50 + (calcKm * 1.50)));

  return (
    <section className="pt-8 border-t border-white/10 space-y-6">
      
      {/* ======================================================== */}
      {/* CASE 1: FAHRZEUGÜBERFÜHRUNG (INTERACTIVE KM SLIDER)       */}
      {/* ======================================================== */}
      {isTransfer && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Calculator className="text-amber-400" size={24} />
              <span>Transparente Richtpreiskalkulation nach Kilometern</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Ziehen Sie den Schieberegler auf Ihre ungefähre Fahrtstrecke – wir berechnen Ihren fairen Richtpreis:
            </p>
          </div>

          {/* Strecke Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-semibold">Geschätzte einfache Fahrtstrecke:</span>
              <span className="text-xl font-black text-amber-400 font-mono">{calcKm} km</span>
            </div>

            <input
              type="range"
              min={5}
              max={350}
              step={5}
              value={calcKm}
              onChange={(e) => setCalcKm(Number(e.target.value))}
              className="w-full accent-amber-400 h-2.5 bg-slate-800 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>5 km (Nahbereich)</span>
              <span>100 km (NRW)</span>
              <span>200 km</span>
              <span>350 km (Fernstrecke)</span>
            </div>
          </div>

          {/* Result Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Kalkulierter Richtpreis (§ 19 UStG):</div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-0.5">
                ca. {calculatedTransferPrice} €
              </div>
              <div className="text-[11px] text-slate-400">50 € Grundpauschale + ca. 1,50 € pro Kilometer</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/4915565500442?text=${encodeURIComponent(
                  `Hallo Abschleppdienst Direkt, ich interessiere mich für eine Fahrzeugüberführung:\n- Strecke: ca. ${calcKm} km\n- Kalkulierter Richtpreis: ca. ${calculatedTransferPrice} €\nBitte um Terminbestätigung.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle size={16} />
                <span>Termin per WhatsApp anfragen</span>
              </a>

              <a
                href="tel:+4915565500442"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-5 rounded-xl border border-white/10 text-xs sm:text-sm transition-all"
              >
                <Phone size={15} className="text-amber-400" />
                <span>0155 65500442 anrufen</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CASE 2: STARTHILFE & PANNENHILFE (NO KM SLIDER!)         */}
      {/* ======================================================== */}
      {isJumpstart && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Zap className="text-amber-400" size={24} />
              <span>Vor-Ort Starthilfe Konfigurator (Feste Pauschale)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Kein Kilometer-Zuschlag im Stadtgebiet Bochum. Wählen Sie einfach Ihre Antriebsart für den passenden NOCO-Booster:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Antriebs- / Getriebeart *
              </label>
              <select
                value={driveType}
                onChange={(e) => setDriveType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="Elektroauto / Hybrid (12V Bordnetz-Stützung)">Elektroauto / Hybrid (12V Bordnetz-Stützung)</option>
                <option value="Automatikgetriebe (DSG / Wandler)">Automatikgetriebe (DSG / Wandler)</option>
                <option value="Schaltgetriebe (Benzin / Diesel)">Schaltgetriebe (Benzin / Diesel)</option>
                <option value="Großer Diesel / Transporter (hoher Kaltstartstrom)">Großer Diesel / Transporter (hoher Kaltstartstrom)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Standort in Bochum *
              </label>
              <input
                type="text"
                value={locationBochum}
                onChange={(e) => setLocationBochum(e.target.value)}
                placeholder="z.B. Bochum-Innenstadt, Wattenscheid, A40..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
              </input>
            </div>
          </div>

          {/* Pricing Reassurance & Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Verbindliche Notdienst-Pauschale (§ 19 UStG):</div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-0.5">
                ab 50 € Festpreis
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold">100% funkenfrei &amp; sicher für Steuergeräte (NOCO 5250A)</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="tel:+4915565500442"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-xl shadow-red-600/30 transition-all active:scale-95"
              >
                <Phone size={16} className="fill-white" />
                <span>Sofort-Notruf: 0155 65500442</span>
              </a>

              <a
                href={`https://wa.me/4915565500442?text=${encodeURIComponent(
                  `Hallo Abschleppdienst Direkt, ich benötige Starthilfe:\n- Fahrzeug / Antrieb: ${driveType}\n- Standort: ${locationBochum}\nBitte um sofortige Hilfe.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition-all"
              >
                <MessageCircle size={16} />
                <span>Per WhatsApp anfordern</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CASE 3: ABSCHLEPPDIENST (PKW, SUV, BUSSE BIS 7M, UNFALL)  */}
      {/* ======================================================== */}
      {isTowing && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Truck className="text-amber-400" size={24} />
              <span>Verbindliche Abschleppkalkulation &amp; Fahrzeugabstimmung</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Geben Sie die Eckdaten Ihres Fahrzeugs an – wir nennen Ihnen sofort den verbindlichen Festpreis ohne Callcenter:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Fahrzeugklasse *
              </label>
              <select
                value={vehicleCategory}
                onChange={(e) => setVehicleCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="PKW / Kombi / Limousine">PKW / Kombi / Limousine</option>
                <option value="SUV / Geländewagen (bis 3,5 t)">SUV / Geländewagen (bis 3,5 t)</option>
                <option value="Transporter / Kleinbus (bis 7 Meter)">Transporter / Kleinbus (bis 7 Meter)</option>
                <option value="Sportwagen / Tiefergelegt (flacher Winkel)">Sportwagen / Tiefergelegt (flacher Winkel)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Antriebs- &amp; Getriebeart *
              </label>
              <select
                value={driveType}
                onChange={(e) => setDriveType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="Schaltgetriebe (rollfähig)">Schaltgetriebe (rollfähig)</option>
                <option value="Automatik / DSG (Parksperre blockiert)">Automatik / DSG (Parksperre blockiert)</option>
                <option value="Elektroauto / Hybrid (100% Plateau-Verladung)">Elektroauto / Hybrid (100% Plateau-Verladung)</option>
                <option value="Unfallfahrzeug / Achsschaden (Radroller erforderlich)">Unfallfahrzeug / Achsschaden (Radroller erforderlich)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Pannenort / Autobahn *
              </label>
              <input
                type="text"
                value={locationBochum}
                onChange={(e) => setLocationBochum(e.target.value)}
                placeholder="z.B. A40 Ausfahrt Bochum-Zentrum, A43, Straße..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Wohin soll geschleppt werden? *
              </label>
              <input
                type="text"
                value={destinationWorkshop}
                onChange={(e) => setDestinationWorkshop(e.target.value)}
                placeholder="z.B. Zur Wunschwerkstatt, Autohaus oder nach Hause"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Preiszusage (§ 19 UStG):</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Verbindlicher Festpreis vor Abfahrt
              </div>
              <div className="text-[11px] text-slate-400">Rechnung für Kfz-Schutzbrief &amp; Versicherung inklusive</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="tel:+4915565500442"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-xl shadow-red-600/30 transition-all active:scale-95"
              >
                <Phone size={16} className="fill-white" />
                <span>24h Notruf: 0155 65500442</span>
              </a>

              <a
                href={`https://wa.me/4915565500442?text=${encodeURIComponent(
                  `Hallo Abschleppdienst Direkt, ich benötige einen Abschleppdienst:\n- Fahrzeug: ${vehicleCategory}\n- Getriebe/Zustand: ${driveType}\n- Pannenort: ${locationBochum}\n- Ziel: ${destinationWorkshop}\nBitte um Festpreis und Eintreffzeit.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition-all"
              >
                <MessageCircle size={16} />
                <span>Per WhatsApp senden</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CASE 4: BUNDESWEITE ÜBERFÜHRUNG & WARENTRANSPORT          */}
      {/* ======================================================== */}
      {isLongDistance && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <MapPin className="text-amber-400" size={24} />
              <span>Fernstrecken- &amp; Warentransport Anfrage (bundesweit)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Geben Sie Start- und Zielort an – wir planen die Direktfahrt ohne Umladen und mit VDI-2700-Ladungssicherung:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Startort (Abholung) *
              </label>
              <input
                type="text"
                value={routeFrom}
                onChange={(e) => setRouteFrom(e.target.value)}
                placeholder="z.B. Bochum, Dortmund, Essen..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Zielort (Zustellung) *
              </label>
              <input
                type="text"
                value={routeTo}
                onChange={(e) => setRouteTo(e.target.value)}
                placeholder="z.B. Berlin, München, Frankfurt, Hamburg..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Fahrzeugtyp / Frachtart *
              </label>
              <select
                value={vehicleCategory}
                onChange={(e) => setVehicleCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="PKW / Sportwagen / Oldtimer">PKW / Sportwagen / Oldtimer</option>
                <option value="SUV / Allradfahrzeug (bis 3,5 t)">SUV / Allradfahrzeug (bis 3,5 t)</option>
                <option value="Transporter / Kleinbus (bis 7 m)">Transporter / Kleinbus (bis 7 m)</option>
                <option value="Maschinen, Paletten &amp; Frachtgut bis 3,5 t">Maschinen, Paletten &amp; Frachtgut bis 3,5 t</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Antriebs- / Ausstattungsart *
              </label>
              <select
                value={driveType}
                onChange={(e) => setDriveType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="Elektroauto / Hybrid">Elektroauto / Hybrid</option>
                <option value="Automatikgetriebe">Automatikgetriebe</option>
                <option value="Schaltgetriebe">Schaltgetriebe</option>
                <option value="Paletten / Fracht / Baumaschinen">Paletten / Fracht / Baumaschinen</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Fernstrecken-Konditionen:</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Transparente Abrechnung ab 1,50 €/km
              </div>
              <div className="text-[11px] text-slate-400">100% Einzelfahrt auf Spezialplateau ohne Beiladung</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/4915565500442?text=${encodeURIComponent(
                  `Hallo Abschleppdienst Direkt, ich plane einen Ferntransport:\n- Von: ${routeFrom} ➔ Nach: ${routeTo}\n- Ladung: ${vehicleCategory} (${driveType})\nBitte um ein verbindliches Festpreisangebot.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle size={16} />
                <span>Angebot per WhatsApp anfragen</span>
              </a>

              <a
                href="tel:+4915565500442"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-5 rounded-xl border border-white/10 text-xs sm:text-sm transition-all"
              >
                <Phone size={15} className="text-amber-400" />
                <span>Telefonisch abklären</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
