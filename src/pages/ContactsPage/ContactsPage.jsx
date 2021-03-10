// React
import { useEffect } from 'react'
// Style
import style from './ContactsPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from '../../components/Seporator/Seporator'
import TargetLink from '../../components/TargetLink/TargetLink'
import Heading from './../../components/Heading/Heading'



function ContactsPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <section className={style.section}>
                <div className={style.container}>
                    <div>
                        <div className={style.mapContainer}>

                        </div>
                    </div>
                    <div>
                        <Heading className={style.heading}>
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
                </div>

            </section>
        </main>
    )
}



export default ContactsPage