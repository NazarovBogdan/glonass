// React
import { useEffect, useState, Fragment } from 'react'
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
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// Images
import videoItem from './images/content/video-item.png'
import terminalItem from './images/content/terminal-item.png'
import sensorItem from './images/content/sensor-item.png'
import equipmentItem from './images/content/equipment-item.png'



function EquipmentPage(props) {
    const [isMobile, changeLoupe] = useState(false)

    const setLoupe = () => {
        if (window.screen.width <= 1024) {
            changeLoupe(true)
        }
        else {
            changeLoupe(false)
        }
    }

    useEffect(() => {
        Aos.init({ duration: 700 });
        setLoupe()
    }, [])

    const setName = (newValue, categoryname) => {
        props.categoryName(newValue, categoryname)
    }

    return (
        <main data-aos="fade">
            {isMobile &&
                <PreviewMobile heading="Оборудование" seporator>
                    Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                </PreviewMobile>
            }
            <Section>
                <Container>
                    {!isMobile &&
                        <Fragment>
                            <Subtitle>
                                Глонасс-Регионы
                            </Subtitle>
                            <Heading style={{ marginBottom: 30 }}>
                                Оборудование
                            </Heading>
                            <Seporator />
                            <Paragraph>
                                Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                                    </Paragraph>
                        </Fragment>
                    }
                    <div className={style.itemsContainer}>
                        <NavLink to="/category/video" onClick={() => {
                            setName("video", "Видеомониторинг")
                        }}>
                            <div data-aos="fade-up" className={style.item}>
                                <h3>
                                    Видеомониторинг
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="/category/terminals" onClick={() => {
                            setName("terminals", "Терминалы")
                        }}>
                            <div data-aos="fade-up" className={style.item}>
                                <h3>
                                    Терминалы
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="/category/sensors" onClick={() => {
                            setName("sensors", "Датчики уровня топлива")
                        }}>
                            <div data-aos="fade-up" className={style.item}>
                                <h3>
                                    Датчики уровня<br />топлива
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink to="/category/other-eqipments" onClick={() => {
                            setName("other-eqipments", "Дополнительное оборудование")
                        }}>
                            <div data-aos="fade-up" className={style.item}>
                                <h3>
                                    Дополнительное<br />оборудование
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