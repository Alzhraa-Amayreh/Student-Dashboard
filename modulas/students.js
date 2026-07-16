import { loadStudents, saveStudents } from "./storage.js";

let students = [];

export function initStudents() {
  students = loadStudents();
}

export function getStudents() {
  return students;
}

export function addStudent(data) {
  const student = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    major: data.major,
    gpa: Number(data.gpa),
  };

  students.push(student);
  saveStudents(students);
}

export function editStudent(id, newData) {
  const student = students.find((s) => s.id === id);
  if (student) {
    student.name = newData.name;
    student.email = newData.email;
    student.major = newData.major;
    student.gpa = Number(newData.gpa);
    saveStudents(students);
  }
}

export function removeStudent(id) {
  students = students.filter((s) => s.id !== id);
  saveStudents(students);
}

export function searchStudents(word) {
  if (!word) return students;
  word = word.toLowerCase();
  return students.filter(
    (s) =>
      s.name.toLowerCase().includes(word) ||
      s.email.toLowerCase().includes(word),
  );
}

export function filterByMajor(major) {
  if (!major) return students;
  return students.filter((s) => s.major === major);
}

export function sortStudents(direction) {
  const copy = [...students];
  copy.sort((a, b) => {
    if (direction === "up") return a.gpa - b.gpa;
    return b.gpa - a.gpa;
  });
  return copy;
}
