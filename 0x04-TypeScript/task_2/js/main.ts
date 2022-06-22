export interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

export interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

export const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number') {
        if (salary >= 500) return new Director()
        else return new Teacher()
    }

    if (typeof salary === 'string') {
        salary = parseInt(salary.slice(1))
        if (salary >= 500) return new Director()
        else return new Teacher()
    }
}

export const isDirector = (employee: Director | Teacher) => {
    return employee instanceof Director
}

export const executeWork = (employee: Director | Teacher) => {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks()
    }
    return (employee as Teacher).workTeacherTasks()
}

export type Subjects = ('Math' | 'History')

export const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') return 'Teaching Math'
    if (todayClass === 'History') return 'Teaching History'
}