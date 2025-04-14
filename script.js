
function addTask() {
  const task = document.getElementById('task').value;
  const person = document.getElementById('person').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;
  const status = document.getElementById('status').value;
  const notes = document.getElementById('notes').value;

  const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${task}</td>
    <td>${person}</td>
    <td>${start}</td>
    <td>${end}</td>
    <td>${status}</td>
    <td>${notes}</td>
    <td><button onclick="deleteTask(this)">❌</button></td>
  `;

  document.getElementById('task').value = '';
  document.getElementById('person').value = '';
  document.getElementById('start').value = '';
  document.getElementById('end').value = '';
  document.getElementById('status').value = 'لم يبدأ';
  document.getElementById('notes').value = '';
}

function deleteTask(btn) {
  const row = btn.parentElement.parentElement;
  row.remove();
}
