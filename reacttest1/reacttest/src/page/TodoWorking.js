import { useEffect, useState } from "react";


const TodoWorking = (props) => {

  const handleComplete = (id) => {
    // todo 항목의 id 값과 같은 것을 찾아서 done 값을 true로 변경합니다.
    const updatedData = props.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });

    // 변경된 todo 리스트를 엄마 컴포넌트의 콜백 함수를 호출하여 전달합니다.
    props.onComplete(updatedData);
  }

  return (
    <div className="TodoWorking">
      <h1>Working.. </h1>
      <div className="list">
        {
          props.todoList.filter((e) => {
            return e.done !== true
          }).map((e) => {
            return (
              <div className="listBox" key={e.id}>
                <h2>{e.title}</h2>
                <p>{e.content}</p>
                <div className="btn">
                  <button onClick={() => props.onDelete(e.id)}>삭제하기</button>
                  <button onClick={() => props.onDone(e.id)}>완료하기</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TodoWorking