//泛型函数
function identity<T>(arg:T):T{
  return arg;
}

//let output = identity<string>('myString');

//让编译器自己去推断
let output = identity('myString');
console.log(output);

function loggingIdentity<T>(arg:T[]):T[]{
  console.log(arg.length);
  return arg;
}
console.log(loggingIdentity(["aaa", 1, 2]));


//let myIdentity: <T>(arg: T) => T = identity;
let myIdentity: GenericIdentityFn<number> = identity;

//泛型接口

interface GenericIdentityFn<T>{
  (arg: T): T;
}

//泛型类
class GenericNumber<T>{
  zeroValue:T;
  add: (x: T, y: T) => T;
}


let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add=function(x,y){
  return x + y;
}


console.log(myGenericNumber.add(1, 2));
export default identity;