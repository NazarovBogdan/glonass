// Style
import style from './Container.module.scss'



function Container(props) {
    return (
        <div
            className={style.container}
            {...props}
        >
            <div className={style.inner}>
                {props.children}
            </div>
        </div>
    )
}



export default Container