// React
import { useEffect } from 'react'
// Style
import style from './MainPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Slider
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
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
import cardBg1 from './images/content/card-bg-1.png'
import cardBg2 from './images/content/card-bg-2.png'
import Subtitle from '../../components/Subtitle/Subtitle'
import softwareImage1 from './images/content/software-image-1.jpg'
import softwareImage2 from './images/content/software-image-2.jpg'
import softwareImage3 from './images/content/software-image-3.jpg'
import softwareImage4 from './images/content/software-image-4.jpg'



function Card(props) {
    const thisStyle = {
        backgroundImage: props.bgimage
    }

    return (
        <div className={style.card} style={thisStyle}>
            <h3 className={style.cardHeading}>
                {props.text}
            </h3>
            <hr className={style.cardSeporator} />
        </div>
    )
}

function MainPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <div className={style.slider}>
                    <div className={style.previewContainer}>
                        <Subtitle
                            style={{
                                textAlign: 'left',
                                color: 'white',
                                textShadow: '0 0 5px black',
                                marginBottom: 30
                            }}
                        >
                            Система мониторинга транспорта
                            </Subtitle>
                        <Heading
                            style={{
                                textAlign: 'left',
                                color: 'white',
                                textShadow: '0 0 5px black',
                                marginBottom: 30
                            }}
                        >
                            GLONASS REGIONS
                            </Heading>
                        <Paragraph
                            style={{
                                textAlign: 'left',
                                color: 'white',
                                textShadow: '0 0 5px black',
                                marginBottom: 30
                            }}
                        >
                            Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов.
                            </Paragraph>
                        <TargetButton style={{ width: 150 }}>
                            Начать работу
                        </TargetButton>
                    </div>
                </div>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Система мониторинга транспорта<br />
                        GLONASS/GPS
                    </Heading>
                    <Seporator />
                    <Paragraph>
                        Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов.
                    </Paragraph>
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
                            <TargetButton>
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
                            <TargetButton>
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
                            <TargetButton>
                                Подробнее
                            </TargetButton>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Heading style={{ textAlign: 'left' }}>
                        Почему выбирают нас
                    </Heading>
                </Container>
                <Swiper
                    loop
                    centeredSlides
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 250,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                >
                    <SwiperSlide style={{ outline: 'none' }}>
                        <Card
                            text="Kруглосуточная техническая поддержка сертифицированными специалистами"
                            bgimage={cardBg1}
                        />
                    </SwiperSlide>
                    <SwiperSlide style={{ outline: 'none' }}>
                        <Card
                            text="Выездные бригады (передвижной сервисный центр), сервисный выезд до 48 часов"
                            bgimage={cardBg2}
                        />
                    </SwiperSlide>
                    <SwiperSlide style={{ outline: 'none' }}>
                        <Card
                            text="Компания полного цикла: монтаж, настройка и сервисное обслуживание систем"
                            bgimage={cardBg1}
                        />
                    </SwiperSlide>
                    <SwiperSlide style={{ outline: 'none' }}>
                        <Card
                            text="ПО и оборудование, внесенное в Государственный реестр средств измерений"
                            bgimage={cardBg2}
                        />
                    </SwiperSlide>
                </Swiper>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Как это устроено
                    </Heading>
                    <div className={style.columnContainer}>
                        <div>
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
                        <div>
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
                        <div>
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
                        <div>
                            <img
                                className={style.image}
                                src={cloudItem}
                                alt=""
                            />
                            <Paragraph style={{ marginBottom: 0 }}>
                                Все данные хронятся  на нашем сервере, где их может проверить пользователь
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className={style.softwareSection}>
                <Container>
                    <div className={style.software}>
                        <div className={style.softwareInner}>
                            <Heading style={{ textAlign: 'left' }}>
                                <span className={style.softwareHeading}>Программное</span><br />обеспечение
                            </Heading>
                            <div className={style.itemsBox}>
                                <div>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 5,
                                            textTransform: 'uppercase',
                                            fontSize: 17,
                                            fontWeight: 700,
                                        }}
                                        className={style.itemsHeading}
                                    >
                                        Пресекает нецелевое использование транспорта
                                    </Paragraph>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 0,
                                            fontSize: 14,
                                            width: 210
                                        }}
                                    >
                                        Выезд из рабочей геозоны (или поездка вне маршрута)
                                    </Paragraph>
                                </div>
                                <div>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 5,
                                            textTransform: 'uppercase',
                                            fontSize: 17,
                                            fontWeight: 700
                                        }}
                                        className={style.itemsHeading}
                                    >
                                        контролирует расход топлива вашего транспорта
                                    </Paragraph>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 0,
                                            fontSize: 14,
                                            width: 210
                                        }}
                                    >
                                        Посменный отчёт, включающий время движения Tc и расход топлива
                                    </Paragraph>
                                </div>
                                <div>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 5,
                                            textTransform: 'uppercase',
                                            fontSize: 17,
                                            fontWeight: 700
                                        }}
                                        className={style.itemsHeading}
                                    >
                                        Следит за работой автопарка и водителей
                                    </Paragraph>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 0,
                                            fontSize: 14,
                                            width: 210
                                        }}
                                    >
                                        Посменный отчёт, включающий время движения Tc и расход топлива
                                    </Paragraph>
                                </div>
                                <div>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 5,
                                            textTransform: 'uppercase',
                                            fontSize: 17,
                                            fontWeight: 700
                                        }}
                                        className={style.itemsHeading}
                                    >
                                        сокращение времени доставки
                                    </Paragraph>
                                    <Paragraph
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 0,
                                            fontSize: 14,
                                            width: 210
                                        }}
                                    >
                                        Посменный отчёт, включающий время движения TC и расход топлива
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                        <div className={style.imagesBox}>
                            <img
                                src={softwareImage1}
                                alt=""
                                data-aos="fade-up"
                            />
                            <img
                                src={softwareImage2}
                                data-aos="fade-up"
                            />
                            <img
                                src={softwareImage3}
                                alt=""
                                data-aos="fade-up"
                            />
                            <img
                                src={softwareImage4}
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </main >
    )
}



export default MainPage