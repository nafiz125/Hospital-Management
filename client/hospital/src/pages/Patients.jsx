import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import PatientTable from "../components/patients/PatientTable";
import PatientForm from "../components/patients/PatientForm";
import { initialPatients } from "../data/demoData";

export default function Patients() {
  const [patients, setPatients] = useState(initialPatients);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  function addPatient(data) {
    setPatients((current) => [
      { ...data, _id: crypto.randomUUID() },
      ...current,
    ]);
    setShowForm(false);
  }

  function deletePatient(id) {
    if (window.confirm("Delete this patient?")) {
      setPatients((current) => current.filter((p) => p._id !== id));
    }
  }

  const filteredPatients = patients.filter((patient) =>
    `${patient.name} ${patient.phone} ${patient.disease}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <PageLayout
      title="Patients"
      description="Manage hospital patient records"
      action={<Button onClick={() => setShowForm(true)}>+ Add Patient</Button>}
    >
      <div className="panel">
        <input
          className="search-input"
          placeholder="Search patients..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <PatientTable
          patients={filteredPatients}
          onDelete={deletePatient}
        />
      </div>

      {showForm && (
        <Modal title="Add New Patient" onClose={() => setShowForm(false)}>
          <PatientForm
            onSubmit={addPatient}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
      )}
    </PageLayout>
  );
}