// React
import { useEffect } from 'react'
// Style
import style from './CategoryPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Subtitle from './../../components/Subtitle/Subtitle'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'
// Data
// import DATA from ''




function CategoryItem(props) {
    return (
        <div className={style.item}>
            <div className={style.itemPreview}>
                <img
                    src={props.preview}
                    alt=""
                />
            </div>
            <Paragraph
                style={{
                    textAlign: 'left',
                    margin: '20px 0'
                }}
            >
                {props.name}
                Name
            </Paragraph>
            <div className={style.priceContainer}>
                <Paragraph style={{ margin: 0 }}>
                    {props.price}
                    4500 руб.
                </Paragraph>
                <TargetButton
                    style={{
                        height: 40
                    }}
                >
                    Подробнее
                </TargetButton>
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
                        Видеомониторинг
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