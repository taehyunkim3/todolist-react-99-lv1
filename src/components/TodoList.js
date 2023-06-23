
import WorkingItems from "./WorkingItems";
import DoneItems from "./DoneItems";
const TodoList = ({ todos, onChangeHandler, onDeleteHandler }) => {



    return (

        <section className='todolist-frame'>
            <h2>WORKING...</h2>
            <div className='todolist-frame--inner'>

                {todos.filter(a => a.isDone !== true).map(todo => (
                    <WorkingItems todo={todo} key={todo.id} onChangeHandler={onChangeHandler} onDeleteHandler={onDeleteHandler}></WorkingItems>
                ))}
            </div>
            <h2>DONE...!</h2>
            <div className='todolist-frame--inner'>

                {todos.filter(a => a.isDone === true).map(todo => <DoneItems todo={todo} key={todo.id} onChangeHandler={onChangeHandler} onDeleteHandler={onDeleteHandler}></DoneItems>)}
            </div>

        </section>


    )
}

export default TodoList;