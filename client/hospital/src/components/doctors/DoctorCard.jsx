export default function DoctorCard({ doctor, onDelete }) {
  return (
    <article className="doctor-card">
      <div className="doctor-avatar">👨‍⚕️</div>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience} years of experience</p>
      <p>{doctor.phone}</p>
      <button className="delete-button" onClick={() => onDelete(doctor._id)}>
        Delete
      </button>
    </article>
  );
}