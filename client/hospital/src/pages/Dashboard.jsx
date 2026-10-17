import { Link } from "react-router-dom";
import StatCard from "../components/common/StatCard";
import PageLayout from "../components/layout/PageLayout";
import {
  initialPatients,
  initialDoctors,
  initialAppointments,
} from "../data/demoData";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Patients",
      value: initialPatients.length,
      icon: "🧑‍⚕️",
      color: "blue",
    },
    {
      title: "Total Doctors",
      value: initialDoctors.length,
      icon: "👨‍⚕️",
      color: "green",
    },
    {
      title: "Appointments",
      value: initialAppointments.length,
      icon: "📅",
      color: "purple",
    },
    {
      title: "Departments",
      value: 6,
      icon: "🏥",
      color: "orange",
    },
  ];

  return (
    <PageLayout
      title="Dashboard"
      description="Overview of your hospital activities"
    >
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="panel quick-actions">
        <h2>Quick Actions</h2>
        <Link to="/patients" className="action-link">Manage Patients →</Link>
        <Link to="/doctors" className="action-link">Manage Doctors →</Link>
        <Link to="/appointments" className="action-link">
          Manage Appointments →
        </Link>
      </div>
    </PageLayout>
  );
}