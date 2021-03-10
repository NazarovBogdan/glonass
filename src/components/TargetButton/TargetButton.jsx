// Style
import style from './TargetButton.module.scss'



function TargetButton(props) {
    return (
        <button
            className={style.targetButton}
            {...props}
        >
            {props.children}
        </button>
    )
}



export default TargetButton