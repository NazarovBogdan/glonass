// React
import { useEffect } from 'react'
// Style
import style from './AboutUsPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from './../../components/Seporator/Seporator'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from './../../components/Heading/Heading'
import Paragraph from './../../components/Paragraph/Paragraph'
// Images
import aerialItem from './images/content/aerial-item.svg'
import gazItem from './images/content/gaz-item.svg'
import mapItem from './images/content/map-item.svg'
import markerItem from './images/content/marker-item.svg'
import trackDropItem from './images/content/track-drop-item.svg'
import trackItem from './images/content/track-item.svg'



function AboutUsPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section style={{ padding: '0 20px' }}>
                <div className={style.preview}>
                    <Container style={{ display: 'block' }}>
                        <div className={style.previewContent}>
                            <p className={style.subtitle}>
                                Глонасс-Регионы
                            </p>
                            <Heading
                                style={{ textAlign: 'left' }}
                            >
                                О компании
                            </Heading>
                            <Seporator />
                            <Paragraph style={{ textAlign: 'left' }}>
                                Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                            </Paragraph>
                            <Paragraph style={{ textAlign: 'left' }}>
                                Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов с пожизненной гарантией и качественным сервисом.
                            </Paragraph>
                        </div>
                    </Container>
                </div>
            </Section>

            <Section>
                <Container>
                    <Heading>
                        Решаемые задачи
                    </Heading>
                    <div className={style.taskContainer}>
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={trackItem} alt="" />
                            <Paragraph>
                                Сокращение пробега, времени доставки и затрат на ТО
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={aerialItem} alt="" />
                            <Paragraph>
                                Интеграция c 1C и SAP
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={mapItem} alt="" />
                            <Paragraph>
                                Отимизация маршрута
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={gazItem} alt="" />
                            <Paragraph>
                                Контроль скоростного режима, расхода топлива (заправки, сливы),контроль местоположения в онлайн режиме
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={trackDropItem} alt="" />
                            <Paragraph>
                                Повышение трудовой дисциплины, культуры вождения и безопасности перевозок
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={markerItem} alt="" />
                            <Paragraph>
                                Предотвращение нецелевого использования техники
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default AboutUsPage