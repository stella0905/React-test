import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const StContainer = styled.div`
width:500px;
height:400px;
border:1px solid #ccc;
display:flex;
flex-direction:column;
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`
const StNavbar = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  align-items:center;
`
const StButton = styled(Link)`
  text-decoration:none;
  color:black;
  border: 1px solid gray ;
  display:flex;
  font-size:18px;
  font-weight:700;
  padding:20px;
`
const StContent = styled.div`
  padding:20px;
  margin-top:30px;
`
const Title = styled.h2`
  font-size:32px;
  font-weight:900;
  margin-bottom:40px
`
const Detail=()=> {
  const params = useParams()
  
  const myTodo = useSelector((state)=>{
    return state.myTodo.inputData
  })

  // 어떤 todo인지 찾아보기
  const foundData = myTodo.find((item)=>{
    return item.id === params.id
  })
// console.log(foundData)
  return (
    <StContainer>
    <StNavbar>
      <p>id: {foundData.id}</p>

      <StButton to='/'>이전으로</StButton>

    </StNavbar>
    <StContent>
      <Title>{foundData.title}</Title>
      <p>{foundData.content}</p>
    </StContent>
    </StContainer>
  )
}

export default Detail