import { useState } from "react";
import "./Auth.css"; // reuse existing styles

export default function Quiz() {
    const [selected, setSelected] = useState(null);

    const options = [
        "Option A",
        "Option B",
        "Option C",
        "Option D",
    ];

    return (
        <div className="auth-page">
            <div className="auth-card quiz-card">
                {/* Header */}
                <h2 className="auth-title">Sample Quiz</h2>
                <p className="auth-subtitle">
                    Question 1 of 10 • Time left: 01:00
                </p>

                {/* Question */}
                <h3 style={{ marginBottom: "15px" }}>
                    What is the capital of France?
                </h3>

                {/* Options */}
                <div className="quiz-options">
                    {options.map((opt, index) => (
                        <div
                            key={index}
                            className={`quiz-option ${selected === index ? "selected" : ""
                                }`}
                            onClick={() => setSelected(index)}
                        >
                            {opt}
                        </div>
                    ))}
                </div>

                {/* Action button */}
                <button className="auth-btn" style={{ marginTop: "20px" }}>
                    Next Question
                </button>
            </div>
        </div>
    );
}
