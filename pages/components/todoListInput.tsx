import { useState } from 'react';
import axios from 'axios';

const TodoInsert = (props) => {
    const [text, setText] = useState("");
    const textTyping = (e) => setText(e.target.value);
    const insertTodo = () => axios.post(location.origin + "/todoList", {text})
                            .then(response => props.listInsert(response.data));
    return (
        <>
            <input id="todoText" type="text" placeholder="할 일을 입력하세요." onChange={textTyping} />
            <button type="button" onClick={insertTodo}>확인</button>
        </>
    )
}



export { TodoInsert };

