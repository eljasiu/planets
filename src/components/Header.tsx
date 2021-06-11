import { useState } from 'react';
import Planet from '../interfaces/planet';
import styles from '../styles/Header.module.css';


interface HeaderProps {
    data: Planet[]
}

function Header({ data }: HeaderProps){
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>The Planets</h1>
                <div className={styles.toggleMenu} onClick={() => setShowMenu(prev => !prev)}>
                    <div className={`${styles.hamburger} ${showMenu ? styles.open : ''}`} ></div>
                </div>
            </div>
            <nav className={`${styles.nav} ${showMenu ? styles.navOpen : ''}`}>
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

            <section style={{color: '#f0ffff'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo temporibus nisi laboriosam sapiente expedita praesentium ut labore quae molestias cumque? Harum, doloremque mollitia architecto perspiciatis, eos eius eligendi corrupti, distinctio unde modi est dolore quae facilis consequuntur numquam placeat molestiae sequi! Blanditiis accusamus voluptatum ipsum adipisci commodi porro est nulla nihil possimus in fuga ullam reiciendis vitae fugiat eius voluptates sed minus, tempore aliquam esse maxime repellat inventore. Voluptas quis dignissimos magni, pariatur id eligendi fugit laudantium ea iste, doloremque molestias officia possimus. Delectus aspernatur, dolore tempore qui fuga consequuntur, suscipit doloribus enim illo provident recusandae accusantium veritatis praesentium tenetur?</section>

        </header>
    )
}

export default Header;