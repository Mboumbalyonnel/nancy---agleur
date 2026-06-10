'use client';
import { useState } from 'react';
import tables from '../data/tables';
import styles from './Tables.module.css';

export default function Tables() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

  const q = query.trim().toLowerCase();

  const results = q
    ? tables.filter((t) =>
        t.names.some((n) => n.toLowerCase().includes(q))
      )
    : [];

  const handleSearch = () => setSearched(true);

  return (
    <section className={`section ${styles.tables}`} id="tables">

      <div className={styles.hero}>
        <p className={styles.label}>Plan de salle</p>
        <h2 className={styles.title}>Votre place</h2>
        <p className={styles.intro}>
          Entrez votre nom ou prénom pour découvrir votre table
        </p>
      </div>

      <div className={styles.searchBlock}>
        <div className={styles.searchWrap}>
          <input
            className={styles.input}
            type="text"
            placeholder="Rechercher votre nom ou prénom…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSearched(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {query && (
            <button className={styles.clear} onClick={() => { setQuery(''); setSearched(false); }}>✕</button>
          )}
        </div>
        <button className={styles.searchBtn} onClick={handleSearch}>
          Rechercher
        </button>
      </div>

      {searched && q && results.length === 0 && (
        <p className={styles.msgError}>Aucun résultat — vérifiez l'orthographe</p>
      )}

      {searched && results.length > 0 && (
        <div className={styles.results}>
          {results.map((t) => {
            const matchedNames = t.names.filter((n) => n.toLowerCase().includes(q));
            const otherNames = t.names.filter((n) => !n.toLowerCase().includes(q));

            return (
              <div key={t.num} className={styles.resultCard}>

                <div className={styles.resultTop}>
                  <div className={styles.tableNumWrap}>
                    <span className={styles.tableNumLabel}>Table</span>
                    <span className={styles.tableNum}>{String(t.num).padStart(2, '0')}</span>
                  </div>
                  {t.city && (
                    <span className={styles.tableCity}>{t.city}</span>
                  )}
                </div>

                <div className={styles.resultBody}>
                  <div className={styles.matched}>
                    {matchedNames.map((name, i) => (
                      <span key={i} className={styles.matchedName}>{name}</span>
                    ))}
                  </div>

                  {otherNames.length > 0 && (
                    <div className={styles.companions}>
                      <p className={styles.companionsLabel}>Vos voisins de table</p>
                      <ul className={styles.companionsList}>
                        {otherNames.map((name, i) => (
                          <li key={i} className={styles.companionName}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}