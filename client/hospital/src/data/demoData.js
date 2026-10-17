export const initialPatients = [
  {
    _id: "p1",
    name: "John Smith",
    age: 35,
    gender: "Male",
    phone: "01700000001",
    disease: "Fever",
  },
  {
    _id: "p2",
    name: "Sarah Johnson",
    age: 28,
    gender: "Female",
    phone: "01700000002",
    disease: "Migraine",
  },
  {
    _id: "p3",
    name: "Michael Brown",
    age: 46,
    gender: "Male",
    phone: "01700000003",
    disease: "Diabetes",
  },
];

export const initialDoctors = [
  {
    _id: "d1",
    name: "Dr. Emily Carter",
    specialization: "Cardiology",
    experience: 10,
    phone: "01800000001",
  },
  {
    _id: "d2",
    name: "Dr. James Wilson",
    specialization: "Neurology",
    experience: 8,
    phone: "01800000002",
  },
];

export const initialAppointments = [
  {
    _id: "a1",
    patientName: "John Smith",
    doctorName: "Dr. Emily Carter",
    date: "2026-10-20",
    time: "10:00",
    status: "Scheduled",
  },
];