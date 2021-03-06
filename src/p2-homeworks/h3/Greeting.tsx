import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDownHandler: (event: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, onKeyDownHandler, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error === '' ? s.input : s.input + ' ' + s.error


    return (
        <div className={s.inputWrap}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyDown={onKeyDownHandler}
                   className={inputClass}/>
            <button onClick={addUser}
                    disabled={!name}
                    className={s.buttonAdd}>add
            </button>
            <span>{totalUsers}</span>
            <span className={s.errorText}>{error}</span>
        </div>
    )
}

export default Greeting
