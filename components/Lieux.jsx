import styles from './Lieux.module.css';

const lieux = [
  {
    badge: 'Cérémonie religieuse',
    name: 'Église Anglicane de Tunis',
    subtitle: 'St Georges Anglican Church',
    address: 'Tunis, Tunisie',
    time: 'Samedi 4 juillet 2026 · 11h00',
    dresscode: 'Blanc & Bleu ciel',
    mapUrl: 'https://maps.app.goo.gl/LkmgWjRgCWGy3ssh6',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.4!2d10.1815!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0x1a1c1c1c1c1c1c1c!2sSt+Georges+Anglican+Church!5e0!3m2!1sfr!2stn!4v1620000000000',
    image: '/images/im5.JPG',
  },
  {
    badge: 'Soirée & Réception',
    name: 'Salle Zitouna',
    subtitle: 'Sis à Ibn Khaldoun',
    address: 'Tunis, Tunisie',
    time: 'À partir de 18h00',
    dresscode: 'Chic & Élégant (pas de couleur exigée)',
    mapUrl: 'https://maps.app.goo.gl/WjBSC4UXikma5wzx6',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.4!2d10.18!3d36.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSalle+Zitouna!5e0!3m2!1sfr!2stn!4v1620000000000',
    image: null,
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
              {l.image
                ? <img src={l.image} alt={l.name} className={styles.cardImg} />
                : <div className={styles.cardImgPlaceholder} />
              }
              <div className={styles.cardVisualOverlay} />
              <span className={styles.badge}>{l.badge}</span>
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
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Dress code</span>
                  <span className={styles.metaValue}>{l.dresscode}</span>
                </div>
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