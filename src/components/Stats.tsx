import usePlanet from '../hooks/usePlanet';
import Planet from '../interfaces/planet';
import styles from '../styles/Stats.module.css';

interface StatsProps {}

function Stats(props: StatsProps){
    const planet: Planet = usePlanet();

    return (
        <div className={styles.stats}>
            {planet.stats.map((stat, idx) => {
                return (
                    <p key={idx} className={styles.stat}>{stat.name} <span className={styles.statSpan}>{stat.value}</span></p>
                )
            })}
        </div>
    )
}

export default Stats;