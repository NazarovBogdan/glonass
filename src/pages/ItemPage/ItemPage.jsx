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
                                <img src="" alt="" />
                            </div>
                            <div className={style.image}>
                                <img src="" alt="" />
                            </div>
                            <div className={style.image}>
                                <img src="" alt="" />
                            </div>
                            <div className={style.image}>
                                <img src="" alt="" />
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
                                Name
                            </Heading>
                            <Paragraph style={{ textAlign: 'left' }}>
                                {props.descrioption}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quaerat quas tempore modi nam explicabo, et itaque quam optio eius iusto voluptatum magni sint tenetur omnis vel cum, quia vitae? Id nesciunt, provident suscipit deleniti deserunt quasi expedita asperiores sint sapiente nemo itaque at aut incidunt? Officiis provident harum explicabo?
                            </Paragraph>
                        </div>
                        <div>
                            <ul className={style.features}>
                                <li>
                                    <button>
                                        Особенности
                                    </button>
                                    <div>
                                        <ul>
                                            {props.list}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <button>
                                        Характеристики
                                    </button>
                                    <div>
                                        <ul>
                                            {props.list}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.priceContainer}>
                            <TargetButton>
                                Заказать
                            </TargetButton>
                            <hr />
                            <Paragraph>
                                {props.price}
                                4500 руб.
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default ItemPage