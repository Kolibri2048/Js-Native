const sm = document.getElementById('small')

const handler1 = () => {
    console.log('sdasd');
}

const handler2 = () => {
    console.log('Yo!');
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
sm.addEventListener()