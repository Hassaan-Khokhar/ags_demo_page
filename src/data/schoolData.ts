import {
  HeroSlide,
  StatItem,
  AdvantageCard,
  FacultyMember,
  GalleryItem,
  EventItem,
  AcademicProgram,
} from '../types';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAYuUvkJaTXUeX4YF4XGyvdeblXlDPZ2dbiqBvgEcr19HFd4jvqUTIAI5wUZngX5M4WpgURS8WlayGJL039kEJb1rtMtyQLmnIw4yyi_QVWjhQXmGI20vbpWgEw4K0xa9tcanWpu6wGUat_J2m-GVV2oTYiD6VNG0krswNzzxUBdIcz92hEPhiw5WfWo-rQDk6IlaVASBq5QgsPBdy1uUjsebgZ5Ke6--LDFiyW6EeHYSPZFsZKEIc0arsKI3lAp0uOby-LU-25ajQ';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: 'Excellence Since 1998',
    titleLine1: 'Empowering Minds,',
    titleHighlight: 'Future',
    description:
      'Join a legacy of academic brilliance. Arqam Grammar Schools offers a holistic curriculum designed to foster critical thinking, leadership, and moral integrity.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwly4K8_WSWseSuZcUBnxJ90Y7x_3k7XWACTpSLp5PV_n58p_H5ZMOWETsrA3mXkONPkZHjVVC9_MozCBAlJUe5ILCP_Camu2x8-XkQnWctiy3-ezNzdc5gjLhuRig_z5eibrKxJYhZOCCd8Qtz1iQ4YKkGfbS-rIYt7Xa6OyKTgdF0bs6Zs5aKL-fj8Nl7PgtJ9eWsJULTemOqYadQ96tZ96AiNmHjFlYW4ibAeg_vdhKBnQqoVBBNb-cx0bjD9WQ3FYd7UDIw4k',
    ctaPrimaryText: 'Discover Our Curriculum',
    ctaSecondaryText: 'Schedule a Tour',
  },
  {
    id: 2,
    badge: 'Innovating Education',
    titleLine1: 'World-Class Learning,',
    titleHighlight: 'Leadership',
    description:
      'State-of-the-art computer labs, advanced robotics, STEAM programs, and inspiring classrooms tailored for modern world challenges.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDe8iU2Jufx_umYIdfQZcLTymoi4AkL1cmZyQaYid7gl-1LBZuI-x6a7dCeErGMj1R2NPvDdsONcXaRhNQsBGjhx3Oe95QkCSwfYQtWAbFgzmTIMhLfoztgvd3LstivqF1N5i3d_1PiFM3GtGEfgGlvXIjfZ8ZeIVIAXdUWVQWBBBaJ8V496FbVIazBi12z22iUV1J4jLbKEcPXH0EhR-jQpPbJLlQ6EcGyBzkh7-XkN6vWirRsoUi6-ZPHgW3ZbVA0cOnl40zqf7o',
    ctaPrimaryText: 'Explore Campus Life',
    ctaSecondaryText: 'Apply For Admission',
  },
  {
    id: 3,
    badge: 'Holistic Development',
    titleLine1: 'Nurturing Character,',
    titleHighlight: 'Integrity',
    description:
      'Beyond traditional textbooks—developing empathetic, resilient citizens with over 40 active extracurricular clubs, debate teams, and athletic programs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_9b0AT1C1eHAFk_LklXe9uJtQIfaZpVMTklQIlF5YU6beRjLWDD02Q_72L26F4Iv0FASNRebZY7Ca9a-j43JMJYJGJ1SJox_BqP4RvLk1AidKTzGtU1AqBEpb0C7FahXHFPDV_55t--zyPmKQ9z-kedGg2yJcTRVcE3UCTfL4YJGjWCSBj1JztjrO00vasC1XbytPW4ekX1o8_OZI0ci5KMi1DlFzMQo2qE8UrjrjMuo7yW9dmDMRMcQF2uUzFwdhIHq8ZZWcmzE',
    ctaPrimaryText: 'Meet Our Faculty',
    ctaSecondaryText: 'Contact Admissions',
  },
];

export const STATS: StatItem[] = [
  { number: '25', suffix: '+', label: 'Years of Excellence' },
  { number: '5000', suffix: '+', label: 'Global Alumni' },
  { number: '100', suffix: '%', label: 'Board Pass Rate' },
  { number: '40', suffix: '+', label: 'Extracurriculars' },
];

export const ADVANTAGES: AdvantageCard[] = [
  {
    id: 'curriculum',
    icon: 'school',
    title: 'Holistic Curriculum',
    description:
      'Our syllabus goes beyond textbooks, integrating STEAM, arts, and character education to prepare students for the complexities of the modern world.',
    fullContent:
      'The Arqam curriculum combines rigorous Cambridge-aligned and local board academic frameworks with hands-on coding, environmental research, public speaking, and ethical leadership workshops.',
    colorTheme: 'primary',
  },
  {
    id: 'faculty',
    icon: 'groups',
    title: 'Expert Faculty',
    description:
      'Learn from seasoned educators dedicated to nurturing individual potential through personalized attention and innovative teaching methodologies.',
    fullContent:
      'With an average student-to-teacher ratio of 15:1, our masters and PhD holding faculty members serve as mentors, guides, and career counselors.',
  colorTheme: 'secondary',
  },
  {
    id: 'campus',
    icon: 'apartment',
    title: 'State-of-the-Art Campus',
    description:
      'Experience learning in modern classrooms, advanced science & computer labs, and extensive sports facilities designed for comprehensive development.',
    fullContent:
      'Features air-conditioned smart classrooms, fiber-optic internet labs, a 500-seat auditorium, Olympic-standard indoor sports complex, and an expansive art gallery space.',
    colorTheme: 'primary',
  },
];

export const DIRECTOR_DATA = {
  name: 'Adv. Saif Ur Rehman Babar',
  role: 'SCHOOL DIRECTOR',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDuKMCJA1my0QXBAP_4xdXh50teSSYpGgj_gl7qaE-towMOJjlbO_6dpJNZk8zgvae0vOsWXRlT2cnaGjoI8g0CbUucl9-1UQd2ERZkm-JXoMN8JNeHPlA3uPugSSqDBrfhOhA_k9qMQ8PHq9a4Yp_Ae-heCw2rp8hp7e_D2J9ZzGU8EOCbNEIN-FsfDpalHwGdJqPZchUiFxR4fp_EWnx4Z5VYcoG6k50acJbEMQ4UYXSo551OBKIwjkbJgPMBXgCKAXMYgQaxIRg',
  quote:
    '"Education is not just about imparting knowledge; it is about inspiring a lifelong love for learning and cultivating the values that make a true global citizen."',
  fullMessage: `At Arqam Grammar Schools, our mission extends beyond academic scores. For over a quarter of a century, we have championed an educational philosophy rooted in moral integrity, intellectual rigor, and visionary leadership.

We empower our students to think critically, question courageously, and act compassionately. Our faculty and staff work tirelessly to create an inclusive environment where every child discovers their unique talents and develops the confidence to shape the future positively.

I invite parents, guardians, and prospective students to tour our campus, meet our dedicated educators, and witness firsthand the vibrant learning community at Arqam Grammar Schools.`,
};

export const FACULTY: FacultyMember[] = [
  {
    id: 'dr-jenkins',
    name: 'Zaheer ul Hassan',
    role: 'Vice Principal | Physics Teacher',
    image:
      'https://arqamgrammarschools.edu.pk/storage/images/YhsKvwkMRtzw2v3dyUWmakYJqjbbDizg0H8DjMSP.png',
    bio: 'Leading our Advanced Physics and Molecular Biology research lab for 12 years with a passion for student STEM discovery.',
    education: 'Ph.D. in Physics, Oxford University',
    experience: '14+ Years in Secondary & Advanced Higher Education',
    email: 'sarah.jenkins@arqamgrammar.edu',
  },
  {
    id: 'mr-chen',
    name: 'Shah Faisal Shah',
    role: 'Computer Science Teacher',
    image:
      'https://arqamgrammarschools.edu.pk/storage/images/teDlMEldAVuGG0sXrKaQLQdY69vZKmRqZd2BOYPk.png',
      bio: 'International Math Olympiad coach specializing in Calculus, Probability, and algorithmic problem-solving.',
    education: 'M.Sc. Applied Mathematics, MIT',
    experience: '10+ Years Teaching Calculus & Algebra',
    email: 'david.chen@arqamgrammar.edu',
  },
  {
    id: 'ms-roberts',
    name: 'Qamar Abbas',
    role: 'Urdu Teacher',
    image:
      'https://arqamgrammarschools.edu.pk/storage/images/PbVqIALYf8eNhcx3R72K2CXC8TqrM65ihL5KsdkW.png',
    bio: 'Director of the Arqam Drama Society and English Literature program, encouraging expressive storytelling and critical literary critique.',
    education: 'M.A. English Literature, Cambridge University',
    experience: '8+ Years in Creative Writing & Humanities',
    email: 'emily.roberts@arqamgrammar.edu',
  },
  {
    id: 'mr-wilson',
    name: 'Sikandar Abbas',
    role: 'History Teacher',
    image:
      'https://arqamgrammarschools.edu.pk/storage/images/glTYgollYV0x2DUe42q7ZmaWvf5dnK0zvFrwL5HN.png',
    bio: 'Former national athlete leading our athletics, football, and swimming academy with focus on teamwork and endurance.',
    education: 'B.S. Sports Science & Physical Health',
    experience: '11+ Years Athletic Coaching & Mentorship',
    email: 'james.wilson@arqamgrammar.edu',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Fine Art & Student Design Exhibition',
    category: 'Arts & Culture',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_9b0AT1C1eHAFk_LklXe9uJtQIfaZpVMTklQIlF5YU6beRjLWDD02Q_72L26F4Iv0FASNRebZY7Ca9a-j43JMJYJGJ1SJox_BqP4RvLk1AidKTzGtU1AqBEpb0C7FahXHFPDV_55t--zyPmKQ9z-kedGg2yJcTRVcE3UCTfL4YJGjWCSBj1JztjrO00vasC1XbytPW4ekX1o8_OZI0ci5KMi1DlFzMQo2qE8UrjrjMuo7yW9dmDMRMcQF2uUzFwdhIHq8ZZWcmzE',
  },
  {
    id: 'g2',
    title: 'Central Atrium & Collaborative Learning Commons',
    category: 'Campus Facilities',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFcx8FCfOS5oWhA-guBwHan6rQ84yZX_1NK5ESSr6mP2_UEJUnswqX3frctPLkoYBXhreE75QJgAONnKH7-BoRC7K8y6iP5lRN4eaOuXuQg0Qc1uMleKCxT1WhRf1N5s2JMlWOuxmDn-Ye57PuSIp2CK7Ski3kJT5TQHwH-9EVpjTcChN_zazc04v7bn_CuFKs3OFADMwQj6eDv7SpytJCPF6S6diniG_6AdgF4u3nMBTZSmoWKprGOLfaui83F0sc_MJyUys1VT8',
  },
  {
    id: 'g3',
    title: 'Interactive Science Symposium & Poster Gallery',
    category: 'Academics',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqSI10ytmmTsN2HvRQ6fX21-pJE2cSdYB-hC9XDEdOwdL-oNqTc5trOsHFDbvGBxTm4fAvNxSeBQtK_tViR7BM116qcdCbWXttYQKBV-cY-jKGwUWAAUUln9Q3m2xpBQVj-VvCOokjatXjWUcAgG7R3naE4-gPC73k7YtAFBX9o1whWpWU8f58shKdAj5llymCK16rbzKofJ-jKrOe2cTKWmYimQToHK5KddHN5X02ssvMUTxUwoAcLbvMactjlDjuUTSY5Z2tYLY',
  },
  {
    id: 'g4',
    title: 'Annual Student Painting & Canvas Showcase',
    category: 'Arts & Culture',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqY-A2x4kjNw3LfcppDArh0NwX3QZYfZfgj4ragMxFsP4BvtXfMJns1JQ9sshhsnfas35MYTUIgUe-q69bPQnSoYPiWeodVxp_0rxaPmv2fnPKmlTlO8CiaUoJK9TrCDPJ1MhA-SNDAIcRDgN7sNlpjL22y7_d3F1w0RR6scO23qoSNmkgeIpSEncY-BfATw_mv16bPp47SRPfmY3a52Wv69PJzGtG6r9qhiSh_edeZkQKkXAUvANKzivcZ1rLp2OmuOTKKFrhm1M',
  },
  {
    id: 'g5',
    title: 'Inspirational Sculpture & Design Workshop',
    category: 'Campus Facilities',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1zNN7vdfUV3CExfSk16aXMfPO9aSxLnlu1r-pnFokUfjHzYF1C_1HfKuMYIU745bPLgwHuBiv_CD3wYVRlOHsVjVYKWCnJz0Tlr53L-ejIfirgXjRAe3dqhwl-T7M0yF82xaDW_dJxh9DG_OU8_dn5F6VaCv1I-04sDU2S_EpHpCDo4byKJitHUnyA3WtNvbbkO0RrMdvZiR8hLQ4DDffjBiPILETpiIxaWJsrFA_KhI4FJTM3HGtvefVU6CYXuX3v0N9DQEUzFo',
  },
  {
    id: 'g6',
    title: 'Contemporary Geometric Art Installation',
    category: 'Student Life',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPLeVne68HA6j2Snyt1AEgc14IlZioNuAitml-ekuz8IJCTm38_p_7U7djJSz98jCSUEvt4Xq7XHSolJGgMniqrRUAee0XyCd5KWYyFAsfy35xu2gtZisGTbWQb0KGQwjA2hhSsZhRdP3fcUSySQ24X8PgC3xMhNO2znK1JGnp_IwPIAH2NcmmwNLKN2YlHiWN7gLbzHhKSgJji8tAvTw7B5oETwY14QMyNO75XZKT5_eJcnGcPcfrNopAUsBQ4yJy_pUj11PNgP4',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'preschool',
    title: 'Pre-School Foundation',
    grades: 'Ages 3 - 5',
    description:
      'Play-based learning emphasizing sensory exploration, emotional development, foundational literacy, and social cooperation.',
    subjects: ['Early Numeracy', 'Phonics & Literacy', 'Creative Arts', 'Motor Skills'],
    features: ['Montessori-inspired activity areas', 'Dedicated early years play garden', 'Regular parent observation days'],
  },
  {
    id: 'middle',
    title: 'Middle School Excellence',
    grades: 'Grades 6 - 8',
    description:
      'Building critical analytical skills, scientific inquiry, digital literacy, and collaborative teamwork across disciplines.',
    subjects: ['Mathematics & Logic', 'Integrated Science', 'World History', 'Computer Science', 'English Literature'],
    features: ['STEAM Lab projects', 'Inter-house debating society', 'Coding & Robotics introductory modules'],
  },
  {
    id: 'highschool',
    title: 'High School & O/A Levels',
    grades: 'Grades 9 - 12',
    description:
      'Rigorous pre-university preparation fostering academic specialization, university counseling, and ethical leadership.',
    subjects: ['Advanced Physics & Chemistry', 'Higher Mathematics', 'Economics & Accounting', 'Computer Science & AI', 'Global Perspectives'],
    features: ['1-on-1 Ivy League / Top University Guidance', 'Research journal publication mentorship', 'Leadership internships'],
  },
];
