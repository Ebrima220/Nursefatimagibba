/**
 * Site-wide SEO & contact settings.
 * After you buy a domain, set VITE_SITE_URL in .env (see .env.example).
 */
export const SITE = {
  name: 'Fatima Gibba',
  credentials: 'RN, BSN',
  title: 'Fatima Gibba, RN | Registered Nurse Portfolio',
  description:
    'Fatima Gibba is a Registered Nurse (RN, BSN) in The Gambia offering compassionate patient care in psychiatric nursing, emergency care, and community health. View credentials, experience, and gallery.',
  keywords:
    'Fatima Gibba, registered nurse, RN, BSN, nursing portfolio, psychiatric nursing, emergency nursing, community health, The Gambia, Banjullinding, healthcare, patient care',
  locale: 'en_GM',
  email: 'fatimagibba432@email.com',
  phone: '+2205316067',
  location: 'Banjullinding, The Gambia',
  image: '/images/profile-image.jpeg',
  instagram: 'https://www.instagram.com/pha__gibba',
  whatsapp: 'https://wa.me/2206734922',
  /** Set via VITE_SITE_URL once your domain is live, e.g. https://fatimagibba.com */
  url: import.meta.env.VITE_SITE_URL || '',
}

export const PAGE_SEO = {
  home: {
    title: 'Fatima Gibba, RN | Registered Nurse Portfolio & CV',
    description:
      'Professional nursing portfolio of Fatima Gibba, RN, BSN — psychiatric care, emergency nursing, and community health experience in The Gambia.',
  },
  gallery: {
    title: 'Gallery | Fatima Gibba, RN — Clinical & Community Outreach',
    description:
      'Photo gallery of Fatima Gibba\'s clinical practice, ward rotations, school days, and community health outreach in The Gambia.',
  },
}
