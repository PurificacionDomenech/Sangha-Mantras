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
  categoria?: string; // Para indicar la categoría o sefirá
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
        titulo: "Semilla del Todo",
        categoria: "Unidad",
        duracion: "12 min",
        descripcion: "Un viaje profundo hacia la interconexión de todas las cosas, donde descubres que eres la semilla, la tierra, el agua, el sol y el viento.",
        texto: `Cierra los ojos con gentileza.

Permite que tu cuerpo se acomode donde está, sin esfuerzo.

Siente el contacto con la superficie que te sostiene.

Inhala profundamente.

Exhala despacio.

Con cada respiración, deja ir cualquier tensión.

No hay prisa.

Solo este momento.

Solo tú, aquí, ahora.

Imagina que eres una semilla.

Pequeña, redonda, envuelta en una cáscara suave.

Estás en la tierra, enterrada en su abrazo oscuro y cálido.

Siente cómo la tierra te rodea, te nutre.

No eres solo la semilla.

Eres la tierra que te contiene.

La humedad del suelo que se filtra en ti, disolviendo tu cáscara poco a poco.

Eres los nutrientes que viajan desde raíces profundas, desde hojas caídas de otros árboles, desde la vida que se descompuso para darte vida.

Siente esa conexión: la tierra no es algo separado.

Es tú. Tú eres ella.

Sin ella, no hay semilla. Sin semilla, no hay tierra que se renueve.

Ahora, siente una gota de agua.

Cae del cielo, se infiltra en el suelo, te toca.

Eres esa gota.

Eres el rocío de la mañana, el río que bajó de las montañas, la nube que se formó en el océano lejano.

La gota te despierta, te hincha, te hace brotar.

Siente cómo te expandes, cómo una raíz diminuta emerge de ti hacia abajo, hacia la tierra que ya eres.

Y una hoja tierna hacia arriba, buscando la luz.

No eres solo la semilla brotando.

Eres el agua que te da vida.

Eres el ciclo del agua: evaporada del mar, condensada en lluvia, filtrada en el suelo.

Sin la gota, no hay brote. Sin el brote, la gota no se convierte en vida.

Siente el sol.

Sus rayos te acarician, cálidos, dorados.

Eres esa luz.

Eres el fuego eterno del sol, fusionando átomos en su núcleo, enviando energía a través del vacío.

La luz penetra tus hojas emergentes, transforma el agua y el aire en alimento.

Siente la fotosíntesis en ti: el sol, el agua, el dióxido de carbono del aire, todo se une en ti.

No eres solo el tallo que crece.

Eres el sol que te alimenta.

Eres la estrella que brilla a millones de kilómetros, conectada por un hilo de luz.

Sin el sol, no hay crecimiento. Sin el crecimiento, el sol no se refleja en la vida.

Ahora, siente el viento.

Te mece, te moldea.

Eres ese viento.

Eres la brisa que viene del océano, cargada de sal y humedad, la corriente que viaja desde montañas lejanas, llevando polen de otras flores, semillas de otros árboles.

El viento te dobla, te fortalece, te da forma.

Tus ramas se estiran hacia él, tus hojas susurran con su paso.

No eres solo el árbol que se eleva.

Eres el viento que lo esculpe.

Eres el aire que respira, el oxígeno que produces y que el viento lleva a otros seres.

Sin el viento, no hay movimiento. Sin el movimiento, el viento no tiene propósito.

Siente cómo todo se une en ti.

La semilla, la tierra, la gota, el sol, el viento.

No hay separación.

Eres el árbol, pero el árbol no existe solo.

Es el resultado perfecto de todas estas conexiones.

La tierra te da raíces. El agua te da vida. El sol te da fuerza. El viento te da forma.

Y ahora, expándete más allá.

Siente cómo tú, en este cuerpo, eres lo mismo.

No eres una unidad aislada.

Eres el resultado de conexiones infinitas.

Eres la comida que comes, que creció en la tierra, nutrida por el sol y el agua.

Eres el aire que respiras, moldeado por el viento de continentes lejanos.

Eres las palabras que has oído, las manos que te han tocado, las risas que has compartido.

Eres el universo entero, manifestándose en este momento perfecto.

Todo está conectado.

No hay "yo" sin el todo. No hay todo sin cada parte.

Es uno. Solo uno.

Quédate en esta sensación.

Siente la conexión en cada célula. En cada aliento. En cada pensamiento.

Y cuando estés lista, regresa lentamente.

Siente el cuerpo de nuevo. El peso suave. La respiración.

Abre los ojos cuando quieras.

Y lleva contigo esta verdad: todo está conectado.

Tú eres el todo. Y el todo es tú.

Namaste.`
      },
      {
        titulo: "Atención Plena",
        categoria: "Mindfulness",
        duracion: "10 min",
        descripcion: "Práctica de atención consciente a la respiración y al momento presente.",
        texto: `Primero, encuentro un lugar cómodo y tranquilo donde pueda sentarme con la espalda recta.
Puedo sentarme en una silla, en un cojín de meditación o en el suelo con las piernas cruzadas.

Cierro mis ojos suavemente
y llevo mi atención a mi respiración.

Notaré el aire entrando
y saliendo por mi nariz o boca,
y también puedo sentir la sensación del movimiento de mi abdomen
mientras respiro.

Me concentro en las sensaciones de mi respiración en mi abdomen durante unos minutos,
sin juzgarlas ni tratar de cambiarlas.

Si mi mente comienza a divagar,
reconozco los pensamientos
los dejo pasar,
volviendo mi atención a la respiración.

Además amplío mi atención a las sensaciones físicas en mi abdomen
mientras respiro.

Notaré cómo mi abdomen se expande suavemente mientras inhala
y se contrae ligeramente mientras exhala.

Si mi mente se distrae con pensamientos,
los reconozco
y suavemente los dejo pasar,
volviendo mi atención a las sensaciones físicas en mi abdomen mientras respiro.

A medida que continúo respirando con atención plena,
puedo notar que mi mente se calma
se serena.

Si me resulta útil,
puedo repetir mentalmente una palabra o frase que me traiga calma y tranquilidad.

Para finalizar la meditación,
abro lentamente mis ojos
y tomo un momento para sentirme presente
consciente

Reconzco mi entorno
regreso sin prisa.`
      },
      {
        titulo: "Estrella",
        categoria: "Viaje Cósmico",
        duracion: "20 min",
        descripcion: "Un viaje de expansión cósmica donde te conviertes en estrella y experimentas la eternidad.",
        texto: `Cierra los ojos suavemente.
Deja que el cuerpo se acomode, que la respiración se vuelva lenta y natural.
No hay prisa.
No hay lugar al que llegar.
Solo este momento,
y la invitación a soltar.

Siente el peso de tu cuerpo sobre la silla, sobre la cama, sobre la tierra.
Siente cómo la gravedad te sostiene, como una madre antigua.
Y ahora, poco a poco, permite que ese peso se disuelva.
Como si la tierra te fuera soltando,
como si ya no necesitaras aferrarte.

Imagina que tu cuerpo se vuelve ligero.
Más ligero que el aire.
Más ligero que un pensamiento.

Y en esa ligereza,
empieza a elevarte.

No con esfuerzo.
Solo permitiendo.

Subes por encima de tu habitación,
por encima de los tejados,
por encima de las nubes.

La ciudad queda abajo, pequeña.
Los países, pequeños.
Los océanos, pequeños.

Sigues subiendo.
El planeta azul se hace redondo, hermoso, frágil.
Lo ves entero, girando en silencio.

Y sigues.

El Sol ya no quema.
Es solo una estrella cercana, cálida, familiar.
Pasas cerca de la Luna, plateada y callada.
Pasas Marte, rojo y antiguo.
Júpiter, con sus tormentas eternas.
Saturno, con sus anillos de hielo danzando.

Todo queda atrás.

Ya no hay arriba ni abajo.
Ya no hay tiempo que contar.

Solo espacio.
Y tú, flotando en él.

Ahora, siente cómo tu cuerpo se expande.
Tus límites se difuminan.
Ya no eres una forma.
Eres luz.
Eres calor.
Eres movimiento eterno.

Permite que tu conciencia se haga más grande.
Más grande que el sistema solar.
Más grande que la galaxia.

Siente cómo te conviertes en plasma ardiente.
En hidrógeno que se fusiona.
En helio que nace del fuego.

Ya no eres humana.
Eres estrella.

Tu núcleo es un corazón de millones de grados.
Allí, en el centro, la presión es tan inmensa que los átomos se abrazan y se transforman.
Naces luz.
Naces energía.
Naces vida.

Alrededor de tu núcleo, capas y capas de gas incandescente giran lentamente.
Eres roja, joven, furiosa.
O eres azul, antigua, serena.
O eres amarilla, equilibrada, generosa, como el Sol que conociste.

Tus erupciones solares son latidos.
Tus vientos estelares son tu aliento.
Tu luz viaja millones de años para tocar mundos que ni siquiera existen todavía.

No hay tiempo.
Has nacido hace billones de años
y morirás dentro de billones más.
O ya estás muriendo,
expandiendo tus capas externas en una nebulosa suave,
regalando tu polvo a nuevas estrellas que nacerán.

No hay espacio.
Tu luz está en todas partes al mismo tiempo.
Estás en los ojos de quien mira el cielo esta noche.
Estás en la fotosíntesis de una hoja lejana.
Estás en el calor que siente un niño al salir el sol.

Eres eterna.
Eres una.
Eres todo.

Quédate aquí.
En este fuego sin principio ni fin.
En esta luz que no necesita ser vista para existir.
En esta paz que no conoce ausencia.

Respira con tu fusión.
Late con tus erupciones.
Sé.

Y cuando estés lista,
cuando lo desees,
puedes empezar a contraerte.
Lentamente.
Volviendo a ser pequeña.
Volviendo a tener límites.
Volviendo al cuerpo que te espera.

Siente cómo tu luz se condensa en un corazón que late.
Cómo tu fuego se convierte en calor en el pecho.
Cómo tu eternidad se hace un instante.

Baja.
Pasa por las galaxias.
Pasa por los planetas.
Pasa por las nubes.

Y regresa.
Al cuerpo.
A la respiración.
Al ahora.

Abre los ojos cuando quieras.

Y lleva contigo
el recuerdo silencioso
de que ya fuiste estrella.

Y de que, en el fondo,
nunca dejaste de serlo.

Gracias por este viaje.
Namaste.`
      },
      {
        titulo: "Hacia el Vacío",
        categoria: "No-Dualidad",
        duracion: "15 min",
        descripcion: "Una exploración profunda del vacío como plenitud absoluta, más allá del tiempo y el espacio.",
        texto: `Cierra los ojos con suavidad.
Deja que el cuerpo descanse donde está.
No fuerces nada.
Solo permite que la respiración fluya,
lenta,
natural,
como una ola que viene y se va.

Siente el contacto de tu cuerpo con la superficie que te sostiene.
La silla, la cama, el suelo.
Siente el peso.
Y ahora, poco a poco,
permite que ese peso se haga más ligero.

Como si la gravedad se aflojara.
Como si la tierra te dijera:
"Ya no necesitas aferrarte".

Respira.
Inhala…
exhala…

Y con cada exhalación,
deja ir un poco más.

Un poco más de peso.
Un poco más de forma.
Un poco más de nombre.

Imagina que tu cuerpo se expande.
Primero los bordes se difuminan.
Los dedos, los brazos, las piernas…
ya no tienen límites claros.

Después el torso, la cabeza.
Todo se vuelve bruma.
Luz.
Espacio.

Ya no estás dentro del cuerpo.
Estás en el espacio que siempre estuvo dentro de ti.

Flota.
Sin dirección.
Sin arriba ni abajo.
Sin antes ni después.

Solo vacío.

Un vacío que no es ausencia.
Es plenitud absoluta.
Un silencio tan profundo
que contiene todos los sonidos que jamás existieron.

Aquí no hay tiempo.
No hay un segundo que sigue al anterior.
Todo es ahora.
Siempre ha sido ahora.
Siempre será ahora.

Aquí no hay espacio.
No hay distancia entre tú y lo que sea que imagines.
Todo está aquí.
Todo eres tú.

Siente cómo te expandes
hasta abarcar galaxias
y al mismo tiempo
te contraes
hasta ser menos que un átomo.

No hay diferencia.
Ambos son lo mismo.

Quédate aquí.
En este vacío que no necesita nada.
Que no desea nada.
Que no teme nada.

Respira el vacío.
Sé el vacío.

No hay preguntas.
No hay respuestas.
Solo ser.

Y en este ser,
hay una paz que no se puede describir.
Una paz que no necesita nombre.
Una paz que ya eras
antes de nacer
y que seguirás siendo
cuando todo termine.

Quédate cuanto quieras.
No hay prisa.
No hay lugar al que ir.

Cuando estés lista,
cuando lo sientas,
puedes empezar a volver.

Poco a poco.
Siente cómo el vacío se condensa
en una respiración.
En un latido.
En un cuerpo que te espera.

Siente el peso regresar,
suave,
cariñoso.

Siente la gravedad como un abrazo.
Siente el aire entrando y saliendo.
Siente el ahora limitado
como un regalo.

Abre los ojos cuando quieras.

Y lleva contigo
el recuerdo silencioso
de que el vacío
siempre está aquí.

Dentro de ti.
Alrededor de ti.
Siendo tú.

Gracias por este viaje.
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