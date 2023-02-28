import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import {Rating} from "./Components/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('app rendering');
    const [ratingValue, setRatingValue] = useState(0);
    const [collapsedValue, setCollapsedValue] = useState(true);
    const [switchOn, setSwitchOn] = useState(false);


    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu 1"} collapsed={true} />*/}
            {/*<Accordion titleValue={"Menu 2"} collapsed={collapsedValue} setCollapsedValue={setCollapsedValue} />*/}
            <Accordion titleValue={"Menu 2"} collapsed={collapsedValue} onClick={() => setCollapsedValue(!collapsedValue)} />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledOnOff value={true}/>*/}
            {/*<UncontrolledOnOff value={false}/>*/}
            {/*<OnOff value={switchOn} onChange={setSwitchOn}/>*/}
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
