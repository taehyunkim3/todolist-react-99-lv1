

const TodoListItems = ({ todo, key, onChangeHandler, onDeleteHandler }) => {

    const { id, title, body, isDone } = todo;

    return (
        <article className='todolist__items' key={key}>
            <h2>{title}</h2>
            <h4>{body}</h4>
            <div>
                <button className='items-delete' onClick={() => { onDeleteHandler(id) }}>삭제하기</button>
                <button className='items-done' onClick={() => { onChangeHandler(id) }}>{isDone ? '완료 취소' : '완료'}</button>
            </div>
        </article>
    )
}

export default TodoListItems;