import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import AppointmentTable from "../components/appointments/AppointmentTable";
import AppointmentForm from "../components/appointments/AppointmentForm";
import {
  initialPatients,
  initialDoctors,
  initialAppointments,
} from "../data/demoData";

export default function Appointments() {
  const [patients] = useState(initialPatients);
  const [doctors] = useState(initialDoctors);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showForm, setShowForm] = useState(false);

  function addAppointment(data) {
    setAppointments((current) => [
      { ...data, _id: crypto.randomUUID() },
      ...current,
    ]);
    setShowForm(false);
  }

  function changeStatus(id, status) {
    setAppointments((current) =>
      current.map((appointment) =>
        appointment._id === id ? { ...appointment, status } : appointment
      )
    );
  }

  return (
    <PageLayout
      title="Appointments"
      description="Schedule and track patient appointments"
      action={
        <Button onClick={() => setShowForm(true)}>+ New Appointment</Button>
      }
    >
      <div className="panel">
        <AppointmentTable
          appointments={appointments}
          onStatusChange={changeStatus}
        />
      </div>

      {showForm && (
        <Modal title="Book Appointment" onClose={() => setShowForm(false)}>
          <AppointmentForm
            patients={patients}
            doctors={doctors}
            onSubmit={addAppointment}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}
    </PageLayout>
  );
}