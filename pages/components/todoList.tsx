import axios from 'axios';

const TodoList = ( props ) => {
               return (
               <>
               <ul>
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
                      <li>
                        <div>{text}</div>
                        <div>수정</div>
                        <div onClick={listDelete}>삭제</div>
                      </li>
                   </>)
                   };


export { TodoList };