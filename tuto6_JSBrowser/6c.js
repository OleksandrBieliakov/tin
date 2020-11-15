function validateStudentID (studentID) {
  const regex = /^\d{5}$/
  return regex.test(studentID.toString())
}

function validateDomain (email) {
  const regex = /@pjwstk\.edu\.pl$/i
  return regex.test(email)
}

function validateEmail (email, studentID) {
  const regex = new RegExp('^s' + studentID + '@pjwstk\.edu\.pl$', 'i')
  return regex.test(email)
}

const studentID = document.getElementById('studentID')
const email = document.getElementById('email')
const emailLabel = document.getElementById('email-label')

function validateForm () {
  const OKstudentID = validateStudentID(studentID.value)
  if (OKstudentID) {
    studentID.style.backgroundColor = 'green'
  } else {
    studentID.style.backgroundColor = 'red'
    email.style.backgroundColor = 'red'
    emailLabel.textContent = 'School email (Invalid StudentID, must match StudentID)'
  }
  let OKEmail = false
  if (!validateDomain(email.value)) {
    email.style.backgroundColor = 'red'
    emailLabel.textContent = 'School email (Must have domain @pjwstk.edu.pl)'
  } else if (OKstudentID) {
    OKEmail = validateEmail(email.value, studentID.value)
    if (OKEmail) {
      email.style.backgroundColor = 'green'
    } else {
      studentID.style.backgroundColor = 'red'
      email.style.backgroundColor = 'red'
      emailLabel.textContent = 'School email (Must match StudentID)'
    }
  }
  return OKstudentID && OKEmail
}
