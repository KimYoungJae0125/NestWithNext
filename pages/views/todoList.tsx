import { React, useState } from 'react';
import { NextPageContext } from 'next';
import { TodoInsert } from '../components/todoListInput';
import { TodoList } from '../components/todoList';
import Head from 'next/head';
import Styles from "../../styles/Home.module.scss";


type IndexProps = {
    query : {
        title: string
    }
}

export default function TodoListMain(props) {
console.log(props);
const title = "Next.js와 Nest.js를 이용한 TodoList";
//const todos = props.query != null ? Object.values(props.query) : null;   //ES2017 도입
//const todos = Object.keys(props.query).map(item => props.query[item]);    //ES6 도입
const [todos, setTodos] = useState( props.query != null ? Object.values(props.query) : null);
console.log("todos : ", todos);

const listInsert = (data) => setTodos(todos.concat(data));
const listDelete = (id) => setTodos(todos.filter(todoItem => todoItem.id !== id));

return (
    <>
        <Head><title>{title}</title></Head>
        <div className={Styles.container}>
            <div className={Styles.test} style={{textAlign: "center"}}>
                {title}
            </div>
            <TodoInsert listInsert={listInsert} />
            <TodoList todos={todos} listDelete={listDelete}/>
        </div>
     </>
    )
}

TodoListMain.getInitialProps = async function (context: NextPageContext) {
    const { query }  = context;
    return { query }
}