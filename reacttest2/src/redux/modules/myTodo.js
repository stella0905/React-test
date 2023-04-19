// 최종 리스트(data)들어와야 함! 
// 리턴 : onCreate함수내용이 들어와야함 / 변경될 값 / setState의 역할
import { v4 as uuidv4 } from 'uuid'

const DATA_SAVE = 'myTodo/DATA_SAVE'
const DATA_DELETE = 'myTodo/DATA_DELETE'
const DATA_TRUE_DONE = 'myTodo/DATA_TRUE_DONE'
const DATA_FALSE_DONE = 'myTodo/DATA_FALSE_DONE'

export const dataSave = (payload) => {
  return {
    type: DATA_SAVE,
    payload
  }
}
export const dataDelete = (payload) => {
  return {
    type: DATA_DELETE,
    payload
  }
}
export const dataTrueDone = (payload) => {
  return {
    type: DATA_TRUE_DONE,
    payload
  }
}
export const dataFalseDone = (payload) => {
  return {
    type: DATA_FALSE_DONE,
    payload
  }
}
const initialState = {
  // const [data, setData] = useState([
  //   { id: 2, title: '리엑트 2주차강의듣기', content: '2주차 강의 1회독하기', done: false }],
  // ])

  inputData: [
    {
      id: "2",
      title: '리엑트 2주차 강의듣기',
      content: '1회독 하기',
      done: false
    }
  ]
}

//action => type, value로 이루어져있다.
const myTodo = (state = initialState, action) => {
  // console.log(action.payload.id)
  console.log(state)
  switch (action.type) {
    case DATA_SAVE:
      return {
        //기존에 들어온 내용을 ...으로 복사 해서 배치한다.
        ...state,
        //inputData배열에 새로운 객체를 추가한다.
        inputData: [
          ...state.inputData,
          {
            id: uuidv4(),
            title: action.payload.title,
            content: action.payload.content,
            done: false
          }
        ]
      };
    case DATA_DELETE:
      return {
        inputData: state.inputData.filter(item => item.id !== action.payload)
      }
    case DATA_TRUE_DONE:
      return {
        inputData: state.inputData.map((item) => {
          if (item.id === action.payload) {
            return { ...item, done: true }
          }
          return item
        })
      }

    case DATA_FALSE_DONE:
      return {
        inputData: state.inputData.map((item) => {
          if (item.id === action.payload) {
            return { ...item, done: false }
          }
          return item
        })
      }
    default:
      return state
  }
}


export default myTodo