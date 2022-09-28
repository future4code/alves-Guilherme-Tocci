import { ITask, tasks } from "./tasks"


//ex 01
const toUpperCase = (str: string): string => {
	return str.toUpperCase()
}

//ex 02
const toSplit = (str: string): string[] => {
	return str.split("")
}
//ex 03
const toNumber = (str: string): number => {
	return Number(str)
}
//ex 04
const getLength = (str: string): number => {
	return str.length
}
//ex 05
const randomNumberBetween1And10 = (): number => {
    const min = 1
const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}
//ex 06
interface IUser {
    id: string,
    name: string,
    age: number
}

const users: IUser[] = [
    {
        id: "1",
        name: "Gui",
        age: 23
    },
    {
        id: "2",
        name: "Tuba",
        age: 27
    },
    {
        id: "3",
        name: "Labenu",
        age: 7
    }
]
//ex 07
const calcAverage = (list: number[]): number => {
    let totalSum = 0
    
    for (let n of list) {
        totalSum += n
    }

    const average = Math.ceil(totalSum / list.length)

    return average
}
//ex 08
const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}
// ex 09
const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}


