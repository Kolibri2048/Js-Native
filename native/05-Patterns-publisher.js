//Патерны = это готовые решение типовых задач
// publisher/subscriber

// Паттерны с которыми работал
Promise.then(function subscriber() {}) // резол промисв
store.subscriber(function subscriber() {}) // стэйт изменилсся
button.addEventListener('click', function subscriber() {}) // произошёл клик
setTimeout(function subscriber() {}, 1000) // прошла секнуда
useEffect(function subscriber() {}, []) // первый рендер

{/* <AppButton onClick=(function subscriber() {})/>  */}

button.addEventListener('click', axios.get1)
button.addEventListener('click', deleteFromList)




const button = {
    // хранилище для наших подписчиков
    subscribers: {
        'click' : [axios.get1, deleteFromList],
        'doubleClick': [],
        'mouseIn': [],
        'mouseOut': [],
    },
    //логик для подсписчиков
    addEventListener(eventName, subscriber) {
        this.subscribers[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
        // this.subscriber[eventName].shift()
        this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber)
    },
    click() {
        this.subscribers['click'].forEach(subscriber => subscriber())
    }
}


const consoleLog = () => {
    console.log('click');
}


button.addEventListener('click', consoleLog)


button.removeEventListener('click', consoleLog)