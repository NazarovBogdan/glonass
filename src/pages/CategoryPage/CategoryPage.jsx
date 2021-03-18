// React
import { useEffect, useState } from 'react'
// Style
import style from './CategoryPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// RRD
import { NavLink, useParams } from 'react-router-dom'
// Components
import Subtitle from './../../components/Subtitle/Subtitle'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'
// API
import { setItemsCategory } from './../../components/API/API'
import item from './item.jpg'




function CategoryItem(props) {
    useEffect(() => {
        Aos.init({ duration: 700 })
    })

    return (
        <div className={style.item} data-aos="fade">
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
            </Paragraph>
            <div className={style.priceContainer}>
                <TargetButton
                    tag="nav"
                    to="/item"
                    style={{
                        height: 40,
                        minWidth: 150
                    }}
                >
                    Подробнее
                    </TargetButton>
            </div>
        </div>
    )
}

function CategoryPage(props) {
    const [categoryItem, setItems] = useState()

    useEffect(() => {
        Aos.init({ duration: 700 })

        const DATA = new FormData()
        DATA.append("category", props.category)
        setItemsCategory(DATA).then(response => {
            setItems(response.map(i => <CategoryItem key={i.id} name={i.name} />))
        })
    })

    return (
        <main data-aos="fade">
            <Section>
                <Container>
                    <Subtitle>
                        Оборудование
                    </Subtitle>
                    <Heading>
                        {props.heading}
                    </Heading>
                    <div className={style.itemsContainer}>
                        {categoryItem}
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default CategoryPage