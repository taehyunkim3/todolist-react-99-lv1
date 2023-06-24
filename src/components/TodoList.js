
import TodoListItems from "./TodoListItems";
const TodoList = ({ todos, onChangeHandler, onDeleteHandler }) => {



    return (

        <section className='todolist-frame'>
            <h2>WORKING...</h2>
            <div className='todolist-frame--inner'>

                {todos.map((todo) => {
                    return todo.isDone
                        ? null
                        : <TodoListItems todo={todo} key={todo.id} onChangeHandler={onChangeHandler} onDeleteHandler={onDeleteHandler}></TodoListItems>;
                })}
            </div>
            <h2 className="done-title">DONE...!</h2>
            <div className='todolist-frame--inner'>
                {todos.map((todo) => {
                    return todo.isDone
                        ? <TodoListItems todo={todo} key={todo.id} onChangeHandler={onChangeHandler} onDeleteHandler={onDeleteHandler}></TodoListItems>
                        : null;
                })}
            </div>

        </section>


    )
}

export default TodoList;