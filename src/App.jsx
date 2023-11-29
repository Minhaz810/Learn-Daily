import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import SignUp from "./Components/SignUp/signup";
import Login from "./Components/LoginPage/Login";
import Quiz from "./Components/Quiz/Quiz";
import HomePage from "./Components/HomePage/Home";
import CourseList from "./Components/Course_List/CourseList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <AuthProvider>
            <Route path="/" element={<HomePage />} />
            <Route path="/courselist" element={<CourseList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Error />} />
          </AuthProvider>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
