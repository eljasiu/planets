import styles from '../styles/Hamburger.module.css';

interface HamburgerProps{
    open: boolean,
    toggler: (value: React.SetStateAction<boolean>) => void
}

function Hamburger({ open, toggler }: HamburgerProps){
    return (
        <div className={styles.hamburgerContainer} onClick={() => toggler(prev => !prev)}>
            <div className={`${styles.hamburger} ${open ? styles.open : ''}`} ></div>
        </div>
    )
}

export default Hamburger;