// React
import { useEffect, useState, Fragment } from 'react'
// Style
import style from './MainPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
// Smooth link
import AnchorLink from 'react-anchor-link-smooth-scroll'
// Components
import Seporator from './../../components/Seporator/Seporator'
import TargetButton from './../../components/TargetButton/TargetButton'
import Heading from './../../components/Heading/Heading'
import Paragraph from './../../components/Paragraph/Paragraph'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import ModalWindow from './../../components/ModalWindow/ModalWindow'
import Subtitle from '../../components/Subtitle/Subtitle'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// Images
import mechItem from './images/content/mech-item.svg'
import deskItem from './images/content/desk-item.svg'
import techItem from './images/content/tech-item.svg'
import stelliteItem from './images/content/satellite-item.svg'
import trackItem from './images/content/track-item.svg'
import phoneItem from './images/content/phone-item.svg'
import cloudItem from './images/content/cloud-item.svg'
import softwareImage1 from './images/content/software-image-1.jpg'
import softwareImage2 from './images/content/software-image-2.jpg'
import softwareImage3 from './images/content/software-image-3.jpg'
import softwareImage4 from './images/content/software-image-4.jpg'
import cardBg1 from './images/content/card-bg-1.svg'
import cardBg2 from './images/content/card-bg-2.svg'
import cardBg3 from './images/content/card-bg-3.svg'
import cardBg4 from './images/content/card-bg-4.svg'
// Video
import video from './../../videos/bg-video.mp4'



function Card(props) {
    return (
        <div className={style.card} style={{ backgroundImage: `url(${props.bgImage})` }}>
            <h3 className={style.cardHeading}>
                {props.text}
            </h3>
            <hr className={style.cardSeporator} />
        </div>
    )
}

function MainPage() {
    const [isModalOpened, showModal] = useState(false)

    const openModal = () => {
        isModalOpened === true ? showModal(false) : showModal(true)
    }

    const cards = [
        {
            bgImage: cardBg1,
            text: 'Kруглосуточная техническая поддержка сертифицированными специалистами',
        },
        {
            bgImage: cardBg2,
            text: 'Выездные бригады (передвижной сервисный центр), сервисный выезд до 48 часов',
        },
        {
            bgImage: cardBg3,
            text: 'ПО и оборудование, внесенное в Государственный реестр средств измерений',
        },
        {
            bgImage: cardBg4,
            text: 'Компания полного цикла: монтаж, настройка и сервисное обслуживание систем ',
        }
    ]

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

    return (
        <main data-aos="fade">
            <ModalWindow onClose={openModal} isOpen={isModalOpened} />
            {!isMobile &&
                <Section>
                    <div className={style.preview}>
                        <video
                            className={style.video}
                            loop="loop"
                            autoPlay
                            muted
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className={style.previewContainer}>
                            <Subtitle
                                style={{
                                    textAlign: 'left',
                                    color: 'white',
                                    textShadow: '0 0 5px black',
                                    zIndex: 1,
                                    fontSize: 12
                                }}
                            >
                                Система мониторинга транспорта
                            </Subtitle>
                            <Heading
                                style={{
                                    textAlign: 'left',
                                    color: 'white',
                                    textShadow: '0 0 5px black',
                                    marginBottom: 10,
                                    fontSize: 64
                                }}
                            >
                                GLONASS REGIONS
                            </Heading>
                            <Paragraph
                                style={{
                                    textAlign: 'left',
                                    color: 'white',
                                    textShadow: '0 0 5px black',
                                    marginBottom: 50
                                }}
                            >
                                Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов.
                            </Paragraph>
                            <TargetButton onClick={openModal} style={{ width: 150, margin: 0, border: '1px solid white', color: 'white' }}>
                                Начать работу
                            </TargetButton>
                        </div>
                    </div>
                </Section>
            }
            {isMobile &&
                <PreviewMobile
                    seporator
                    heading="GLONASS/GPS"
                >
                    Система мониторинга транспорта
                </PreviewMobile>
            }

            <Section>
                <Container>
                    {!isMobile &&
                        <Fragment>
                            <Heading style={{ marginBottom: 30 }}>
                                Система мониторинга транспорта<br />
                                GLONASS/GPS
                            </Heading>
                            <Seporator />
                            <Paragraph>
                                Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов.
                            </Paragraph>
                        </Fragment>
                    }
                    <div className={style.rowContainer}>
                        <div className={style.rowContainerItem}>
                            <img
                                className={style.image}
                                src={mechItem}
                                alt=""
                            />
                            <Paragraph>
                                Оборудование для транспорта
                            </Paragraph>
                            <TargetButton tag="nav" to="/equipment">
                                Подробнее
                            </TargetButton>
                        </div>
                        <hr className={style.rowContainerSeporator} />
                        <div className={style.rowContainerItem}>
                            <img
                                className={style.image}
                                src={deskItem}
                                alt=""
                            />
                            <Paragraph>
                                Программное обеспечение
                            </Paragraph>
                            <TargetButton tag="smooth" href="#software" offset={200}>
                                Подробнее
                            </TargetButton>
                        </div>
                        <hr className={style.rowContainerSeporator} />
                        <div className={style.rowContainerItem}>
                            <img
                                className={style.image}
                                src={techItem}
                                alt=""
                            />
                            <Paragraph>
                                Готовые решения
                            </Paragraph>
                            <TargetButton tag="nav" to="/industry">
                                Подробнее
                            </TargetButton>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <div
                    style={{
                        maxWidth: 1140,
                        width: '100%',
                        margin: '0 auto'
                    }}
                >
                    <Heading style={{ textAlign: 'left', marginLeft: 20 }}>
                        Почему выбирают нас
                    </Heading>
                </div>
                <Swiper
                    loop
                    centeredSlides
                    slidesPerView="auto"
                    spaceBetween={isMobile ? 10 : 20}
                    style={{ paddingBottom: 70 }}
                    className={style.slider}
                >
                    {cards.map(({ text, bgImage }, i) => {
                        return (
                            <SwiperSlide key={i} style={{ width: isMobile ? 280 : 450 }}>
                                <Card
                                    bgImage={bgImage}
                                    key={i}
                                    text={text}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Как это устроено
                    </Heading>
                    <div className={style.columnContainer}>
                        <div data-aos={"fade-up"}>
                            <Paragraph style={{ marginBottom: 0 }}>
                                Передача сигнала спутником на устройство в вашей машине
                            </Paragraph>
                            <img
                                className={style.image}
                                src={stelliteItem}
                                alt=""
                            />
                        </div>
                        <hr className={style.columnContainerSeporator} />
                        <div data-aos={"fade-up"}>
                            <img
                                className={style.image}
                                src={trackItem}
                                alt=""
                            />
                            <Paragraph style={{ marginBottom: 0 }}>
                                Установленные на транспортные средства терминалы передают данные в облачный сервис Omnicomm Online
                            </Paragraph>
                        </div>
                        <hr className={style.columnContainerSeporator} />
                        <div data-aos={"fade-up"}>
                            <Paragraph style={{ marginBottom: 0 }}>
                                Доступ к Omnicomm Online осуществляется через web-интерфейс с любого устройства
                            </Paragraph>
                            <img
                                className={style.image}
                                src={phoneItem}
                                alt=""
                            />
                        </div>
                        <hr className={style.columnContainerSeporator} />
                        <div data-aos={"fade-up"}>
                            <img
                                className={style.image}
                                src={cloudItem}
                                alt=""
                            />
                            <Paragraph style={{ marginBottom: 0 }}>
                                Все данные хранятся  на нашем сервере, где их может проверить пользователь
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className={style.softwareSection} id="software">
                <Container>
                    <div className={style.software}>
                        <div className={style.softwareInner}>
                            <h2 className={style.softwareHeading}>
                                <span className={style.softwareHeadingSpan}>Программное </span><br />обеспечение
                            </h2>
                            <div className={style.itemsBox}>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        Пресекает нецелевое использование транспорта
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        Выезд из рабочей геозоны (или поездка вне маршрута)
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        контролирует расход топлива вашего транспорта
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        Посменный отчёт, включающий время движения TС и расход топлива
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        Следит за работой автопарка и водителей
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        Система позволяет следить в режиме реального времяни за водителями и техникой
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        Сокращает время доставки
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        Система позволяет следить за тех. характеристиками трансорта в режиме реального времяни
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.imagesBox}>
                            <img
                                src={softwareImage1}
                                alt=""
                                data-aos={"fade-up"}
                            />
                            <img
                                src={softwareImage2}
                                data-aos={"fade-up"}
                            />
                            <img
                                src={softwareImage3}
                                alt=""
                                data-aos={"fade-up"}
                            />
                            <img
                                src={softwareImage4}
                                data-aos={"fade-up"}
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </main >
    )
}



export default MainPage