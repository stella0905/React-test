import TodoEditor from "page/TodoEditor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "page/Detail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoEditor />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router