import { useState } from 'react';
import axios from 'axios';
import Styles from "../../styles/TodoListInput.module.scss";


const TodoInsert = (props) => {
    const [text, setText] = useState("");
    const textTyping = (e) => setText(e.target.value);
    const insertTodo = () => axios.post(location.origin + "/todoList", {text})
                            .then(response => props.listInsert(response.data))
                            .then(setText(""));
    return (
        <>
            <div className={Styles.inputContainer}>
                <input id="inputTodoList" type="text" value={text} placeholder="할 일을 입력하세요." onChange={textTyping} />
                <button id="addTodoList" type="button" onClick={insertTodo}>확인</button>
            </div>
        </>
    )
}



export { TodoInsert };

