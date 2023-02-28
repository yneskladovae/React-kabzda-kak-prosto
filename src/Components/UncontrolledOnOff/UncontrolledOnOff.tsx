import {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
    const [isActive, setIsActive] = useState(false);
    const onClicked = () => {
        setIsActive(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setIsActive(false)
        props.onChange(false)
    }

    return (
        <div className={"on-off"}>
            <div>
                <button onClick={onClicked} style={{background: isActive ? 'green' : ''}}>On</button>
                <button onClick={offClicked} style={{background: isActive ? '' : 'red'}}>Off</button>
                <div style={{background: isActive ? 'green' : 'red'}}></div>
            </div>
        </div>
    )
}