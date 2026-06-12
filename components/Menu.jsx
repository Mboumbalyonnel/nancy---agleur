import styles from './Menu.module.css';

const menu = [
  {
    category: 'Entrée',
    note: 'au choix',
    items: ['Salade 1', 'Salade 2'],
  },
  {
    category: 'Légumes',
    note: 'au choix',
    items: ['Aubergines à l \' oseille', 'Feuilles de manioc au maquereau fumé'],
  },
  {
    category: 'Poulet',
    note: 'au choix',
    items: ['Poulet mayo', 'Tchiep poulet'],
  },
  {
    category: 'Accompagnement',
    note: 'au choix',
    items: ['Riz rouge', 'Riz blanc'],
    extras: [{ label: 'Pomme de terre', note: 'en supplément' }],
  },
  {
    category: 'Dessert',
    note: '',
    items: ['Pièce montée'],
  },
  {
    category: 'Boissons',
    note: '',
    items: ['Eau', 'Jus de fruit', 'Soda', 'Jus de bissap'],
  },
];

export default function Menu() {
  return (
    <section className={`section ${styles.menu}`} id="menu">
      <p className="section-label">Le repas</p>
      <h2 className={styles.title}>Menu</h2>

      <div className={styles.rule} />

      <div className={styles.grid}>
        {menu.map((cat, i) => (
          <div key={i} className={`${styles.card} ${cat.items.length === 1 ? styles.cardSingle : ''}`}>
            <div className={styles.cardTop}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.cardHeader}>
                <span className={styles.catName}>{cat.category}</span>
                {cat.note && <span className={styles.catNote}>{cat.note}</span>}
              </div>
            </div>

            <ul className={styles.items}>
              {cat.items.map((item, j) => (
                <li key={j} className={styles.item}>{item}</li>
              ))}
            </ul>

            {cat.extras && cat.extras.length > 0 && (
              <ul className={styles.items}>
                {cat.extras.map((extra, j) => (
                  <li key={j} className={`${styles.item} ${styles.itemExtra}`}>
                    {extra.label}
                    {extra.note && <span className={styles.extraNote}> — {extra.note}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}