//Методы массивов, Полифилы
const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
        // isStudent: true
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
    
]

// Method map
// const name = ['Bob','Alex', 'Nick','John']
const getNames = (array) => {
    const result = []
    const getMapetHelp = (el) => el.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getMapetHelp(array[i]);
        
    }
    return result
}

const getStudents = (array) => {
    const result = []
    const getMapetHelp = (el) => ({...el, isStudents: true})
    for (let i = 0; i < array.length; i++) {
        result[i] = getMapetHelp(array[i]);
        
    }
    return result
}

const getMappedArray = (array, mapFunct) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = mapFunct(array[i]);
        
    }
    return result
}

console.log(getMappedArray(students, (el) => el.name));
console.log(getMappedArray(students, (el) => ({...el, isStudents: true})));
console.log(getMappedArray(students, (el) => ({...el, isMarried: true})));


// const numbers = [1, -2, 5, -4] // => массив квадратов положительных чисел

// numbers
//     .filter(n => n > 0)
//     .map(n => n**2)

//Method push

const myPush = (array, el) => {
    array[array.length] = el
    return array.length
}



//Method filter 
const getFilteredArray = (array, filterFucnt) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if(filterFucnt(array[i]) === true) {
            myPush(result, array[i])
        }
        
    }
    return result
}

console.log(getFilteredArray(students, el => el.scores > 100));


