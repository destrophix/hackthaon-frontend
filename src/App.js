import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import AddDoctor from "./components/AddDoctor";
import ScheduleBooking from "./components/ScheduleBooking";
import DeleteSlot from "./components/DeleteSlot";
import CreateDoctor from "./components/CreateDoctor";
import CreatePatient from "./components/CreatePatient";
import Hospital from "./components/Hospital";
import AdminDashboard from "./components/AdminDashboard";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12 bg-light p-0">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<AddDoctor />} />
              <Route path="/create/doctor" element={<CreateDoctor />} />
              <Route path="/create/patient" element={<CreatePatient />} />
              <Route path="/hospital" element={<Hospital />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/schedulebooking/:scheduleId"
                element={<ScheduleBooking />}
              />
              <Route path="/deleteslot/:scheduleId" element={<DeleteSlot />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
