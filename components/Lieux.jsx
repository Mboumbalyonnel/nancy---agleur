import styles from './Lieux.module.css';

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="1" width="2" height="12" rx="1" fill="white"/>
    <rect x="1" y="5" width="12" height="2" rx="1" fill="white"/>
  </svg>
);

const MusicIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10.5V3.5L12 2V9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="3.5" cy="10.5" r="1.5" fill="white"/>
    <circle cx="10.5" cy="9" r="1.5" fill="white"/>
  </svg>
);

const DressIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2L3 6H6L4.5 14H11.5L10 6H13L11 2C10 3.5 6 3.5 5 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
  </svg>
);

const lieux = [
  {
    icon: <CrossIcon />,
    badge: 'Cérémonie religieuse',
    name: 'Église Anglicane de Tunis',
    subtitle: 'St Georges Anglican Church',
    address: 'Tunis, Tunisie',
    time: 'Samedi 4 juillet 2026 · 11h00',
    dresscode: 'Blanc & Bleu ciel',
    mapUrl: 'https://maps.app.goo.gl/LkmgWjRgCWGy3ssh6',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.4!2d10.1815!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0x1a1c1c1c1c1c1c1c!2sSt+Georges+Anglican+Church!5e0!3m2!1sfr!2stn!4v1620000000000',
    image: '/images/im5.jpg',
  },
  {
    icon: <MusicIcon />,
    badge: 'Soirée & Réception',
    name: 'Salle Zitouna',
    subtitle: 'Sis à Ibn Khaldoun',
    address: 'Tunis, Tunisie',
    time: 'À partir de 18h00',
    dresscode: 'Chic & Élégant (pas de couleur exigée)',
    mapUrl: 'https://maps.app.goo.gl/WjBSC4UXikma5wzx6',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.4!2d10.18!3d36.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSalle+Zitouna!5e0!3m2!1sfr!2stn!4v1620000000000',
    image: 'https://macvniqzcxgpeqeoyifh.supabase.co/storage/v1/object/public/logo/mrj.jpeg',
  },
];

export default function Lieux() {
  return (
    <section className={`section ${styles.lieux}`} id="lieux">
      <p className="section-label">Adresses</p>
      <h2 className="section-title">Les lieux</h2>

      <div className="divider">
        <span className="divider-line" />
        <span className="divider-diamond" />
        <span className="divider-line" />
      </div>

      <div className={styles.grid}>
        {lieux.map((l, i) => (
          <div key={i} className={styles.card}>

            <div className={styles.cardVisual}>
              <img src={l.image} alt={l.name} className={styles.cardImg} />
              <div className={styles.cardVisualOverlay} />
              <span className={styles.badge}>
                {l.icon}
                {l.badge}
              </span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.name}>{l.name}</h3>
              <p className={styles.subtitle}>{l.subtitle}</p>

              <div className={styles.meta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Adresse</span>
                  <span className={styles.metaValue}>{l.address}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Horaire</span>
                  <span className={styles.metaValue}>{l.time}</span>
                </div>
              </div>

              <div className={styles.dresscode}>
                <div className={styles.dresscodeHeader}>
                  <DressIcon />
                  <span className={styles.dresscodeLabel}>Dress code</span>
                </div>
                <p className={styles.dresscodeValue}>{l.dresscode}</p>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={l.mapEmbed}
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Carte ${l.name}`}
                />
              </div>

              <a
                href={l.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                Ouvrir dans Google Maps
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}