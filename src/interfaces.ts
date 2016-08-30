// interface LabeledValue{
//   label: string;
// }

// function printLabel(labelObj:LabeledValue){
//   console.log(labelObj.label);
// } 

// let myObj = { label: "size of 10 object", size: 10 };
// printLabel(myObj);

// interface SqaureConfig{
//   color?: string;
//   width?: number;
// }

function createSqaure(config: SqaureConfig): { color: string; area:number}{
  let newSquare = { color: 'white', area: 100 };
  if(config.color){
    newSquare.color = config.color;
  }
  if(config.width){
    newSquare.area = config.width * config.width;
  }
  return newSquare;
} 

// let mySquare = createSqaure({ color: "balack" });

//接口定义函数类型

interface SearchFunc{
  (source:string,subString:string):boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString:string){
  let result = source.search(subString);
  if(result==-1){
    return false;
  }else{
    return true;
  }
}

//可索引类型

interface StringArray{
  [index:number]:string
}


let myArray: StringArray;
myArray = ['bob', 'fred'];

console.log(myArray[0]);

//定义可索引类型的时候，键值只支持数字和字符串
//如果定了可索引类型，其他属性的值必须要符合可索引类型的
//定义
//定义错误
// interface NumberDictionary{
//   [index: string]: number;
//   length: number;
//   name: string;
// }

interface ClockInterface{
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface{
  currentTime: Date;
  setTime(d:Date){
    this.currentTime = d;
  }
  constructor(h:number,m:number){}
}

//interface之间可以继承

interface A{
  color: string;
}

interface B extends A{
  name: string;
}

let ab = <B>{};
ab.name = "name";
ab.color = 'red';









export default myArray;