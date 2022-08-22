import axios from 'axios';
import Styles from "../../styles/TodoList.module.scss";


const TodoList = ( props ) => {
               return (
               <>
               <ul className={Styles.todoContainer}>
                 {  props.todos?.map(
                            (todo) => (
                                    TodoListItem(
                                        { todo
                                      ,  listDelete: props.listDelete}
                                          //key = {todo.id}
                                         )
                                         )
                                     )
                             }
                 </ul>
                </>
                 )
             };

const TodoListItem = ( props ) =>
                   {
                   const { id, text, checked } = props.todo;
//                   const listDelete = () => props.listDelete(id);
                   const listDelete = () => axios.delete(location.origin + "/todoList/" + id)
                                                 .then(response => props.listDelete(Number(response.data.id)));
                   return (
                   <>
                      <li style={{display : "flex", justifyContent: "space-between" }}>
                        <input type="checkbox" />
                        <div><span>{text}</span></div>
                        <div><span>수정</span></div>
                        <div onClick={listDelete}><span>삭제</span></div>
                      </li>
                   </>)
                   };


export { TodoList };