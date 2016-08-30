function add(x:number,y:number):number{
  return x + y;
}

//let myAdd = function(x: number, y: number): number { return x + y; };


let myAdd: (baseValue: number, increment: number) => number =
  function(x: number, y: number): number { return x + y; };

//可选参数定义,必须位于参数列表最后一个
function buildName(firstName:string,lastName?:string){
  if (lastName) return firstName + " " + lastName
  else
    return firstName;
}

//默认参数
function buildName1(firstName: string, lastName="Smith") {
  return firstName + " " + lastName;
}
//默认参数不需要位于参数列表的最后一个，这是与可选参数的
//区别，可以通过传入undefined来获取默认参数
function buildName2(lastName = "Smith", firstName: string) {
  return firstName + " " + lastName;
}

//reset参数，函数签名使用数组定义，传参时逐个传递
function buildName3(firstName: string,...resetOfName:string[]) {
  return firstName + " " + resetOfName.join(" ");
}

//函数重载

let suits = ["hearsts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };

function pickCard(x:any):any {
  if(typeof x=='object'){
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  else if(typeof x=='number'){
    let pickedCard = Math.floor(x / 13);
    return { suit: suits[pickedCard], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];

console.log(pickedCard1);

let pickedCard2 = pickCard(15);
console.log(pickedCard2);





let result1 = buildName("Bob", "Adams");
let result2 = buildName("Bob");
let result3 = buildName1("Bob");
let result4 = buildName2(undefined, "Bob");
let result5 = buildName3("Bob", "Smith", "Green");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
export default buildName;