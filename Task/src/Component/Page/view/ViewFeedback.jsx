import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ViewFeedback.css";

export default function ViewFeedback() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [feedback, setFeedback] = useState({
        id: "",
        feedback: "",
        date: ""
    });

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = async () => {

        try {

            const res = await axios.get(
                `http://localhost:8080/feedback/${id}`
            );

            setFeedback(res.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load feedback");
        }
    };

    return (
        <>
            <div className="view-container">

                <div className="view-card">

                    <h1>
                        View Feedback
                    </h1>

                    <div className="details">

                        <h3>
                            ID :
                            {feedback.id}
                        </h3>

                        <h3>
                            Feedback :
                        </h3>

                        <p>
                            {feedback.feedback}
                        </p>

                        <h3>
                            Date :
                            {feedback.date}
                        </h3>

                    </div>

                    <button
                        onClick={() =>
                            navigate("/admin")
                        }
                    >
                        Back
                    </button>

                </div>

            </div>
        </>
    );
}