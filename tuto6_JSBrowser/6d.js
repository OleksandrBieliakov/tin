const table = document.getElementById('table')
const name = document.getElementById('name')
const email = document.getElementById('email')
const birthYear = document.getElementById('birthYear')

function addTableRow () {
  const row = document.createElement('tr')
  const nameCell = document.createElement('td')
  const emailCell = document.createElement('td')
  const birthYearCell = document.createElement('td')
  nameCell.textContent = name.value
  emailCell.textContent = email.value
  birthYearCell.textContent = birthYear.value
  row.appendChild(nameCell)
  row.appendChild(emailCell)
  row.appendChild(birthYearCell)
  table.appendChild(row)
}
