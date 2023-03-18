import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {Rating} from "./Components/Raiting/Rating";
import Accordion from "./Components/Accordion/Accordion";

function App() {
    console.log('app rendering');
    const [ratingValue, setRatingValue] = useState(0);
    const [collapsedValue, setCollapsedValue] = useState(true);
    const [switchOn, setSwitchOn] = useState(false);


    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            {/*<Accordion titleValue={"Menu 2"} collapsed={collapsedValue} onClick={() => setCollapsedValue(!collapsedValue)} />*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>  {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');

    return (
        <h1>{props.title}</h1>
    )
}

export default App;
