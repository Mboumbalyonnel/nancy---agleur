import styles from './Programme.module.css';

const ceremonie = [
  { time: '11h00', event: 'Arrivée et installation des invités' },
  { time: '12h00', event: 'Arrivée des autorités religieuses' },
  { time: '12h15', event: 'Arrivée des mariés' },
  { time: '12h20', event: 'Cérémonie' },
  { time: '14h00', event: 'Photos avec les mariés' },
];

const soiree = [
  { time: '18h00', event: 'Retrouvailles à la salle' },
  { time: '18h30', event: 'Soirée dansante' },
  { time: '23h30', event: 'Fin de la soirée' },
];

export default function Programme() {
  return (
    <section className={`section ${styles.prog}`} id="programme">
      <p className="section-label">Déroulé de la journée</p>
      <h2 className="section-title">Programme</h2>

      <div className={styles.columns}>

        <div className={styles.block}>
          <div className={styles.blockHeader}>
            <span className={styles.blockIcon}>✝</span>
            <h3 className={styles.blockTitle}>Union Religieuse</h3>
            <p className={styles.blockSub}>Église Anglicane de Tunis</p>
          </div>
          <ol className={styles.timeline}>
            {ceremonie.map((s, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.time}>{s.time}</span>
                <strong className={styles.event}>{s.event}</strong>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.separator} />

        <div className={styles.block}>
          <div className={styles.blockHeader}>
            <span className={styles.blockIcon}>♪</span>
            <h3 className={styles.blockTitle}>Soirée</h3>
            <p className={styles.blockSub}>Salle Zitouna · Ibn Khaldoun</p>
          </div>
          <ol className={styles.timeline}>
            {soiree.map((s, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.time}>{s.time}</span>
                <strong className={styles.event}>{s.event}</strong>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}