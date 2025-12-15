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

export const culturas = [
  { id: 'hi-IN', nombre: 'Hindi (Sánscrito)', icon: 'ॐ' },
  { id: 'ja-JP', nombre: 'Japonés (Zen)', icon: '禅' },
  { id: 'th-TH', nombre: 'Tailandés', icon: 'ॐ' },
  { id: 'es-ES', nombre: 'Español', icon: 'Es' }
];

export const culturasJudias = [
  { id: 'he-IL', nombre: 'Hebreo', icon: 'א' },
  { id: 'yi', nombre: 'Yiddish', icon: 'ײ' },
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
  principales: {
    nombre: "Nombres Principales",
    color: "from-indigo-900 to-purple-900",
    nombres: [
      {
        nombre: "YHWH",
        hebreo: "יהוה",
        significado: "Yo Soy el que Soy / El Eterno",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "Elohim",
        hebreo: "אֱלֹהִים",
        significado: "Dios (Poder creador y justicia)",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "El Shaddai",
        hebreo: "אֵל שַׁדַּי",
        significado: "Dios Todopoderoso",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "Adonai",
        hebreo: "אֲדֹנָי",
        significado: "Mi Señor",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      }
    ]
  },
  compuestos: {
    nombre: "Nombres Compuestos",
    color: "from-blue-900 to-indigo-900",
    nombres: [
      {
        nombre: "YHWH Yireh",
        hebreo: "יהוה יִרְאֶה",
        significado: "El Señor Proveerá",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "YHWH Rafa",
        hebreo: "יהוה רֹפְא",
        significado: "El Señor que Sana",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "YHWH Shalom",
        hebreo: "יהוה שָׁלוֹם",
        significado: "El Señor es Paz",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "YHWH Nissi",
        hebreo: "יהוה נִסִּי",
        significado: "El Señor es mi Bandera",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      }
    ]
  },
  otros: {
    nombre: "Otros Nombres",
    color: "from-purple-900 to-pink-900",
    nombres: [
      {
        nombre: "Hashem",
        hebreo: "הַשֵּׁם",
        significado: "El Nombre (Uso cotidiano)",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      },
      {
        nombre: "Ehyeh Asher Ehyeh",
        hebreo: "אֶהְיֶה אֲשֶׁר אֶהְיֶה",
        significado: "Yo Soy el que Soy",
        audioVersiones: ['hebreo', 'melodico', 'significado']
      }
    ]
  },
  herramientas: {
    nombre: "Elementos Sagrados",
    color: "from-amber-900 to-orange-900",
    nombres: [
      {
        nombre: "El Shofar",
        hebreo: "שׁוֹפָר",
        significado: "Cuerno de carnero (Sonido de despertar)",
        audioVersiones: ['shofar-tekiah', 'shofar-shevarim', 'shofar-teruah', 'significado']
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
