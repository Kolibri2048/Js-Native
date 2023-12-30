const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = () => {
    console.log(1);
}

const handler2 = () => {
    console.log(2);
}

const handler3 = () => {    
    console.log(3);
}

//Если мы хотим передать параметром какой то текс то нам надо будет создать ещё одну коллбэк функцию для того что бы вызвать её
const textLogger = (text) => {
    console.log(text);
}

const onClickLogger = () => {
    textLogger('Yo')
}

// Нельзя вызвать два обрабочика событий на 13 строке у нас будет перезначение
// sm.onclick = handler1
// sm.onclick = handler2
// //Для того чтобы обработчик снять передают пустую строку либо же null
// sm.onclick = null
// // Если бы мы вызвали вот так sm.onClickLogger('Yo) то это бы функция вызвалась сразу же без клика
// sm.onclick = onClickLogger
// onclick мы исп когда у нас очень простой код это наследие прошлого



//Поэтому сейчас исп addEventListener()
// addEventListenerss позволяет вешать нам столько обработчиков сколько нужно
// Также addEventListenerss принимает ещё несколько доп настроек 3 параметром которые можно использовать для его контролирование
sm.addEventListener('click', handler1, {once: true})
// sm.addEventListener('click', handler2)
// //Удаляет событие
// sm.removeEventListener('click', handler1)
// sm.addEventListener('click', handler1)
// md.addEventListener('click', handler2)
// bg.addEventListener('click', handler3)
//Нельзя добавлять анонимную функцию так как её потом не возможно удалить она ни на что не ссылается sm.addEventListener('click', () => handler('sd))
sm.addEventListener('click', handler1)
md.addEventListener('click', handler2)
// captue: true - вызываем нашу функцию на стадии погружение
bg.addEventListener('click', handler3, {capture: true})