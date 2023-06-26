
import { useCallback, useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: 'testid', title: '테스트 제목', body: '테스트 입력내용', isDone: false }
  ]);

  const onChangeHandler = useCallback(
    id => {
      setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,)
      )
    }, []
  )

  const onSubmitHandler = useCallback(
    data => {
      const todo = {
        id: uuidv4(),
        title: data.title,
        body: data.body,
        isDone: false
      }
        ; setTodos(prev => prev.concat(todo));
    }, []
  )



  const onDeleteHandler = useCallback(
    id => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []
  )




  return (
    <div className='frame'>
      <Layout todos={todos} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}
        onDeleteHandler={onDeleteHandler}></Layout>
    </div>
  );
}

export default App;
