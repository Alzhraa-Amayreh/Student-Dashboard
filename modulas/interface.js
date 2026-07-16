
export function renderTable(students) {
  const tbody = document.getElementById("studentsTableBody");

  tbody.innerHTML = "";

  if (students.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:40px; color:#888;">
                    No students yet. Add your first student!
                </td>
            </tr>
        `;
    return;
  }

  students.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${escapeHtml(student.name)}</td>
            <td>${escapeHtml(student.email)}</td>
            <td>${escapeHtml(student.major)}</td>
            <td>${student.gpa}</td>
            <td>
                <button class="edit-btn" data-id="${student.id}">Edit</button>
                <button class="delete-btn" data-id="${student.id}">Delete</button>
            </td>
        `;

    tbody.appendChild(row);
  });
}


export function showToast(message) {
  alert(message); 
}


export function getFormData() {
  return {
    name: document.getElementById("studentName").value.trim(),
    email: document.getElementById("studentEmail").value.trim(),
    major: document.getElementById("studentMajor").value.trim(),
    gpa: document.getElementById("studentGPA").value,
  };
}

export function clearForm() {
  document.getElementById("studentForm").reset();
}


function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
