import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UseMemoUseCallback',
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for a: {resultB}
            </div>
        </div>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log("HelpsForReactMemo")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Anna' + new Date().getTime()];
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}<br/>
            <button onClick={addUser}>add user</button>
            <br/>
            <Users users={newArray}/>
        </>
    )
}


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'Js', 'Css'])

    // const newArray = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    // }, [books])

    // const addBook = () => {
    //     const newUsers = [...books, 'Angular' + new Date().getTime()];
    //     setBooks(newUsers)
    // }

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Angular' + new Date().getTime()];
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Angular' + new Date().getTime()];
        setBooks(newUsers)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}<br/>
            <Book
                // books={newArray}
                addBook={memoizedAddBook2}/>
        </>
    )
}

type BooksSecretParams = {
    // books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretParams) => {
    console.log("UsersSecret")
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            <br/>
            {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
        </div>
    )
}

const Book = React.memo(BooksSecret)