// React
import React, {
    useEffect,
    useState
} from 'react'
// Style
import style from './Header.module.scss'
import styled from 'styled-components'
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

    const [color, changeColor] = useState('white')

    const setColor = () => {
        if (window.scrollY > 100) {
            changeColor('#023872')
        }
        else {
            changeColor('white')
        }
    }

    useEffect(() => {
        Aos.init({ duration: 700 });
        // window.addEventListener('scroll', setColor)
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

    if (windowWidth <= 1024) {
        display = 'isMobile'
    }
    else {
        display = 'isDesktop'
    }


    const Burger = styled.div`
        height: 25px;
        width: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 11;
        position: absolute;
        right: 10px;
    `

    const BurgerItem = styled.div`
        transition: .2s;
        height: 5px;
        background-color: white;
        border-radius: 3px;
        border: 1px solid #023872;
        transform: ${props => props.active && props.role === 'roted1' ? 'translateY(10px) rotate(-45deg)' : null};
        transform: ${props => props.active && props.role === 'roted2' ? 'translateY(-10px) rotate(45deg)' : null};
        display: ${props => props.active && props.role === 'snitch' ? 'none' : 'block'};
    `

    return (
        <header className={style.header}>
            <Container>
                <div className={style.container}>
                    <div className={style.isDesk}>
                        <div className={style.logo}>
                            <NavLink to="/main">
                                <img src={logo} alt="Логотип" />
                            </NavLink>
                        </div>
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
                    </div>
                    <div className={style.isMobile}>
                        <div className={style.mobileHeader}>
                            <div className={style.logo}>
                                <NavLink to="/main">
                                    <img src={logo} alt="Логотип" />
                                </NavLink>
                            </div>
                            <Burger onClick={openBurger}>
                                <BurgerItem active={isBurgerOpened} role="roted1" />
                                <BurgerItem active={isBurgerOpened} role="snitch" />
                                <BurgerItem active={isBurgerOpened} role="roted2" />
                            </Burger>
                        </div>


                        {isBurgerOpened &&
                            <React.Fragment>
                                <nav className={style.burgerMenu}>
                                    <div>
                                        <form action="">
                                            <input className={style.burgerField} type="search" />
                                        </form>
                                        <ul className={style.navLinksContainer}>
                                            <li>
                                                <NavLink
                                                    className={style.navLink}
                                                    activeClassName={style.selected}
                                                    to="/"
                                                    onClick={openBurger}
                                                >
                                                    Главная
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={style.navLink}
                                                    activeClassName={style.selected}
                                                    to="/about"
                                                    onClick={openBurger}
                                                >
                                                    О компании
                                                    </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={style.navLink}
                                                    activeClassName={style.selected}
                                                    to="/industry"
                                                    onClick={openBurger}
                                                >
                                                    Отраслевые решения
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={style.navLink}
                                                    activeClassName={style.selected}
                                                    to="/equipment"
                                                    onClick={openBurger}
                                                >
                                                    Оборудование
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={style.navLink}
                                                    activeClassName={style.selected}
                                                    to="/contacts"
                                                    onClick={openBurger}
                                                >
                                                    Контакты
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.buttonContainer}>
                                        <TargetButton style={{
                                            border: '1px solid white',
                                            color: 'white',
                                            marginBottom: 20,
                                            minWidth: 100,
                                            width: 180
                                        }} tag="a" href="https://hosting.wialon.com/" target="_blank">
                                            Демо wialon
                                            </TargetButton>
                                        <TargetButton style={{
                                            border: '1px solid white',
                                            color: 'white',
                                            marginBottom: 20,
                                            minWidth: 100,
                                            width: 180
                                        }} tag="a" href="https://online.omnicomm.ru/" target="_blank">
                                            Демо omnicomm
                                        </TargetButton>
                                    </div>
                                </nav>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </Container>
        </header>
    )
}



export default Header