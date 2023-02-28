import {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle onClick={() => setCollapsed(!collapsed)} title={props.titleValue}/>
            {/*<button onClick={collapsedHandler}>Toggle</button>*/}
            {collapsed && <AccordionBody/>}
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
