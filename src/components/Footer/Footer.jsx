// Style
import style from './Footer.module.scss'
// RRD
import { NavLink } from 'react-router-dom'
// Icons
import orangeIcon from './../../images/icons/orange-icon.svg'
// Components
import TargetLink from './../TargetLink/TargetLink'
import TargetButton from './../TargetButton/TargetButton'
import Container from './../Container/Container'
import Heading from './../Heading/Heading'



function Footer() {
    return (
        <footer className={style.footer}>
            <Container>
                <div className={style.gridContainer}>
                    <div className={style.column}>
                        <div>
                            <Heading style={{ textAlign: 'left' }}>
                                Контактная информация
                            </Heading>
                            <ul className={style.linksContainer}>
                                <li>
                                    <TargetLink>
                                        +7 863 322-61-62
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        info@glonass-rg.ru
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        г.Ростов-на-Дону, ул.Пескова, 1/2, оф.15
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        г.Краснодар, ул.Калинина, 327, оф.407
                                    </TargetLink>
                                </li>
                            </ul>
                        </div>
                        <div className={style.buttons}>
                            <TargetButton style={{ minWidth: 150 }}>
                                Демо wialon
                            </TargetButton>
                            <TargetButton style={{ minWidth: 150 }}>
                                Демо omnicomm
                            </TargetButton>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div>
                            <Heading style={{ textAlign: 'left' }}>
                                Отраслевые решения
                            </Heading>
                            <ul className={style.linksContainer}>
                                <li>
                                    <TargetLink>
                                        Спецтехника
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Сельхозтехника
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Топливозаправщики
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Легковой коммерческий транспорт
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Грузовой транспорт
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Карьерная техника
                                    </TargetLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div>
                            <Heading style={{ textAlign: 'left' }}>
                                Оборудование
                            </Heading>
                            <ul className={style.linksContainer}>
                                <li>
                                    <TargetLink>
                                        Инновационное оборудование
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Терминалы
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        Датчики уровня топлива
                                    </TargetLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.underFooter}>
                    <p>
                        © 2021, Все права защищены
                        </p>
                    <TargetLink
                        to="https://orangedm.agency/"
                        target="_blank"
                    >
                        <img
                            src={orangeIcon}
                            alt=""
                        />
                    </TargetLink>
                </div>
            </Container>
        </footer>
    )
}



export default Footer