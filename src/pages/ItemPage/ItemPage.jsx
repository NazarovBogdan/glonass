// React
import { useEffect } from 'react'
// Style
import style from './ItemPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'

import item from './../CategoryPage/item.jpg'



function ItemPage(props) {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <Container>
                    <div className={style.itemContainer}>
                        <div className={style.gallery}>
                            <div className={style.image}>
                                <div>
                                    <img src={item} alt="" />
                                </div>
                            </div>
                            <div className={style.image}>
                                <div>
                                    <img src={item} alt="" />
                                </div>
                            </div>
                            <div className={style.image}>
                                <div>
                                    <img src={item} alt="" />
                                </div>
                            </div>
                            <div className={style.image}>
                                <div>
                                    <img src={item} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={style.description}>
                            <Heading
                                style={{
                                    textAlign: 'left',
                                    marginBottom: 20
                                }}
                            >
                                {props.itemName}
                                Название товара
                            </Heading>
                            <div className={style.tableHeading} style={{ marginBottom: 30 }}>
                                Особенности
                            </div>
                            <ul className={style.description}>
                                <li>
                                    Питание через PoE ( Power over Ethernet)
                                </li>
                                <li>
                                    Двойное стекло, антибликовое покрытие
                                </li>
                                <li>
                                    24 светодиода LED
                                </li>
                                <li>
                                    3.6 мм инфракрасные линзы
                                </li>
                                <li>
                                    Инфракрасная лампа загорается автоматические, если окружающие условия ниже чем 5LU
                                </li>
                            </ul>
                            <TargetButton>
                                Заказать
                            </TargetButton>
                        </div>
                        <div className={style.features}>
                            <div className={style.tableHeading}>
                                Характеристики
                            </div>
                            <table className={style.features}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Материал корпуса
                                        </td>
                                        <td>
                                            Метал
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Датчик изображения
                                        </td>
                                        <td>
                                            1/3 SONY CCD
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Система
                                        </td>
                                        <td>
                                            PAL/NTSC
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Вес, г
                                        </td>
                                        <td>
                                            340
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Минимальная освещённость
                                        </td>
                                        <td>
                                            0Lux/F1.2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Линзы, мм
                                        </td>
                                        <td>
                                            3.6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Компенсация задней подстветки
                                        </td>
                                        <td>
                                            Автоматическая
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Электронная затворка
                                        </td>
                                        <td>
                                            1/50(1/60)-1/100, 000 сек
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Баланс белого
                                        </td>
                                        <td>
                                            Автоматический
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default ItemPage