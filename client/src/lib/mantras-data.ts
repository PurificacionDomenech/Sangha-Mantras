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
    color: "from-amber-700 to-yellow-600",
    nombres: [
      {
        nombre: "YHWH",
        hebreo: "יהוה",
        significado: "El Tetragrámaton - El nombre más sagrado de Dios, representa la esencia eterna. Por respeto a la tradición, este nombre se muestra pero no se pronuncia.",
        audioVersiones: [] // No reproducible por respeto
      }
    ]
  },
  principales: {
    nombre: "Nombres Principales",
    color: "from-amber-600 to-orange-600",
    nombres: [
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
    color: "from-orange-600 to-amber-700",
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
    color: "from-yellow-700 to-amber-600",
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
  nombres72_1_9: {
    nombre: "72 Nombres (1-9)",
    color: "from-amber-500 to-yellow-500",
    nombres: [
      { nombre: "Vehuel", hebreo: "וְהוּא", significado: "Fortaleza, Resistencia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeli", hebreo: "יְלִי", significado: "Revelación, Sabiduría", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Sit", hebreo: "סִית", significado: "Milagros, Claridad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Aelem", hebreo: "עֵלֶם", significado: "Protección Contra el Mal de Ojo", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mahash", hebreo: "מָהַשׁ", significado: "Sanación, Desintoxicación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lelah", hebreo: "לָלָה", significado: "Sueños Proféticos, Juicios Justos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Akah", hebreo: "אַכָה", significado: "Eliminar Bloqueos, Paciencia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Cahetel", hebreo: "כָהָת", significado: "Paternidad, Bendiciones", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Haziel", hebreo: "הֲזִי", significado: "Misericordia, Perdón", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_10_18: {
    nombre: "72 Nombres (10-18)",
    color: "from-yellow-500 to-amber-500",
    nombres: [
      { nombre: "Aladiah", hebreo: "אֶלֶד", significado: "Visión Retrospectiva, Gracia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Laviah", hebreo: "לָוַ", significado: "Puente Espiritual, Viajes", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahiah", hebreo: "הַהַ", significado: "Amor Incondicional, Protección", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yezalel", hebreo: "יְזַל", significado: "Unión de Parejas, Armonía", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mebahael", hebreo: "מָבַה", significado: "Verdad y Honestidad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hariel", hebreo: "הַרִי", significado: "Conocimiento de Secretos, Lógica", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hakamiah", hebreo: "הָקָם", significado: "Lealtad, Superar la Envidia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lauviah", hebreo: "לָאו", significado: "Victoria y Éxito, Revelaciones Nocturnas", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Cali", hebreo: "כְּלִי", significado: "Fertilidad, Maternidad", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_19_27: {
    nombre: "72 Nombres (19-27)",
    color: "from-amber-500 to-orange-500",
    nombres: [
      { nombre: "Leuvo", hebreo: "לָווּ", significado: "Reducir el Ego, Transición", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Pahali", hebreo: "פָּהַל", significado: "Liberación de Adicciones", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nelchael", hebreo: "נָלַכ", significado: "Victoria sobre la Ignorancia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeiayel", hebreo: "יְיָאִי", significado: "Fama, Riqueza, Suerte", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Melahael", hebreo: "מָלָכ", significado: "Protección contra Peligros", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Chahuiah", hebreo: "חָוַה", significado: "Buscar lo Escondido, Verdad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Netah", hebreo: "נָתָה", significado: "Sabiduría, Revelaciones", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Haaiah", hebreo: "הָאָה", significado: "Oráculos, Amor Divino", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yerathel", hebreo: "יְרָת", significado: "Propagación de la Luz, Confianza", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_28_36: {
    nombre: "72 Nombres (28-36)",
    color: "from-orange-500 to-amber-600",
    nombres: [
      { nombre: "Shaah", hebreo: "שָׁאַה", significado: "Alma Gemela, Unión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Reyel", hebreo: "רָיָע", significado: "Liberación de Enemigos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Omael", hebreo: "אוּמַל", significado: "Fertilidad y Nuevos Comienzos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lecavel", hebreo: "לָכַב", significado: "Abundancia, Provisión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Vasariah", hebreo: "וָשַׂר", significado: "Memoria, Retorno", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yehuiyah", hebreo: "יְחוּי", significado: "Fin de la Adicción, Orden", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Lehahel", hebreo: "לָהַח", significado: "Salud, Curación, Energía Vital", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Chavakhiah", hebreo: "חָוַק", significado: "Paz en la Familia, Reconciliación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Menadel", hebreo: "מָנַד", significado: "Trabajo, Sostén, Libertad", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_37_45: {
    nombre: "72 Nombres (37-45)",
    color: "from-amber-600 to-yellow-600",
    nombres: [
      { nombre: "Aniel", hebreo: "אָנִי", significado: "Romper Círculos Viciosos", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Haamiah", hebreo: "חָעַם", significado: "Protección Contra la Mentira", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Rehael", hebreo: "רָהַע", significado: "Sumisión, Obediencia, Curación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeyazel", hebreo: "יְיָז", significado: "Visión y Luz, Consuelo", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahahel", hebreo: "הָהֵה", significado: "Misión, Destino, Propósito", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Michael", hebreo: "מִיכָא", significado: "Reconocimiento Espiritual", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Vehul", hebreo: "וָהֶל", significado: "Equilibrio, Reconstrucción", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeloh", hebreo: "יְלוֹ", significado: "Victoria, Protección", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Seal", hebreo: "סָאַל", significado: "Prosperidad, Sustento", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_46_54: {
    nombre: "72 Nombres (46-54)",
    color: "from-yellow-600 to-orange-600",
    nombres: [
      { nombre: "Asar", hebreo: "עָשַׁר", significado: "Juicio Justo, Transformación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Miah", hebreo: "מִיכָא", significado: "Orden, Control de Emociones", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Vaho", hebreo: "וָהוּ", significado: "Sanación y Restauración", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Daniel", hebreo: "דָנִי", significado: "Perdón Radical, Retorno", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahas", hebreo: "הָחָס", significado: "Conocimiento de Dios", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Amamiah", hebreo: "אָמָם", significado: "Integridad y Confianza", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nanael", hebreo: "נָנַע", significado: "Lógica, Claridad Mental", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nitel", hebreo: "נִיט", significado: "Propagación de la Luz, Enseñanza", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mebah", hebreo: "מָבָה", significado: "Fuerza Interior, Motivación", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_55_63: {
    nombre: "72 Nombres (55-63)",
    color: "from-orange-600 to-amber-700",
    nombres: [
      { nombre: "Poiel", hebreo: "פּוֹי", significado: "Misericordia, Apoyo Divino", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Nemamiah", hebreo: "נָמַמ", significado: "Escuchar la Voz Interior", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yeyalel", hebreo: "יְיָל", significado: "Poder de Sanación Mental", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Harahael", hebreo: "הָרָה", significado: "Visión y Profecía", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mizrael", hebreo: "מָצַר", significado: "Compensación, Reparación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Umael", hebreo: "אוּמָא", significado: "Paz, Calma, Meditación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hahael", hebreo: "חָהָא", significado: "Purificación, Liberación", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Anauel", hebreo: "אָנַו", significado: "Conexión, Liderazgo", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mehiel", hebreo: "מָחִי", significado: "Unión, Éxito en el Arte", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  nombres72_64_72: {
    nombre: "72 Nombres (64-72)",
    color: "from-amber-700 to-yellow-700",
    nombres: [
      { nombre: "Damabiah", hebreo: "דָמַב", significado: "Claridad en el Propósito", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Menakel", hebreo: "מָנַק", significado: "Librar de Miedos, Intuición", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Ayel", hebreo: "אֵיעָ", significado: "Visión Cósmica, Conexión", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Habuiah", hebreo: "חָבִי", significado: "Sanación de la Enfermedad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Rochel", hebreo: "רָוָכ", significado: "Restauración de la Propiedad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yabamiah", hebreo: "יָבָמ", significado: "Amor, Paz, Unidad", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Hayiel", hebreo: "חָיֵל", significado: "Luz, Despertar de la Conciencia", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Mumiah", hebreo: "מוּמַ", significado: "Purificación, Finalización", audioVersiones: ['hebreo', 'melodico', 'significado'] },
      { nombre: "Yelahiah", hebreo: "יָלָה", significado: "Liberación de la Culpa, Victoria", audioVersiones: ['hebreo', 'melodico', 'significado'] }
    ]
  },
  herramientas: {
    nombre: "Elementos Sagrados",
    color: "from-yellow-700 to-amber-700",
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
