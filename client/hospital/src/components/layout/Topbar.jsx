import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/patients": "Patients",
  "/doctors": "Doctors",
  "/appointments": "Appointments",
};

export default function Topbar() {
  const location = useLocation();

  return (
    <header className="topbar">
      <div>
        <h2>{titles[location.pathname] || "Hospital Management"}</h2>
        <p>Welcome back! Here's your hospital overview.</p>
      </div>

      <div className="profile">
        <div className="avatar">A</div>
        <div>
          <strong>Administrator</strong>
          <small>Hospital Admin</small>
        </div>
      </div>
    </header>
  );
}