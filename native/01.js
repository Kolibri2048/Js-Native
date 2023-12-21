// const users = [
//     {
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//     },
//     {
//         name: 'Alex',
//         age: 24,
//         isMarried: true,
//     },
//     {
//         name: 'Olya',
//         age: 21,
//         isMarried: true,
//     },
//     {
//         name: 'Nick',
//         age: 29,
//         isMarried: false,
//     },
// ]

// const superUser = {
//     id: 10,
//     name: 'sdasdad',
//     userName: 'Moriach.Stanton',
//     email: 'sdasda@gmail.com',
//     address: {
//         street: 'Katte Trun',
//         suite: 'Suite 1998',
//         city: 'Lecs',
//         zipcode: '12313-213',
//         geo: {
//             lat: '-39.223',
//             lng: '57.3123'
//         },
//     },
//     phone: '12313-123-123',
//     website: 'adad.net',
//     company: {
//         name: 'Hoewe',
//         catchPharese: 'Cewrer',
//         bs: 'sdsad',
//     }
// }

// number, string, undefind, null, symbol, boolean, BigInt. - примитивы данные которые сохраняются в переменные по значению.
// array, object.  - ссылочные 

// const a = 3

// const b = a

// const user = {
//     name: 'Bob'
// }

// const newUser = user  // скопировали ссылку если мы поменяем что то в новой перемонной то это измениться и в старой
// console.log(newUser.name);
// //Bob
// user.name = 'Donald';
// console.log(newUser.name)
// // Donald


// const a = {}
// const b = {}

// console.log(a === b) // false так как мы сравниваем ссылки



// C - Create
// R - Read
// U - Update
// D - Delete

//Create

// const obj = {} // - literal || new Object()
// const arr = [] // new Array()

// mutible, unmutible - mutible - мы можем изм входящие данные. - unmutible - наоборот т.е мы должны создать новую копию и рабоать с ней


const users = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
    },
    {
        name: 'Olya',
        age: 21,
        isMarried: true,
    },
    {
        name: 'Nick',
        age: 29,
        isMarried: false,
    },
]

//READ
console.log(users[1].name);

//UPDATE
const newUser = {
    name: 'Donald',
    age: 29,
    isMarried: false,
}

users.push(newUser)
// console.log(users[users.length - 1].name)


// создали копию худший варик
// const copyUsers = []
// for(let i = 0; i < users.length; i++) {
//     copyUsers.push(users[i])
// }

// copyUsers.push(newUser)

// Второй способ
//Поверхностное копирование
const copyUsers = [...users, newUser]  // ...users скопировали наш users. newUser - добавили новго. Но если у нас есть методы то они не скопируются

//объект с методами
// const car = {
//     brand: 'BMW',
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }

// car.startEngine();


// иммутабельно скопируем с пмомощью спрэд оператора
const superUser = {
    id: 10,
    name: 'sdasdad',
    userName: 'Moriach.Stanton',
    email: 'sdasda@gmail.com',
    address: {
        street: 'Katte Trun',
        suite: 'Suite 1998',
        city: 'Lecs',
        zipcode: '12313-213',
        geo: {
            lat: '-39.223',
            lng: '57.3123'
        },
    },
    phone: '12313-123-123',
    website: 'adad.net',
    company: {
        name: 'Hoewe',
        catchPharese: 'Cewrer',
        bs: 'sdsad',
    }
}

const newSuperUser = {
    ...superUser,
     address: {...superUser.address, city:'London'}
}
// 1. ...superUser - копируем наш объект
// 2. address:  address: то что мы хотим перезатереть т.е мы хотим записать новое значение делаем так же как и в объекте т.е через :
// 3. {} - так как это объект нужно исп {}
// 4. {...superUser.address} - и дальше мы копируем то что находится в объекте address
// 5. {...superUser.address, city:'London'} - ,city:'London' мы перезатераем значение на новое

console.log(newSuperUser)


const newSuperUser2 = {
    ...superUser,
    street: 'SS',
     address: {...superUser.address,
         geo: {...superUser.address.geo, lng: '60', lat: '60'},
    },
};

console.log(newSuperUser2);
// и таким образом мы сделали глубокое копирование и изначальный объект superUser не имзенился
console.log(superUser) ;

const copySuperUsers = structuredClone(superUser)


