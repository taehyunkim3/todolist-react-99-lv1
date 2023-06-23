import TodoList from "./TodoList";
import { useCallback, useState } from "react";

const Layout = ({ todos, onChangeHandler, onSubmitHandler, onDeleteHandler }) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');



    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeBody = (e) => {
        setBody(e.target.value);
    };

    const onSubmit = (e) => {
        const data = {
            title, body
        }
        onSubmitHandler(data);
        setTitle('');
        setBody('');
        e.preventDefault();
    }




    return (
        <div className="App">
            <header className='header'>
                <p className='header__title'>My Todo List</p>
                <p className='header__title'>React</p>
            </header>
            <form className='form' onSubmit={onSubmit}>
                <label className='form__title-label'>제목</label>
                <input name="title" type='text' value={title} onChange={onChangeTitle} className='form__title-input' />
                <label className='form__content-label'>내용</label>
                <input name="content" type='text' value={body} onChange={onChangeBody} className='form__content-input' />
                <button type="submit" className='form__submit'>추가하기</button>
            </form>
            <TodoList todos={todos} onChangeHandler={onChangeHandler} onDeleteHandler={onDeleteHandler}></TodoList>

        </div>
    )




}

export default Layout;