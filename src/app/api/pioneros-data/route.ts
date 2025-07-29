// src/app/api/pioneros-data/route.ts
import { NextResponse } from 'next/server'

export interface Pioneer {
  id: string
  name: string
  role: string
  company: string
  bio: string
  detailedBio: string
  image: string
  linkedinUrl?: string
  portfolioUrl?: string
  contributions: string[]
  keyWork: string
  yearActive: string
  nationality: string
  category: 'founders' | 'researchers' | 'designers' | 'engineers'
  awards: string[]
  quotes: string[]
}

const pioneers: Pioneer[] = [
  {
    id: '1',
    name: 'Don Norman',
    role: 'Pionero del Diseño Centrado en el Usuario',
    company: 'Nielsen Norman Group',
    bio: 'Autor de "The Design of Everyday Things". Acuñó el término "User Experience" y estableció los principios fundamentales del diseño centrado en el usuario.',
    detailedBio: `Don Norman es considerado el padre del término "User Experience" y uno de los teóricos más influyentes en el campo del diseño centrado en el usuario. Durante su tiempo en Apple en los años 90, Norman acuñó el término UX para describir todos los aspectos de la experiencia de una persona con un sistema.

Su libro "The Design of Everyday Things" (originalmente "The Psychology of Everyday Things") revolucionó la forma en que pensamos sobre el diseño, introduciendo conceptos como las affordances, la retroalimentación y la importancia de los modelos mentales del usuario.

Como cofundador del Nielsen Norman Group junto a Jakob Nielsen, Norman ha continuado siendo una voz líder en la industria, defendiendo la importancia de la investigación de usuarios y el diseño basado en evidencia. Su enfoque en la psicología cognitiva aplicada al diseño ha influenciado a generaciones de diseñadores.`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/don-norman-1a001/',
    portfolioUrl: 'https://jnd.org/',
    contributions: [
      'Acuñó el término "User Experience"',
      'Principios de diseño centrado en el usuario',
      'Teoría de las affordances en diseño',
      'Concepto de modelos mentales del usuario',
      'Metodología de evaluación de usabilidad'
    ],
    keyWork: 'The Design of Everyday Things',
    yearActive: '1980-presente',
    nationality: 'Estados Unidos',
    category: 'researchers',
    awards: [
      'Benjamin Franklin Medal in Computer and Cognitive Science',
      'SIGCHI Lifetime Achievement Award',
      'Honorary Doctorate from University of San Diego'
    ],
    quotes: [
      'El buen diseño es en realidad mucho más difícil de notar que el mal diseño, en parte porque los buenos diseños se adaptan tan bien a nuestras necesidades.',
      'La experiencia del usuario abarca todos los aspectos de la interacción del usuario final con la empresa, sus servicios y sus productos.'
    ]
  },
  {
    id: '2',
    name: 'Jakob Nielsen',
    role: 'Experto en Usabilidad Web',
    company: 'Nielsen Norman Group',
    bio: 'Conocido como el "gurú de la usabilidad web". Desarrolló las 10 heurísticas de usabilidad y promovió la importancia del testing de usuarios.',
    detailedBio: `Jakob Nielsen es una de las figuras más reconocidas en el campo de la usabilidad web. Conocido como el "gurú de la usabilidad", Nielsen ha dedicado su carrera a hacer que las interfaces digitales sean más fáciles de usar para las personas.

Sus "10 Heurísticas de Usabilidad", publicadas en 1994, siguen siendo la base fundamental para la evaluación de interfaces de usuario en todo el mundo. Estas heurísticas han sido aplicadas en millones de sitios web y aplicaciones.

Como cofundador del Nielsen Norman Group, Nielsen ha realizado investigaciones extensas sobre comportamiento de usuarios en la web, acuñando términos como "banner blindness" y estableciendo patrones de lectura como el "patrón F" para páginas web. Su enfoque en la simplicidad y la eficiencia ha influenciado el diseño web moderno.`,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/jakobnielsen/',
    portfolioUrl: 'https://www.nngroup.com/people/jakob-nielsen/',
    contributions: [
      '10 Heurísticas de Usabilidad',
      'Metodología de Testing de Usuarios',
      'Pionero en usabilidad web',
      'Concepto de "banner blindness"',
      'Patrón F de lectura web'
    ],
    keyWork: 'Designing Web Usability',
    yearActive: '1988-presente',
    nationality: 'Dinamarca',
    category: 'researchers',
    awards: [
      'SIGCHI Lifetime Achievement Award',
      'World Technology Award',
      'Lifetime Achievement Award from the Human Factors Society'
    ],
    quotes: [
      'La usabilidad es un atributo de calidad que evalúa qué tan fáciles de usar son las interfaces de usuario.',
      'Los usuarios gastan la mayor parte de su tiempo en otros sitios web. Esto significa que prefieren que tu sitio funcione igual que todos los otros sitios que ya conocen.'
    ]
  },
  {
    id: '3',
    name: 'Alan Cooper',
    role: 'Padre del Diseño de Interacción',
    company: 'Cooper',
    bio: 'Creador del concepto de "personas" en UX y fundador del diseño de interacción como disciplina. Pionero en el diseño de software centrado en objetivos.',
    detailedBio: `Alan Cooper es conocido como el "Padre del Diseño de Interacción" por su trabajo pionero en establecer esta disciplina como un campo formal de estudio y práctica. Su enfoque en el diseño orientado a objetivos revolucionó la forma en que los equipos de desarrollo piensan sobre los usuarios.

Cooper introdujo la metodología de "Personas" en su libro "About Face", proporcionando una herramienta práctica para que los diseñadores y desarrolladores mantengan a los usuarios reales en mente durante todo el proceso de diseño. Esta metodología se ha convertido en estándar en la industria.

Como fundador de Cooper (ahora parte de Wipro Digital), Alan ha trabajado con algunas de las empresas más grandes del mundo para mejorar sus productos digitales. Su filosofía de "diseño primero, tecnología después" ha influenciado la cultura de diseño en Silicon Valley y más allá.`,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/alan-cooper-647b7/',
    portfolioUrl: 'https://www.cooper.com/',
    contributions: [
      'Metodología de Personas',
      'Diseño orientado a objetivos',
      'Principios de diseño de interacción',
      'Concepto de elastic user interface',
      'Framework de design research'
    ],
    keyWork: 'About Face: The Essentials of Interaction Design',
    yearActive: '1975-presente',
    nationality: 'Estados Unidos',
    category: 'designers',
    awards: [
      'Software Visionary Award',
      'Lifetime Achievement Award from CHI',
      'Windows Pioneer Award from Microsoft'
    ],
    quotes: [
      'No matter how cool your interface is, less of it would be better.',
      'Si no tenemos una comprensión sólida de quiénes son nuestros usuarios y qué están tratando de lograr, no podemos diseñar una buena experiencia.'
    ]
  },
  {
    id: '4',
    name: 'Susan Kare',
    role: 'Pionera del Diseño de Iconos',
    company: 'Apple / Freelance',
    bio: 'Diseñadora de los iconos originales de Macintosh. Revolucionó la interfaz gráfica de usuario y estableció estándares visuales que perduran hasta hoy.',
    detailedBio: `Susan Kare es la artista detrás de muchos de los iconos más reconocibles en la historia de la computación. Como parte del equipo original de Macintosh en Apple, Kare creó los iconos, fuentes y elementos gráficos que definieron la experiencia visual de las primeras computadoras personales.

Su trabajo en los iconos del Macintosh estableció el lenguaje visual que utilizamos hoy en día en interfaces digitales. Iconos como la papelera de reciclaje, el comando de Apple, y las fuentes bitmap originales fueron creaciones suyas que han influenciado el diseño de interfaces por décadas.

Después de Apple, Kare continuó su trabajo como diseñadora freelance, creando identidades visuales para empresas como Microsoft, IBM y Facebook. Su enfoque en hacer que la tecnología sea más humana y accesible a través del diseño visual ha sido fundamental en la adopción masiva de las computadoras personales.`,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&auto=format&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/susan-kare-a950/',
    portfolioUrl: 'https://kare.com/',
    contributions: [
      'Iconos originales de Macintosh',
      'Pionera en tipografía digital',
      'Estándares de interfaz gráfica',
      'Símbolo del comando de Apple',
      'Metodología de pixel art para interfaces'
    ],
    keyWork: 'Iconos de Apple Macintosh (1984)',
    yearActive: '1982-presente',
    nationality: 'Estados Unidos',
    category: 'designers',
    awards: [
      'AIGA Medal for Lifetime Achievement',
      'Chrysler Award for Innovation in Design',
      'Cooper Hewitt National Design Award'
    ],
    quotes: [
      'Creo que la mayoría del software es tan mal diseñado que es difícil de usar.',
      'Los iconos deben ser inmediatamente reconocibles y universalmente comprensibles.'
    ]
  },
  {
    id: '5',
    name: 'Brenda Laurel',
    role: 'Pionera en Diseño de Experiencias Interactivas',
    company: 'Independent Researcher',
    bio: 'Teórica del diseño de interacción y pionera en experiencias digitales inmersivas. Fundadora de Purple Moon y autora de "Computers as Theatre".',
    detailedBio: `Brenda Laurel es una visionaria que vio el potencial del diseño de experiencias interactivas décadas antes de que se convirtiera en mainstream. Su libro "Computers as Theatre" (1991) estableció las bases teóricas para pensar en las interfaces de usuario como experiencias dramáticas y narrativas.

Como una de las pocas mujeres en los primeros días de la industria tech, Laurel fundó Purple Moon, una empresa pionera en crear software y juegos diseñados específicamente para niñas. Su investigación sobre diferencias de género en el uso de tecnología influyó en el diseño de productos más inclusivos.

Su trabajo doctoral en el Art Institute de San Francisco se centró en la intersección entre tecnología, arte y diseño de experiencias. Laurel ha sido profesora en varias universidades prestigiosas y continúa siendo una voz influyente en temas de diseño inclusivo y experiencias inmersivas.`,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/brenda-laurel/',
    portfolioUrl: 'https://www.brendalaurel.com/',
    contributions: [
      'Teoría de "Computers as Theatre"',
      'Pionera en diseño inclusivo',
      'Investigación en género y tecnología',
      'Fundadora de Purple Moon',
      'Metodología de narrative design'
    ],
    keyWork: 'Computers as Theatre',
    yearActive: '1976-presente',
    nationality: 'Estados Unidos',
    category: 'researchers',
    awards: [
      'Rockefeller Fellowship',
      'Honorary Doctorate from Art Institute of San Francisco',
      'Women in Games Lifetime Achievement Award'
    ],
    quotes: [
      'La interfaz de usuario debería desaparecer, permitiendo que las personas trabajen directamente con la información y las tareas.',
      'El diseño no es solo sobre cómo se ve algo, sino sobre cómo funciona y cómo se siente.'
    ]
  },
  {
    id: '6',
    name: 'Bill Moggridge',
    role: 'Padre del Interaction Design',
    company: 'IDEO',
    bio: 'Acuñó el término "Interaction Design" y fue cofundador de IDEO. Diseñador de la primera laptop comercial y líder en metodología de design thinking.',
    detailedBio: `Bill Moggridge fue instrumental en establecer el diseño de interacción como una disciplina profesional. Como cofundador de IDEO, ayudó a crear una de las consultoras de diseño más influyentes del mundo, conocida por su enfoque en design thinking y innovación centrada en el usuario.

Moggridge diseñó la primera laptop comercial, la GRiD Compass, en 1982, estableciendo muchos de los patrones de interacción que utilizamos hoy en dispositivos portátiles. Su trabajo combinó diseño industrial con diseño de experiencias, creando productos que eran tanto funcionalmente superiores como estéticamente atractivos.

Como director del Cooper-Hewitt National Design Museum, Moggridge promovió la importancia del diseño en la vida cotidiana y ayudó a elevar el perfil público del diseño como disciplina. Su libro "Designing Interactions" documenta la evolución del campo y las historias detrás de productos icónicos.`,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/bill-moggridge/',
    portfolioUrl: 'https://www.ideo.com/',
    contributions: [
      'Acuñó el término "Interaction Design"',
      'Cofundador de IDEO',
      'Diseñador de la primera laptop (GRiD Compass)',
      'Metodología de design thinking',
      'Pionero en diseño de productos digitales'
    ],
    keyWork: 'Designing Interactions',
    yearActive: '1969-2012',
    nationality: 'Reino Unido',
    category: 'designers',
    awards: [
      'Royal Designer for Industry',
      'Prince Philip Designers Prize',
      'Cooper-Hewitt National Design Award'
    ],
    quotes: [
      'El diseño de interacción es sobre crear experiencias útiles, utilizables y deseables.',
      'La tecnología no es nada. Lo importante es que tengas fe en la gente, que sean básicamente buenas e inteligentes.'
    ]
  }
]

export const GET = async () => {
  return NextResponse.json({
    pioneers,
    totalPioneers: pioneers.length,
    categories: [
      { id: 'all', name: 'Todos los Pioneros' },
      { id: 'founders', name: 'Fundadores' },
      { id: 'researchers', name: 'Investigadores' },
      { id: 'designers', name: 'Diseñadores' },
      { id: 'engineers', name: 'Ingenieros' }
    ]
  })
}