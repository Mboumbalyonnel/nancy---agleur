import styles from './Navbar.module.css';

const links = [
  { label: 'Accueil',    href: '#top' },
  { label: 'Programme & Menu',  href: '#programme' },
  { label: 'Lieux',      href: '#lieux' },
  { label: 'Dress Code', href: '#dresscode' },
  { label: 'Tables',     href: '#tables' },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {links.map((l) => (
        <a key={l.href} href={l.href} className={styles.item}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
