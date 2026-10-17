import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", icon: "📊" },
  { to: "/patients", label: "Patients", icon: "🧑‍⚕️" },
  { to: "/doctors", label: "Doctors", icon: "👨‍⚕️" },
  { to: "/appointments", label: "Appointments", icon: "📅" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="brand">MediCare<span>+</span></h2>
      <p className="sidebar-label">MAIN MENU</p>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span>🏥</span>
        <div>
          <strong>Hospital Admin</strong>
          <small>Management panel</small>
        </div>
      </div>
    </aside>
  );
}