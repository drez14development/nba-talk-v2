import styles from '../styles/Navbar.module.scss';
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link href="/">
        <a className={`navbar-brand ${styles.brand}`}>
            <img className={styles.brandImg} src="/nba-icon.png" alt="" />
            NBA Talk
        </a>
      </Link>
        <ul className="navbar-nav me-auto">
          <Link href="/new">
            <a className="nav-link">
              NEW-Post
            </a>
          </Link>
        </ul>
    </nav>
  );
}
