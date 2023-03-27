import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'React.memo  demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

type UsersType = {
    users: Array<string>
}
const UsersSecret = (props: UsersType) => {
    console.log("USERS")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}