// React
import React, { useEffect } from 'react'
// Style
import style from './IndustryPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Section from './../../components/Seporator/Seporator'
import Container from './../../components/Container/Container'
import Heading from './../../components/Heading/Heading'
import Subtitle from './../../components/Subtitle/Subtitle'
import Seporator from './../../components/Seporator/Seporator'
import Paragraph from './../../components/Paragraph/Paragraph'



function IndustryPage() {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <main data-aos="fade">
            <Section>
                <Container>
                    <Subtitle>
                        Глонасс-Регионы
                    </Subtitle>
                    <Heading>
                        Отраслевые решения
                    </Heading>
                    <Seporator />
                    <Paragraph>

                    </Paragraph>
                </Container>
            </Section>
        </main>
    )
}



export default IndustryPage