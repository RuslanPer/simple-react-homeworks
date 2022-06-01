import React from 'react'
import {AffairType} from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityColor = props.affair.priority === 'high' ? s.high : props.affair.priority === 'middle' ? s.middle : props.affair.priority === 'low' ? s.low : ''

    return (
        <>
            <span className={s.affairName}>{props.affair.name}</span>
            <span className={priorityColor}>
                [{props.affair.priority}]
            </span>
            <button className={s.affairBtnDelete} onClick={deleteCallback}>X</button>
        </>
    )
}

export default Affair
