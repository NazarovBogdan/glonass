// Style
import style from './NavigationBar.module.scss'
// RRD
import { NavLink } from 'react-router-dom'



function NavigationBar() {
    return (
        <nav className={style.navigationBar}>
            <ul className={style.navLinksContainer}>
                <li>
                    <NavLink
                        className={style.navLink}
                        activeClassName={style.selected}
                        to="/"
                    >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={style.navLink}
                        activeClassName={style.selected}
                        to="/about"
                    >
                        О компании
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={style.navLink}
                        activeClassName={style.selected}
                        to="/equipment"
                    >
                        Оборудование
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={style.navLink}
                        activeClassName={style.selected}
                        to="/contacts"
                    >
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}



export default NavigationBar