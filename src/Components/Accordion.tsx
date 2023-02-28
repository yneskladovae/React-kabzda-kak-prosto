type AccordionPropsType = {
    titleValue: string
    collapsed:boolean
    // setCollapsedValue: (collapsed:boolean) => void
    onClick: () => void
}

// function Accordion2(props: AccordionPropsType) {
//     console.log('Accordion rendering');
//     if (props.collapsed) {
//         return (
//             <div>
//                 {true}
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
// }


function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    collapsed:boolean
    // setCollapsedValue: (collapsed:boolean) => void
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

export default Accordion;
