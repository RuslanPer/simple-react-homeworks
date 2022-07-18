import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date | null>()
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const stringTime = date ? date.toLocaleString('ru', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }) : ''


    const stringDate = date ? date.toLocaleString('ru', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }) : ''

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={style.time}
            >
                {stringTime}
            </div>

            <div className={style.date}>
                {show && stringDate}
            </div>

            <div className={style.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
