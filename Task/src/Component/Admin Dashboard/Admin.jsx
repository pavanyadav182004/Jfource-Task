import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css";

export default function Admin() {

    const navigate = useNavigate();

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        getFeedback();
    }, []);

    // Get All Feedback
    const getFeedback = async () => {

        try {

            const res = await axios.get(
                "http://localhost:8080/feedback"
            );

            setFeedbacks(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    // Delete Feedback
    const deleteFeedback = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure?"
            );

        if (!confirmDelete)
            return;

        try {

            await axios.delete(
                `http://localhost:8080/feedback/${id}`
            );

            alert(
                "Deleted Successfully"
            );

            getFeedback();

        } catch (error) {

            console.log(error);
        }
    };

    // View Feedback
    const viewFeedback = (id) => {

        navigate(
            `/view/${id}`
        );
    };

    // Edit Feedback
    const editFeedback = (id) => {

        navigate(
            `/edit/${id}`
        );
    };

    // Logout
    const logout = () => {

        localStorage.clear();

        navigate("/");
    };

    return (
        <>
            <div className="main">

                <div className="admin">

                    <h1>
                        Admin Feedback Dashboard
                    </h1>

                    <table border="1">

                        <thead>

                            <tr>

                                <th>
                                    ID
                                </th>

                                <th>
                                    Feedback
                                </th>

                                <th>
                                    Date
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                feedbacks.length > 0 ?

                                feedbacks.map(
                                    (item) => (

                                    <tr
                                        key={
                                            item.id
                                        }
                                    >

                                        <td>
                                            {
                                                item.id
                                            }
                                        </td>

                                        <td>
                                            {
                                                item.feedback
                                            }
                                        </td>

                                        <td>
                                            {
                                                item.date
                                            }
                                        </td>

                                        <td>

                                            <button className="buttton"
                                                onClick={
                                                    () =>
                                                    viewFeedback(
                                                        item.id
                                                    )
                                                }
                                            >
                                                View
                                            </button>

                                            <button className="buttton"
                                                onClick={
                                                    () =>
                                                    editFeedback(
                                                        item.id
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button className="buttton"
                                                onClick={
                                                    () =>
                                                    deleteFeedback(
                                                        item.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))

                                :

                                <tr>
                                    <td
                                        colSpan="4"
                                    >
                                        No Feedback Found
                                    </td>
                                </tr>
                            }

                        </tbody>

                    </table>

                    <br />

                    <button className="s"
                        onClick={
                            logout
                        }
                    >
                        Logout
                    </button>

                </div>

            </div>
        </>
    );
}