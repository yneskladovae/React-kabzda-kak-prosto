import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const selectedItem = props.items.filter(el => el.value === props.value)
    const toggleItems = () => setActive(!active)
    return (
        <div className={s.select}>
            <span onClick={toggleItems} className={s.main}>{selectedItem && selectedItem[0]?.title}</span>
            {
                active &&
                <div onClick={toggleItems} className={s.items}>
                    {props.items.map(i => <div className={s.item }
                        onClick={() => props.onChange(i.value)}>{i.title}
                    </div>)}
                </div>
            }
        </div>
    );
};