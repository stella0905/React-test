import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataDelete, dataFalseDone, dataTrueDone, DATA_DELETE, DATA_FALSE_DONE, DATA_TRUE_DONE } from "redux/modules/myTodo";
import styled from "styled-components";


const StEntireList = styled.div`
    height: 430px;
`
const StDivision = styled.h1`
  font-size:40px;
`
const StList =styled.div`
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const StListBox = styled.div`
  width: 250px;
  height: 150px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  margin: 10px;
  border-radius: 20px;
`
const StTitle = styled.h2`
  font-size:30px;
  margin-bottom: 10px;
`
const Btn = styled.div`
  display:flex;
  gap:15px;
`
const StListBoxButton = styled.button`
  margin-top: 20px;
  width: 80px;
  height: 30px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: pink;
  box-shadow: 0 0 5px gainsboro;
`
const StDetail = styled(Link)`
  text-decoration:none;
  color:black;
  font-size:18px;
`

const TodoSection = () => {
  const dispatch= useDispatch()

  const myTodo = useSelector((state)=>{
    return state.myTodo.inputData
  })

  //working,done 필터 함수 
  const myTodoWorking = myTodo.filter((e) => e.done !== true)
  const myTodoComplete = myTodo.filter((e) => e.done !== false)

  //삭제하기 함수
  const onDeleteHandle = (id)=>{
    dispatch(dataDelete(id))
  }

  //완료하기 함수
  const onTrueDoneHandle = (id) => {
    dispatch(dataTrueDone(id))
  }

  //취소하기 함수
  const onFalseDoneHandle = (id)=>{
    dispatch(dataFalseDone(id))
  }

  return (
    <>
    <StEntireList>
      <StDivision>Working..🔥 </StDivision>
      <StList>
        {
          myTodoWorking.map((e) => {
            return (
              <StListBox key={e.id}>
                <StDetail to={`/${e.id}`}>상세보기</StDetail>
                <StTitle>{e.title}</StTitle>
                <p>{e.content}</p>
              
                <Btn>
                  <StListBoxButton onClick={()=>onDeleteHandle(e.id)}>삭제하기</StListBoxButton>
                  <StListBoxButton onClick={() =>onTrueDoneHandle(e.id)}>완료하기</StListBoxButton>
                </Btn>
              </StListBox>
            )
          })
        }
      </StList>
    </StEntireList>
    <StEntireList>
      <StDivision>Done </StDivision>
      <StList>
        {
          myTodoComplete.map((e) => {
            return (
              <StListBox key={e.id}>
                <StDetail to={`/${e.id}`}>상세보기</StDetail>
                <StTitle>{e.title}</StTitle>
                <p>{e.content}</p>
                <Btn>
                  <StListBoxButton onClick={() => onDeleteHandle(e.id)}>삭제하기</StListBoxButton>
                  <StListBoxButton onClick={() => onFalseDoneHandle(e.id)}>취소하기</StListBoxButton>
                </Btn>
              </StListBox>
            )
          })
        }
      </StList>
    </StEntireList>
                </>
  )
}

export default TodoSection