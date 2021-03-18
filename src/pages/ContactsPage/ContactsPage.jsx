// React
import React, { useEffect, useState } from 'react'
// Style
import style from './ContactsPage.module.scss'
// Yandex map
import {
    YMaps,
    Map,
    Placemark
} from 'react-yandex-maps'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from '../../components/Seporator/Seporator'
import TargetLink from '../../components/TargetLink/TargetLink'
import Heading from './../../components/Heading/Heading'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'



function ContactsPage() {
    const coordinatesContainer = [
        [47.203250324994436, 39.604171306840875],
        [45.03850219458047, 38.96749014258882]
    ]

    const [coordinates, setCoordinates] = useState(coordinatesContainer[0])

    const changeCoordinates = () => {
        for (let i = 0; i < coordinatesContainer[0].length; i++) {
            if (coordinates[i] != coordinatesContainer[0][i]) {
                console.log(coordinates);
                setCoordinates(coordinatesContainer[0])
                return
            }

            console.log(coordinates);
            setCoordinates(coordinatesContainer[1])
            return
        }
    }

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <Container>
                    <div className={style.container}>
                        <div>
                            <div className={style.mapContainer}>
                                <YMaps>
                                    <Map
                                        height={'100%'}
                                        width={'100%'}
                                        defaultState={{
                                            center: coordinates,
                                            zoom: 15
                                        }}
                                    >
                                        <Placemark
                                            geometry={[47.203250324994436, 39.604171306840875]}
                                        />
                                        <Placemark
                                            geometry={[45.03850219458047, 38.96749014258882]}
                                        />
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                        <div className={style.contactsContent}>
                            <Heading
                                style={{
                                    textAlign: 'left',
                                    marginBottom: 20
                                }}
                            >
                                Контакты
                            </Heading>
                            <Seporator />
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
                                    {/* <TargetLink tag="a" href="https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2%D0%B0,+1,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+344033/@47.2014739,39.6027455,15.52z/data=!4m5!3m4!1s0x40e3bf14d3aabdff:0x62ed058cbeb3b2d0!8m2!3d47.2031407!4d39.6041502" target="_blank"> */}
                                    <TargetLink onClick={changeCoordinates}>
                                        г.Ростов-на-Дону, ул.Пескова, 1/2, оф.15
                                    </TargetLink>
                                </li>
                                <li>
                                    {/* <TargetLink tag="a" href="https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0,+327,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80,+%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+350000/@45.0384518,38.9652603,17z/data=!3m1!4b1!4m5!3m4!1s0x40f04f9fda6ca129:0x299ba57b7c0d5c16!8m2!3d45.038448!4d38.967449" target="_blank"> */}
                                    <TargetLink onClick={changeCoordinates}>
                                        г.Краснодар, ул.Калинина, 327, оф.407
                                    </TargetLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default ContactsPage