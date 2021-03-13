// Style
import style from './UserForm.module.scss'
// Formik
import {
    Formik,
    Form,
    Field
} from 'formik'
// Components
import Heading from './../Heading/Heading'
import Paragraph from './../Paragraph/Paragraph'
import Container from './../Container/Container'
import Section from './../Section/Section'



function UserForm() {
    return (
        <Section>
            <Container style={{ maxWidth: 900 }}>
                <Heading>
                    Начните работать эффективно
                </Heading>
                <div className={style.paragraphContainer}>
                    <Paragraph style={{ margin: 0 }}>
                        Заполните форму и мы перезвоним или отправим письмо на почту
                    </Paragraph>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        organization: '',
                        phone: '',
                        email: '',
                        text: ''
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={style.form}>
                            <div>
                                <Field className={style.input} name="name" placeholder="Имя" />
                                <Field className={style.input} name="organization" placeholder="Организация" />
                                <Field className={style.input} name="phone" placeholder="Телефон" />
                                <Field className={style.input} name="email" placeholder="E-mail" />
                            </div>
                            <div>
                                <textarea
                                    name="text"
                                    id=""
                                    className={style.textarea}
                                    placeholder="Комментарий"
                                ></textarea>
                                <button className={style.button}>
                                    Отправить
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Section>
    )
}



export default UserForm