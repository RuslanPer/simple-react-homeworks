import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './SuperRadio.module.scss'


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={style.labelRadio}>
            <input
                type={'radio'}
                name={o}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <div className={style.radioButtons}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
