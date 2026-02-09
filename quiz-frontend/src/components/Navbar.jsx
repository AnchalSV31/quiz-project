import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>QuizApp</h1>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup" className="nav-btn">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;
