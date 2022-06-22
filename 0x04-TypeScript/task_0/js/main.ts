interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Don',
    age: 25,
    location: 'New York'
}

const student2: Student = {
    firstName: 'Sara',
    lastName: 'Kelly',
    age: 21,
    location: 'Los Angels'
}

const studentsList: Array<Student> = [student1, student2]

const style = `
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    table, tr, th, td {
        border: 1px solid #ddd;
        text-align: left;
    }

    table {
        border-collapse: collapse;
        margin: 20px 0 0 20px;
    }

    thead, td, th {
        padding: 15px;
      }
`

const viewStudents = (students: Array<Student>): void => {
    const table = document.createElement('table')
    const headRow = document.createElement('tr')
    const body = document.createElement('tbody')

    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>')
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>')

    for (const student of students) {
        const bodyRow = document.createElement('tr')
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`)
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`)
        body.insertAdjacentElement('beforeend', bodyRow)
    }

    table.insertAdjacentElement('beforeend', headRow)
    table.insertAdjacentElement('beforeend', body)
    document.body.insertAdjacentElement('beforeend', table)
}

viewStudents(studentsList)
const css = document.createElement('style')
css.innerHTML = style
document.head.insertAdjacentElement('beforeend', css)

export default Student; viewStudents;
