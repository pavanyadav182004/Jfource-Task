import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                `http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`
            );

            console.log(res.data);

            // Admin Login
            if (res.data === "Admin Login Successful") {

                alert("Admin Login Successful");

                navigate("/admin");
            }

            // User Login
            else if (
                res.data ===
                "User Login Successful"
            ) {

                alert("User Login Successful");

                navigate("/feedback");
            }

            // Wrong Password
            else if (
                res.data ===
                "Invalid Password"
            ) {

                alert("Invalid Password");
            }

            // User Not Found
            else if (
                res.data ===
                "User Not Found"
            ) {

                alert("User Not Found");
            }

            else {

                alert(res.data);
            }

        } catch (error) {

            console.log(error);

            alert("Login Failed");
        }
    };

    return (
        <>
            <div className="login">

                <h1>
                    Login
                </h1>

                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <input
                        className="inpu"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={
                            user.email
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <br />

                    <input
                        className="inpu"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={
                            user.password
                        }
                        onChange={
                            handleChange
                        }
                        required
                    />

                    <br />
                    <br />

                    <button
                        className="btn"
                        type="submit"
                    >
                        Login
                    </button>

                    <p>
                        Don't have an account?

                        <a href="/register">
                            {" "}
                            Sign Up
                        </a>
                    </p>

                </form>

            </div>
        </>
    );
}