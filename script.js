
function addTask() {
  const task = document.getElementById('task').value;
  const person = document.getElementById('person').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;
  const status = document.getElementById('status').value;
  const notes = document.getElementById('notes').value;

  const table = document.getElementById('mainTaskTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${task}</td>
    <td>${person}</td>
    <td>${start}</td>
    <td>${end}</td>
    <td>${status}</td>
    <td>${notes}</td>
    <td><button onclick="deleteRow(this)">❌</button></td>
  `;

  document.getElementById('task').value = '';
  document.getElementById('person').value = '';
  document.getElementById('start').value = '';
  document.getElementById('end').value = '';
  document.getElementById('status').value = 'لم يبدأ';
  document.getElementById('notes').value = '';
}

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.remove();
}

function addNewTable() {
  const area = document.getElementById('newTablesArea');
  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr><th>المهمة</th><th>المسؤولة</th><th>تاريخ البدء</th><th>تاريخ الانتهاء</th><th>الحالة</th><th>ملاحظات</th><th>🗑️</th></tr>
    </thead>
    <tbody>
      <tr>
        <td contenteditable></td>
        <td contenteditable></td>
        <td contenteditable></td>
        <td contenteditable></td>
        <td contenteditable></td>
        <td contenteditable></td>
        <td><button onclick="this.closest('tr').remove()">❌</button></td>
      </tr>
    </tbody>
  `;
  area.appendChild(table);
}
