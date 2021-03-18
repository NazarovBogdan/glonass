// Style
import style from './ModalWindow.module.scss'
// Formik
import { Formik, Form, Field } from 'formik'
// Modal
import Modal from 'react-modal'
// Components
import Heading from './../../components/Heading/Heading'
import TargetButton from './../TargetButton/TargetButton'



function ModalWindow(props) {
    return (
        <Modal className={style.modal} {...props} onAfterOpen={() => document.body.style.overflow = "hidden"} onAfterClose={() => document.body.style.overflow = "visible"}>
            <button
                className={style.closeButton}
                onClick={props.onClose}
            >
                <span>
                    +
                </span>
            </button>
            <Heading style={{ marginBottom: 45, fontSize: 26 }}>
                Заказать звонок
            </Heading>
            <Formik
                initialValies={{
                    name: '',
                    email: '',
                    text: ''
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={style.form}>
                        <Field type="name" className={style.input} />
                        <Field type="email" className={style.input} />
                        <Field type="text" className={style.input} />
                        <TargetButton type="submit" disabled={isSubmitting}>
                            Отправить
                        </TargetButton>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}



export default ModalWindow