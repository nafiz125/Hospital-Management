import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import DoctorCard from "../components/doctors/DoctorCard";
import DoctorForm from "../components/doctors/DoctorForm";
import { initialDoctors } from "../data/demoData";

export default function Doctors() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [showForm, setShowForm] = useState(false);

  function addDoctor(data) {
    setDoctors((current) => [
      { ...data, _id: crypto.randomUUID() },
      ...current,
    ]);
    setShowForm(false);
  }

  function deleteDoctor(id) {
    if (window.confirm("Delete this doctor?")) {
      setDoctors((current) => current.filter((d) => d._id !== id));
    }
  }

  return (
    <PageLayout
      title="Doctors"
      description="Manage hospital doctors and specialties"
      action={<Button onClick={() => setShowForm(true)}>+ Add Doctor</Button>}
    >
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            doctor={doctor}
            onDelete={deleteDoctor}
          />
        ))}
      </div>

      {showForm && (
        <Modal title="Add New Doctor" onClose={() => setShowForm(false)}>
          <DoctorForm
            onSubmit={addDoctor}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}
    </PageLayout>
  );
}