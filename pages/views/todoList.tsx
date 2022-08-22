import React from 'react';
import { NextPageContext } from 'next';
import { TodoInsert } from '../components/todoListInput';
import { TodoList } from '../components/todoList';
import Head from 'next/head';

type IndexProps = {
    query : {
        title: string
    }
}

export default function TodoListMain(props) {
console.log(props);
const title = "타이틀입니다.";
const todos = props.query != null ? Object.values(props.query) : null;   //ES2017 도입
//const todos = Object.keys(props.query).map(item => props.query[item]);    //ES6 도입
console.log(todos);
return (
    <>
        <Head><title>{title}</title></Head>
        <div>
            타이틀은 {title} 입니다.
        </div>
        <TodoInsert/>
        <TodoList todos={todos}/>
     </>
    )
}

TodoListMain.getInitialProps = async function (context: NextPageContext) {
    //const { query }  = context;
    const { query }  = [];
    return { query }
}