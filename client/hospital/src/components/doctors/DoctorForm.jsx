import Button from "../common/Button";

export default function DoctorForm({ onSubmit, onCancel }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    onSubmit({
      name: form.get("name"),
      specialization: form.get("specialization"),
      experience: Number(form.get("experience")),
      phone: form.get("phone"),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <label>
        Doctor Name
        <input name="name" required />
      </label>
      <label>
        Specialization
        <input name="specialization" required />
      </label>
      <label>
        Experience (years)
        <input name="experience" type="number" min="0" required />
      </label>
      <label>
        Phone
        <input name="phone" required />
      </label>
      <div className="form-actions full-width">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Add Doctor</Button>
      </div>
    </form>
  );
}