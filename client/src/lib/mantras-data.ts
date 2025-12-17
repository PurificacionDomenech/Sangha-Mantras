export interface Mantra {
  nombre: string;
  texto: string;
  significado: string;
  deidad: string;
}

export interface Categoria {
  nombre: string;
  color: string;
  mantras: Mantra[];
}

export interface NombreSagrado {
  nombre: string;
  hebreo: string;
  significado: string;
  audioVersiones: string[]; // Opciones: 'hebreo', 'melodico', 'significado', 'shofar-tekiah', etc.
}

export interface CategoriaNombres {
  nombre: string;
  color: string;
  nombres: NombreSagrado[];
}

export interface NombresSagrados {
  [key: string]: CategoriaNombres;
}

export interface Mantras {
  [key: string]: Categoria;
}

export const mantras: Mantras = {
  compasion: {
    nombre: "Compasión",
    color: "from-rose-100 to-pink-100",
    mantras: [
      {
        nombre: "Om Mani Padme Hum",
        texto: "Om Mani Padme Hum",
        significado: "La joya en el loto. Purifica las seis imperfecciones y desarrolla compasión infinita.",
        deidad: "Avalokiteshvara"
      },
      {
        nombre: "Mantra de Chenrezig",
        texto: "Om Mani Peme Hung",
        significado: "Variante tibetana. Invoca la compasión del Bodhisattva de la misericordia.",
        deidad: "Chenrezig"
      },
      {
        nombre: "Maitreya (Buda del Futuro)",
        texto: "Om Maitri Maha Maitri Maitreya Svaha",
        significado: "Amor incondicional. Prepara para la era del próximo Buda",
        deidad: "Maitreya"
      },
      {
        nombre: "Compasión Universal",
        texto: "Sabbe Satta Sukhi Hontu",
        significado: "\"Que todos los seres sean felices\". Bendición universal",
        deidad: "Universal"
      }
    ]
  },
  sabiduria: {
    nombre: "Sabiduría",
    color: "from-amber-100 to-yellow-100",
    mantras: [
      {
        nombre: "Manjushri",
        texto: "Om A Ra Pa Ca Na Dhih",
        significado: "Disuelve la ignorancia. Aumenta memoria, claridad mental e inteligencia.",
        deidad: "Manjushri"
      },
      {
        nombre: "Heart Sutra",
        texto: "Gate Gate Paragate Parasamgate Bodhi Svaha",
        significado: "Ido, ido, ido más allá, ido completamente más allá. Iluminación.",
        deidad: "Prajnaparamita"
      },
      {
        nombre: "Prajnaparamita",
        texto: "Om Dhih Svaha",
        significado: "Sabiduría trascendental que ve la vacuidad",
        deidad: "Prajnaparamita"
      },
      {
        nombre: "Saraswati (Elocuencia)",
        texto: "Om Aim Sarasvatyai Namaha",
        significado: "Diosa del conocimiento, música y artes. Claridad en el habla",
        deidad: "Saraswati"
      },
      {
        nombre: "Manjushri Extendido",
        texto: "Om Wagi Shori Mum",
        significado: "Señor del habla. Para estudios, exámenes y enseñanza",
        deidad: "Manjushri"
      }
    ]
  },
  sanacion: {
    nombre: "Sanación",
    color: "from-blue-100 to-cyan-100",
    mantras: [
      {
        nombre: "Buda de la Medicina",
        texto: "Tayata Om Bekanze Bekanze Maha Bekanze Radza Samudgate Soha",
        significado: "Sanación física y mental. Elimina enfermedades y obstáculos de salud.",
        deidad: "Bhaishajyaguru"
      },
      {
        nombre: "Tara Blanca",
        texto: "Om Tare Tam Soha",
        significado: "Longevidad, sanación y protección contra enfermedades.",
        deidad: "Tara Blanca"
      },
      {
        nombre: "Amitayus (Longevidad)",
        texto: "Om Amarani Jivantiye Svaha",
        significado: "Larga vida y vitalidad. Elimina obstáculos a la longevidad",
        deidad: "Amitayus"
      },
      {
        nombre: "Tara Blanca Extendida",
        texto: "Om Tare Tuttare Ture Mama Ayuh Punya Jnana Pustim Kuru Svaha",
        significado: "Versión larga para longevidad, méritos y sabiduría",
        deidad: "Tara Blanca"
      }
    ]
  },
  proteccion: {
    nombre: "Protección",
    color: "from-green-100 to-emerald-100",
    mantras: [
      {
        nombre: "Tara Verde",
        texto: "Om Tare Tuttare Ture Soha",
        significado: "Protección rápida contra miedos, peligros y obstáculos.",
        deidad: "Tara Verde"
      },
      {
        nombre: "Vajrapani",
        texto: "Om Vajrapani Hum",
        significado: "Poder espiritual. Elimina obstáculos y protege de energías negativas.",
        deidad: "Vajrapani"
      },
      {
        nombre: "Mahakala (4 brazos)",
        texto: "Om Mahakala Hum Phat",
        significado: "Deidad protectora feroz. Elimina obstáculos y protege el Dharma",
        deidad: "Mahakala"
      },
      {
        nombre: "Mahakala (6 brazos)",
        texto: "Om Shri Mahakala Ya Hum Phat",
        significado: "Gran Negro. Protege contra depresión, ira y negatividad",
        deidad: "Mahakala Nyingshuk"
      },
      {
        nombre: "Ekajati (Protectora Dzogchen)",
        texto: "Om Ma Ra Dza Ekajati Hum Phat",
        significado: "Protectora principal de las enseñanzas Dzogchen",
        deidad: "Ekajati"
      },
      {
        nombre: "Rahula (Protector Planetario)",
        texto: "Om Rahula Ya Svaha",
        significado: "Protege contra influencias astrológicas negativas",
        deidad: "Rahula"
      },
      {
        nombre: "Green Tara (21 Taras)",
        texto: "Om Tare Tam Svaha",
        significado: "Mantra semilla de Tara. Acción rápida y liberación",
        deidad: "Tara Verde"
      },
      {
        nombre: "Ushnishavijaya (Victoria)",
        texto: "Om Drum Svaha",
        significado: "Victoria sobre la muerte y renacimientos inferiores",
        deidad: "Ushnishavijaya"
      }
    ]
  },
  purificacion: {
    nombre: "Purificación",
    color: "from-indigo-100 to-purple-100",
    mantras: [
      {
        nombre: "Vajrasattva (corto)",
        texto: "Om Vajrasattva Hum",
        significado: "Purifica karma negativo y limpia energías densas del pasado.",
        deidad: "Vajrasattva"
      },
      {
        nombre: "Om Ah Hum",
        texto: "Om Ah Hum",
        significado: "Purifica cuerpo, palabra y mente. Mantra raíz de purificación.",
        deidad: "Los Tres Budas"
      },
      {
        nombre: "Vajrasattva (100 sílabas)",
        texto: "Om Vajra Sattva Samaya Manupalaya Vajra Sattva Tvenopatishtha Dridho Me Bhava",
        significado: "Purificación profunda de todos los karmas negativos",
        deidad: "Vajrasattva"
      },
      {
        nombre: "Los Cinco Dhyani Budas",
        texto: "Om Ah Hum So Ha",
        significado: "Purifica los cinco elementos: tierra, agua, fuego, aire, espacio",
        deidad: "Cinco Budas de Meditación"
      }
    ]
  },
  transformacion: {
    nombre: "Transformación",
    color: "from-orange-100 to-red-100",
    mantras: [
      {
        nombre: "Padmasambhava",
        texto: "Om Ah Hum Vajra Guru Padma Siddhi Hum",
        significado: "Despertar espiritual. Transforma obstáculos en realizaciones.",
        deidad: "Guru Rinpoche"
      },
      {
        nombre: "Amitabha",
        texto: "Om Ami Deva Hrih",
        significado: "Conexión con la Tierra Pura. Transforma la impermanencia en sabiduría.",
        deidad: "Amitabha"
      },
      {
        nombre: "Kurukulla (Magnetismo)",
        texto: "Om Kurukulle Hrih Svaha",
        significado: "Poder de atracción. Magnetiza situaciones positivas",
        deidad: "Kurukulla"
      }
    ]
  },
  paz: {
    nombre: "Paz Interior",
    color: "from-slate-100 to-gray-100",
    mantras: [
      {
        nombre: "Shakyamuni Buda",
        texto: "Om Muni Muni Maha Muniye Soha",
        significado: "Paz profunda y ecuanimidad. Conexión con el Buda histórico.",
        deidad: "Shakyamuni"
      },
      {
        nombre: "Om Shanti",
        texto: "Om Shanti Shanti Shanti",
        significado: "Paz universal en cuerpo, mente y espíritu.",
        deidad: "Universal"
      },
      {
        nombre: "Triple Refugio",
        texto: "Namo Buddhaya Namo Dharmaya Namo Sanghaya",
        significado: "Me refugio en el Buda, el Dharma y la Sangha",
        deidad: "Los Tres Refugios"
      },
      {
        nombre: "Shakyamuni Extendido",
        texto: "Namo Ratna Trayaya Om Muni Muni Maha Muniye Svaha",
        significado: "Homenaje al Buda histórico y las Tres Joyas",
        deidad: "Shakyamuni"
      },
      {
        nombre: "Dedicación de Méritos",
        texto: "Om Sarva Mangalam",
        significado: "Que todo sea auspicioso. Para dedicar méritos al final de prácticas",
        deidad: "Universal"
      }
    ]
  },
  prosperidad: {
    nombre: "Abundancia",
    color: "from-yellow-100 to-lime-100",
    mantras: [
      {
        nombre: "Dzambhala",
        texto: "Om Dzambhala Dzalin Dzaye Soha",
        significado: "Prosperidad material y espiritual. Elimina pobreza y genera abundancia.",
        deidad: "Jambhala"
      },
      {
        nombre: "Vasudhara",
        texto: "Om Vasudhare Svaha",
        significado: "Corriente de gemas. Bodhisattva de la riqueza y prosperidad.",
        deidad: "Vasudhara"
      },
      {
        nombre: "Vaishravana (Rey de la Riqueza)",
        texto: "Om Vaishravana Ya Svaha",
        significado: "Guardián del norte. Riqueza legítima y generosidad",
        deidad: "Vaishravana"
      },
      {
        nombre: "Jambhala Blanco",
        texto: "Om Padma Krodha Arya Jambhala Hridaya Hum Phat",
        significado: "Riqueza para beneficiar a otros. Generosidad compasiva",
        deidad: "Jambhala Blanco"
      }
    ]
  }
};

export interface ChantingStyle {
  id: string;
  nombre: string;
  descripcion: string;
  speedMultiplier: number;
  pitchMultiplier: number;
  vowelElongation: number;
}

export const chantingStyles: ChantingStyle[] = [
  {
    id: 'normal',
    nombre: 'Normal',
    descripcion: 'Recitación estándar',
    speedMultiplier: 1.0,
    pitchMultiplier: 1.0,
    vowelElongation: 1.0
  },
  {
    id: 'japanese-zen',
    nombre: 'Canto Zen (Japonés)',
    descripcion: 'Vocales prolongadas con ritmo poético',
    speedMultiplier: 0.6,
    pitchMultiplier: 0.95,
    vowelElongation: 2.5
  },
  {
    id: 'tibetan-throat',
    nombre: 'Canto de Garganta (Tibetano)',
    descripcion: 'Vocales extremadamente alargadas con resonancia profunda',
    speedMultiplier: 0.4,
    pitchMultiplier: 0.7,
    vowelElongation: 4.0
  },
  {
    id: 'theravada',
    nombre: 'Canto Theravada',
    descripcion: 'Vocales alargadas con tono medio',
    speedMultiplier: 0.7,
    pitchMultiplier: 1.0,
    vowelElongation: 2.0
  }
];

export const culturas = [
  { id: 'hi-IN', nombre: 'Hindi (Sánscrito)', icon: 'ॐ' },
  { id: 'ja-JP', nombre: 'Japonés (Zen)', icon: '禅' },
  { id: 'th-TH', nombre: 'Tailandés', icon: 'ॐ' },
  { id: 'es-ES', nombre: 'Español', icon: 'Es' }
];

export const culturasJudias = [
  { id: 'he-IL', nombre: 'Hebreo', icon: 'א' },
  { id: 'ar', nombre: 'Árabe', icon: 'ع' },
  { id: 'es-ES', nombre: 'Español', icon: 'Es' }
];

export interface AmbientSound {
  id: string;
  nombre: string;
  icon: string;
  category?: 'oriental' | 'natural' | 'rhythm';
  frequency?: number;
}

export interface SoundPreset {
  id: string;
  nombre: string;
  sounds: {
    [soundId: string]: {
      active: boolean;
      volume: number;
    };
  };
  createdAt: number;
}

export const nombresSagrados: NombresSagrados = {
  tetragramaton: {
    nombre: "El Tetragrámaton",
    color: "from-amber-100 to-yellow-100",
    nombres: [
      {
        nombre: "YHWH",
        hebreo: "יהוה",
        significado: "El Tetragrámaton - El nombre más sagrado de Dios. Por respeto a la tradición, se muestra pero no se pronuncia.",
        audioVersiones: []
      }
    ]
  },
  keter: {
    nombre: "Kéter (Corona) - El 72° Nombre",
    color: "from-rose-100 to-pink-100",
    nombres: [
      { nombre: "Yelahiah", hebreo: "יָלָה", significado: "Voluntad, Conexión Divina, Liberación de la Culpa", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  jojma: {
    nombre: "Jojmá (Sabiduría) - Nombres 1 al 8",
    color: "from-amber-100 to-yellow-100",
    nombres: [
      { nombre: "Vehuel", hebreo: "וְהוּא", significado: "Idea, Revelación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeli", hebreo: "יְלִי", significado: "Revelación, Sabiduría", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Sit", hebreo: "סִית", significado: "Milagros, Claridad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Aelem", hebreo: "עֵלֶם", significado: "Protección, Visión Elevada", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mahash", hebreo: "מָהַשׁ", significado: "Sanación, Desintoxicación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lelah", hebreo: "לָלָה", significado: "Sueños Proféticos, Comprensión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Akah", hebreo: "אַכָה", significado: "Paciencia, Eliminar Bloqueos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Cahetel", hebreo: "כָהָת", significado: "Bendiciones, Sabiduría Paterna", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  bina: {
    nombre: "Biná (Entendimiento) - Nombres 9 al 16",
    color: "from-blue-100 to-cyan-100",
    nombres: [
      { nombre: "Haziel", hebreo: "הֲזִי", significado: "Forma, Comprensión, Misericordia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Aladiah", hebreo: "אֶלֶד", significado: "Visión Retrospectiva, Gracia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Laviah", hebreo: "לָוַ", significado: "Puente Espiritual, Comprensión Profunda", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahiah", hebreo: "הַהַ", significado: "Amor Incondicional, Entendimiento", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yezalel", hebreo: "יְזַל", significado: "Unión de Parejas, Armonía", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mebahael", hebreo: "מָבַה", significado: "Verdad y Honestidad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hariel", hebreo: "הַרִי", significado: "Conocimiento de Secretos, Lógica", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hakamiah", hebreo: "הָקָם", significado: "Lealtad, Superar la Envidia", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  jesed: {
    nombre: "Jésed (Misericordia) - Nombres 17 al 24",
    color: "from-green-100 to-emerald-100",
    nombres: [
      { nombre: "Lauviah", hebreo: "לָאו", significado: "Amor, Expansión, Victoria", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Cali", hebreo: "כְּלִי", significado: "Fertilidad, Maternidad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Leuvo", hebreo: "לָווּ", significado: "Reducir el Ego, Humildad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Pahali", hebreo: "פָּהַל", significado: "Liberación de Adicciones", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nelchael", hebreo: "נָלַכ", significado: "Victoria sobre la Ignorancia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeiayel", hebreo: "יְיָאִי", significado: "Fama, Riqueza, Gracia Divina", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Melahael", hebreo: "מָלָכ", significado: "Protección contra Peligros", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Chahuiah", hebreo: "חָוַה", significado: "Buscar lo Escondido, Amor", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  guevura: {
    nombre: "Guevurá (Justicia) - Nombres 25 al 32",
    color: "from-indigo-100 to-purple-100",
    nombres: [
      { nombre: "Netah", hebreo: "נָתָה", significado: "Restricción, Fuerza, Sabiduría", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Haaiah", hebreo: "הָאָה", significado: "Oráculos, Justicia Divina", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yerathel", hebreo: "יְרָת", significado: "Propagación de la Luz, Disciplina", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Shaah", hebreo: "שָׁאַה", significado: "Alma Gemela, Unión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Reyel", hebreo: "רָיָע", significado: "Liberación de Enemigos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Omael", hebreo: "אוּמַל", significado: "Fertilidad y Nuevos Comienzos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lecavel", hebreo: "לָכַב", significado: "Abundancia, Provisión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Vasariah", hebreo: "וָשַׂר", significado: "Memoria, Retorno", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  tiferet: {
    nombre: "Tiféret (Belleza) - Nombres 33 al 40",
    color: "from-orange-100 to-red-100",
    nombres: [
      { nombre: "Yehuiyah", hebreo: "יְחוּי", significado: "Balance, Armonía, Orden", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lehahel", hebreo: "לָהַח", significado: "Salud, Curación, Armonía Vital", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Chavakhiah", hebreo: "חָוַק", significado: "Paz en la Familia, Reconciliación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Menadel", hebreo: "מָנַד", significado: "Trabajo, Sostén, Libertad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Aniel", hebreo: "אָנִי", significado: "Romper Círculos Viciosos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Haamiah", hebreo: "חָעַם", significado: "Protección Contra la Mentira", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Rehael", hebreo: "רָהַע", significado: "Sumisión, Obediencia, Curación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeyazel", hebreo: "יְיָז", significado: "Visión y Luz, Consuelo", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  netzaj: {
    nombre: "Nétzaj (Victoria) - Nombres 41 al 48",
    color: "from-slate-100 to-gray-100",
    nombres: [
      { nombre: "Hahahel", hebreo: "הָהֵה", significado: "Perseverancia, Eternidad, Propósito", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Michael", hebreo: "מִיכָא", significado: "Reconocimiento Espiritual", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Vehul", hebreo: "וָהֶל", significado: "Equilibrio, Reconstrucción", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeloh", hebreo: "יְלוֹ", significado: "Victoria, Protección", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Seal", hebreo: "סָאַל", significado: "Prosperidad, Sustento", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Asar", hebreo: "עָשַׁר", significado: "Juicio Justo, Transformación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Miah", hebreo: "מִיכָא", significado: "Orden, Control de Emociones", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Vaho", hebreo: "וָהוּ", significado: "Sanación y Restauración", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  hod: {
    nombre: "Hod (Gloria) - Nombres 49 al 56",
    color: "from-yellow-100 to-lime-100",
    nombres: [
      { nombre: "Daniel", hebreo: "דָנִי", significado: "Sumisión, Aceptación, Perdón", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahas", hebreo: "הָחָס", significado: "Conocimiento de Dios", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Amamiah", hebreo: "אָמָם", significado: "Integridad y Confianza", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nanael", hebreo: "נָנַע", significado: "Lógica, Claridad Mental", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nitel", hebreo: "נִיט", significado: "Propagación de la Luz, Enseñanza", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mebah", hebreo: "מָבָה", significado: "Fuerza Interior, Motivación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Poiel", hebreo: "פּוֹי", significado: "Misericordia, Apoyo Divino", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nemamiah", hebreo: "נָמַמ", significado: "Escuchar la Voz Interior", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  yesod: {
    nombre: "Yesod (Fundamento) - Nombres 57 al 64",
    color: "from-purple-100 to-pink-100",
    nombres: [
      { nombre: "Yeyalel", hebreo: "יְיָל", significado: "Conexión, Generación, Sanación Mental", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Harahael", hebreo: "הָרָה", significado: "Visión y Profecía", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mizrael", hebreo: "מָצַר", significado: "Compensación, Reparación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Umael", hebreo: "אוּמָא", significado: "Paz, Calma, Meditación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahael", hebreo: "חָהָא", significado: "Purificación, Liberación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Anauel", hebreo: "אָנַו", significado: "Conexión, Liderazgo", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mehiel", hebreo: "מָחִי", significado: "Unión, Éxito en el Arte", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Damabiah", hebreo: "דָמַב", significado: "Claridad en el Propósito", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  maljut: {
    nombre: "Maljut (Reino) - Nombres 65 al 71",
    color: "from-cyan-100 to-blue-100",
    nombres: [
      { nombre: "Menakel", hebreo: "מָנַק", significado: "Manifestación, Acción, Librar de Miedos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Ayel", hebreo: "אֵיעָ", significado: "Visión Cósmica, Conexión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Habuiah", hebreo: "חָבִי", significado: "Sanación de la Enfermedad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Rochel", hebreo: "רָוָכ", significado: "Restauración de la Propiedad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yabamiah", hebreo: "יָבָמ", significado: "Amor, Paz, Unidad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hayiel", hebreo: "חָיֵל", significado: "Luz, Despertar de la Conciencia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mumiah", hebreo: "מוּמַ", significado: "Purificación, Finalización", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  }
};

export interface Meditacion {
  titulo: string;
  categoria: string;
  duracion: string;
  texto: string;
  descripcion: string;
}

export interface CategoriasMeditacion {
  nombre: string;
  color: string;
  meditaciones: Meditacion[];
}

export interface MeditacionesGuiadas {
  [key: string]: CategoriasMeditacion;
}

export interface EstiloNarracion {
  id: string;
  nombre: string;
  descripcion: string;
  speedMultiplier: number;
  pitchMultiplier: number;
  volumeMultiplier: number;
}

export const estilosNarracion: EstiloNarracion[] = [
  {
    id: 'normal',
    nombre: 'Normal/Calmado',
    descripcion: 'Voz natural y relajada, suave y cálida',
    speedMultiplier: 0.75,
    pitchMultiplier: 1.0,
    volumeMultiplier: 1.0
  },
  {
    id: 'susurro',
    nombre: 'Susurro (Whisper)',
    descripcion: 'Íntimo y sensorial, perfecto para sueño profundo',
    speedMultiplier: 0.65,
    pitchMultiplier: 0.95,
    volumeMultiplier: 0.7
  },
  {
    id: 'etereo',
    nombre: 'Suave y Etéreo',
    descripcion: 'Voz baja con respiración audible, ideal para visualizaciones',
    speedMultiplier: 0.7,
    pitchMultiplier: 1.05,
    volumeMultiplier: 0.85
  },
  {
    id: 'profundo',
    nombre: 'Profundo y Resonante',
    descripcion: 'Voz grave que transmite estabilidad y seguridad',
    speedMultiplier: 0.7,
    pitchMultiplier: 0.85,
    volumeMultiplier: 1.0
  },
  {
    id: 'maternal',
    nombre: 'Cálido y Maternal',
    descripcion: 'Efectivo para relajación emocional y autocompasión',
    speedMultiplier: 0.75,
    pitchMultiplier: 1.1,
    volumeMultiplier: 0.9
  },
  {
    id: 'hipnotico',
    nombre: 'Hipnótico (Eriksonian)',
    descripcion: 'Voz monótona y rítmica para inducir trance',
    speedMultiplier: 0.6,
    pitchMultiplier: 0.95,
    volumeMultiplier: 0.95
  }
];

export const meditacionesGuiadas: MeditacionesGuiadas = {
  viajes: {
    nombre: "Viajes Místicos",
    color: "from-purple-100 to-indigo-100",
    meditaciones: [
      {
        titulo: "Sensaciones Profundas",
        categoria: "Viaje Sensorial",
        duracion: "15 min",
        descripcion: "Explora las sensaciones del mundo físico y emocional con pausas guiadas.",
        texto: `Respira...(7 seg)
Inhala... siente el aire llenándote...(7 seg)
Exhala... suelta todo...(10 seg)
Otra vez... inhala... exhala...(7 seg)
Suelta el cuerpo...(5 seg)
suelta el nombre...(7 seg)
suelta lo que crees saber...(7 seg)
Solo queda espacio... quieto... abierto...

(pausa 15 seg)
No pienses...(5 seg)
solo siente...(7 seg)
Estás ahí... dentro de lo que llaman "realidad"...(5 seg)
Pero no hay palabras... solo esta sensación...(5 seg)
Cierra todo... y déjate caer en el primero.

[pausa 10 seg - metrónomo suave]

La Sensación del Mundo Sólido(7 seg)
Sientes el suelo bajo ti... pesado... firme...(5 seg)
El aire toca tu piel...(5 seg)
fresco...(3 seg)
real...(3 seg)
Tus pies se hunden ligeramente...(5 seg)
la tierra te sostiene...(4 seg)
Escuchas el latido de tu corazón...(7 seg)
fuerte...(4 seg)
constante...(4 seg)
Todo parece estable...(5 seg)

Tocas algo sólido...(3 seg)
se siente...
frío...(3 seg)
tuyo...(3 seg)
Respira...(4 seg)
inhala esa certeza...(5 seg)
exhala cualquier duda...(3 seg)
Eres parte de esto...(3 seg)
lo sientes...(3 seg)
lo vives...

(pausa 8 seg - metrónomo)

El mundo se acerca...(3 seg)
se hace más tuyo...(4 seg)
Sientes los colores...(5 seg)
no como luz, sino como emoción dentro de ti...(7 seg)

El sonido(3 seg)
siente su vibración en tu pecho...(5 seg)
Todo se construye en tu interior,(2 seg) dentro...(2 seg)

(pausa 7 seg - metrónomo)

Respira una última vez...(5 seg)
Y cuando abras los ojos...(3 seg)
verás el mundo de nuevo...(4 seg)
pero ahora sabes...(3 seg)
que todo vive en ti.`,
      },
      {
        titulo: "Los 7 Niveles de la Realidad",
        categoria: "Viaje Místico",
        duracion: "20 min",
        descripcion: "Un viaje filosófico que te lleva desde lo físico hasta lo inefable.",
        texto: `Respira...
Inhala... siente el aire llenándote...
Exhala... suelta todo...

Otra vez... inhala... exhala...

Suelta el cuerpo... suelta el nombre... suelta lo que crees saber...
Solo queda espacio... quieto... abierto...
Listo.

[pausa 10 seg - Campanas Tibetanas suaves de fondo]

No pienses... solo siente...
Estás ahí... dentro de lo que llaman "realidad"...
Pero no hay palabras... solo esta sensación...

Cierra todo... y déjate caer en el primero.

[pausa 6 seg - Campanas Graves profundas]

**Nivel 1: La Sensación del Mundo Sólido**

Sientes el suelo bajo ti... pesado... firme...
El aire toca tu piel... fresco... real...

Tus pies se hunden ligeramente... la tierra te sostiene...
Escuchas el latido de tu corazón... fuerte... constante...

Todo parece estable... obvio...
Tocas algo... se siente sólido... frío... tuyo...

Respira aquí... inhala esa certeza... exhala cualquier duda...
Eres parte de esto... lo sientes... lo vives...

[pausa 8 seg - Cuencos Profundos graves]

Ahora... algo cambia...
El mundo se acerca... se hace más tuyo...

Sientes los colores... no como luz... sino como emoción dentro de ti...
El sonido... vibra en tu pecho...
Todo se construye... dentro...

[pausa 7 seg - Campanas Agudas altas]

**Nivel 2: La Percepción que Crea**

Sientes cómo las ondas llegan... luz... sonido...
Pero no son "allá fuera"...
Se funden en ti...

Tu mente las teje... las hace forma... las hace color...
Tocas... y sientes la suavidad... pero es tu toque quien la crea...

Respira... inhala el flujo... exhala la ilusión de separación...
Todo nace aquí... dentro de tu sentir...

Eres el que ve... el que oye... el que toca...

[pausa 9 seg - Cuencos de Cristal cristalinos]

Ahora... algo más profundo...
Las ideas se cuelan...
Sientes cómo una creencia... una palabra... moldea lo que tocas...

[pausa 6 seg - Campanas Tibetanas suaves]

**Nivel 3: La Creencia que Moldea**

Sientes el peso de una idea...
No son cosas... son sensaciones que te envuelven...
Te aprietan... te liberan...

Una creencia te hace pequeño... otra te hace vasto...

Respira... inhala esa red invisible... exhala su poder...
Todo lo que crees... se hace real en tu sentir...

[pausa 10 seg - Gong Tibetano grave]

El suelo tiembla...
Algo se rompe...

[pausa 5 seg - Gong Pequeño agudo]

**Nivel 4: La Ciencia que Deshace**

Sientes vacío...
Lo que tocas... no es sólido...
Átomos... repulsión... espacio...

El tiempo se estira... se dobla...
Una partícula... onda... probabilidad...
Solo se define cuando la sientes...

Respira... inhala la paradoja... exhala la rigidez...
Todo vibra... todo espera tu mirada...

[pausa 12 seg - Cuencos Profundos y Cuencos de Cristal mezclados]

Ahora... el mundo parpadea...
Como píxeles... como código...

[pausa 7 seg - Metrónomo sutil]

**Nivel 5: La Simulación que Envuelve**

Sientes el renderizado...
Lejos... borroso...
Cerca... nítido...

La gravedad... un tirón suave...
El tiempo... un bucle...
No sabes si hay "afuera"...

Solo este juego... esta pantalla infinita...

Respira... inhala la posibilidad... exhala el miedo...
Eres el avatar... y el jugador... a la vez...

[pausa 11 seg - Metrónomo suave]

El velo se adelgaza...
Se disuelve...

[pausa 8 seg - Viento ligero, Agua fluyendo]

**Nivel 6: La Unión Mística**

Sientes cómo los límites se funden...
Tu cuerpo... la silla... el aire...
Todo se vuelve uno...

No hay "yo"... solo flujo...
El árbol... el viento... la semilla...
Todo late en ti...

Respira... inhala la interconexión... exhala separación...
Eres el todo... vasto... indivisible...

[pausa 13 seg - Lluvia suave, Océano lejano]

Ahora... todo se calla...

[pausa 15 seg - Campanas Tibetanas muy lejanas]

**Nivel 7: Lo Inconocible**

No hay nada que sentir...
Solo silencio...
El misterio...
Detrás de todo...

Respira... inhala el vacío luminoso... exhala... nada...
Solo sé...

[pausa 20 seg - Silencio absoluto]

Ahora... sin prisa...
Siente cómo todo regresa...
Los niveles se apilan dentro de ti...
Como capas que respiran juntas...

Inhala unidad... exhala claridad...
Cuando estés listo... abre los ojos...

Llevas esto contigo... siempre.

Namaste.`
      }
    ]
  }
};

export const ambientSounds: AmbientSound[] = [
  // Sonidos Orientales
  { id: 'bells', nombre: 'Campanas Tibetanas', icon: 'Bell', category: 'oriental' },
  { id: 'bells-high', nombre: 'Campanas Agudas', icon: 'Bell', category: 'oriental' },
  { id: 'bells-low', nombre: 'Campanas Graves', icon: 'Bell', category: 'oriental' },
  { id: 'bowls', nombre: 'Cuencos Tibetanos', icon: 'Circle', category: 'oriental' },
  { id: 'bowls-crystal', nombre: 'Cuencos de Cristal', icon: 'Circle', category: 'oriental' },
  { id: 'bowls-deep', nombre: 'Cuencos Profundos', icon: 'Circle', category: 'oriental' },
  { id: 'gong', nombre: 'Gong Tibetano', icon: 'Disc3', category: 'oriental' },
  { id: 'gong-small', nombre: 'Gong Pequeño', icon: 'Disc3', category: 'oriental' },
  // Sonidos Naturales
  { id: 'water', nombre: 'Agua', icon: 'Droplets', category: 'natural' },
  { id: 'rain', nombre: 'Lluvia', icon: 'CloudRain', category: 'natural' },
  { id: 'ocean', nombre: 'Océano', icon: 'Droplets', category: 'natural' },
  { id: 'wind', nombre: 'Viento', icon: 'Wind', category: 'natural' },
  { id: 'nature', nombre: 'Río', icon: 'TreePine', category: 'natural' },
  // Ritmo
  { id: 'metronome', nombre: 'Metrónomo', icon: 'Bell', category: 'rhythm' }
];