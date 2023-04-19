import React, { useRef, useState } from 'react'
import TodoSection from './TodoSection';
import { useDispatch } from 'react-redux';
import { dataSave, DATA_SAVE } from 'redux/modules/myTodo';
import styled from 'styled-components';

const StContainer = styled.div`
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  width:900px;
  margin: 0px auto;

`
const StTop = styled.header`
  border: 1px solid gray;
  display:flex;
  justify-content: space-between;
  padding:15px;
`
const StTodoEditorMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  justify-content: space-between;
  font-size: 20px;
  border: 1px solid gray;
  margin-top:20px;
`
const Editor = styled.section`
  justify-content: space-between;
  margin-left: 30px;
  
`

const StButton = styled.button`
  font-size: 20px;
  background-color: pink;
  box-shadow: 0 0 5px gainsboro;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  margin-right: 30px;
`
const StInput = styled.input`
  border: 1px solid black;
  width: 220px;
  height: 40px;
  border-radius: 15px;
  margin: 10px; 
`

const TodoEditor= ()=> {
  const titleInput = useRef()
  const contentInput = useRef()
  // input state
  const [state, setState] = useState({
    title: "",
    content: ""
  })

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  //추가하기 버튼 함수
  const handleSubmit = () => {
    if(state.title.length<1){
      titleInput.current.focus()
      return;
    }
    if(state.content.length<1){
      contentInput.current.focus()
      return;
    }
    onCreate(state.title, state.content)
    setState({
      title: "",
      content: ""
    })
  }

  const dispatch = useDispatch()
  //redux에 추가하는 함수

  const onCreate = (title,content) => {
    dispatch(dataSave({
        title,
        content
      })
    )
  }

  return (
    <StContainer>
      <StTop>
        <p>My Todo List</p>
        <p>React</p>
      </StTop>
      <StTodoEditorMain>
        <Editor>
            <span>
              제목
              <StInput
                id='title'
                ref={titleInput}
                name='title'
                value={state.title}
                onChange={handleChangeState} />
            </span>
            <span>
              내용
              <StInput 
                id='content'
                ref={contentInput}
                name="content"
                value={state.content}
                onChange={handleChangeState} />
            </span>
        </Editor>
        <StButton onClick={handleSubmit}>추가하기</StButton>
      </StTodoEditorMain>

      <TodoSection />
    </StContainer>
  );
}

export default TodoEditor

