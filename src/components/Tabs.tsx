import useDimensions from '../hooks/useDimensions';
import usePlanet from '../hooks/usePlanet';
import Planet from '../interfaces/planet';
import styles from '../styles/Tabs.module.css';

interface TabsProps {
    tab: number,
    setTab: React.Dispatch<React.SetStateAction<number>>
}

function Tabs({ tab, setTab }: TabsProps){
    const planet: Planet = usePlanet();
    const { width } = useDimensions();

    return (
        <ul className={`${styles.tabs}`}>
            <li className={`${styles.tabOption} ${styles[planet.name.toLowerCase()]} ${tab === 0 ? styles.active : ''}`} onClick={() => setTab(0)}>
                {width >= 550 ? <p><span>01</span>Overview</p> : <p>Overview</p>}
            </li>
            <li className={`${styles.tabOption} ${styles[planet.name.toLowerCase()]} ${tab === 1 ? styles.active : ''}`} onClick={() => setTab(1)}>
            {width >= 550 ? <p><span>02</span>Internal structure</p> : <p>Structure</p>}
            </li>
            <li className={`${styles.tabOption} ${styles[planet.name.toLowerCase()]} ${tab === 2 ? styles.active : ''}`} onClick={() => setTab(2)}>
            {width >= 550 ? <p><span>03</span>Surface geology</p> : <p>Surface</p>}
            </li>
        </ul>
    )
}

export default Tabs;