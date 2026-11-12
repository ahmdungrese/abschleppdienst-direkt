"use client";

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { 
  Calculator, 
  MapPin, 
  Navigation, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Phone,
  RotateCcw,
  Clock,
  Gauge
} from 'lucide-react';
import { calculateRouteDistance, RouteCalculationResult } from '@/lib/distance-calculator';

type VehicleType = 'pkw' | 'suv' | 'transporter';
type VehicleCondition = 'rolling' | 'blocked' | 'accident';

export default function PriceCalculator() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const isEn = locale === 'en';

  // State for locations
  const [fromLocation, setFromLocation] = useState('44803 Bochum');
  const [toLocation, setToLocation] = useState('45127 Essen');
  const [distanceKm, setDistanceKm] = useState<number>(19);
  const [routeInfo, setRouteInfo] = useState<RouteCalculationResult | null>(null);
  const [isManualKm, setIsManualKm] = useState(false);

  // State for vehicle type & condition
  const [vehicleType, setVehicleType] = useState<VehicleType>('pkw');
  const [condition, setCondition] = useState<VehicleCondition>('rolling');

  // Pricing constants (Abschleppdienst Direkt official rates)
  const baseFee = 50; // Grundpauschale in €
  const ratePerKm = 1.50; // € per km

  // Vehicle type surcharge
  const vehicleSurcharges: Record<VehicleType, { fee: number; label: string; desc: string }> = {
    pkw: {
      fee: 0,
      label: isAr ? 'سيارة ركاب عادية (حتى 1.8 طن)' : isEn ? 'Standard Passenger Car (up to 1.8t)' : 'Standard-PKW (bis ca. 1.800 kg)',
      desc: isAr ? 'سيدان، هاتشباك، كومبي، أو سيارة رياضية' : isEn ? 'Sedan, hatchback, estate, or sports car' : 'Kleinwagen, Limousine, Kombi oder Sportwagen',
    },
    suv: {
      fee: 20,
      label: isAr ? 'جيب كبير / سيارة كهربائية (حتى 3.5 طن)' : isEn ? 'Large SUV / 4x4 / EV (up to 3.5t)' : 'Großer SUV / Allrad / E-Auto (bis 3.500 kg)',
      desc: isAr ? 'وزن ذاتي أعلى وبطاريات ثقيلة (BMW X5, Audi Q7, Tesla Model X/Y)' : isEn ? 'Higher curb weight & battery load (BMW X5, Audi Q7, Tesla)' : 'Höheres Eigengewicht oder schwere Traktionsbatterie (z.B. X5, Q7, Tesla)',
    },
    transporter: {
      fee: 35,
      label: isAr ? 'فان / باص صغير / ترانسبورتر (حتى 7 أمتار)' : isEn ? 'Van / Transporter (up to 7m length)' : 'Transporter / Kleinbus (bis 7m Länge)',
      desc: isAr ? 'قاعدة عجلات طويلة (Sprinter, Crafter, Vito, Transit)' : isEn ? 'Extended wheelbase (Sprinter, Crafter, Vito, Transit)' : 'Langer Radstand oder Überlänge (z.B. Sprinter, Crafter, Vito, Transit)',
    },
  };

  // Condition surcharge
  const conditionSurcharges: Record<VehicleCondition, { fee: number; label: string; desc: string }> = {
    rolling: {
      fee: 0,
      label: isAr ? 'سليمة وتتدحرج بحرية' : isEn ? 'Freely rolling & steerable' : 'Normal rollfähig & lenkbar',
      desc: isAr ? 'السيارة سليمة وتصعد بسلاسة على المنحدر دون أي عوائق' : isEn ? 'Vehicle intact, rolls smoothly onto loading ramps' : 'Fahrzeug rollt problemlos aus eigener Kraft oder geschoben auf die Rampen',
    },
    blocked: {
      fee: 25,
      label: isAr ? 'عجلات مقفلة / فرامل إلكترونية معطلة' : isEn ? 'Locked wheels / Electronic Handbrake stuck' : 'Blockierte Räder / Feststellbremse blockiert',
      desc: isAr ? 'تحتاج إلى بكرات مناورة خاصة (Go-Jaks) لرفع العجلات دون إتلافها' : isEn ? 'Requires special Go-Jak rolling dollies to avoid drivetrain damage' : 'Erfordert Rangierroller (Go-Jaks) bei Automatikgetriebeschaden oder EPB-Blockade',
    },
    accident: {
      fee: 35,
      label: isAr ? 'سيارة حادث / ونش سحب كهربائي' : isEn ? 'Accident Damage / Winching Required' : 'Unfallbergung / Seilwinde & Sicherungsnetz',
      desc: isAr ? 'أضرار بالهيكل أو المحاور، تتطلب سحباً بالونش اللاسلكي وتأميناً خاصاً' : isEn ? 'Axle/body damage, electric winch loading, and debris net' : 'Deformierte Karosserie, Achsbruch, Schräglage oder Seilwindenzug nach Kollision',
    },
  };

  // Automatic distance calculation when Von or Nach changes
  useEffect(() => {
    if (!fromLocation.trim() || !toLocation.trim()) {
      setRouteInfo(null);
      return;
    }

    const result = calculateRouteDistance(fromLocation, toLocation);
    if (result) {
      setRouteInfo(result);
      if (!isManualKm) {
        setDistanceKm(result.distanceKm);
      }
    } else {
      setRouteInfo(null);
    }
  }, [fromLocation, toLocation, isManualKm]);

  // Handle manual km slider change
  const handleDistanceChange = (newKm: number) => {
    setDistanceKm(newKm);
    setIsManualKm(true);
  };

  // Reset to auto distance if available
  const handleResetToAuto = () => {
    if (routeInfo) {
      setDistanceKm(routeInfo.distanceKm);
      setIsManualKm(false);
    }
  };

  // Calculations
  const kmCost = Math.round(distanceKm * ratePerKm * 100) / 100;
  const vehicleExtra = vehicleSurcharges[vehicleType].fee;
  const conditionExtra = conditionSurcharges[condition].fee;
  const rawTotal = baseFee + kmCost + vehicleExtra + conditionExtra;
  const calculatedTotal = Math.max(50, Math.round(rawTotal));

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hallo Abschleppdienst Direkt,\n\nIch interessiere mich für einen Fahrzeugtransport:\n` +
      `- Startort: ${fromLocation || 'Bochum'}\n` +
      `- Zielort: ${toLocation || 'Werkstatt'}\n` +
      `- Ermittelte Strecke: ca. ${distanceKm} km\n` +
      `- Fahrzeugtyp: ${vehicleSurcharges[vehicleType].label}\n` +
      `- Fahrzeugzustand: ${conditionSurcharges[condition].label}\n` +
      `- Kalkulierter Richtpreis: ca. ${calculatedTotal} €\n\n` +
      `Bitte teilen Sie mir mit, ob ein Transport zeitnah möglich ist.`
    );
    window.open(`https://wa.me/4915565500442?text=${text}`, '_blank');
  };

  return (
    <div id="kalkulator" className="my-10 border-t border-b border-white/10 py-8 sm:py-12">
      
      {/* Top Bar Header */}
      <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            <Calculator size={15} />
            <span>{isAr ? 'حاسبة التكلفة المباشرة' : isEn ? 'Direct Cost Estimator' : 'Fahrstrecken- & Preiskalkulator'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {isAr 
              ? 'احسب تكلفة النقل بالمسافة ونوع السيارة' 
              : isEn 
              ? 'Calculate Transport by Distance & Vehicle Specs' 
              : 'Verbindliche Kilometerkalkulation nach PLZ & Fahrzeugtyp'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {isAr 
              ? 'أدخل الرمز البريدي (PLZ) أو اسم المدينة — يتم تقدير المسافة فوراً وحساب السعر بدقة.' 
              : isEn 
              ? 'Enter postal code (PLZ) or city name — distance calculates instantly with full transparency.' 
              : 'Geben Sie Postleitzahl (PLZ) oder Ortsnamen ein – die Entfernung wird automatisch ermittelt.'}
          </p>
        </div>

        <div className="text-left sm:text-right shrink-0">
          <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
            <ShieldCheck size={15} />
            <span>{isAr ? 'أسعار حقيقية دون وسيط' : isEn ? 'Direct Owner Rates' : 'Inhabergeführt ohne Vermittler'}</span>
          </span>
        </div>
      </div>

      <div className="space-y-8">
        
        {/* Step 1: Locations (Von & Nach) */}
        <div>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            {isAr ? '1. مسار الرحلة (مكان الانطلاق والوجهة)' : isEn ? '1. Transport Route (Origin & Destination)' : '1. Transportstrecke (Start & Zieladresse / PLZ)'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <MapPin size={14} className="text-amber-400" />
                <span>{isAr ? 'مكان الانطلاق (PLZ أو اسم المدينة)' : isEn ? 'Pickup Location (PLZ or City)' : 'Von (Abholadresse oder 5-stellige PLZ)'}</span>
              </label>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => {
                  setFromLocation(e.target.value);
                  setIsManualKm(false);
                }}
                placeholder={isAr ? 'مثال: 44803 Bochum أو Dortmund' : isEn ? 'e.g. 44803 Bochum or Dortmund' : 'z. B. 44803 Bochum oder Essen'}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm font-semibold text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Navigation size={14} className="text-amber-400" />
                <span>{isAr ? 'الوجهة (PLZ أو اسم المدينة أو الورشة)' : isEn ? 'Destination (PLZ, City, or Workshop)' : 'Nach (Zieladresse, Werkstatt oder PLZ)'}</span>
              </label>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => {
                  setToLocation(e.target.value);
                  setIsManualKm(false);
                }}
                placeholder={isAr ? 'مثال: 45127 Essen أو Düsseldorf أو Münster' : isEn ? 'e.g. 45127 Essen or Münster' : 'z. B. 45127 Essen, Düsseldorf oder Münster'}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm font-semibold text-white placeholder-slate-500 transition-colors"
              />
            </div>
          </div>

          {/* Automatic Distance Detection Notice */}
          <div className="mt-3 text-xs">
            {routeInfo ? (
              <div className="flex flex-wrap items-center justify-between gap-2 text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                  <span>
                    <strong className="text-white">{isAr ? 'المسافة المحسوبة تلقائياً:' : isEn ? 'Auto-Calculated Distance:' : 'Automatisch berechnete Strecke:'}</strong>{' '}
                    ca. {routeInfo.distanceKm} km ({routeInfo.fromName} ➔ {routeInfo.toName})
                  </span>
                </div>
                {isManualKm && (
                  <button
                    type="button"
                    onClick={handleResetToAuto}
                    className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 underline font-semibold cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>{isAr ? 'إعادة ضبط للمسافة التلقائية' : isEn ? 'Reset to auto distance' : 'Auf berechnete km zurücksetzen'}</span>
                  </button>
                )}
              </div>
            ) : (
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {isAr
                  ? '💡 تلميح: اكتب الرمز البريدي الألماني (مثل 44803 أو 45127) أو اسم المدينة (بوخوم، إيسن، دورتموند، كولن...) للتعرف الفوري على المسافة.'
                  : isEn
                  ? '💡 Tip: Enter any 5-digit German postal code (e.g. 44803, 50667) or city name for instant distance detection.'
                  : '💡 Tipp: Geben Sie eine 5-stellige deutsche PLZ (z. B. 44803, 50667) oder Städtenamen ein – das System erkennt die Entfernung automatisch.'}
              </p>
            )}
          </div>
        </div>

        {/* Step 2: Distance Slider & Quick Selectors */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {isAr ? '2. مسافة الرحلة المعتمدة' : isEn ? '2. Applied Distance' : '2. Berechnete Fahrstrecke'}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">
                {isManualKm ? (isAr ? '(تعديل يدوي)' : isEn ? '(Manual fine-tuning)' : '(Manuell angepasst)') : (isAr ? '(محسوب تلقائياً)' : isEn ? '(Auto-calculated)' : '(Automatisch)')}
              </span>
              <span className="text-base font-black text-amber-400 font-mono">
                {distanceKm} km
              </span>
            </div>
          </div>

          <input
            type="range"
            min="5"
            max="400"
            step="1"
            value={distanceKm}
            onChange={(e) => handleDistanceChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />

          <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs">
            <span className="text-slate-400 text-[11px] mr-1">{isAr ? 'مسافات شائعة:' : isEn ? 'Common routes:' : 'Häufige Strecken:'}</span>
            {[10, 19, 35, 55, 80, 140, 250].map((km) => (
              <button
                key={km}
                type="button"
                onClick={() => handleDistanceChange(km)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  distanceKm === km
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {km} km
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Vehicle Type & Weight — Clean Divided Editorial Rows */}
        <div>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            {isAr ? '3. نوع ووزن السيارة' : isEn ? '3. Vehicle Category & Weight' : '3. Fahrzeugtyp & Gewichtsklasse'}
          </h3>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {(Object.keys(vehicleSurcharges) as VehicleType[]).map((typeKey) => {
              const item = vehicleSurcharges[typeKey];
              const isSelected = vehicleType === typeKey;
              return (
                <label
                  key={typeKey}
                  onClick={() => setVehicleType(typeKey)}
                  className={`flex items-start justify-between py-3.5 px-2 cursor-pointer transition-colors ${
                    isSelected 
                      ? 'text-white bg-amber-500/[0.04]' 
                      : 'text-slate-300 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="vehicleType"
                      checked={isSelected}
                      onChange={() => setVehicleType(typeKey)}
                      className="mt-1 text-amber-500 focus:ring-amber-400 accent-amber-500"
                    />
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span className={isSelected ? 'text-amber-400' : 'text-white'}>{item.label}</span>
                        {item.fee > 0 && (
                          <span className="text-[11px] font-semibold text-amber-400 font-mono">
                            (+{item.fee} €)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Step 4: Condition & Damage Severity — Clean Divided Editorial Rows */}
        <div>
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            {isAr ? '4. حالة السيارة وسهولة التحميل' : isEn ? '4. Vehicle Condition & Loading Accessibility' : '4. Zustand & Verladbarkeit des Fahrzeugs'}
          </h3>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {(Object.keys(conditionSurcharges) as VehicleCondition[]).map((condKey) => {
              const item = conditionSurcharges[condKey];
              const isSelected = condition === condKey;
              return (
                <label
                  key={condKey}
                  onClick={() => setCondition(condKey)}
                  className={`flex items-start justify-between py-3.5 px-2 cursor-pointer transition-colors ${
                    isSelected 
                      ? 'text-white bg-amber-500/[0.04]' 
                      : 'text-slate-300 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="condition"
                      checked={isSelected}
                      onChange={() => setCondition(condKey)}
                      className="mt-1 text-amber-500 focus:ring-amber-400 accent-amber-500"
                    />
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span className={isSelected ? 'text-amber-400' : 'text-white'}>{item.label}</span>
                        {item.fee > 0 && (
                          <span className="text-[11px] font-semibold text-amber-400 font-mono">
                            (+{item.fee} €)
                          </span>
                        )}
                        {item.fee === 0 && (
                          <span className="text-[11px] font-medium text-slate-400">
                            ({isAr ? 'بدون تكلفة إضافية' : isEn ? 'Standard' : 'Kein Aufpreis'})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Step 5: Official Itemized Calculation Breakdown (Invoice Draft Style, No Box Clutter) */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            {isAr ? 'تفصيل السعر التقديري (مبدأ الشفافية المطلقة)' : isEn ? 'Itemized Cost Breakdown (100% Transparent)' : 'Transparente Preiszusammensetzung'}
          </h3>

          <div className="border-t border-b border-white/10 text-xs sm:text-sm">
            <table className="w-full text-left">
              <tbody className="divide-y divide-white/10 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    {isAr ? 'الأجرة الأساسية (تجهيز الشاحنة والتحميل المهني VDI 2700)' : isEn ? 'Base pauschale (Vehicle prep & safe strapping VDI 2700)' : 'Grundpauschale (Bereitstellung, Anfahrt & 4-Punkt-Verladung VDI 2700)'}
                  </td>
                  <td className="py-3 pl-4 text-right font-mono text-white font-semibold whitespace-nowrap">
                    50,00 €
                  </td>
                </tr>

                <tr>
                  <td className="py-3 pr-4 font-medium">
                    {isAr 
                      ? `مسار النقل المباشر (${distanceKm} كم × 1,50 €/كم)` 
                      : isEn 
                      ? `Actual transport distance (${distanceKm} km × 1.50 €/km)` 
                      : `Fahrtstrecke (${distanceKm} km × 1,50 €/km)`}
                  </td>
                  <td className="py-3 pl-4 text-right font-mono text-white font-semibold whitespace-nowrap">
                    {kmCost.toFixed(2).replace('.', ',')} €
                  </td>
                </tr>

                {vehicleExtra > 0 && (
                  <tr className="text-amber-300/90">
                    <td className="py-3 pr-4 font-medium">
                      {isAr ? `إضافة فئة الوزن (${vehicleSurcharges[vehicleType].label})` : isEn ? `Weight surcharge (${vehicleSurcharges[vehicleType].label})` : `Gewichtszuschlag (${vehicleSurcharges[vehicleType].label})`}
                    </td>
                    <td className="py-3 pl-4 text-right font-mono font-semibold whitespace-nowrap">
                      +{vehicleExtra},00 €
                    </td>
                  </tr>
                )}

                {conditionExtra > 0 && (
                  <tr className="text-amber-300/90">
                    <td className="py-3 pr-4 font-medium">
                      {isAr ? `إضافة صعوبة التحميل (${conditionSurcharges[condition].label})` : isEn ? `Loading difficulty (${conditionSurcharges[condition].label})` : `Erschwerniszuschlag (${conditionSurcharges[condition].label})`}
                    </td>
                    <td className="py-3 pl-4 text-right font-mono font-semibold whitespace-nowrap">
                      +{conditionExtra},00 €
                    </td>
                  </tr>
                )}

                {/* Grand Total Row */}
                <tr className="font-bold text-white text-sm sm:text-base border-t border-amber-500/30">
                  <td className="py-4 pr-4">
                    <span className="block text-white font-black">
                      {isAr ? 'السعر التقديري المتوقع (Richtpreis)' : isEn ? 'Estimated Guide Price (Total)' : 'Kalkulierter Richtpreis (Gesamt)'}
                    </span>
                    <span className="text-[11px] font-normal text-slate-400 block mt-0.5">
                      {isAr 
                        ? 'معفى من ضريبة المبيعات وفقاً لـ § 19 UStG • سعر تقريبي واقعي جداً' 
                        : isEn 
                        ? 'Tax-exempt per § 19 UStG • Highly accurate realistic quote' 
                        : 'Gemäß § 19 UStG wird keine MwSt berechnet • Reeller Festpreis nach telefonischer Bestätigung'}
                    </span>
                  </td>
                  <td className="py-4 pl-4 text-right font-mono text-xl sm:text-2xl font-black text-amber-400 whitespace-nowrap">
                    ca. {calculatedTotal} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Dynamic ETA & Distance Real-time Indicator */}
          <div className="mt-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock size={16} className="text-amber-400 shrink-0" />
              <span>
                {distanceKm <= 30 ? (
                  isAr 
                    ? 'وقت الوصول التقديري إلى موقعك في بوخوم ومحيطها: ca. 20–35 دقيقة (Express)' 
                    : isEn 
                    ? 'Estimated arrival on site in Bochum & vicinity: ca. 20–35 min (Express)' 
                    : 'Geschätzte Eintreffzeit vor Ort (Bochum & Nahbereich): ca. 20–35 Min. (Express)'
                ) : distanceKm <= 75 ? (
                  isAr 
                    ? 'وقت الوصول التقديري في نطاق حوض الرور: ca. 35–55 دقيقة' 
                    : isEn 
                    ? 'Estimated arrival in Ruhr metropolitan area: ca. 35–55 min' 
                    : 'Geschätzte Eintreffzeit im Ruhrgebiet: ca. 35–55 Min.'
                ) : (
                  isAr 
                    ? `مدة النقل المباشر للمسافات الطويلة (${distanceKm} كم): ca. ${Math.round(distanceKm / 75 * 10) / 10} ساعة (رحلة مباشرة)` 
                    : isEn 
                    ? `Direct long-distance transit time (${distanceKm} km): ca. ${Math.round(distanceKm / 75 * 10) / 10} hrs (no transshipment)` 
                    : `Fahrtzeit für Fernüberführung (${distanceKm} km): ca. ${Math.round(distanceKm / 75 * 10) / 10} Std. (Direktfahrt ohne Umladen)`
                )}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px] shrink-0">
              <Gauge size={14} className="text-amber-400" />
              <span>{distanceKm} km</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <a
              href="tel:+4915565500442"
              className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/25 transition-all active:scale-98 text-sm"
            >
              <Phone size={18} className="fill-white" />
              <span>{isAr ? 'اتصال مباشر: 0155 65500442' : isEn ? 'Call directly: 0155 65500442' : '24h Notruf: 0155 65500442'}</span>
            </a>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl border border-white/15 hover:border-amber-400/40 transition-all active:scale-98 text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle size={18} className="text-amber-400" />
              <span>{isAr ? 'إرسال تفاصيل الحسبة عبر الواتساب' : isEn ? 'Request this quote via WhatsApp' : 'Kalkulierten Transport per WhatsApp anfragen'}</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mt-4 leading-relaxed text-center sm:text-left">
            * {isAr 
                ? 'ملاحظة: السعر المحسوب أعلاه هو السعر الأقرب للواقع لجميع السيارات السليمة. في حالات الحوادث المعقدة أو الانتظار الطويل يحدد السعر النهائي الثابت بالاتفاق الهاتفي المسبق.' 
                : isEn 
                ? 'Note: This calculated price is the closest estimate to reality for rolling vehicles. Complex accident recoveries or prolonged waiting times are finalized by phone confirmation beforehand.' 
                : 'Hinweis: Für fahrbereite oder normal rollfähige Fahrzeuge entspricht dieser Richtpreis der exakten Transportabrechnung. Bei extremen Bergungen oder Standzeiten bestätigen wir Ihnen den garantierten Festpreis verbindlich vor der Abfahrt.'}
          </p>
        </div>

      </div>

    </div>
  );
}
