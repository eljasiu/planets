import styles from '../styles/Navigation.module.css';

import Planet from "../interfaces/planet";

interface NavigationProps {
    open: boolean,
    data: Planet[]
}

function Navigation({ open, data }: NavigationProps){
    return (
        <nav className={`${styles.navigation} ${open ? styles.open : ''}`}>
            <ul>
                {data.map((item, idx) => {
                    return (
                        <li key={idx} className={styles.navItem}>
                            <div className={styles.bullet} style={{background: `${item.color}`}}></div>
                            <span className={styles.navItemText}>{item.name}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation;