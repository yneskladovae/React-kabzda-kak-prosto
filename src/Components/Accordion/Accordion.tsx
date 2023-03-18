type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed:boolean
    onClick: () => void
    items: ItemType[]
    callback: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} callback={props.callback}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed:boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    callback: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.callback(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion;
