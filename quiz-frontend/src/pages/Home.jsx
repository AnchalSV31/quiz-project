import { Link } from "react-router-dom";
import "../App.css";

function Home() {
    return (
        <div className="page-center">
            <div className="card" style={{ textAlign: "center" }}>
                <h2>Welcome to QuizApp</h2>
                <p style={{ marginBottom: "20px", color: "#94a3b8" }}>
                    Attempt quizzes, track results, and learn smarter.
                </p>

                <Link to="/login">
                    <button className="btn-primary">Login</button>
                </Link>

                <Link to="/signup" className="text-link">
                    Create an account
                </Link>
            </div>
        </div>
    );
}

export default Home;
