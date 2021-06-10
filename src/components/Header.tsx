import { useState } from 'react';
import styles from '../styles/Header.module.css';

interface HeaderProps {}

function Header(props: HeaderProps){
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>The Planets</h1>
                <div className={styles.toggleMenu} onClick={() => setShowMenu(prev => !prev)}>
                    <div className={`${styles.hamburger} ${showMenu ? styles.open : ''}`} ></div>
                </div>
            </div>
            <nav className={styles.nav}>

            </nav>
        </header>
    )
}

export default Header;