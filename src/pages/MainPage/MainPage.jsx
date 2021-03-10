// React
import { useEffect } from 'react'
// Style
import style from './MainPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from './../../components/Seporator/Seporator'
import TargetButton from './../../components/TargetButton/TargetButton'
import Heading from './../../components/Heading/Heading'
import Paragraph from './../../components/Paragraph/Paragraph'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
// Images
import mechItem from './images/content/mech-item.svg'
import deskItem from './images/content/desk-item.svg'
import techItem from './images/content/tech-item.svg'
import stelliteItem from './images/content/satellite-item.svg'
import trackItem from './images/content/track-item.svg'
import phoneItem from './images/content/phone-item.svg'
import cloudItem from './images/content/cloud-item.svg'



function MainPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <div className={style.slider}>

                </div>
            </Section>
            <Section>
                <Container>
                    <Heading style={{ marginBottom: 30 }}>
                        Система мониторинга транспорта<br />
                        GLONASS/GPS
                    </Heading>
                    <Seporator />
                    <Paragraph>
                        Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов.
                    </Paragraph>
                    <div className={style.rowContainer}>
                        <div className={style.rowContainerItem}>
                            <img src={mechItem} alt="" />
                            <Paragraph>
                                Оборудование для транспорта
                            </Paragraph>
                            <TargetButton>
                                Подробнее
                            </TargetButton>
                        </div>
                        <hr className={style.rowContainerSeporator} />
                        <div className={style.rowContainerItem}>
                            <img src={deskItem} alt="" />
                            <Paragraph>
                                Программное обеспечение
                            </Paragraph>
                            <TargetButton>
                                Подробнее
                            </TargetButton>
                        </div>
                        <hr className={style.rowContainerSeporator} />
                        <div className={style.rowContainerItem}>
                            <img src={techItem} alt="" />
                            <Paragraph>
                                Готовые решения
                            </Paragraph>
                            <TargetButton>
                                Подробнее
                            </TargetButton>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Почему выбирают нас
                    </Heading>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Как это устроено
                    </Heading>
                    <div className={style.columnContainer}>
                        <Paragraph>
                            Передача сигнала спутником на устройство в вашей машине
                        </Paragraph>
                        <img
                            src={stelliteItem}
                            alt=""
                        />
                        <hr className={style.columnContainerSeporator} />
                        <img
                            src={trackItem}
                            alt=""
                        />
                        <Paragraph>
                            Установленные на транспортные средства терминалы передают данные в облачный сервис Omnicomm Online
                        </Paragraph>
                        <hr className={style.columnContainerSeporator} />
                        <Paragraph>
                            Доступ к Omnicomm Online осуществляется через web-интерфейс с любого устройства
                        </Paragraph>
                        <img
                            src={phoneItem}
                            alt=""
                        />
                        <hr className={style.columnContainerSeporator} />
                        <img
                            src={cloudItem}
                            alt=""
                        />
                        <Paragraph>
                            Все данные хронятся  на нашем сервере, где их может проверить пользователь
                        </Paragraph>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default MainPage