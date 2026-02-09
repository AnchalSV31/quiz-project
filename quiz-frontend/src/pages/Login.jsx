import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import "../App.css";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "STUDENT",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);

            res.data.role === "ADMIN"
                ? navigate("/admin")
                : navigate("/quizzes");
        } catch {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="page-center">
            <div className="card">
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input name="email" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <select name="role" onChange={handleChange}>
                            <option value="STUDENT">Student</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>

                    <button className="btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
