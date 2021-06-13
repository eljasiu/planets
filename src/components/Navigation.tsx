import styles from '../styles/Navigation.module.css';

import { Link } from 'react-router-dom';
import Planet from "../interfaces/planet";
import usePlanet from '../hooks/usePlanet';

interface NavigationProps {
    open: boolean,
    data: Planet[],
    toggler: (value: React.SetStateAction<boolean>) => void
}

function Navigation({ open, data, toggler }: NavigationProps){
    const planet: Planet = usePlanet();

    return (
        <nav className={`${styles.navigation} ${open ? styles.open : ''}`}>
            <ul className={styles.navList}>
                {data.map((item, idx) => {
                    return (
                        <Link key={idx} to={`/${item.name.toLowerCase()}`}>
                            <li className={`${styles.navItem} ${item.id === planet.id ? styles.active: ''} ${styles[`${item.name.toLowerCase()}`]}`} onClick={() => toggler(prev => !prev)}>
                                <span className={styles.navItemText}>{item.name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation;