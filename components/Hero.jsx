'use client';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const BG_SLIDES = ['/images/im1.jpeg', '/images/im2.jpeg'];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BG_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className={styles.hero} id="top">

        <div className={styles.bgWrap}>
          {BG_SLIDES.map((src, i) => (
            <div
              key={i}
              className={`${styles.bgSlide} ${i === current ? styles.bgActive : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className={styles.bgOverlay} />
        </div>

        <span className={`${styles.corner} ${styles.tl}`} />
        <span className={`${styles.corner} ${styles.tr}`} />
        <span className={`${styles.corner} ${styles.bl}`} />
        <span className={`${styles.corner} ${styles.br}`} />

        <h1 className={styles.names}>
          Nancy
          <span className={styles.amp}>&amp;</span>
          Agleur
        </h1>


        <p className={styles.tagline}>
          Chers invités,<br />
          Nous sommes profondément heureux de vous compter parmi les personnes qui partageront ce moment unique de notre vie. Ce site a été conçu pour vous accompagner avant et pendant notre mariage : vous y trouverez le programme de la journée ainsi que toutes les informations pratiques nécessaires.
        </p>

        <blockquote className={styles.verse}>
          « Si l'Éternel ne bâtit la maison,<br />
          ceux qui la bâtissent travaillent en vain… »
          <cite>— Psaume 127 : 1</cite>
        </blockquote>

        <div className={styles.dots}>
          {BG_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

        <a href="#savethedate" className={styles.scroll}>↓ Découvrir</a>
      </section>

      {/* ── Save the Date ── */}
      <section className={styles.std} id="savethedate">

        <p className={styles.stdLabel}>Save the Date</p>

        <div className={styles.stdPhotos}>
          {/* Photo principale im3 — forme normale */}
          <div className={styles.stdPhotoMain}>
            <img src="/images/im3.jpeg" alt="Nancy & Agleur" />
          </div>

          {/* Photo im4 — cercle */}
          <div className={styles.stdPhotoCircle}>
            <img src="/images/im4.jpeg" alt="Agleur" />
          </div>
        </div>

        <p className={styles.stdDate}>Samedi 4 Juillet 2026 · Tunis, Tunisie</p>

        <blockquote className={styles.stdVerse}>
          « Il a fait toutes choses belles en son temps... » <br />
          <cite>— Ecclésiaste 3 : 11</cite>
        </blockquote>

      </section>
    </>
  );
}