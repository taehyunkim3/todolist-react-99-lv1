# todolist_99_1

**항해99 React 1주차 Lv.1 개인과제**

---

_15기 김태현_

---

## 컴포넌트 트리

- App.js
  - Layout.js
    - TodoList.js
    - DoneItems.js
    - WorkingItems.js

---

## 사용 함수

- App.js

  - useState [todos, setTodos] : todos 데이터를 저장하는 저장소.

  - onSubmitHandler : Layout.js에서 받아온 submit data를 todo객체에 넣어서 Todos state에 넣어줌. id값은 1부터 시작해서 업데이트됨.

  - onDeleteHandler : (done/working)items.js -> Layout 에서 받아온 id값에 해당되지 않는 todos state 만 남기고 나머지는 filter로 모두 지워서 setTodos로 할당.

  - onChangeHandler : (done/working)items.js -> Layout 에서 받아온 id값에 해당되는 todo state의 isDone값을 현재의 반대값(!todo.isDone)으로 변경해준뒤, map으로 setTodos에 재할당해줌.

- Layout.js

  - onChangeTitle : 사용자가 title에 값을 입력(변경될때로 감지) title state에 임시로 저장해줌.

  - onChangeBody : 사용자가 body(=content)값을 입력(변경될때로 감지) body state에 임시로 저장해줌.

  - onSubmit : 사용자가 form을 submit하면 실행됨. 임시 저장되었던 body, title state를 불러와서 data에 담아서 부모인 app.js의 onSubmitHandler로 보내줌. 그후 title, body state 초기화. (e.prevent.default로 기본 기능인 새로고침을 막아둠)

---

## 개선 필요 사항

- Done, Working 으로 컴포넌트 분리 -> isDone의 상태로 버튼 모양 랜더링을 바꿔주고, 컴포넌트는 하나로 통일하는게 좋아보임.
