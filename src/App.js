import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import RequireAuth from "./Login/RequireAuth";
import SignUp from "./Login/SignUp";
import MyTodo from "./MyTodo/MyTodo";
import NavBar from "./shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <MyTodo />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
