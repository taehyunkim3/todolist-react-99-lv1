
import { useCallback, useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: 'testid', title: '', body: '', isDone: false }
  ]);

  const onChangeHandler = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,)
      )
    }, [todos]
  )

  const onSubmitHandler = useCallback(
    data => {
      const todo = {
        id: uuidv4(),
        title: data.title,
        body: data.body,
        isDone: false
      }
      setTodos(todos.concat(todo));
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
