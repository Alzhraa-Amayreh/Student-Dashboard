const STORAGE_KEY = "student_data";


let idCounter = 0;

/**
 * Generate unique ID
 */
function generateId() {
  idCounter += 1;
  return Date.now() + idCounter;
}

/**
 * Load students from Local Storage
 * Returns array of students or empty array if nothing saved
 */
export function loadStudents() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading from storage:", error);
  }
  return [];
}


export function saveStudents(students) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
}


export function getDemoData() {
  return [
    {
      id: generateId(),
      name: "Zhraa Amayreh",
      email: "zhraa@gmail.com",
      major: "Computer Science",
      gpa: 3.85,
    },
    {
      id: generateId(),
      name: "James Chen",
      email: "james@gmail.com",
      major: "Data Science",
      gpa: 3.72,
    },
    {
      id: generateId(),
      name: "Sofia Martinez",
      email: "sofia@gmail.com",
      major: "Software Engineering",
      gpa: 3.91,
    },
  ];
}
