
import { useCallback, useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: '', body: '', isDone: false }
  ]);

  const onChangeHandler = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,)
      )
    }, [todos]
  )

  const nextId = useRef(1);
  const onSubmitHandler = useCallback(
    data => {
      const todo = {
        id: nextId.current,
        title: data.title,
        body: data.body,
        isDone: false
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  )



  const onDeleteHandler = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  )




  return (
    <div className='frame'>
      <Layout todos={todos} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}
        onDeleteHandler={onDeleteHandler}></Layout>
    </div>
  );
}

export default App;
