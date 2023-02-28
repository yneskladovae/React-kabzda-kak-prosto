import React from "react";
import './Rating.css'

type RatingPropsType = {
    value: number
    setRatingValue: (value: number) => void
}


export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={() => props.setRatingValue(1)}/>
            <Star selected={props.value > 1} onClick={() => props.setRatingValue(2)}/>
            <Star selected={props.value > 2} onClick={() => props.setRatingValue(3)}/>
            <Star selected={props.value > 3} onClick={() => props.setRatingValue(4)}/>
            <Star selected={props.value > 4} onClick={() => props.setRatingValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    return <span onClick={props.onClick} className={props.selected ? "fa fa-star yellow" : "fa fa-star"}></span>
}