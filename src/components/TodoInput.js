import React, { useCallback, useEffect, useRef, useState } from 'react'

const TodoInput = ({ onSubmitHandler }) => {



    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const inputEl = useRef(null);

    //첫 랜더링시 input focus
    useEffect(() => {
        inputEl.current.focus()
    }, [])

    //첫 랜더링시에만 함수 생성
    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const onChangeBody = useCallback((e) => {
        setBody(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        const data = {
            title, body
        }
        !title || body ? alert('내용을 입력하세요') : onSubmitHandler(data);
        setTitle('');
        setBody('');
        e.preventDefault();
    }, [onSubmitHandler, title, body]);

    return (
        <form className='form' onSubmit={onSubmit}>
            <label className='form__title-label'>제목</label>
            <input name="title" type='text' value={title} onChange={onChangeTitle} className='form__title-input' ref={inputEl} />
            <label className='form__content-label'>내용</label>
            <input name="content" type='text' value={body} onChange={onChangeBody} className='form__content-input' />
            <button type="submit" className='form__submit'>추가하기</button>
        </form>
    )
}

export default React.memo(TodoInput)