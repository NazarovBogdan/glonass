// React
import { useEffect } from 'react'
// Style
import style from './EquipmentPage.module.scss'
// RRD
import { NavLink } from 'react-router-dom'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from './../../components/Seporator/Seporator'
import Heading from './../../components/Heading/Heading'



function EquipmentPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <section className={style.section}>
                <div className={style.container}>
                    <Heading>
                        Оборудование
                    </Heading>
                    <Seporator />
                    <p className={style.paragraph}>
                        Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                    </p>
                    <div className={style.itemsContainer}>
                        <NavLink to="#">
                            <div className={style.item}>
                                <h3>
                                    Видеомониторинг
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="#">
                            <div className={style.item}>
                                <h3>
                                    Терминалы
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="#">
                            <div className={style.item}>
                                <h3>
                                    Датчики уровня топлива
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="#">
                            <div className={style.item}>
                                <h3>
                                    Дополнительное оборудование
                                </h3>
                            </div>
                        </NavLink>
                    </div>

                </div>

            </section>
        </main>
    )
}



export default EquipmentPage