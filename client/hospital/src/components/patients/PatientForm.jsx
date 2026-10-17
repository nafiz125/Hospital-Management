import Button from "../common/Button";

export default function PatientForm({ onSubmit, onCancel }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    onSubmit({
      name: form.get("name"),
      age: Number(form.get("age")),
      gender: form.get("gender"),
      phone: form.get("phone"),
      disease: form.get("disease"),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <label>
        Full Name
        <input name="name" required />
      </label>

      <label>
        Age
        <input name="age" type="number" min="0" required />
      </label>

      <label>
        Gender
        <select name="gender" required defaultValue="">
          <option value="" disabled>Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        Phone
        <input name="phone" required />
      </label>

      <label className="full-width">
        Condition
        <input name="disease" required />
      </label>

      <div className="form-actions full-width">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Add Patient</Button>
      </div>
    </form>
  );
}