import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback} items={[]} callback={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onClick={callback} items={[{title:"Dimych", value: 1},{title:"Victor", value: 2}, {title:"Stas", value: 3}]} callback={onClickCallback}/>

export const modeChanging = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onClick={() => setValue((!value))}
        items={[
            {title:"Dimych", value: 1},
            {title:"Victor", value: 2},
            {title:"Stas", value: 3}
        ]}
        callback={onClickCallback}
    />
}