//Лексическое окружение, замыкание, рекурсия
// {} - лекс окр это сюда помещается на глоб уровне все наши переменные вызовы функции и т.д
// В enviromentVariables сюда записывается все наши переменные 
// outer - это ссылка на внешнее глобальное окружение т.к в примере globalLexicalEnviroment и есть глобальное окр то в outere будет null 
// т.е выше его ничего нет поэтому null
const globalLexicalEnviroment = {
    enviromentVariables: {

    },
    outer: null
}
//Чтобы так не расписывать будем записывать так
//globalLE{startEngine: Function, car2: undefind} -> null
 

// Мы можем вызвать так функцию так как она DECLARATION и в лекс окр она уже будет находиться но у нас не будет данных переменной car
let car = 'bmw' // globalLE {startEngine: Function, car: 'bmw'} -> null
var car2 = 'kia' //globalLE{startEngine: Function, car: 'bmw', car2: 'kia'} -> null

startEngine();
startEngine2() //- вызов этой функции не сработает будет ошибка


//В связи с тем что у нас функция funct Declaration соответсвенно она подлежит Hostingu всплытию
// function startEngine() {  // globalLE {car: 'bmw',startEngine: Function} -> null
//     // outer: globalLE - когда иницилизируется создаётся ссылка
//     // startEngine {} - когда запускается функция создаётся объект функц LE окружения
//     console.log(`Start ${car}`)
// }



// const startEngine2 = function() {  
//     //globalLE {startEngine: Function, car: 'audi', startEngine2: Function} -> null
//     console.log(`Start ${car}`)
// }
// startEngine2()



function startEngine() {  
    console.log(`Start ${car}`)
}

startEngine()

car = 'audi'

startEngine()


//Lesson for teach 




// лексическое окружение, замыкание, рекурсия
// globalLE{} -> null

// const globalLexicalEnvironment = {
// 	environmentVariables: {

// 	},
// 	outer: null
// }

//globalLE {startEngine: Function} -> null

// let car = "bmw"; //globalLE{startEngine: Function, car: 'bmw'} -> null

// function startEngine() {
//   // outer: globalLE
//   // startEngineLE {}
//   console.log(`Start ${car}`);
// }

// startEngine(); //globalLE{startEngine: Function, car: 'bmw'} -> null

// car = "audi"; //globalLE{startEngine: Function, car: 'audi'} -> null

// startEngine();

// const startEngine2 = function () {
//   //globalLE{startEngine: Function, car: 'bmw', startEngine: Function} -> null
//   console.log(`Start ${car}`);
// };
// startEngine2();
// startEngine();

// car = "audi";

// startEngine();

//gLE {}

// const a = 10; //gLE {foo: Func, foo2: Func, a: 10}
// const b = 20; //gLE {foo: Func, foo2: Func, a: 10, b: 20}
// // const c = 50; //gLE {foo: Func, foo2: Func, a: 10, b: 20, c = 50} -> null

// function foo() {
//   // fooLE{a: 30, b: 40, bar: Func} -> gLE
//   const a = 30;
//   const b = 40;
//   console.log(a);
//   foo2();
//   const bar = () => {
//     //{} -> fooLE
//     console.log(c);
//   };
//   bar();
// }

// foo();

// function foo2() {
//   // foo2LE{} -> gLE
//   console.log(b);
// }

//gLE {} -> null
// let count = 0;
// const couterCreator = () => {
//   //gLE {couterCreator: Func} -> null
//   //couterCreatorLE1 {count: 0} -> gLE
//   //couterCreatorLE2 {count: 0} -> gLE
//   let count = 0;

//   return () => {
//     //{} -> couterCreatorLE1
//     //{} -> couterCreatorLE2
//     // let count = 0;
//     console.log(++count);
//   };
// };

// // couterCreator()(); //gLE {couterCreator: Func, couter: Func} -> null
// // couterCreator()(); //gLE {couterCreator: Func, couter: Func} -> null
// // couterCreator()(); //gLE {couterCreator: Func, couter: Func} -> null

// const counter = couterCreator();
// const counter2 = couterCreator();

// counter();
// counter();
// counter();

// counter2();
// counter2();
// counter2();

// 2(4) -> 2 * 2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2(1)
// let count = 0;
function pow(x, n) {
    if (n === 1) {
      return x;
    }
    return x * pow(x, n - 1);
  }
  
  // console.log(pow(2, 4)); // 16
  
  // faq(5) -> 1 * 2 * 3 * 4 * 5 * 6
  
  function faq(x) {
    if (x === 1) {
      return x;
    }
    return x * faq(x - 1);
  }
  
  // console.log(faq(6));
  
  // fib(6) -> 0 + 1 + 1 + 2 + 3 + 5
  
  function fib(x) {
    if (x <= 1) {
      return x;
    }
    return fib(x - 1) + fib(x - 2);
  }
  
  console.log(fib(7));
  