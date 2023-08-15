import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

import AddEvent from "./components/AddEvent";
import AllApplication from "./components/AllApplication";
import AdminList from "./components/Dashboard/AdminList";
import EventList from "./components/Dashboard/EventList";
import EventorList from "./components/Dashboard/EventorList";
import MainDashboard from "./components/Dashboard/MainDashboard";
import VolunteerList from "./components/Dashboard/VolunteerList";
import AdminRegister from "./components/Dashboard/auth/AdminRegister";
import EventorProfile from "./components/Dashboard/auth/EventorProfile";
import EventorRegister from "./components/Dashboard/auth/EventorRegister";
import Profile from "./components/Dashboard/auth/Profile";
import Settings from "./components/Dashboard/auth/Settings";
import VolunteerRegister from "./components/Dashboard/auth/VolunteerRegister";
import WelcomeLogin from "./components/Dashboard/auth/WelcomeLogin";
import EventDetails from "./components/EventDetails";
import Events from "./components/Events";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Volunteer from "./components/Volunteer";
import Home from "./pages/Home";

function App() {
  const userId = localStorage.getItem("userId");
  console.log(userId);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route
          path="/:id/events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
        <Route path="/:id/profile" element={<Profile />} />
        <Route path="/:id/allApplication" element={<AllApplication />} />
        <Route path="/:id/eventorProfile" element={<EventorProfile />} />
        <Route path="/:id/setting" element={<Settings />} />
        <Route path="/eventDetail/:id" element={<EventDetails />} />
        <Route path="/welcomeLogin" element={<WelcomeLogin />} />
        <Route path="/volunteerRegister" element={<VolunteerRegister />} />
        <Route path="/eventorRegister" element={<EventorRegister />} />
        <Route
          path="/addEvent"
          element={
            <RequireAuth>
              <AddEvent />
            </RequireAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainDashboard />} />
          <Route path="adminList" element={<AdminList />} />
          <Route path="adminCreate" element={<AdminRegister />} />
          <Route path="eventList" element={<EventList />} />
          <Route path="eventorList" element={<EventorList />} />
          <Route path="volunteerList" element={<VolunteerList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
