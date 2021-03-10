// React
import React, {
    useEffect,
    useState
} from 'react'
// Style
import style from './Header.module.scss'
// RRD
import { NavLink } from 'react-router-dom'
// Components
import TargetButton from './../TargetButton/TargetButton'
import TargetLink from './../TargetLink/TargetLink'
// Icons
import logo from './../../images/logo/logotype.svg'



function Header() {
    // const [display, setWidth] = useState(null)

    // useEffect(() => {
    //     let windowWidth = window.screen.width

    //     if (windowWidth >= 320 && windowWidth < 760) {
    //         setWidth(display = 'isMobile')
    //         display = 'isMobile'
    //     }
    //     else if (windowWidth >= 760 && windowWidth < 1024) {
    //         setWidth(display = 'isTablet')
    //     }
    //     else {
    //         setWidth(display = 'isDesktop')
    //     }
    // })

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
            <div className={style.container}>
                <div className={style.logo}>
                    <NavLink to="/">
                        <img src={logo} alt="Логотип" />
                    </NavLink>
                </div>
                {display === 'isDesktop' &&
                    <React.Fragment>
                        <form action="">
                            <select
                                name="city"
                                id=""
                                className={style.selectList}
                            >
                                <option value="krasnodar">
                                    Краснодар
                        </option>
                                <option value="rostovOnDon">
                                    Ростов-на-Дону
                        </option>
                            </select>
                        </form>
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
                {display === 'isTablet' &&
                    <React.Fragment>

                    </React.Fragment>
                }
                {display === 'isMobile' &&
                    <React.Fragment>

                    </React.Fragment>
                }
            </div>
        </header>
    )
}



export default Header