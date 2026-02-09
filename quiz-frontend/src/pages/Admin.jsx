import { useState } from "react";
import "./Auth.css";

function Admin() {
    const [quizTitle, setQuizTitle] = useState("");
    const [questions, setQuestions] = useState([
        { question: "", options: ["", "", "", ""], answer: "" },
    ]);

    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        updated[index][field] = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[oIndex] = value;
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([
            ...questions,
            { question: "", options: ["", "", "", ""], answer: "" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const quizData = {
            title: quizTitle,
            questions,
        };

        console.log("Quiz created:", quizData);
        alert("Quiz created (check console)");
        // 🔗 Later: send quizData to backend using axios
    };

    return (
        <div className="auth-page">
            <div className="auth-card quiz-card">
                <h2 className="auth-title">Admin Panel</h2>
                <p className="auth-subtitle">Create a new quiz</p>

                <input
                    className="auth-input"
                    placeholder="Quiz Title"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                />

                {questions.map((q, index) => (
                    <div key={index} className="question-box">
                        <h4 style={{ marginBottom: "10px" }}>
                            Question {index + 1}
                        </h4>

                        <input
                            className="auth-input"
                            placeholder="Question text"
                            value={q.question}
                            onChange={(e) =>
                                handleQuestionChange(index, "question", e.target.value)
                            }
                        />

                        {q.options.map((opt, optIndex) => (
                            <input
                                key={optIndex}
                                className="auth-input"
                                placeholder={`Option ${optIndex + 1}`}
                                value={opt}
                                onChange={(e) =>
                                    handleOptionChange(index, optIndex, e.target.value)
                                }
                            />
                        ))}

                        <input
                            className="auth-input"
                            placeholder="Correct Answer"
                            value={q.answer}
                            onChange={(e) =>
                                handleQuestionChange(index, "answer", e.target.value)
                            }
                        />
                    </div>
                ))}

                <button className="auth-btn" onClick={addQuestion}>
                    + Add Question
                </button>

                <button
                    className="auth-btn"
                    style={{ marginTop: "15px" }}
                    onClick={handleSubmit}
                >
                    Save Quiz
                </button>
            </div>
        </div>
    );
}

export default Admin;
