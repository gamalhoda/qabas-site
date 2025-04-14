
function addRow(tableId) {
  const table = document.getElementById(tableId).getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  const cols = table.parentElement.getElementsByTagName("thead")[0].rows[0].cells.length;

  for (let i = 0; i < cols - 1; i++) {
    const cell = newRow.insertCell();
    cell.contentEditable = true;
  }

  const deleteCell = newRow.insertCell();
  deleteCell.innerHTML = '<button onclick="this.closest(\'tr\').remove()">❌</button>';
}
