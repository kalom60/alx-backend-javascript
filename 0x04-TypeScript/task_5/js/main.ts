export interface MajorCredits {
    credits: number & { __brand: 'MajorCredits.credits' }
}

export interface MinorCredits {
    credits: number & { __brand: 'MinorCredits.credits' }
}

export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    return { credits: subject1.credits + subject2.credits } as MajorCredits
}

export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return { credits: subject1.credits + subject2.credits } as MinorCredits

}