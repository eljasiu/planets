import { useLocation } from "react-router-dom";
import data from '../data';
import Planet from '../interfaces/planet';

export default function usePlanet(): Planet{
    const location = useLocation();

    const planet = data.filter((planet) => {
        return planet.name.toLowerCase() === location.pathname.slice(1, location.pathname.length);
    })[0];

    return planet ? planet : data[0];
}