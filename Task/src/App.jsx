import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Component/Login Page/Login";
import Register from "./Component/Register Page/Register";
import Feedback from "./Component/Feedback/Feedback";
import Admin from "./Component/Admin Dashboard/Admin";
import ViewFeedback from "./Component/Page/view/ViewFeedback";
import EditFeedback from "./Component/Page/EditFeedback/EditFeedback";


function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/feedback"
        element={<Feedback />}
      />

      <Route
        path="/admin"
        element={<Admin />}
      />

      <Route
        path="/edit/:id"
        element={<EditFeedback />}
      />

      <Route
        path="/view/:id" element={< ViewFeedback/>}
      />

    </Routes>

  );
}

export default App;