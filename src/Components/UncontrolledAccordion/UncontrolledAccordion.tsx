import {useReducer, useState} from "react";
import reducer, {toggleCollapsedAC} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering');
    // const [collapsed, setCollapsed] = useState(true);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle onClick={() => dispatch(toggleCollapsedAC(state.collapsed))} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>

    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
