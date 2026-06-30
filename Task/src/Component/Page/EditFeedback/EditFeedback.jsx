import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditFeedback.css";

export default function EditFeedback() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        feedback: "",
        date: ""
    });

    // Get feedback by id
    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = async () => {

        try {

            const res = await axios.get(
                `http://localhost:8080/feedback/${id}`
            );

            setData(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    // Handle input change
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    // Update feedback
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.put(
                `http://localhost:8080/feedback/${id}`,
                data
            );

            alert("Feedback Updated Successfully");

            navigate("/admin");

        } catch (error) {

            console.log(error);

            alert("Update Failed");
        }
    };

    return (
        <>
            <div className="edit-container">

                <div className="edit-card">

                    <h1>Edit Feedback</h1>

                    <form onSubmit={handleSubmit}>

                        <label>
                            Feedback
                        </label>

                        <textarea
                            name="feedback"
                            value={data.feedback}
                            onChange={handleChange}
                            rows="6"
                            required
                        />

                        <br /><br />

                        <label>
                            Date
                        </label>

                        <input
                            type="date"
                            name="date"
                            value={data.date}
                            onChange={handleChange}
                        />

                        <br /><br />

                        <button
                            type="submit"
                        >
                            Update
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}