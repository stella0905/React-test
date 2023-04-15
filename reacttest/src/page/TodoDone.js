import { useEffect, useState } from "react";

const TodoDone = (props) => {


  return (
    <div className="TodoDone">
      <h1>Done </h1>
      <div className="list">
        {
          props.todoList.filter((e) => {
            return e.done !== false
          }).map((e) => {
            return (
              <div className="listBox" key={e.id}>
                <h2>{e.title}</h2>
                <p>{e.content}</p>
                <div className="btn">
                  <button onClick={() => props.onDelete(e.id)}>삭제하기</button>
                  <button onClick={() => props.onDone(e.id)}>취소하기</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default TodoDone