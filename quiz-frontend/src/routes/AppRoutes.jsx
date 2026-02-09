import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Quiz from "../pages/Quiz";
import Admin from "../pages/Admin";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/quizzes" element={<Quiz />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}

export default AppRoutes;
