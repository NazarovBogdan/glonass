// React
import React, {
    useEffect,
    useState
} from 'react'
// Style
import style from './Header.module.scss'
// RRD
import { NavLink } from 'react-router-dom'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import TargetButton from './../TargetButton/TargetButton'
import TargetLink from './../TargetLink/TargetLink'
import Container from './../Container/Container'
import Heading from '../Heading/Heading'
// Icons
import logo from './../../images/logo/logotype.svg'



function Header() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    const [isBurgerOpened, handleBurger] = useState(false)

    const openBurger = () => {
        if (isBurgerOpened) {
            document.body.style.overflow = 'scroll'
            handleBurger(false)
        }
        else {
            document.body.style.overflow = 'hidden'
            handleBurger(true)
        }
        console.log(isBurgerOpened);
    }

    let display = null
    let windowWidth = window.screen.width

    if (windowWidth < 769) {
        display = 'isMobile'
    }
    else if (windowWidth >= 769 && windowWidth < 1024) {
        display = 'isTablet'
    }
    else {
        display = 'isDesktop'
    }

    return (
        <header className={style.header}>
            <Container>
                <div className={style.container}>
                    <div className={style.logo}>
                        <NavLink to="/main">
                            <img src={logo} alt="Логотип" />
                        </NavLink>
                    </div>
                    {display === 'isDesktop' &&
                        <React.Fragment>
                            <div className={style.name}>
                                <h1>
                                    Глонасс-Регионы
                                </h1>
                                <p>
                                    Работаем по всей России
                                </p>
                            </div>
                            <form action="">
                                <input
                                    type="search"
                                    className={style.searchField}
                                />
                            </form>
                            <TargetButton tag="a" href="https://hosting.wialon.com/" target="_blank">
                                Демо wialon
                            </TargetButton>
                            <TargetButton tag="a" href="https://online.omnicomm.ru/" target="_blank">
                                Демо omnicomm
                            </TargetButton>
                            <TargetLink tag="a" href="tel:+78633226162">
                                +7 863 322-61-62
                            </TargetLink>
                        </React.Fragment>
                    }
                    {(display === 'isTablet' || display === 'isMobile') &&
                        <React.Fragment>
                            <button
                                className={style.burger}
                                onClick={openBurger}
                            />
                            {isBurgerOpened &&
                                <React.Fragment>
                                    <div className={style.background} onClick={openBurger} data-aos="fade" />
                                    <nav className={style.burgerMenu} data-aos="fade-left">
                                        <Heading>
                                            Контакты
                                            </Heading>
                                        <hr />
                                        <Heading>
                                            Навигация
                                            </Heading>
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
                                </React.Fragment>
                            }
                        </React.Fragment>
                    }
                </div>
            </Container>
        </header>
    )
}



export default Header