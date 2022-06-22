interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [index: string]: any
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
}

console.log(teacher3);

export default Teacher;
