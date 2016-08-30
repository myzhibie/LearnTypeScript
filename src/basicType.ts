/**
基本类型Boolean,Number,String,Array,Tuple,Enum
Any,Void

**/


//Boolean

let isDone: boolean = true;

//Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = 'red';
color = 'green';
//color = 3;


let name: string = 'muyang';

let age: number = 28;

let sentence: string = `hello,my name is ${name} and I am ${age} years old`;
//console.log(sentence);

//Array
let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3];

// for (let [i, key] of list.entries()) {
//   console.log(list[i]);
// } 
//Tuple,定义一个数组，该数组中每个元素的数据类型和数组的长度是已知的
let x: [string, number];
x = ['123', 10];
x[2] = 14;
//可以添加元素，但是必须和之前定义的类型一致
//console.log(x);

//Enum

enum Color { Red, Green, Blue };
let c: Color = Color.Green;
//默认从0开始
//console.log(c);
//可以从1开始

// enum Color1 { Red = 1, Green, Blue };
// let d: Color1 = Color1.Green;
// console.log(d);

enum Color2{ Red = 1, Green = 2, Blue = 4 };
//let e: Color2 = Color2.Green;
//可以自定义枚举中某个元素的值
//console.log(e);

let colorName: string = Color2[2];
console.log(colorName);


//Any类型，事先不知道的数据类型，使用any类型跳过编译时的运行类型监测

let notSure: any = 4;

notSure = "eeree";

notSure = 123;

let listNotSure: any[] = [1, true, 'free'];

console.log(listNotSure[0]);


//Void类型，通常用于函数没有返回值

function nullFunc():void{
  console.log('nullFunc');
} 

nullFunc();

//类型推断，as或者泛型，用户自己指定any类型变量的类型

let someValue: any = 'this is a string';
//let strLength: number = (<string>someValue).length;
//推荐使用as
let strLength: number = (someValue as string).length;
console.log(strLength);



















export default sentence;