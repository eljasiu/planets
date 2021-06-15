import usePlanet from '../hooks/usePlanet';
import Planet from '../interfaces/planet';
import styles from '../styles/Info.module.css';

interface InfoProps {
    tab: number
}

function Info({ tab }: InfoProps){
    const planet: Planet = usePlanet();

    return (
        <div className={styles.info}>
            <h2 className={styles.planetName}>{planet.name}</h2>
            <p className={styles.paragraph}>
                {tab===0 && planet.overview}
                {tab===1 && planet.internalStructure}
                {tab===2 && planet.surfaceGeology}
            </p>
            <span className={styles.source}>
                Source: <a target="_blank" rel="noreferrer" href={planet.source}>Wikipedia</a>
            </span>
        </div>
    )
}

export default Info