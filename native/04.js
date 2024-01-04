const todoListID_1 = '1'
const todoListID_2 = '2'

// Example 1 struct Date
const todoLists = [,
    {
        id: todoListID_1,
        title: 'What to lear',
        filter: 'all',
        // tasks: [
        //     {id: '3', title: 'HTML', isDone: true},
        //     {id: '4', title: 'CSS', isDone: true},
        //     {id: '5', title: 'React', isDone: true},
        // ],
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: '6', title: 'MILK', isDone: true},
        //     {id: '7', title: 'BEER', isDone: true},
        //     {id: '8', title: 'MEAT', isDone: true},
        // ],
    },
]

// Example 2 struct Date
// const tasks = [
//     //'What to learn ',id = '1'
//     {id: '3', todoListID: '1', title: 'HTML', isDone: true},
//     {id: '4', todoListID: '1', title: 'CSS', isDone: true},
//     {id: '5', todoListID: '1', title: 'React', isDone: true},

//     //'What to buy ',id = '2'
//     {id: '6', todoListID: '2', title: 'MILK', isDone: true},
//     {id: '7', todoListID: '2', title: 'BEER', isDone: true},
//     {id: '8', todoListID: '2', title: 'MEAT', isDone: true},
// ]


// Example 3 struct Date
const tasks = {
    [todoListID_1]: [ // '1'
        {id: '3', title: 'HTML', isDone: true},
        {id: '4', title: 'CSS', isDone: true},
        {id: '5', title: 'React', isDone: true},
    ],
    [todoListID_2]: [ // '2'
        {id: '6', title: 'MILK', isDone: true},
        {id: '7', title: 'BEER', isDone: true},
        {id: '8', title: 'MEAT', isDone: true},
    ]
}


console.log(tasks[todoListID_1]);


// id 4 = 4 delete 

// Берём  наши таски 
const todoListsTasks = tasks[todoListID_1]
//  фильтруем
const filteredTask = todoListsTasks.filter(t => t.id !== '4')
// создаём копию нашей структуры tasks
const copyTasks = {...tasks} 
// Помещаем отфильтрованные таски в нашу копию массива
copyTasks[todoListID_1] = filteredTask
console.log(copyTasks);

console.log({...copyTasks, [todoListID_1] : copyTasks[todoListID_1].filter(t => t.id !== '4')});


////


const todoListsOK = [
    {
        id: '1',
        title: 'What to lear',
        filter: 'all',
    },
    {
        id: '2',
        title: 'What to buy',
        filter: 'all',
    },
    {
        id: '3',
        title: 'What to read',
        filter: 'all',
    },
]

//res how we need

// const objTodoList = {
//     '1': {
//         id: '1',
//         title: 'What to lear',
//         filter: 'all',
//     },
//     '2': {
//         id: '2',
//         title: 'What to buy',
//         filter: 'all',
//     },
//     '3': {
//         id: '3',
//         title: 'What to read',
//         filter: 'all',
//     }
// }

const objTodoLists = {}

for (let i = 0; i < todoListsOK.length; i++) {
    objTodoLists[todoListsOK[i].id] = todoListsOK[i]// создаём новый ключ и присваеваем значени которые прошли цикл
    // delete objTodoLists[todoListsOK[i].id].id

}

console.log(objTodoLists);


const nums = [1,2,3,4,5]

nums.reduce((acc, el) => acc + el, 0)

// 0 + 1 => 1
// 1 + 2 => 3
// 3 + 3 => 6
// 6 + 4 => 10
// 10 + 5 => 15
//=> 15


console.log(todoListsOK.reduce((acc, el) => {
    acc[el.id] = el
    // delete acc[el.id].id
    return acc
}, {}));


console.log(todoListsOK.reduce((acc, el) => {
    if(el.id !== '2') {
        acc.push(el)
    }
    return acc
}, []));