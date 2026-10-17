import Button from "../common/Button";

export default function AppointmentForm({
  patients,
  doctors,
  onSubmit,
  onCancel,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const patientId = form.get("patientId");
    const doctorId = form.get("doctorId");

    const patient = patients.find((p) => p._id === patientId);
    const doctor = doctors.find((d) => d._id === doctorId);

    if (!patient || !doctor) return;

    onSubmit({
      patientId,
      doctorId,
      patientName: patient.name,
      doctorName: doctor.name,
      date: form.get("date"),
      time: form.get("time"),
      status: "Scheduled",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <label>
        Patient
        <select name="patientId" required defaultValue="">
          <option value="" disabled>Select patient</option>
          {patients.map((p) => (
            <option key={p._id} value={p._id}>{p.name}</option>
          ))}
        </select>
      </label>

      <label>
        Doctor
        <select name="doctorId" required defaultValue="">
          <option value="" disabled>Select doctor</option>
          {doctors.map((d) => (
            <option key={d._id} value={d._id}>{d.name}</option>
          ))}
        </select>
      </label>

      <label>
        Date
        <input name="date" type="date" required />
      </label>

      <label>
        Time
        <input name="time" type="time" required />
      </label>

      <div className="form-actions full-width">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Book Appointment</Button>
      </div>
    </form>
  );
}