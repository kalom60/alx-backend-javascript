export interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

export interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
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

    workDirectorTasks(): string {
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