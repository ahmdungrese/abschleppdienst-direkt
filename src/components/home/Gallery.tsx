"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Camera, ShieldCheck, X, ZoomIn, Truck, Building2 } from 'lucide-react';

interface PhotoItem {
  id: number;
  category: 'truck' | 'trade';
  title: string;
  tag: string;
  desc: string;
  image: string;
  secondaryImage?: string;
  badge: string;
}

export default function Gallery() {
  const t = useTranslations('Gallery');
  const [activeCategory, setActiveCategory] = useState<'all' | 'truck' | 'trade'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  // All 7 Real Photos (100% Unbranded & Verified)
  const allPhotos: PhotoItem[] = [
    {
      id: 1,
      category: 'truck',
      title: "Plateau-Verladung BMW Z3 Roadster",
      tag: "Spezial-Plateau",
      desc: "Flacher Auffahrwinkel der Aluminium-Ladeschaufel – schonend für Sportwagen & Spoiler",
      image: "/images/real/tow-truck-bmw-ramp.jpg",
      badge: "Flacher Rampenwinkel"
    },
    {
      id: 2,
      category: 'truck',
      title: "Sichere 4-Punkt-Verzurrung auf dem Plateau",
      tag: "Fahrzeugüberführung",
      desc: "Reines Einzelfahrzeug auf eigenem Spezial-Plateau ohne riskantes Umladen oder Zwischenstopps",
      image: "/images/real/tow-truck-bmw-side.jpg",
      badge: "VDI 2700 Sicherung"
    },
    {
      id: 3,
      category: 'truck',
      title: "Spezial-Plateau & Seilwindentechnik",
      tag: "Sicherungstechnik",
      desc: "Moderne Ladefläche für beschädigte, tiefergelegte oder nicht fahrbereite KFZ",
      image: "/images/real/tow-truck-bmw-detail.jpg",
      badge: "Schonende Verladung"
    },
    {
      id: 4,
      category: 'truck',
      title: "Einsatzfahrzeug Abschleppdienst Direkt",
      tag: "Einsatzfahrzeug",
      desc: "Inhabergeführter Transporter mit Spezial-Plateau für Bochum und das gesamte Ruhrgebiet",
      image: "/images/real/tow-truck-street.jpg",
      badge: "Aus Bochum"
    },
    {
      id: 5,
      category: 'trade',
      title: "Direktüberführung zum Autoplatz & Händlerbörse",
      tag: "Autohandel & Ankauf",
      desc: "Sicherer Transport von Kundenfahrzeugen direkt zu renommierten Händlern, Werkstätten und Autoplätzen in NRW",
      image: "/images/real/autoplatz-nissan.jpg",
      badge: "Händlerbörse NRW"
    },
    {
      id: 6,
      category: 'truck',
      title: "Auffahrrampen & Ladevorbereitung",
      tag: "Technik & Schutz",
      desc: "Rutschfeste Aluminium-Fahrspuren für maximale Bodenhaftung auch bei Nässe",
      image: "/images/real/plateau-ramp-bochum.jpg",
      badge: "Aluminium-Rampen"
    },
    {
      id: 7,
      category: 'truck',
      title: "Einsatzfahrzeug mit Plateau & Audi RS3",
      tag: "Sportwagen & Überführung",
      desc: "Unser Transporter im Realeinsatz: Flacher Auffahrwinkel für moderne Sport- und Tieffahrzeuge ohne Aufsetzen",
      image: "/images/real/tow-truck-audi-clean-user.jpg",
      badge: "Flacher Rampenwinkel"
    },
    {
      id: 8,
      category: 'truck',
      title: "NOCO Boost Max GB250+ (5.250A) Profi-Starthilfegerät",
      tag: "Starthilfe-Technik",
      desc: "800 € Werkstatt-Ausrüstung: 100% funkenfrei, aktiver Verpolungsschutz & Ultra Sicher 2.0 für empfindliche Steuergeräte",
      image: "/images/real/noco-boost-starthilfe.jpg",
      secondaryImage: "/images/real/noco-boost-profi-geraet.jpg",
      badge: "5250A Profi-Booster"
    },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? allPhotos
    : allPhotos.filter(p => p.category === activeCategory);

  return (
    <section id="galerie" className="py-20 sm:py-28 bg-slate-900 text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Originalbilder aus unserem Arbeitsalltag
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Keine Stockfotos aus dem Internet: Authentische Aufnahmen unserer Schaufel mit Plateau und verladener Fahrzeuge sowie unserer Händlerplätze in NRW.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Alle Aufnahmen ({allPhotos.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('truck')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeCategory === 'truck'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Truck size={14} />
            <span>Abschleppwagen &amp; Plateau ({allPhotos.filter(p => p.category === 'truck').length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('trade')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeCategory === 'trade'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Building2 size={14} />
            <span>Autoplatz &amp; Händlerbörse ({allPhotos.filter(p => p.category === 'trade').length})</span>
          </button>
        </div>

        {/* Gallery Grid of ALL PHOTOS (Single-Layer Clean Cards, No Box-Inside-Box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedPhoto(item);
                setActiveModalImage(item.image);
              }}
              className="cursor-pointer group rounded-2xl overflow-hidden bg-slate-950/70 border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              {/* Photo Thumbnail Flush at Top */}
              <div className="h-52 w-full overflow-hidden relative bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width="400"
                  height="250"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Tag - Crisp Editorial Tag */}
                <span className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-amber-400 border-l-2 border-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-md">
                  {item.tag}
                </span>

                {/* Zoom hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                    <ZoomIn size={18} />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md text-slate-200 border border-white/15 text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow">
                  <ShieldCheck size={12} className="text-amber-400" />
                  <span>{item.badge}</span>
                </span>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-amber-400 font-bold">Abschleppdienst Direkt</span>
                  <span>Bochum &amp; NRW</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DSGVO Notice */}
        <div className="mt-10 text-center text-xs text-slate-400">
          🔒 Aus Datenschutzgründen (DSGVO) werden Kundenkennzeichen unkenntlich gemacht.
        </div>

      </div>

      {/* Lightbox Modal for Photo Zoom */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-slate-900 border border-white/15 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={activeModalImage || selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[70vh] object-contain transition-all duration-300"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-amber-400 border-l-2 border-amber-400 pl-2">
                  {selectedPhoto.tag}
                </span>

                {selectedPhoto.secondaryImage && (
                  <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveModalImage(selectedPhoto.image)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        (activeModalImage === selectedPhoto.image || !activeModalImage)
                          ? 'bg-amber-500 text-slate-950'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Geräte-Ansicht
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveModalImage(selectedPhoto.secondaryImage!)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        activeModalImage === selectedPhoto.secondaryImage
                          ? 'bg-amber-500 text-slate-950'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Elektronik-Schutz
                    </button>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mt-2.5">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}