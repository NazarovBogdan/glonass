// Style
import style from './Container.module.scss'



function Container(props) {
    return(
        <div
            className={style.container}
            {...props}
        >
            {props.children}
        </div>
    )
}



export default Container