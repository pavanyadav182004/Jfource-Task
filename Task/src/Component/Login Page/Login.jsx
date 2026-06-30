import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {

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

            alert(res.data);

            if (res.data.includes("Admin")) {
                window.location.href = "/admin";
            } else {
                window.location.href = "/feedback";
            }

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (
        <div className="login">

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    className="inpu"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <br />

                <input
                    className="inpu"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button className="btn" type="submit">
                    Login
                </button>

                <p>
                    Don't have an account?
                    <a href="/register"> Sign Up</a>
                </p>

            </form>
        </div>
    );
}