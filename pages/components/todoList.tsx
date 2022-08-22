function TodoList( {todos}) {
               return (
               <>
               <ul>
                 {  todos?.map(
                            (todo) => (
                                    TodoListItem(
                                        todo = {todo}
//                                          key {todo.id}
                                         )
                                         )
                                     )
                             }
                 </ul>
                </>
                 )
             };

function TodoListItem( { todo } )
                   {
                   const { id, text, checked } = todo;
                   return (
                   <>
                      <li>
                        <div>{text}</div>
                      </li>
                   </>)
                   };


export { TodoList };