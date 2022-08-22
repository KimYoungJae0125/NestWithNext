import React from 'react';
import { NextPageContext } from 'next';
import { Confirm as ConfirmButton, Cancle as CancleButton, Input } from '../components/todoListInput-backup';
import { TodoList } from '../components/todoList';
import Head from 'next/head';

type IndexProps = {
    query : {
        title: string
        todos: array
    }
}

export default function Index(props : IndexProps) {
console.log(props);
const { title } = props.query;
const todos =  props.todos;
return (
    <>
        <Head><title>{title}</title></Head>
        <div>
            타이틀은 {title} 입니다.
        </div>
        <Input/>
        <ConfirmButton/>
        <CancleButton/>
        <TodoList todos={todos}/>
     </>
    )
}

Index.getInitialProps = async function (context: NextPageContext) {
    const { query }  = context;
    const todos  = [
                      {id:1, text:"sd", checked:true}
                    , {id:2, text:"test", checked:true}
                    , {id:3, text:"tesfff", checked:true}
                    , {id:4, text:"tasdesfff", checked:true}
                    , {id:5, text:"hi", checked:true}
                      ];
    return { query, todos }
}