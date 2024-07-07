let age = 18
let age2 = age // 18
var a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentCount: 10,
    isOnline: true,
    students: ['Ivan', 'andrey', 'farid'],
    classRoom: {
        teatcher: {
            name: 'wew',
            age: 18
        }
    }
}

// var b = a
// Нам надо скопировать объект - но это поверхностно копирование т.е у нас не копируется все отсльные вложенные объекты
var b = {...a}
b.classRoom = {...a.classRoom}
b.classRoom.teatcher = {...a.classRoom.teatcher}
b.students = [...a.students]
// b.classRoom.teatcher.name = 'Dmitriy'
// console.log(b);
// console.log(a);