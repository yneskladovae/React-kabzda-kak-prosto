import React, {useState} from 'react';
import { ComponentStory } from '@storybook/react';
import {Rating} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} setRatingValue={x=>x}/>
export const Rating1 = () => <Rating value={1} setRatingValue={x=>x}/>
export const Rating2 = () => <Rating value={2} setRatingValue={x=>x}/>
export const Rating3 = () => <Rating value={3} setRatingValue={x=>x}/>
export const Rating4 = () => <Rating value={4} setRatingValue={x=>x}/>
export const Rating5 = () => <Rating value={5} setRatingValue={x=>x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState(3);
    return <Rating value={rating} setRatingValue={setRating}/>
}