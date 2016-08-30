
import  "reflect-metadata";
//method constructor
//可以用来观察，改变，以及替换一个方法的定义
function f(){
    console.log("f():evaluated");
    return function(target,propertyKey:string,descriptor:PropertyDescriptor){
        console.log("f():called");
    }
}

function g(){
    console.log("g():evaluated");
    //三个参数，第一个是该类的构造函数，第二个是注解的成员名称，第三个
    //PropertyDescriptor该成员的
    return function(target,propertyKey:string,descriptor:PropertyDescriptor){
        console.log("g():called");
    }
}

class C{
    @f()
    @g()
    method(){}
}

//accessor decorator
class Point{
    private _x:number;
    private _y:number;
    constructor(x:number,y:number){
        this._x=x;
        this._y=y;
    }
    @configurable(true)
    get x(){return this._x;}

    @configurable(false)
    get y(){return this._y;}
}

function configurable(value:boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.configurable=value;
    }
}

let point:Point=new Point(1,2);
console.log(point.x,point.y); 



//class constructor
@sealed
class Greeter{
    //property Decortors,两个参数，第一个是构造函数，第二个是成员名
    @format("Hello,%s")
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    //参数注解，三个参数，构造函数，成员名，参数所在参数列表的index
    @enumerable(false)
    greet(@required name:string){
        return "hello, "+this.greeting;
    }
}

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function sealed(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(constructor);
}

function enumerable(value:boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.enumerable=value;
    }
}

const formatMetadataKey=Symbol('format');
function format(formatString:string){
    return Reflect.metadata(formatMetadataKey,formatString);
}
function getFormat(target:any,propertyKey:string){
    return Reflect.getMetadata(formatMetadataKey,target,propertyKey);
}









let greet:Greeter=new Greeter('lily');
console.log(greet.greeting);
let c=new C();
export default c;
