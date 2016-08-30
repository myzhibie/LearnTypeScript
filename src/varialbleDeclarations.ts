// function f(shouldInitialize:boolean){
//   if(shouldInitialize){
//     var x = 10;
//   }
//   return x;
// }

// function sumMatrix(matrix:number[][]){
//   var sum = 0;
//   for (var i = 0; i < matrix.length;i++){
//     var currentRow = matrix[i];
//     for (var i = 0; i < currentRow.length;i++){
//       sum += currentRow[i];
//     }
//   }
//   return sum;
// }

// function f(input:boolean){
  // let a = 100;
  // if(input){
  //   let b = a + 1;
  //   return b;
  // }
  // console.log(a);
  // let a = 111;
// }

//let不存在变量提升，不允许重复定义变量
//同一个作用域中不允许重复定义变量


// function theCityThatAlwaysSleeps(){
//   let getCity;
//   if(true){
//     let city = "Seattle";
//     getCity=function(){
//       return city;
//     }
//   }
//   return getCity();
// }

// function f(){
//   for (let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
//   }
// }

//const 类似于let,但是不能被重新赋值，如果是
//对象，可修改其属性
// const obj = {
//   name: "aaa",
//   number: 123
// };

// obj.name = "bbb";

//数组解构赋值
// let input = [1, 2];
// let [first, second] = input;
// console.log(first, second); 

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first);
// console.log(rest);

//对象解构赋值
let obj = {
  a: 'foo',
  b: 12,
  c: 'bar'
};

let {a, b} = obj;
console.log(a);
console.log(b);

export default obj;



