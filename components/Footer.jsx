import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.monogram}>
        <span className={styles.initial}>N</span>
        <span className={styles.sep}>&</span>
        <span className={styles.initial}>A</span>
      </div>

      <p className={styles.date}>04 · VII · MMXXVI · Tunis, Tunisie</p>

      <p className={styles.love}>Avec tout notre amour</p>
      <p className={styles.names}>Nancy & Agleur</p>

      <p className={styles.verse}>
        « Les grandes eaux ne peuvent éteindre l'amour, et les fleuves ne le submergeraient pas »
        <span className={styles.ref}>Cantique des Cantiques 8 · 7</span>
      </p>

    </footer>
  );
}