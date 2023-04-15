// import { useState } from "react"
// import TodoDone from "./TodoDone"
// import TodoWorking from "./TodoWorking"

// const TodoEditor = () => {

//   const [state, setState] = useState({
//     title: "",
//     content: ""
//   })
//   const handleChangeState = (e) => {
//     setState({
//       ...state,
//       [e.target.title]: e.target.value
//     })
//   }
//   return (
//     <div className="TodoEditor">
//       <section className="Editor">
//         <div>
//           <span
//             name="title"
//             value={state.title}
//             onChange={handleChangeState}
//           >
//             제목
//             <input></input>
//           </span>
//           <span
//             name="content"
//             value={state.content}
//             onChange={handleChangeState}>
//             내용
//             <input></input>
//           </span>
//         </div>
//       </section>
//       <button>추가하기</button>
//       <div>
//         <TodoWorking />
//       </div>
//       <div>
//         <TodoDone />
//       </div>
//     </div>
//   )
// }

// export default TodoEditor