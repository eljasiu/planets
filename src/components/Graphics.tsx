import styles from '../styles/Graphics.module.css';
import usePlanet from "../hooks/usePlanet";
import Planet from '../interfaces/planet';

const requestImageFile = require.context('../img', true);

interface GraphicsProps {
    tab: number
}

function Graphics({ tab }: GraphicsProps){
    let planet: Planet = usePlanet();

    if(tab === 1){
        return (
            <div className={styles.graphics}>
                <img className={styles.planetImg} src={requestImageFile(`./${planet.name.toLowerCase()}/structure.svg`).default} alt={planet.name} />
            </div>
        )
    }
    
    return (
        <div className={styles.graphics}>
            <img className={styles.planetImg} src={requestImageFile(`./${planet.name.toLowerCase()}/overview.svg`).default} alt={planet.name} />
            {tab === 2 && <img className={styles.planetSurfaceImg} src={requestImageFile(`./${planet.name.toLowerCase()}/geology.png`).default} alt={planet.name + 'surface structure'} />}
        </div>
    )
}

export default Graphics;