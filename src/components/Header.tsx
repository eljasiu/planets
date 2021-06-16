import { useState } from 'react';
import Planet from '../interfaces/planet';
import styles from '../styles/Header.module.css';
import Hamburger from './Hamburger';
import Navigation from './Navigation';


interface HeaderProps {
    data: Planet[]
}

function Header({ data }: HeaderProps){
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>The Planets</h1>
                <Hamburger open={showMenu} toggler={setShowMenu}/>
            </div>
            <Navigation open={showMenu} data={data} toggler={setShowMenu}/>
        </header>
    )
}

export default Header;