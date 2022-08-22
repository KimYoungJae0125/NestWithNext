import { useState } from 'react';
import axios from 'axios';

const TodoInsert = () => {
    const [text, setText] = useState("");
    const textTyping = (e) => setText(e.target.value);
    //const al = console.log({text});
    const al = () => axios.post(location.origin + "/todoList", {text}).then(response => alert(response.data));
    return (
        <>
            <input id="todoText" type="text" placeholder="할 일을 입력하세요." onChange={textTyping} />
            <button type="button" onClick={al}>확인</button>
        </>
    )
}



export { TodoInsert };

