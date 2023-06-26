import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Layout = ({ todos, onChangeHandler, onSubmitHandler, onDeleteHandler }) => {

    return (
        <div className="App">
            <header className='header'>
                <p className='header__title'>My Todo List</p>
                <p className='header__title'>React</p>
            </header>
            <TodoInput onSubmitHandler={onSubmitHandler} />
            <TodoList todos={todos} onChangeHandler={onChangeHandler} onDeleteHandler={onDeleteHandler}></TodoList>
        </div>
    )

}

export default Layout;