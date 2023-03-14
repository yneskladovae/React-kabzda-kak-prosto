import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => <OnOff value={true} onChange={action("on or off clicked")}/>;
export const OffMode = () => <OnOff value={false} onChange={action("on or off clicked")}/>;

export const modeChanging = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<boolean>(true)
    return <OnOff value={value} onChange={setValue}/>
}