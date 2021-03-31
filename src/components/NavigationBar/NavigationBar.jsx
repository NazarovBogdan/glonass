// Style
import style from './NavigationBar.module.scss'
// RRD
import { NavLink } from 'react-router-dom'
// React
import React, {
    useEffect,
    useState
} from 'react'



function NavigationBar(props) {
    const [bgColor, setColor] = useState('transparent')
    const [boxShadow, setShadow] = useState('none')

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setColor('white')
            setShadow('0 0 5px grey')
        }
        else {
            setColor('transparent')
            setShadow('none')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <nav className={style.navigationBar} style={{
            backgroundColor: bgColor,
            boxShadow: boxShadow
        }}>
            <ul className={style.navLinksContainer}>
                <li>
                    <NavLink
                        className={style.navLink}
                        activeClassName={style.selected}
                        to="/main"
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
                        to="/industry"
                    >
                        Отраслевые решения
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
                <li>
                    <input type="checkbox" className={style.input_nav} id="switch" onClick={props.onChangeTheme} /><label className={style.label_nav} for="switch">Toggle</label>
                </li>
            </ul>
        </nav>
    )
}



export default NavigationBar