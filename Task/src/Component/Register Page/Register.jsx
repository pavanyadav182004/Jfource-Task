import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export default function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        role: "USER"
    });

    // Handle Input Change
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password Validation
        if (user.password !== user.cpassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        try {

            const data = {
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            };

            const res = await axios.post(
                "http://localhost:8080/auth/register",
                data
            );

            console.log(res.data);

            alert("Registration Successful");

            // Clear Form
            setUser({
                name: "",
                email: "",
                password: "",
                cpassword: "",
                role: "USER"
            });

            // Redirect to Login Page
            navigate("/");

        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };

    return (
        <>
            <div className="register">

                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />

                    <br />

                    <input
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                        value={user.cpassword}
                        onChange={handleChange}
                        required
                    />

                    <br /><br />

                    <select
                        name="role"
                        value={user.role}
                        onChange={handleChange}
                    >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>

                    <br /><br />

                    <button
                        className="btn"
                        type="submit"
                    >
                        Register
                    </button>

                    <p>
                        Already have an account?
                        <a href="/"> Login</a>
                    </p>

                </form>
            </div>
        </>
    );
}