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
import Paragraph from './../../components/Paragraph/Paragraph'
import Container from './../../components/Container/Container'
import Section from './../../components/Section/Section'
import Subtitle from './../../components/Subtitle/Subtitle'
// Images
import videoItem from './images/content/video-item.png'
import terminalItem from './images/content/terminal-item.png'
import sensorItem from './images/content/sensor-item.png'
import equipmentItem from './images/content/equipment-item.png'



function EquipmentPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <Container>
                    <Subtitle>
                        Глонасс-Регионы
                    </Subtitle>
                    <Heading>
                        Оборудование
                    </Heading>
                    <Seporator />
                    <Paragraph>
                        Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                    </Paragraph>
                    <div className={style.itemsContainer}>
                        <NavLink to="/category">
                            <div className={style.item}>
                                <h3>
                                    Видеомониторинг
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="/category">
                            <div className={style.item}>
                                <h3>
                                    Терминалы
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="/category">
                            <div className={style.item}>
                                <h3>
                                    Датчики уровня топлива
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="/category">
                            <div className={style.item}>
                                <h3>
                                    Дополнительное оборудование
                                </h3>
                            </div>
                        </NavLink>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default EquipmentPage