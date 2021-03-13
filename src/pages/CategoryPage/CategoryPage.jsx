// React
import { useEffect } from 'react'
// Style
import style from './CategoryPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// RRD
import { NavLink } from 'react-router-dom'
// Components
import Subtitle from './../../components/Subtitle/Subtitle'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'
// Data
// import DATA from ''
import item from './item.jpg'




function CategoryItem(props) {
    return (
        <div className={style.item}>
            <div className={style.itemPreview}>
                <img
                    src={item}
                />
            </div>
            <Paragraph
                style={{
                    textAlign: 'left',
                    margin: '10px 0'
                }}
            >
                {props.name}
                Название товара
            </Paragraph>
            <div className={style.priceContainer}>
                <NavLink to="/item">
                    <TargetButton
                        style={{
                            height: 40,
                            minWidth: 150
                        }}
                    >
                        Подробнее
                    </TargetButton>
                </NavLink>
            </div>
        </div>
    )
}

function CategoryPage(props) {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <Container>
                    <Subtitle>
                        Оборудование
                    </Subtitle>
                    <Heading>
                        {props.heading}
                        Категория
                    </Heading>
                    <div className={style.itemsContainer}>
                        {/* {DATA.map(({}, i) => {
                            return(
                                <CategoryItem
                                    key={i}
                                >
                                    {DATA}
                                </CategoryItem>
                            )
                        })} */}
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default CategoryPage