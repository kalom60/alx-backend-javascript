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


export interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};


export interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]} ${lastName}`
}

export interface IStudentClassConstructor {
    new(
        firstName: string,
        lastName: string
    ): IStudentClass
}

export interface IStudentClass {
    workOnHomework(): string
    displayName(): string
}

class StudentClass implements IStudentClass {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework() {
        return 'Currently working'
    }

    displayName() {
        return this.firstName
    }
}

export default Teacher; printTeacher; StudentClass;
