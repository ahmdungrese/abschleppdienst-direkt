export type FAQCategory = 'all' | 'notfall' | 'elektro' | 'technik' | 'kosten';

export interface FAQItemData {
  id: string;
  category: 'notfall' | 'elektro' | 'technik' | 'kosten';
  isWarning?: boolean;
  de: {
    question: string;
    answer: string;
    highlight: string;
  };
  ar: {
    question: string;
    answer: string;
    highlight: string;
  };
  en: {
    question: string;
    answer: string;
    highlight: string;
  };
}

export const faqCategories: { id: FAQCategory; de: string; ar: string; en: string }[] = [
  { id: 'all', de: 'Alle Fragen', ar: 'جميع الأسئلة', en: 'All Questions' },
  { id: 'notfall', de: '🚨 Notfall & Panne', ar: '🚨 الطوارئ والأعطال', en: '🚨 Emergency & Breakdown' },
  { id: 'elektro', de: '⚡ E-Auto & Spezial', ar: '⚡ سيارات كهربائية ورياضية', en: '⚡ EV & Sports Cars' },
  { id: 'technik', de: '⚙️ Bergung & Technik', ar: '⚙️ تقنيات الرفع والتحميل', en: '⚙️ Recovery & Tech' },
  { id: 'kosten', de: '💶 Kosten & Versicherung', ar: '💶 التكاليف والتأمين', en: '💶 Pricing & Insurance' },
];

export const faqsData: FAQItemData[] = [
  // ==========================================
  // KATEGORIE 1: NOTFALL & PANNE
  // ==========================================
  {
    id: 'autobahn-sicherheit',
    category: 'notfall',
    isWarning: true,
    de: {
      question: "Was ist bei einer Panne auf der Autobahn (A40, A43, A448) lebenswichtig zu beachten?",
      answer: "Schalten Sie sofort die Warnblinkanlage ein und rollen Sie vorsichtig auf den Seitenstreifen. Ziehen Sie die Warnweste noch im Fahrzeug an. Verlassen Sie das Auto zwingend über die Beifahrerseite und stellen Sie sich unverzüglich hinter die Leitplanke. Stellen Sie das Warndreieck in ca. 150 bis 200 Metern Entfernung auf. Warten Sie niemals im Auto oder auf der Fahrbahn! Rufen Sie uns erst hinter der Schutzplanke an (+49 155 65500442). Bei Liegenbleiben auf der Fahrspur wählen Sie bitte sofort den Notruf 110.",
      highlight: "Lebenswichtige Sicherheit"
    },
    ar: {
      question: "ما هي إجراءات السلامة الحيوية التي يجب اتباعها عند حدوث عطل على الأوتوبان (A40 / A43 / A448)؟",
      answer: "قم فوراً بتشغيل أضواء التحذير (الفلاشر) وانحرف بحذر إلى شريط الطوارئ الجانبي. ارتدِ سترة الأمان الفسفورية وأنت داخل السيارة. انزل أنت وجميع الركاب إجبارياً من باب الراكب الأيمن (الجهة البعيدة عن حركة السير) وتوجهوا فوراً خلف الحاجز الحديدي (Leitplanke). ضع مثلث التحذير على بُعد 150 إلى 200 متر. لا تنتظروا إطلاقاً داخل السيارة أو على شريط الطوارئ! اتصل بنا فقط وأنت بأمان خلف الحاجز (+49 155 65500442). وإذا تعطلت السيارة في مسار السير، اتصل فوراً بالشرطة على الرقم 110.",
      highlight: "إجراءات أمان حيوية"
    },
    en: {
      question: "What safety rules are vital during a breakdown on the Autobahn (A40, A43, A448)?",
      answer: "Immediately turn on hazard warning lights and carefully roll onto the hard shoulder. Put on your high-visibility vest while still inside the car. Exit strictly via the passenger side and immediately move behind the crash barrier. Place your warning triangle at least 150 to 200 meters behind the vehicle. Never remain inside the car or on the hard shoulder! Call us only once safely behind the guardrail (+49 155 65500442). If stranded in an active lane, dial emergency 110 immediately.",
      highlight: "Life-Saving Safety"
    }
  },
  {
    id: 'falsch-getankt',
    category: 'notfall',
    isWarning: true,
    de: {
      question: "Was muss ich tun, wenn ich falsch getankt habe (z. B. Benzin statt Diesel oder umgekehrt)?",
      answer: "Lassen Sie den Motor und die Zündung sofort AUS! Starten Sie den Wagen keinesfalls mehr, da moderne Hochdruckpumpen und Injektoren bereits nach wenigen Umdrehungen ohne schmierenden Diesel trockenlaufen und Metallspäne das gesamte Kraftstoffsystem ruinieren können. Pumpen Sie den Kraftstoff nicht selbst an der Tankstelle ab (Explosionsgefahr und streng verboten). Abschleppdienst Direkt verlädt Ihr Fahrzeug schonend und transportiert es direkt zu einer Fachwerkstatt zur professionellen Tank- und Leitungsspülung.",
      highlight: "Sofort Motor & Zündung aus"
    },
    ar: {
      question: "ماذا يجب أن أفعل إذا قمت بتعبئة الوقود الخطأ (بنزين بدل ديزل أو العكس)؟",
      answer: "أوقف المحرك وأطفئ مفتاح التشغيل (Zündung) فوراً دون أي تأخير! إياك ومحاولة تشغيل السيارة أو القيادة، لأن مضخات الضغط العالي والبخاخات الحديثة تجف في ثوانٍ وتولد برادة معدنية خطيرة تدمر دورة الوقود بالكامل. لا تحاول سحب الوقود بنفسك في محطة الوقود (خطر انفجار وممنوع قانونياً). تقوم Abschleppdienst Direkt بتحميل مركبتك بعناية ونقلها مباشرة إلى ورشة متخصصة لتفريغ الخزان وتنظيف أنابيب الوقود باحترافية.",
      highlight: "إيقاف المحرك والكونتاكت فوراً"
    },
    en: {
      question: "What should I do if I put the wrong fuel in my vehicle (petrol in diesel or vice versa)?",
      answer: "Leave the engine and ignition immediately OFF! Do not start the car under any circumstances. Modern high-pressure pumps and injectors run dry without lubricating diesel within seconds, generating metal shavings that destroy the entire fuel system. Never attempt to siphon fuel on the forecourt (explosion hazard and strictly prohibited). Abschleppdienst Direkt carefully loads your vehicle and transports it directly to a specialist workshop for professional fuel tank flushing.",
      highlight: "Keep Engine & Ignition OFF"
    }
  },
  {
    id: 'anfahrtszeit-bochum',
    category: 'notfall',
    de: {
      question: "Wie lange brauchen Sie, bis Sie bei mir in Bochum oder auf den Autobahnen eintreffen?",
      answer: "Durch unseren zentralen Standort in Bochum mit direktem Anschluss an die Autobahnen A448, A43 und A40 sind wir in der Regel innerhalb von 10 bis 20 Minuten im gesamten Stadtgebiet Bochum sowie an den Autobahnabschnitten vor Ort.",
      highlight: "Express-Anfahrt (10–20 Min.)"
    },
    ar: {
      question: "كم من الوقت تستغرقون للوصول إليّ في بوخوم أو على الطرق السريعة؟",
      answer: "بفضل موقعنا المركزي في بوخوم وإمكانية الوصول المباشر والسريع إلى شبكة الأوتوبان A448 وA43 وA40، نصل إليك عادةً خلال 10 إلى 20 دقيقة فقط في كافة مناطق مدينة بوخوم وعلى مقاطع الطرق السريعة المحيطة بها.",
      highlight: "وصول سريع (10–20 دقيقة)"
    },
    en: {
      question: "How quickly do you arrive at my location in Bochum or on the motorway?",
      answer: "Thanks to our central location in Bochum with immediate access to motorways A448, A43, and A40, we typically arrive within 10 to 20 minutes across the entire Bochum urban area and surrounding highway sections.",
      highlight: "Express Arrival (10–20 Min.)"
    }
  },
  {
    id: 'starthilfe-winter-elektronik',
    category: 'notfall',
    de: {
      question: "Mein Auto springt im Winter nicht an: Kann eine Starthilfe die empfindliche Bordelektronik moderner Autos beschädigen?",
      answer: "Bei herkömmlichen Überbrückungskabeln von Auto zu Auto können gefährliche Spannungsspitzen (Transienten) entstehen, die Steuergeräte und Sensoren zerstören. Abschleppdienst Direkt verwendet professionelle Hochleistungs-Lithium-Booster (NOCO Boost) mit integriertem Verpolungsschutz und Überspannungsfilter. Dadurch wird Ihr Motor auch bei extremer Kälte sicher und schonend gestartet, ohne die sensible Bordelektronik oder Herstellergarantie zu gefährden.",
      highlight: "Elektronik- & Überspannungsschutz"
    },
    ar: {
      question: "سيارتي لا تعمل في الشتاء: هل يمكن لمساعد التشغيل (Starthilfe) إتلاف إلكترونيات السيارة الحديثة؟",
      answer: "عند استخدام كابلات التوصيل التقليدية من سيارة لأخرى، قد تحدث طفرات جهد حادة وفولتاج زائد يدمر كمبيوترات السيارة وحساساتها الدقيقة. تستخدم Abschleppdienst Direkt أجهزة تشغيل ليثيوم احترافية عالية الأداء (NOCO Boost) مزودة بحماية نشطة ضد عكس الأقطاب وفلاتر لامتصاص الجهد الزائد. وبذلك يُشغَّل محركك بأمان تام حتى في أشد درجات التجمد دون أي خطر على إلكترونيات سيارتك أو كفالتها.",
      highlight: "حماية تامة للإلكترونيات"
    },
    en: {
      question: "My car won't start in winter: Can a jump start damage sensitive onboard electronics in modern cars?",
      answer: "Conventional jumper cables between two cars can cause dangerous voltage spikes that destroy sensitive ECUs and sensors. Abschleppdienst Direkt uses professional high-performance lithium jump starters (NOCO Boost) with integrated reverse polarity protection and surge suppression. This ensures a safe, spark-free start even in freezing temperatures without risking electronics or manufacturer warranties.",
      highlight: "Surge & ECU Protection"
    }
  },
  {
    id: 'kostenlose-beratung-weiterfahren',
    category: 'notfall',
    de: {
      question: "Ich bin unsicher, ob ich bei einer Warnleuchte oder ungewöhnlichen Geräuschen noch weiterfahren darf – helfen Sie mir telefonisch?",
      answer: "Ja, rufen Sie uns einfach direkt unter +49 155 65500442 an. Inhaber Wassem Al Dalati gibt Ihnen eine ehrliche und 100 % kostenlose Ersteinschätzung am Telefon oder per WhatsApp (z. B. anhand eines Fotos der Warnleuchte oder eines Videos vom Geräusch). Wenn ein gefahrloses Weiterrollen zur Werkstatt möglich ist, sagen wir Ihnen das transparent, um Ihnen unnötige Kosten zu ersparen.",
      highlight: "100 % Kostenlose Erstberatung"
    },
    ar: {
      question: "لست متأكداً إن كان يمكنني متابعة القيادة عند ظهور لمبة تحذير أو صوت غريب – هل تقدمون استشارة هاتفية؟",
      answer: "نعم، اتصل بنا مباشرة على الرقم +49 155 65500442. يقدم لك الخبير وسيم الدالاتي تقييماً أولياً صادقاً ومجانياً 100% عبر الهاتف أو عبر إرسال صورة للمبة التحذير أو مقطع فيديو للصوت عبر واتساب. إذا كان من الآمن التدحرج بسيارتك للورشة، سنخبرك بكل أمانة لتوفير تكلفة السحب عليك.",
      highlight: "استشارة هاتفية مجانية 100%"
    },
    en: {
      question: "I'm unsure if I can keep driving with a warning light or strange noise – can you advise me over the phone?",
      answer: "Yes, simply call us directly at +49 155 65500442. Owner Wassem Al Dalati provides an honest and 100% free initial assessment over the phone or via WhatsApp (e.g. from a photo of the warning lamp or a short video of the noise). If driving safely to a nearby garage is possible, we will tell you openly to save you unnecessary towing costs.",
      highlight: "100% Free Consultation"
    }
  },
  {
    id: 'mitfahren-im-abschleppwagen',
    category: 'notfall',
    de: {
      question: "Darf ich während des Transports persönlich im Abschleppwagen mitfahren?",
      answer: "Ja, sehr gerne! Unser modernes Zugfahrzeug bietet eine saubere, beheizte und geräumige Fahrerkabine mit bequemen Sitzplätzen für bis zu zwei Begleitpersonen. Sie müssen bei Kälte oder Regen nicht am Pannenort zurückbleiben, sondern fahren sicher mit uns direkt zur Werkstatt oder nach Hause.",
      highlight: "Bequemes Mitfahren möglich"
    },
    ar: {
      question: "هل يمكنني الركوب معكم في شاحنة السحب أثناء نقل السيارة؟",
      answer: "نعم، بكل سرور! توفر شاحنة السحب الحديثة لدينا مقصورة قيادة نظيفة ومريحة ومجهزة بنظام تدفئة ومقاعد تتسع لما يصل إلى مرافقين اثنين. لن تضطر للبقاء في البرد أو المطر بمكان العطل، بل سترافقنا بأمان مباشرة إلى الورشة أو إلى منزلك.",
      highlight: "مرافقة مريحة في الشاحنة"
    },
    en: {
      question: "Can I ride along in the tow truck cabin during the transport?",
      answer: "Yes, absolutely! Our modern tow truck cabin is clean, heated, and comfortable, with seating for up to two passengers. You don't have to wait in the cold or rain; you ride along safely with us directly to the workshop or your home.",
      highlight: "Passenger Ride-Along"
    }
  },

  // ==========================================
  // KATEGORIE 2: E-AUTO & SPEZIALFAHRZEUGE
  // ==========================================
  {
    id: 'modernes-auto-anschieben-seil',
    category: 'elektro',
    isWarning: true,
    de: {
      question: "Darf man ein modernes Fahrzeug mit leerer Batterie oder Automatikgetriebe einfach anschieben oder mit Seil abschleppen?",
      answer: "Nein, bei modernen Fahrzeugen mit Automatik, Allradantrieb, Hybrid- oder Elektroantrieb raten Automobilhersteller dringend davon ab! Ohne laufenden Motor arbeitet die Getriebeschmierung nicht, was innerhalb weniger hundert Meter zu kapitalen Getriebeschäden führt. Bei Benzinern kann unverbrannter Kraftstoff den Katalysator zerstören. Die einzig sichere Methode ist das schonende Verladen auf ein Plateau-Fahrzeug.",
      highlight: "Getriebeschäden vermeiden"
    },
    ar: {
      question: "هل يجوز دفع سيارة حديثة ببطارية فارغة أو سحبها بواسطة حبل سحب؟",
      answer: "لا، يحذر مصنعو السيارات الحديثة بشدة من دفع أو سحب سيارات الأوتوماتيك أو الدفع الرباعي أو السيارات الهجينة والكهربائية بواسطة حبل! فبدون دوران المحرك، لا تعمل دورة تزييت الجير، مما يسبب تلفاً كارثياً لناقل الحركة خلال مئات الأمتار فقط. كما قد يؤدي الوقود غير المحترق في محركات البنزين إلى إتلاف كوندنسر البيئة (Katalysator). الطريقة الآمنة الوحيدة هي التحميل الكامل على سطحة هيدروليكية.",
      highlight: "تجنب تلف ناقل الحركة"
    },
    en: {
      question: "Can a modern car with a dead battery or automatic transmission be push-started or towed with a rope?",
      answer: "No, automobile manufacturers strongly advise against towing automatic, AWD, hybrid, or electric vehicles with a rope! Without the engine running, internal transmission lubrication ceases, leading to catastrophic gearbox failure within a few hundred meters. In petrol engines, unburned fuel can also ruin the catalytic converter. The only safe method is full flatbed loading.",
      highlight: "Prevent Gearbox Damage"
    }
  },
  {
    id: 'e-auto-seil-verbot',
    category: 'elektro',
    isWarning: true,
    de: {
      question: "Darf ein Elektroauto oder Hybridfahrzeug mit Seil oder Stange abgeschleppt werden?",
      answer: "Nein, keinesfalls! Nahezu alle Hersteller (u. a. Tesla, Volkswagen ID, Audi, BMW, Hyundai) untersagen das Abschleppen mit Seil oder Stange strikt. Da die elektrischen Antriebsmotoren (Permanentmagnet-Synchronmotoren) fest mit den Rädern gekoppelt sind, wirken sie beim Rollen wie Generatoren und erzeugen gefährlich hohe Induktionsspannungen, die den Inverter und die Hochvoltelektronik irreparabel zerstören. Elektroautos dürfen ausschließlich huckepack auf einem Plateau transportiert werden.",
      highlight: "Kein Seil / Hochvoltschutz"
    },
    ar: {
      question: "هل يجوز سحب السيارات الكهربائية أو الهجينة (Hybrid) بحبل أو قضيب سحب؟",
      answer: "لا، إطلاقاً! يحظر كافة المصنعين (مثل تسلا، فولكس فاجن ID، أودي، بي إم دبليو، هيونداي) سحب السيارات الكهربائية بحبل سحب. محركات الدفع الكهربائية متصلة ميكانيكياً بالعجلات بشكل دائم؛ وعند دوران العجلات بالسحب، تتحول المحركات إلى مولدات ضخمة تولد تيارات حثية عالية تدمر محول الطاقة (Inverter) والإلكترونيات المعقدة فوراً. يجب نقل السيارات الكهربائية حصراً محمولةً بالكامل فوق السطحة.",
      highlight: "ممنوع السحب بالحبل / حماية المحرك"
    },
    en: {
      question: "Can an electric vehicle (EV) or hybrid car ever be towed with a rope or tow bar?",
      answer: "No, absolutely not! Nearly all manufacturers (Tesla, Volkswagen ID, Audi, BMW, Hyundai, etc.) strictly prohibit towing EVs with ropes or bars. Because electric drive motors (permanent magnet synchronous motors) are permanently coupled to the wheels, rolling them turns motors into generators producing destructive back-EMF voltages that destroy inverters and high-voltage electronics. EVs must always be transported fully loaded on a flatbed.",
      highlight: "No Ropes / Inverter Safe"
    }
  },
  {
    id: 'tesla-transportmodus-tot',
    category: 'elektro',
    de: {
      question: "Wie verladen Sie ein Elektroauto (z. B. Tesla), wenn das Display schwarz ist und der Transportmodus blockiert?",
      answer: "Wenn der Bordcomputer ausfällt und die elektrische Feststellbremse blockiert, setzen wir spezielle Schwerlast-Rangierroller (Go-Jaks) unter die Räder oder speisen die nötige Stützspannung über die 12V-Notkontaktpunkte im Frontbereich ein. So wird der Wagen völlig rollfähig gemacht und materialschonend ohne Reifenschleifen auf das Plateau gezogen.",
      highlight: "Spezial-Rangierroller (Go-Jaks)"
    },
    ar: {
      question: "كيف تقومون بتحميل سيارة كهربائية (مثل تسلا) إذا كانت الشاشة مطفأة تماماً ومود النقل معطلاً؟",
      answer: "في حال انطفاء كمبيوتر السيارة وقفل فرامل اليد الكهربائية، نعتمد طريقتين احترافيتين: إما تغذية شبكة الـ 12 فولت عبر نقاط الطوارئ المخفية في الصدام الأمامي لتفعيل وضع النقل (Transport Mode)، أو تركيب زلاجات وعجلات مناورة هيدروليكية متطورة (Go-Jaks) تحت العجلات. وبذلك تصبح السيارة حرة الحركة تماماً وتُسحب فوق السطحة بسلاسة متناهية دون أدنى احتكاك بالإطارات.",
      highlight: "عجلات مناورة خاصة (Go-Jaks)"
    },
    en: {
      question: "How do you load an electric car (e.g. Tesla) when the screen is black and transport mode is locked?",
      answer: "If the onboard computer is unresponsive and the electric parking brake is engaged, we use two proven methods: either feeding auxiliary 12V power through emergency front access points to release transport mode, or mounting heavy-duty positioning dollies (Go-Jaks) beneath the wheels. The vehicle rolls smoothly onto the flatbed without tyre dragging or mechanical resistance.",
      highlight: "Go-Jak Wheel Dollies"
    }
  },
  {
    id: 'tiefergelegte-sportwagen-spoilerschutz',
    category: 'elektro',
    de: {
      question: "Transportieren Sie auch extrem tiefergelegte Sportwagen ohne Aufsetzen des Frontspoilers?",
      answer: "Ja, garantiert kratz- und aufsetzfrei! Dank unseres flachen Knickwinkels und zusätzlicher, extra langer Schonrampen verladen wir selbst Sportwagen und Tuning-Fahrzeuge mit extremer Tieferlegung (auch unter 8 cm Bodenfreiheit) schadensfrei. Die Sicherung erfolgt ausschließlich über die Reifenlauffläche, sodass Frontspoiler, Carbon-Splitter und Schweller unberührt bleiben.",
      highlight: "Spoilerschutz & Flachrampen"
    },
    ar: {
      question: "هل تنقلون السيارات الرياضية والمعدلة المنخفضة دون خدش الصدام الأمامي أو الزوائد؟",
      answer: "نعم، مضمون 100% دون أي خدش أو احتكاك! بفضل زاوية الصعود المنبسطة لسطحتنا ومنحدرات الصعود الإضافية الطويلة والمبطنة، نقوم بتحميل حتى السيارات الرياضية شديدة الانخفاض (أقل من 8 سم خلوص أرضي) بأمان تام. التثبيت يتم حصراً عبر سطح الإطار الخارجي، لتبقى الصدامات والزوائد الكربونية سليمة تماماً.",
      highlight: "حماية الصدامات والزوائد الرياضية"
    },
    en: {
      question: "Can you transport extremely low sports cars without scraping front splitters or bumpers?",
      answer: "Yes, guaranteed scratch- and scrape-free! Thanks to our flat approach ramp angle and extra-long auxiliary ramps, we load sports cars and lowered vehicles with clearance under 8 cm safely. Vehicles are secured exclusively across tire treads, ensuring spoilers, carbon diffusers, and skirts remain untouched.",
      highlight: "Spoiler & Splitter Safe"
    }
  },
  {
    id: 'grosse-suv-22-zoll-felgen',
    category: 'elektro',
    de: {
      question: "Können Sie auch große SUV mit 22- oder 23-Zoll-Rädern beschädigungsfrei laden?",
      answer: "Ja. Große SUV (wie BMW X5/X7, Audi Q7/Q8, Porsche Cayenne oder Range Rover) haben hohes Eigengewicht und empfindliche Glanzdreh- oder Vielspeichenfelgen. Wir sichern diese Fahrzeuge streng nach VDI 2700 über breite Reifentrapezgurte, die keinen Kontakt zum Felgenstern haben, sodass Felgenkratzer zu 100 % ausgeschlossen sind.",
      highlight: "100 % Felgenschutz"
    },
    ar: {
      question: "هل يمكنكم تحميل سيارات الدفع الرباعي الكبيرة (SUV) بجنوط 22 أو 23 إنش دون تجريحها؟",
      answer: "نعم بكل تأكيد. سيارات الدفع الرباعي الفاخرة (مثل BMW X5/X7 وAudi Q7/Q8 وPorsche Cayenne) تمتاز بوزن عالٍ وجنوط حساسة. نقوم بتثبيتها وفق أحدث المعايير الألمانية (VDI 2700) باستخدام أحزمة مخصصة تلف حصراً على مداس الإطار المطاطي دون أي ملامسة للجنوط، مما يضمن خلوها من أي خدش بنسبة 100%.",
      highlight: "حماية الجنوط 100%"
    },
    en: {
      question: "Can you load large luxury SUVs with 22 or 23-inch alloy wheels without scratching rims?",
      answer: "Yes. Heavy SUVs (BMW X5/X7, Audi Q7/Q8, Porsche Cayenne, Range Rover) feature high curb weights and delicate diamond-cut rims. We strap vehicles strictly according to VDI 2700 using trapezoidal wheel straps that encircle the tire tread only, ensuring zero contact with rim faces.",
      highlight: "100% Rim Protection"
    }
  },
  {
    id: 'transporter-sprinter-7-meter',
    category: 'elektro',
    de: {
      question: "Schleppen Sie auch lange Transporter (z. B. Mercedes Sprinter) oder schwere Wohnmobile bis 7 Meter ab?",
      answer: "Ja! Unser Spezial-Plateau ist für lange Radstände und Transporter bis zu einer Gesamtlänge von 7 Metern und einer Nutzlast von bis zu 3,5 Tonnen ausgelegt. Ob voll beladener Handwerker-Kastenwagen (Sprinter, Crafter, Transit) oder Wohnmobil / Camper: Wir transportieren Ihr Fahrzeug sicher und fachgerecht im gesamten Ruhrgebiet.",
      highlight: "Bis 7 Meter Ladefläche"
    },
    ar: {
      question: "هل تسحبون أيضاً الفانات الكبيرة (Sprinter) والكرفانات حتى طول 7 أمتار؟",
      answer: "نعم! سطحتنا المخصصة ورافعتنا القوية مصممة خصيصاً لاستيعاب قاعدة العجلات الطويلة والشاحنات الخفيفة حتى طول إجمالي يصل إلى 7 أمتار وحمولة تصل إلى 3.5 طن. سواء كانت شاحنة حرفيين محملة بالبضائع أو حافلة صغيرة أو كرفان تخييم (Camper)، ننقلها بأمان واحترافية.",
      highlight: "سطحة واسعة حتى 7 أمتار"
    },
    en: {
      question: "Do you tow long commercial vans (Sprinter, Crafter) or camper motorhomes up to 7 meters?",
      answer: "Yes! Our specialized flatbed is engineered for long wheelbases and commercial vans up to 7 meters in total length with payloads up to 3.5 tons. Whether fully loaded tradesman panel vans or camper vans, we transport them safely throughout the Ruhr area.",
      highlight: "Vans up to 7m Length"
    }
  },

  // ==========================================
  // KATEGORIE 3: BERGUNG & TECHNIK
  // ==========================================
  {
    id: 'nicht-rollfaehig-getriebeschaden',
    category: 'technik',
    de: {
      question: "Was passiert, wenn mein Fahrzeug nicht mehr rollfähig ist (z. B. Getriebeschaden, blockierte Bremsen oder Unfall)?",
      answer: "Das ist kein Problem! Unser Abschleppfahrzeug ist mit einer fernbedienbaren elektrischen Seilwinde und mobilen Rangierrollern (Go-Jaks) ausgestattet. Damit können wir selbst Fahrzeuge mit festsitzenden Bremsen, blockiertem Antrieb oder Unfall-Achsschäden materialschonend auf das Plateau ziehen, ohne Fahrbahnbelag oder Fahrzeugunterboden zu beschädigen.",
      highlight: "Seilwinde & Radroller"
    },
    ar: {
      question: "ماذا يحدث إذا كانت سيارتي عاجزة عن التدحرج (عطل في الجير، فرامل مقفلة، أو حادث)؟",
      answer: "لا توجد أي مشكلة! شاحنة السحب لدينا مجهزة بونش سحب كهربائي قوي يعمل بالتحكم عن بُعد وعجلات مناورة هيدروليكية (Go-Jaks). وبذلك نستطيع رفع وتحميل السيارات ذات الجير المعطل أو الفرامل العالقة أو المحاور المتضررة دون سحبها قسراً ودون التسبب بأي أضرار لهيكل السيارة أو أرضية الطريق.",
      highlight: "ونش كهربائي وعجلات مناورة"
    },
    en: {
      question: "What happens if my vehicle cannot roll (locked transmission, frozen brakes, or crash damage)?",
      answer: "Not a problem! Our recovery transporter is equipped with a remote-controlled electric winch and heavy-duty positioning dollies (Go-Jaks). We can load vehicles with seized handbrakes, shattered gearboxes, or broken axles gently onto the flatbed without scraping road surfaces or damaging underbodies.",
      highlight: "Winch & Positioning Dollies"
    }
  },
  {
    id: 'kein-schluessel-lenkung-blockiert',
    category: 'technik',
    de: {
      question: "Was passiert, wenn kein Autoschlüssel vorhanden ist oder das Lenkradschloss blockiert?",
      answer: "Wir können Fahrzeuge auch ohne Schlüssel oder mit eingerastetem Lenkschloss sicher verladen. Mithilfe unserer Radroller heben wir die Achsen an und rangieren das Auto sicher auf die Ladefläche. Halten Sie bei Abholung bitte Ihren Personalausweis und die Zulassungsbescheinigung (Fahrzeugschein) zur Legitimation bereit.",
      highlight: "Verladung ohne Schlüssel"
    },
    ar: {
      question: "ماذا يحدث إذا كان مفتاح السيارة مفقوداً أو مقود السيارة مقفلاً؟",
      answer: "نستطيع رفع ونقل السيارات حتى في حال عدم وجود المفتاح أو انقفال قفل المقود. نقوم برفع المحاور على عجلات مناورة ونحرك السيارة بدقة فوق السطحة. يُرجى فقط تجهيز بطاقة هويتك ورخصة السيارة (Fahrzeugschein) عند الاستلام لإثبات ملكيتك للمركبة.",
      highlight: "تحميل بدون مفتاح"
    },
    en: {
      question: "What happens if keys are missing or the steering lock is engaged?",
      answer: "We can load vehicles safely even without keys or with a locked steering column. Using our hydraulic dollies, we raise the axles and maneuver the car smoothly onto the bed. Please have your ID and vehicle registration certificate ready for verification.",
      highlight: "Loading Without Key"
    }
  },
  {
    id: 'ohne-batterie-verladen',
    category: 'technik',
    de: {
      question: "Können Sie auch helfen, wenn überhaupt keine Batterie im Fahrzeug verbaut ist?",
      answer: "Ja, selbstverständlich. Wenn die Starterbatterie ausgebaut ist oder fehlt, zieht unsere autarke elektrische Bord-Seilwinde das Fahrzeug sicher auf das Plateau. Bitte teilen Sie uns diesen Umstand bereits beim Anruf mit, damit wir das passende Bergezubehör bereithalten.",
      highlight: "Autarke Verladetechnik"
    },
    ar: {
      question: "هل يمكنكم مساعدتي إذا كانت البطارية غير موجودة أصلاً بالسيارة؟",
      answer: "نعم بالتأكيد. إذا كانت البطارية منزوعة أو مفقودة، يقوم ونش السحب الكهربائي المستقل المثبت على شاحنتنا بسحب السيارة بأمان إلى السطحة. يُرجى فقط إخبارنا بذلك مسبقاً عند الاتصال لنصطحب معدات التثبيت الإضافية المناسبة.",
      highlight: "تقنيات سحب مستقلة"
    },
    en: {
      question: "Can you still assist if there is no battery fitted in the vehicle?",
      answer: "Yes, certainly. If the 12V starter battery has been removed or is completely missing, our self-powered onboard electric winch loads the vehicle onto the flatbed. Please mention this condition when calling so we arrive with the appropriate recovery gear.",
      highlight: "Self-Powered Winching"
    }
  },
  {
    id: 'felgenschutz-vdi-2700',
    category: 'technik',
    de: {
      question: "Wie stellen Sie sicher, dass teure Alufelgen beim Transport nicht verkratzt werden?",
      answer: "Die Ladungssicherung erfolgt bei Abschleppdienst Direkt strikt nach den anerkannten Regeln der Technik (VDI 2700 Blatt 8). Wir verwenden geprüfte 4-Punkt-Radspanngurte mit Reifenschonern, die ausschließlich über das Reifenprofil gespannt werden. Es kommen keinerlei Metallketten oder scharfkantige Haken an die Felgen oder das Fahrwerk.",
      highlight: "Zertifizierte VDI 2700 Sicherung"
    },
    ar: {
      question: "كيف تضمنون عدم خدش جنوط الألمنيوم الثمينة أثناء ربط وتثبيت السيارة؟",
      answer: "يتم تأمين وتثبيت السيارات في Abschleppdienst Direkt بدقة متناهية وفق معايير الأمان الألمانية (VDI 2700 Blatt 8). نستخدم أحزمة ربط رباعية النقاط مع واقيات مطاطية لا تلامس سوى الإطار الخارجي، دون استخدام أي سلاسل أو خطافات معدنية تلامس الجنوط أو نظام التعليق.",
      highlight: "تثبيت معتمد وفق VDI 2700"
    },
    en: {
      question: "How do you guarantee that expensive alloy wheels will not be scratched during transport?",
      answer: "Cargo securing at Abschleppdienst Direkt strictly follows certified standards (VDI 2700 Sheet 8). We use certified 4-point wheel lasso straps with protective sleeves that wrap solely over the tire tread. No metal hooks or chains ever touch your alloy rims or suspension components.",
      highlight: "Certified VDI 2700 Strapping"
    }
  },

  // ==========================================
  // KATEGORIE 4: KOSTEN & VERSICHERUNG
  // ==========================================
  {
    id: 'versicherung-schutzbrief-adac',
    category: 'kosten',
    de: {
      question: "Zahlt meine Kfz-Versicherung oder der Schutzbrief (z. B. ADAC) die Kosten von Abschleppdienst Direkt?",
      answer: "In den allermeisten Fällen ja! Bei einer Panne oder einem Unfall haben Sie das Recht auf freie Wahl des Bergungsdienstes. Statt stundenlang auf Partner-Schleppwagen zu warten, können Sie uns direkt rufen. Wir stellen eine ordnungsgemäße, detaillierte Rechnung nach § 14 UStG aus, die Sie direkt bei Ihrem Schutzbrief oder Versicherer zur Kostenerstattung einreichen können.",
      highlight: "Erstattungsfähige Rechnung (§ 14 UStG)"
    },
    ar: {
      question: "هل يدفع تأمين السيارة أو كارت الحماية (Schutzbrief مثل ADAC) تكاليف سحب Abschleppdienst Direkt؟",
      answer: "في الغالبية العظمى من الحالات، نعم! عند وقوع حادث أو عطل يحق لك قانونياً اختيار شركة السحب التي تناسبك بحرية. وبدلاً من الانتظار لساعات طويلة، يمكنك طلبنا فوراً. سنزودك بفاتورة نظامية معتمدة وفق القانون الألماني (§ 14 UStG) تتضمن كافة تفاصيل الخدمة، لتقدمها مباشرة لشركة التأمين أو كارت الحماية لاسترداد التكاليف بالكامل أو بحدود التغطية.",
      highlight: "فاتورة رسمية للتعويض (§ 14 UStG)"
    },
    en: {
      question: "Will my car insurance or breakdown cover (e.g. ADAC / Schutzbrief) reimburse Abschleppdienst Direkt's costs?",
      answer: "In most cases, yes! During a breakdown or accident, you have the legal right to choose your recovery service. Rather than waiting hours in call center queues, you can call us directly. We provide a compliant invoice under § 14 of the German VAT Act that you submit directly to your insurer or breakdown club for reimbursement.",
      highlight: "Reimbursable Invoice (§ 14 UStG)"
    }
  },
  {
    id: 'freie-werkstattwahl',
    category: 'kosten',
    de: {
      question: "Schleppen Sie mein Fahrzeug zu meiner vertrauten Wunschwerkstatt oder nur zur nächsten Partnerwerkstatt?",
      answer: "Bei Abschleppdienst Direkt gilt das Prinzip der freien Werkstattwahl: Sie entscheiden ganz allein, wohin Ihr Auto gebracht wird! Ob zu Ihrer gewohnten Stamm-Meisterwerkstatt, zu einem Marken-Vertragshändler (Audi, BMW, VW etc.), zu Ihnen nach Hause oder auf unseren gesicherten Stellplatz – wir transportieren Ihr Fahrzeug genau an Ihre Wunschadresse.",
      highlight: "Freie Werkstattwahl"
    },
    ar: {
      question: "هل تسحبون سيارتي إلى ورشتي المعتمدة المفضلة أم فقط إلى أقرب ورشة؟",
      answer: "في Abschleppdienst Direkt القرار لك وحدك بنسبة 100%! ننقل سيارتك إلى أي مكان تريده: سواء ورشتك الخاصة الموثوقة، أو وكالة الشركة المصنعة (أودي، بي إم دبليو، مرسيدس، فولكس فاجن)، أو إلى باب منزلك، أو إلى موقفنا الآمن إذا كانت الورش مغلقة ليلاً. لا نجبرك أبداً على ورش شريكة غريبة.",
      highlight: "حرية اختيار الورشة بالكامل"
    },
    en: {
      question: "Do you tow my vehicle to my preferred trusted mechanic or only to the nearest partner shop?",
      answer: "At Abschleppdienst Direkt, you have complete freedom of choice: you decide where your vehicle is delivered. Whether to your trusted independent master mechanic, an authorized franchise dealership (Audi, BMW, VW, etc.), your home address, or our secure holding yard – we deliver exactly where you ask.",
      highlight: "Free Choice of Workshop"
    }
  },
  {
    id: 'werkstatt-geschlossen-nachteinwurf',
    category: 'kosten',
    de: {
      question: "Was passiert, wenn meine Wunschwerkstatt nachts oder am Wochenende geschlossen hat?",
      answer: "Wir stellen Ihr Fahrzeug sicher auf dem Werkstattparkplatz ab und werfen die Fahrzeugschlüssel zusammen mit einem Übergabeprotokoll in den gesicherten Nachtbriefkasten der Werkstatt. Sie erhalten von uns umgehend WhatsApp-Fotos als Nachweis. Alternativ kann das Auto über Nacht auf unserem videoüberwachten Betriebshof zwischengeparkt und am nächsten Morgen angeliefert werden.",
      highlight: "24h Schlüsseltresor / Nachtabstellung"
    },
    ar: {
      question: "ماذا يحدث إذا كانت ورشتي المفضلة مغلقة ليلاً أو في عطلة نهاية الأسبوع؟",
      answer: "نقوم بركن سيارتك بأمان في موقف سيارات الورشة ونضع مفاتيح السيارة مع تقرير العطل في صندوق المفاتيح الليلي الآمن المخصص للورشة، ونرسل لك صوراً عبر واتساب فور الانتهاء. أو يمكننا بدلاً من ذلك إيواء سيارتك ليلة العطلة في موقفنا المحمي والمراقب بالكاميرات وتسليمها للورشة صباح يوم العمل التالي.",
      highlight: "تسليم ليلي آمن وموثق"
    },
    en: {
      question: "What happens if my preferred workshop is closed at night or on weekends?",
      answer: "We park your vehicle securely in the workshop customer lot and deposit the keys together with a handover docket into the garage's secure night drop box, sending you photo proof via WhatsApp. Alternatively, the vehicle can be safely stored overnight in our video-monitored facility and delivered the following morning.",
      highlight: "24h Key Drop / Safe Depot"
    }
  },
  {
    id: 'feste-pauschalpreise',
    category: 'kosten',
    de: {
      question: "Bieten Sie für geplante Fahrzeugüberführungen feste Pauschalpreise an?",
      answer: "Ja! Bei Abschleppdienst Direkt garantieren wir volle Preistransparenz ohne versteckte Zusatzkosten. Nennen Sie uns einfach Startadresse, Zielort und Fahrzeugmodell. Sie erhalten vorab immer einen verbindlichen Festpreis inklusive aller gefahrenen Kilometer, Ladezeiten und voller Güterschaden-Transportversicherung.",
      highlight: "Verbindlicher Festpreis"
    },
    ar: {
      question: "هل تقدمون أسعاراً ثابتة ومقطوعة لنقل السيارات دون تكاليف خفية؟",
      answer: "نعم! نضمن لك في Abschleppdienst Direkt شفافية كاملة في الأسعار دون أي مفاجآت أو رسوم خفية. بمجرد تزويدنا بموقع الاستلام والوجهة ونوع السيارة، ستحصل مسبقاً على سعر ثابت وشامل لكافة الكيلومترات وأوقات التحميل وتأمين نقل البضائع بالكامل.",
      highlight: "سعر ثابت ومضمون مسبقاً"
    },
    en: {
      question: "Do you offer fixed all-inclusive prices for scheduled vehicle transfers?",
      answer: "Yes! At Abschleppdienst Direkt, we guarantee absolute pricing transparency without hidden surcharges. Simply tell us the pick-up location, destination, and vehicle model. You always receive a binding fixed quote in advance covering all mileage, loading time, and carrier cargo insurance.",
      highlight: "Guaranteed Fixed Pricing"
    }
  },
  {
    id: 'abgemeldet-ohne-tuev-transport',
    category: 'kosten',
    de: {
      question: "Können Sie auch abgemeldete Autos oder Fahrzeuge ohne TÜV / ohne Kennzeichen überführen?",
      answer: "Ja, absolut legal! Da Ihr Fahrzeug vollständig auf unserem Plateau verladen wird und keine Achse auf der öffentlichen Straße rollt, ist weder eine Zulassung, noch ein Kennzeichen (wie Kurzzeit- oder rote Kennzeichen), noch ein gültiger TÜV erforderlich. Der Transport ist zu 100 % straßenverkehrs- und versicherungsrechtlich zulässig.",
      highlight: "Legal ohne TÜV / Kennzeichen"
    },
    ar: {
      question: "هل يمكنكم نقل سيارة ملغاة التسجيل (Abgemeldet) أو بدون فحص TÜV أو بدون لوحات أرقام؟",
      answer: "نعم، وقانوني 100%! نظراً لأن سيارتك تُحمل بالكامل فوق سطحتنا الحديثة ولا تلامس عجلاتها الطريق العام، فإنها لا تحتاج إلى تسجيل رسمي، ولا لوحات أرقام (سواء حمراء أو مؤقتة)، ولا فحص TÜV ساري المفعول. عملية النقل قانونية ومؤمنة تماماً.",
      highlight: "نقل قانوني بدون لوحات أو TÜV"
    },
    en: {
      question: "Can you transport unregistered cars or vehicles without valid road inspection (TÜV) or plates?",
      answer: "Yes, 100% legal! Because your vehicle is transported fully loaded on our flatbed and no wheels touch public asphalt, no vehicle registration, license plates (such as transit or red plates), or valid TÜV certificate are required. The shipment is entirely legal and insured.",
      highlight: "No TÜV or Plates Needed"
    }
  },
  {
    id: 'kontaktlose-ueberfuehrung-rundum-service',
    category: 'kosten',
    de: {
      question: "Kann ich ein Fahrzeug überführen lassen, ohne selbst vor Ort anwesend zu sein (kontaktloser Service)?",
      answer: "Ja, das ist unser komfortabler Rundum-Service. Wir stimmen die Abholung direkt mit dem Verkäufer oder der Werkstatt ab, führen eine lückenlose Foto- und Zustandsdokumentation durch, informieren Sie per WhatsApp über den Transportfortschritt und händigen die Papiere und Schlüssel am Zielort gegen Quittung aus.",
      highlight: "Kontaktloser Rundum-Service"
    },
    ar: {
      question: "هل يمكنني طلب نقل سيارة دون أن أكون متواجداً شخصياً في موقع الاستلام أو التسليم؟",
      answer: "نعم، هذه إحدى خدماتنا الشاملة المفضلة للمشترين والمعارض ورجال الأعمال. نتواصل مباشرة مع البائع أو الورشة، ونقوم بفحص حالة السيارة وتوثيقها بصور عالية الدقة وبروتوكول تسليم رقمي، ونوافيك بتحديثات مباشرة عبر واتساب حتى تسليم السيارة وتوقيع إيصال الاستلام بالوجهة.",
      highlight: "خدمة متكاملة عن بُعد"
    },
    en: {
      question: "Can I book vehicle transport without being physically present at collection or delivery?",
      answer: "Yes, this is our contactless turn-key service. We coordinate collection directly with the seller or dealership, complete digital photo and condition logging, provide real-time WhatsApp updates, and hand over papers and keys at the destination against formal receipt.",
      highlight: "Remote Turn-Key Service"
    }
  },
  {
    id: 'frachtfuehrerhaftpflicht-versicherung',
    category: 'kosten',
    de: {
      question: "Ist mein Fahrzeug während des gesamten Lade- und Transportvorgangs versichert?",
      answer: "Selbstverständlich. Jedes transportierte Fahrzeug ist bei Abschleppdienst Direkt über unsere gewerbliche Güterschaden- und Frachtführerhaftpflichtversicherung lückenlos und vollumfänglich abgesichert.",
      highlight: "Voll abgesichert"
    },
    ar: {
      question: "هل سيارتي مؤمنة بالكامل أثناء عملية التحميل والنقل؟",
      answer: "بالتأكيد وبلا أدنى شك. كل مركبة ننقلها في Abschleppdienst Direkt مشمولة ومحمية بالكامل تحت مظلة تأمين مسؤولية الناقل التجاري وتأمين أضرار البضائع والمنقولات (Güterschaden- und Frachtführerhaftpflichtversicherung).",
      highlight: "تأمين تجاري شامل"
    },
    en: {
      question: "Is my vehicle insured during loading, transit, and unloading?",
      answer: "Naturally. Every vehicle transported by Abschleppdienst Direkt is fully covered under our commercial freight carrier liability and goods-in-transit insurance from collection to delivery.",
      highlight: "Fully Insured"
    }
  },
  {
    id: 'zahlungsmethoden-vor-ort',
    category: 'kosten',
    de: {
      question: "Welche Zahlungsmöglichkeiten stehen vor Ort zur Verfügung?",
      answer: "Sie können vor Ort bequem in bar, per Echtzeit-Banküberweisung oder bei kontaktlosen Aufträgen per vorab vereinbarter Überweisung bezahlen. Für gewerbliche Kfz-Betriebe, Händler und Werkstätten bieten wir nach Absprache auch die Zahlung auf Rechnung an.",
      highlight: "Flexible Bezahlung"
    },
    ar: {
      question: "ما هي طرق الدفع المتاحة في موقع الخدمة؟",
      answer: "يمكنك الدفع بكل راحة في الموقع نقداً أو عبر التحويل البنكي الفوري (Echtzeit-Überweisung). وبالنسبة للمعارض وورش تصليح السيارات، نوفر إمكانية الدفع عبر الفاتورة الآجلة بعد الاتفاق المسبق.",
      highlight: "طرق دفع مرنة ومريحة"
    },
    en: {
      question: "What payment options are available on site?",
      answer: "You can pay conveniently on site in cash, via instant SEPA bank transfer, or in advance for contactless orders. For commercial garages, dealerships, and workshops, payment on invoice is available upon prior agreement.",
      highlight: "Flexible Payment Options"
    }
  },
  {
    id: 'rechnung-transport-leistung',
    category: 'kosten',
    de: {
      question: "Erhalte ich eine ordnungsgemäße Rechnung, wenn Sie mein Fahrzeug transportieren?",
      answer: "Ja, selbstverständlich! Sie erhalten für jeden Transport eine ordnungsgemäße, detaillierte Rechnung nach § 14 UStG. Die Rechnung enthält eine fortlaufende Rechnungsnummer, das genaue Transport- und Leistungsdatum sowie die präzise Beschreibung der erbrachten Leistung (Leistungsumfang, Start- und Zielort sowie Kilometer). Die Rechnung ist steuerlich voll anerkannt und kann direkt bei Ihrer Kfz-Versicherung oder Ihrem Schutzbrief eingereicht werden.",
      highlight: "Rechnung mit Rechnungsnummer & Leistung"
    },
    ar: {
      question: "هل أحصل على فاتورة رسمية عندما تقوم بنقل سيارتي؟",
      answer: "نعم، بكل تأكيد! تحصل على فاتورة رسمية ونظامية كاملة ومفصلة مطابقة للقانون الألماني (§ 14 UStG). تتضمن الفاتورة رقم فاتورة فريد ومحدد (Rechnungsnummer)، تاريخ النقل، وبيان الخدمة التي تم تقديمها لك بدقة (Leistung: نوع الخدمة، موقع الاستلام والتسليم والكيلومترات المقطوعة). الفاتورة معتمدة ضريبياً ويمكن تقديمها مباشرة لشركة التأمين أو كارت الحماية (Schutzbrief) لاسترداد التكاليف.",
      highlight: "فاتورة برقم وتاريخ وبيان الخدمة (Leistung)"
    },
    en: {
      question: "Do I receive an official invoice when you transport my vehicle?",
      answer: "Yes, absolutely! You receive a fully compliant, detailed invoice under § 14 of the German VAT Act (UStG) for every transport. The invoice includes a unique invoice number, the exact transport date, and a precise description of the services rendered (Leistung: scope of service, pick-up and delivery locations, and mileage). It is fully recognized for tax purposes and can be submitted directly to your insurer or breakdown cover for reimbursement.",
      highlight: "Invoice with Number & Service Details"
    }
  }
];
