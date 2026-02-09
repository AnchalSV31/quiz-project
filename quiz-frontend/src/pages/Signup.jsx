import { useState } from "react";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // 👈 same CSS as Login

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "STUDENT",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("/auth/signup", formData);
            navigate("/login");
        } catch (err) {
            alert("Signup failed");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2 className="auth-title">Create Account 🚀</h2>
                <p className="auth-subtitle">Join QuizApp today</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        className="auth-input"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="auth-input"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="auth-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <select
                        className="auth-input"
                        name="role"
                        onChange={handleChange}
                    >
                        <option value="STUDENT">Student</option>
                        <option value="ADMIN">Admin</option>
                    </select>

                    <button className="auth-btn" type="submit">
                        Sign Up
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
