import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Feedback.css";

export default function Feedback() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        feedback: "",
        date: new Date().toISOString().slice(0, 10)
    });

    // Handle Input
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    // Submit Feedback
    const handleSubmit = async () => {

        if (data.feedback.trim() === "") {
            alert("Please enter feedback");
            return;
        }

        try {

            const res = await axios.post(
                "http://localhost:8080/feedback",
                data
            );

            console.log(res.data);

            alert("Feedback Submitted Successfully");

            setData({
                feedback: "",
                date: new Date()
                    .toISOString()
                    .slice(0, 10)
            });

        } catch (error) {

            console.log(error);

            alert(
                "Error Submitting Feedback"
            );
        }
    };

    // Open Admin Dashboard
    const goToAdmin = () => {
        navigate("/admin");
    };

    return (
        <>
            <div className="feed">

                <div className="back">

                    <h1>
                        Feedback
                    </h1>

                    <div className="btn-container">

                        <button
                            className="butt"
                        >
                            Add Feedback
                        </button>

                        <button
                            className="butn"
                            onClick={goToAdmin}
                        >
                            Edit Feedback
                        </button>

                    </div>

                    <div>

                        <p>
                            Your Feedback
                        </p>

                        <textarea
                            name="feedback"
                            placeholder="Write your feedback here..."
                            value={data.feedback}
                            onChange={handleChange}
                        />

                        <br />
                        <br />

                        <input
                            type="date"
                            name="date"
                            value={data.date}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        className="bt"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>

                </div>

            </div>
        </>
    );
}