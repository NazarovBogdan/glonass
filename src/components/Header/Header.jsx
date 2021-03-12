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
import burger from './../../images/icons/burger-icon.svg'



function Header() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    const [isBurgerOpened, handleBurger] = useState(false)

    const openBurger = () => {
        if (isBurgerOpened) {
            handleBurger(false)
        }
        else {
            handleBurger(true)
        }
        console.log(isBurgerOpened);
    }

    let display = null
    let windowWidth = window.screen.width

    if (windowWidth >= 320 && windowWidth < 760) {
        display = 'isMobile'
    }
    else if (windowWidth >= 760 && windowWidth < 1024) {
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
                        <NavLink to="/">
                            <img src={logo} alt="Логотип" />
                        </NavLink>
                    </div>
                    {display === 'isDesktop' &&
                        <React.Fragment>
                            <TargetLink>
                                +7 863 322-61-62
                            </TargetLink>
                            <TargetButton>
                                Заказать звонок
                            </TargetButton>
                            <TargetButton>
                                Демо wialon
                            </TargetButton>
                            <TargetButton>
                                Демо omnicomm
                            </TargetButton>
                            <form action="">
                                <input
                                    type="search"
                                    className={style.searchField}
                                />
                            </form>
                        </React.Fragment>
                    }
                    {display === 'isTablet' || display === 'isMobile' &&
                        <React.Fragment>
                            <button
                                className={style.burger}
                                onClick={openBurger}
                            />
                            {isBurgerOpened &&
                                <React.Fragment>
                                    <div className={style.background} onClick={openBurger} data-aos="fade">
                                        <nav className={style.burgerMenu} data-aos="fade-left">
                                            <Heading>

                                            </Heading>
                                        </nav>
                                    </div>
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