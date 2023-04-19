import TodoWorking from './page/TodoWorking';
import TodoDone from './page/TodoDone';
import './App.css';
import { useState } from 'react';


function App() {

  const handleDone = (id) => {
    const updatedDone = data.map(item => {
      if (item.id === id) {
        return { ...item, done: true };
        //...연산자로 item객체의 모든 속성을 새로운 객체로 복사한다는 의미
      }
      return item;
    });
    setData(updatedDone);
  }

  const handleDoneGetBack = (id) => {
    const updatedDone = data.map(item => {
      if (item.id === id) {
        return { ...item, done: false };
        //...연산자로 item객체의 모든 속성을 새로운 객체로 복사한다는 의미
      }
      return item;
    });
    setData(updatedDone);
  }

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const [done, setDone] = useState(false)


  //input
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

  const [data, setData] = useState([
    { id: 1, title: '리엑트 1주차강의듣기', content: '1주차 강의 1회독하기', done: true },
    { id: 2, title: '리엑트 2주차강의듣기', content: '2주차 강의 1회독하기', done: false },
  ])

  const onCreate = (title, content) => {
    const newList = {
      title,
      content,
      done,
      id: data.length + 1
    }

    setData([...data, newList])
  }
  //추가하기 버튼 이벤트
  const handleSubmit = () => {
    onCreate(state.title, state.content)
    setState({
      title: "",
      content: ""
    })
  }

  return (
    <div className="App">
      <div className="TodoEditor">
        <section className="Editor">
          <div>
            <span>
              제목
              <input name="title"
                value={state.title}
                onChange={handleChangeState} />
            </span>
            <span>
              내용
              <input name="content"
                value={state.content}
                onChange={handleChangeState} />
            </span>
          </div>
        </section>
        <button onClick={handleSubmit}>추가하기</button>
      </div>

      <TodoWorking todoList={data} onDelete={handleDelete} onDone={handleDone} />
      <TodoDone todoList={data} onDelete={handleDelete} onDone={handleDoneGetBack} />
    </div>
  );
}

export default App;
