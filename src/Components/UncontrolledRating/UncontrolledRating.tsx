import React, {useState} from "react";
import './../Rating.css'

export function UncontrolledRating() {
    console.log('Rating rendering')

    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering');
    // return (props.selected) ? <span onClick={props.onClick} className="fa fa-star yellow"></span>
    //                         : <span onClick={props.onClick} className="fa fa-star"></span>;
    return <span onClick={() => {props.setValue()}} className={props.selected ? "fa fa-star yellow" : "fa fa-star"}></span>
}