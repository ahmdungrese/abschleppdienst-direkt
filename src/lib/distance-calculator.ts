/**
 * Abschleppdienst Direkt - German Postal Code (PLZ) & City Distance Calculator Engine
 * Calculates realistic road distances (Haversine * road detour factor 1.28)
 * Supports German 5-digit PLZ, 2-digit Leitregionen, and direct city names.
 */

interface Coordinates {
  name: string;
  lat: number;
  lon: number;
}

// Coordinates for German 2-digit PLZ Leitregionen (01-99)
const PLZ_COORDINATES: Record<string, Coordinates> = {
  '01': { name: 'Dresden', lat: 51.0504, lon: 13.7373 },
  '02': { name: 'Görlitz / Bautzen', lat: 51.1528, lon: 14.9872 },
  '03': { name: 'Cottbus', lat: 51.7563, lon: 14.3329 },
  '04': { name: 'Leipzig', lat: 51.3397, lon: 12.3731 },
  '06': { name: 'Halle (Saale)', lat: 51.4828, lon: 11.9697 },
  '07': { name: 'Gera / Jena', lat: 50.8767, lon: 12.0833 },
  '08': { name: 'Zwickau / Plauen', lat: 50.7189, lon: 12.4961 },
  '09': { name: 'Chemnitz', lat: 50.8278, lon: 12.9214 },
  '10': { name: 'Berlin (Mitte)', lat: 52.5200, lon: 13.4050 },
  '12': { name: 'Berlin (Süd)', lat: 52.4419, lon: 13.4353 },
  '13': { name: 'Berlin (Nord)', lat: 52.5978, lon: 13.3619 },
  '14': { name: 'Potsdam', lat: 52.3906, lon: 13.0645 },
  '15': { name: 'Frankfurt (Oder)', lat: 52.3425, lon: 14.5506 },
  '16': { name: 'Eberswalde', lat: 52.8336, lon: 13.8189 },
  '17': { name: 'Neubrandenburg', lat: 53.5574, lon: 13.2612 },
  '18': { name: 'Rostock', lat: 54.0924, lon: 12.0991 },
  '19': { name: 'Schwerin', lat: 53.6355, lon: 11.4012 },
  '20': { name: 'Hamburg (Mitte)', lat: 53.5511, lon: 9.9937 },
  '21': { name: 'Hamburg (Süd) / Lüneburg', lat: 53.4608, lon: 9.9806 },
  '22': { name: 'Hamburg (Nord)', lat: 53.6128, lon: 10.0219 },
  '23': { name: 'Lübeck', lat: 53.8655, lon: 10.6866 },
  '24': { name: 'Kiel / Flensburg', lat: 54.3233, lon: 10.1228 },
  '25': { name: 'Elmshorn / Nordfriesland', lat: 53.7547, lon: 9.6542 },
  '26': { name: 'Oldenburg / Emden', lat: 53.1435, lon: 8.2146 },
  '27': { name: 'Bremerhaven / Cuxhaven', lat: 53.5414, lon: 8.5833 },
  '28': { name: 'Bremen', lat: 53.0793, lon: 8.8017 },
  '29': { name: 'Celle / Uelzen', lat: 52.6247, lon: 10.0811 },
  '30': { name: 'Hannover', lat: 52.3759, lon: 9.7320 },
  '31': { name: 'Hildesheim / Hameln', lat: 52.1548, lon: 9.9579 },
  '32': { name: 'Herford / Minden', lat: 52.1158, lon: 8.6722 },
  '33': { name: 'Bielefeld / Paderborn / Gütersloh', lat: 52.0302, lon: 8.5325 },
  '34': { name: 'Kassel', lat: 51.3127, lon: 9.4797 },
  '35': { name: 'Gießen / Marburg', lat: 50.5872, lon: 8.6755 },
  '36': { name: 'Fulda', lat: 50.5528, lon: 9.6753 },
  '37': { name: 'Göttingen', lat: 51.5413, lon: 9.9158 },
  '38': { name: 'Braunschweig / Wolfsburg', lat: 52.2689, lon: 10.5268 },
  '39': { name: 'Magdeburg', lat: 52.1205, lon: 11.6276 },
  '40': { name: 'Düsseldorf / Hilden', lat: 51.2277, lon: 6.7735 },
  '41': { name: 'Mönchengladbach / Neuss', lat: 51.1805, lon: 6.4428 },
  '42': { name: 'Wuppertal / Solingen / Remscheid', lat: 51.2562, lon: 7.1508 },
  '44': { name: 'Bochum / Dortmund / Herne', lat: 51.4816, lon: 7.2165 },
  '45': { name: 'Essen / Gelsenkirchen / Recklinghausen', lat: 51.4556, lon: 7.0116 },
  '46': { name: 'Oberhausen / Bottrop / Wesel', lat: 51.4700, lon: 6.8600 },
  '47': { name: 'Duisburg / Krefeld / Moers', lat: 51.4344, lon: 6.7623 },
  '48': { name: 'Münster / Steinfurt / Coesfeld', lat: 51.9607, lon: 7.6261 },
  '49': { name: 'Osnabrück / Rheine', lat: 52.2799, lon: 8.0472 },
  '50': { name: 'Köln', lat: 50.9375, lon: 6.9603 },
  '51': { name: 'Leverkusen / Bergisch Gladbach', lat: 51.0333, lon: 6.9833 },
  '52': { name: 'Aachen / Düren', lat: 50.7753, lon: 6.0839 },
  '53': { name: 'Bonn / Euskirchen', lat: 50.7374, lon: 7.0982 },
  '54': { name: 'Trier / Wittlich', lat: 49.7567, lon: 6.6414 },
  '55': { name: 'Mainz / Bad Kreuznach', lat: 49.9929, lon: 8.2473 },
  '56': { name: 'Koblenz / Neuwied', lat: 50.3569, lon: 7.5890 },
  '57': { name: 'Siegen / Olpe', lat: 50.8744, lon: 8.0242 },
  '58': { name: 'Hagen / Ennepe-Ruhr', lat: 51.3671, lon: 7.4633 },
  '59': { name: 'Hamm / Unna / Soest / Arnsberg', lat: 51.6739, lon: 7.8160 },
  '60': { name: 'Frankfurt am Main', lat: 50.1109, lon: 8.6821 },
  '61': { name: 'Bad Homburg / Friedberg', lat: 50.2269, lon: 8.6144 },
  '63': { name: 'Offenbach / Hanau', lat: 50.1006, lon: 8.7668 },
  '64': { name: 'Darmstadt / Rüsselsheim', lat: 49.8728, lon: 8.6512 },
  '65': { name: 'Wiesbaden / Mainz-Kastel', lat: 50.0782, lon: 8.2398 },
  '66': { name: 'Saarbrücken / Neunkirchen', lat: 49.2402, lon: 6.9969 },
  '67': { name: 'Ludwigshafen / Kaiserslautern', lat: 49.4774, lon: 8.4452 },
  '68': { name: 'Mannheim', lat: 49.4875, lon: 8.4660 },
  '69': { name: 'Heidelberg', lat: 49.3988, lon: 8.6724 },
  '70': { name: 'Stuttgart', lat: 48.7758, lon: 9.1829 },
  '71': { name: 'Böblingen / Ludwigsburg', lat: 48.6878, lon: 9.0122 },
  '72': { name: 'Tübingen / Reutlingen', lat: 48.5216, lon: 9.0576 },
  '73': { name: 'Göppingen / Esslingen', lat: 48.7047, lon: 9.6528 },
  '74': { name: 'Heilbronn', lat: 49.1427, lon: 9.2109 },
  '75': { name: 'Pforzheim', lat: 48.8911, lon: 8.6944 },
  '76': { name: 'Karlsruhe / Baden-Baden', lat: 49.0069, lon: 8.4037 },
  '77': { name: 'Offenburg', lat: 48.4722, lon: 7.9442 },
  '78': { name: 'Villingen-Schwenningen / Konstanz', lat: 48.0601, lon: 8.4587 },
  '79': { name: 'Freiburg im Breisgau', lat: 47.9990, lon: 7.8421 },
  '80': { name: 'München (Zentrum)', lat: 48.1351, lon: 11.5820 },
  '81': { name: 'München (Ost)', lat: 48.1311, lon: 11.6492 },
  '82': { name: 'Starnberg / Fürstenfeldbruck', lat: 47.9989, lon: 11.3422 },
  '83': { name: 'Rosenheim / Traunstein', lat: 47.8561, lon: 12.1289 },
  '84': { name: 'Landshut', lat: 48.5392, lon: 12.1508 },
  '85': { name: 'Ingolstadt / Freising', lat: 48.7665, lon: 11.4258 },
  '86': { name: 'Augsburg', lat: 48.3705, lon: 10.8978 },
  '87': { name: 'Kempten (Allgäu)', lat: 47.7286, lon: 10.3158 },
  '88': { name: 'Friedrichshafen / Ravensburg', lat: 47.6542, lon: 9.4792 },
  '89': { name: 'Ulm', lat: 48.4011, lon: 9.9876 },
  '90': { name: 'Nürnberg', lat: 49.4521, lon: 11.0767 },
  '91': { name: 'Fürth / Erlangen', lat: 49.4774, lon: 10.9886 },
  '92': { name: 'Amberg / Weiden', lat: 49.4444, lon: 11.8589 },
  '93': { name: 'Regensburg', lat: 49.0134, lon: 12.1016 },
  '94': { name: 'Passau / Straubing', lat: 48.5667, lon: 13.4319 },
  '95': { name: 'Bayreuth / Hof', lat: 49.9481, lon: 11.5783 },
  '96': { name: 'Bamberg', lat: 49.8988, lon: 10.9028 },
  '97': { name: 'Würzburg / Schweinfurt', lat: 49.7913, lon: 9.9534 },
  '98': { name: 'Suhl / Eisenach', lat: 50.6097, lon: 10.6931 },
  '99': { name: 'Erfurt / Weimar', lat: 50.9848, lon: 11.0299 },
};

// High-accuracy coordinate database for NRW & key national cities
const CITY_COORDINATES: Record<string, Coordinates> = {
  bochum: { name: 'Bochum', lat: 51.4816, lon: 7.2165 },
  wattenscheid: { name: 'Bochum-Wattenscheid', lat: 51.4820, lon: 7.1333 },
  essen: { name: 'Essen', lat: 51.4556, lon: 7.0116 },
  dortmund: { name: 'Dortmund', lat: 51.5136, lon: 7.4653 },
  gelsenkirchen: { name: 'Gelsenkirchen', lat: 51.5177, lon: 7.0984 },
  herne: { name: 'Herne', lat: 51.5426, lon: 7.2256 },
  witten: { name: 'Witten', lat: 51.4390, lon: 7.3364 },
  hattingen: { name: 'Hattingen', lat: 51.3989, lon: 7.1858 },
  'castrop-rauxel': { name: 'Castrop-Rauxel', lat: 51.5516, lon: 7.3113 },
  castrop: { name: 'Castrop-Rauxel', lat: 51.5516, lon: 7.3113 },
  recklinghausen: { name: 'Recklinghausen', lat: 51.6144, lon: 7.1983 },
  herten: { name: 'Herten', lat: 51.5972, lon: 7.1350 },
  gladbeck: { name: 'Gladbeck', lat: 51.5714, lon: 6.9922 },
  bottrop: { name: 'Bottrop', lat: 51.5236, lon: 6.9248 },
  oberhausen: { name: 'Oberhausen', lat: 51.4700, lon: 6.8600 },
  muelheim: { name: 'Mülheim an der Ruhr', lat: 51.4272, lon: 6.8828 },
  'mülheim': { name: 'Mülheim an der Ruhr', lat: 51.4272, lon: 6.8828 },
  duisburg: { name: 'Duisburg', lat: 51.4344, lon: 6.7623 },
  moers: { name: 'Moers', lat: 51.4508, lon: 6.6266 },
  krefeld: { name: 'Krefeld', lat: 51.3333, lon: 6.5667 },
  duesseldorf: { name: 'Düsseldorf', lat: 51.2277, lon: 6.7735 },
  'düsseldorf': { name: 'Düsseldorf', lat: 51.2277, lon: 6.7735 },
  neuss: { name: 'Neuss', lat: 51.2003, lon: 6.6903 },
  wuppertal: { name: 'Wuppertal', lat: 51.2562, lon: 7.1508 },
  solingen: { name: 'Solingen', lat: 51.1711, lon: 7.0841 },
  remscheid: { name: 'Remscheid', lat: 51.1802, lon: 7.1974 },
  hagen: { name: 'Hagen', lat: 51.3671, lon: 7.4633 },
  ennepetal: { name: 'Ennepetal', lat: 51.2986, lon: 7.3556 },
  schwelm: { name: 'Schwelm', lat: 51.2889, lon: 7.2944 },
  gevelsberg: { name: 'Gevelsberg', lat: 51.3228, lon: 7.3361 },
  iserlohn: { name: 'Iserlohn', lat: 51.3768, lon: 7.6989 },
  luedenscheid: { name: 'Lüdenscheid', lat: 51.2189, lon: 7.6289 },
  'lüdenscheid': { name: 'Lüdenscheid', lat: 51.2189, lon: 7.6289 },
  hamm: { name: 'Hamm', lat: 51.6739, lon: 7.8160 },
  unna: { name: 'Unna', lat: 51.5350, lon: 7.6889 },
  kamen: { name: 'Kamen', lat: 51.5917, lon: 7.6639 },
  bergkamen: { name: 'Bergkamen', lat: 51.6167, lon: 7.6333 },
  muenster: { name: 'Münster', lat: 51.9607, lon: 7.6261 },
  'münster': { name: 'Münster', lat: 51.9607, lon: 7.6261 },
  bielefeld: { name: 'Bielefeld', lat: 52.0302, lon: 8.5325 },
  guetersloh: { name: 'Gütersloh', lat: 51.9056, lon: 8.3789 },
  'gütersloh': { name: 'Gütersloh', lat: 51.9056, lon: 8.3789 },
  paderborn: { name: 'Paderborn', lat: 51.7189, lon: 8.7575 },
  koeln: { name: 'Köln', lat: 50.9375, lon: 6.9603 },
  'köln': { name: 'Köln', lat: 50.9375, lon: 6.9603 },
  cologne: { name: 'Köln', lat: 50.9375, lon: 6.9603 },
  leverkusen: { name: 'Leverkusen', lat: 51.0333, lon: 6.9833 },
  'bergisch gladbach': { name: 'Bergisch Gladbach', lat: 50.9917, lon: 7.1292 },
  bonn: { name: 'Bonn', lat: 50.7374, lon: 7.0982 },
  siegburg: { name: 'Siegburg', lat: 50.7997, lon: 7.2072 },
  troisdorf: { name: 'Troisdorf', lat: 50.8167, lon: 7.1500 },
  aachen: { name: 'Aachen', lat: 50.7753, lon: 6.0839 },
  moenchengladbach: { name: 'Mönchengladbach', lat: 51.1805, lon: 6.4428 },
  'mönchengladbach': { name: 'Mönchengladbach', lat: 51.1805, lon: 6.4428 },
  wesel: { name: 'Wesel', lat: 51.6575, lon: 6.6186 },
  dinslaken: { name: 'Dinslaken', lat: 51.5628, lon: 6.7333 },
  kleve: { name: 'Kleve', lat: 51.7853, lon: 6.1386 },
  emmerich: { name: 'Emmerich', lat: 51.8317, lon: 6.2439 },
  frankfurt: { name: 'Frankfurt am Main', lat: 50.1109, lon: 8.6821 },
  hannover: { name: 'Hannover', lat: 52.3759, lon: 9.7320 },
  hamburg: { name: 'Hamburg', lat: 53.5511, lon: 9.9937 },
  bremen: { name: 'Bremen', lat: 53.0793, lon: 8.8017 },
  berlin: { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
  muenchen: { name: 'München', lat: 48.1351, lon: 11.5820 },
  'münchen': { name: 'München', lat: 48.1351, lon: 11.5820 },
  munich: { name: 'München', lat: 48.1351, lon: 11.5820 },
  stuttgart: { name: 'Stuttgart', lat: 48.7758, lon: 9.1829 },
  nuernberg: { name: 'Nürnberg', lat: 49.4521, lon: 11.0767 },
  'nürnberg': { name: 'Nürnberg', lat: 49.4521, lon: 11.0767 },
  leipzig: { name: 'Leipzig', lat: 51.3397, lon: 12.3731 },
  kassel: { name: 'Kassel', lat: 51.3127, lon: 9.4797 },
  osnabrueck: { name: 'Osnabrück', lat: 52.2799, lon: 8.0472 },
  'osnabrück': { name: 'Osnabrück', lat: 52.2799, lon: 8.0472 },
  koblenz: { name: 'Koblenz', lat: 50.3569, lon: 7.5890 },
  mainz: { name: 'Mainz', lat: 49.9929, lon: 8.2473 },
  wiesbaden: { name: 'Wiesbaden', lat: 50.0782, lon: 8.2398 },
  mannheim: { name: 'Mannheim', lat: 49.4875, lon: 8.4660 },
  saarbruecken: { name: 'Saarbrücken', lat: 49.2402, lon: 6.9969 },
  'saarbrücken': { name: 'Saarbrücken', lat: 49.2402, lon: 6.9969 },
};

/**
 * Resolves a raw location string (e.g. "44803 Bochum", "Essen", "50667") into Coordinates.
 */
export function resolveLocation(rawInput: string): Coordinates | null {
  if (!rawInput || !rawInput.trim()) return null;
  const text = rawInput.trim().toLowerCase();

  // 1. Check for specific city match in text
  for (const [key, coords] of Object.entries(CITY_COORDINATES)) {
    // Word boundary or containment
    const escaped = key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    if (regex.test(text) || text.includes(key)) {
      return coords;
    }
  }

  // 2. Check for 5-digit PLZ (e.g. "44803", "45127")
  const plz5Match = text.match(/\b(\d{5})\b/);
  if (plz5Match) {
    const prefix = plz5Match[1].slice(0, 2);
    if (PLZ_COORDINATES[prefix]) {
      const data = PLZ_COORDINATES[prefix];
      return {
        name: `PLZ ${plz5Match[1]} (${data.name})`,
        lat: data.lat,
        lon: data.lon,
      };
    }
  }

  // 3. Check for standalone 2-digit PLZ prefix (e.g. "44", "45")
  const plz2Match = text.match(/^\s*(\d{2})\s*$/);
  if (plz2Match) {
    const prefix = plz2Match[1];
    if (PLZ_COORDINATES[prefix]) {
      const data = PLZ_COORDINATES[prefix];
      return {
        name: `Region ${prefix} (${data.name})`,
        lat: data.lat,
        lon: data.lon,
      };
    }
  }

  return null;
}

export interface RouteCalculationResult {
  distanceKm: number;
  fromName: string;
  toName: string;
  isSameCity: boolean;
  status: 'calculated' | 'manual';
}

/**
 * Calculates realistic road driving distance between two addresses / PLZ in Germany.
 */
export function calculateRouteDistance(
  fromRaw: string,
  toRaw: string
): RouteCalculationResult | null {
  const fromCoords = resolveLocation(fromRaw);
  const toCoords = resolveLocation(toRaw);

  if (!fromCoords || !toCoords) {
    return null;
  }

  // Same city / same area check
  const latDiff = Math.abs(fromCoords.lat - toCoords.lat);
  const lonDiff = Math.abs(fromCoords.lon - toCoords.lon);
  const isSame = fromCoords.name === toCoords.name || (latDiff < 0.015 && lonDiff < 0.015);

  if (isSame) {
    return {
      distanceKm: 10,
      fromName: fromCoords.name,
      toName: toCoords.name,
      isSameCity: true,
      status: 'calculated',
    };
  }

  // Haversine formula
  const R = 6371; // Earth radius in km
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(toCoords.lat - fromCoords.lat);
  const dLon = toRad(toCoords.lon - fromCoords.lon);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(fromCoords.lat)) *
      Math.cos(toRad(toCoords.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const directDistance = R * c;

  // Realistic road routing detour factor in Germany (highway/bundesstraße average)
  const roadDistance = Math.max(8, Math.round(directDistance * 1.28));

  return {
    distanceKm: roadDistance,
    fromName: fromCoords.name,
    toName: toCoords.name,
    isSameCity: false,
    status: 'calculated',
  };
}
