const todoListID_1 = '1'
const todoListID_2 = '2'

// Example 1 struct Date
const todoLists = [,
    {
        id: '1',
        title: 'What to lear',
        filter: 'all',
        // tasks: [
        //     {id: '3', title: 'HTML', isDone: true},
        //     {id: '4', title: 'CSS', isDone: true},
        //     {id: '5', title: 'React', isDone: true},
        // ],
    },
    {
        id: '2',
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
    [todoLists[0].id]: [ // '1'
        {id: '3', title: 'HTML', isDone: true},
        {id: '4', title: 'CSS', isDone: true},
        {id: '5', title: 'React', isDone: true},
    ],
    [todoLists[1].id]: [ // '2'
        {id: '6', title: 'MILK', isDone: true},
        {id: '7', title: 'BEER', isDone: true},
        {id: '8', title: 'MEAT', isDone: true},
    ]
}