//union type,使用|隔开，表示任意一个类型
//只有两者都拥有的属性才能使用

function padLeft(value: string, padding: string | number) {
    return 123;
}

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    return {
        fly: function () { },
        layEggs: function () { }
    };
}

let pet = getSmallPet();
pet.layEggs();
//必须是两者都有的成员属性才能使用
//pet.swim();


//intersection type 必须拥有所有成员
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}

interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() { }
}

var jim = extend(new Person('Jim'), new ConsoleLogger());
var n = jim.name;
jim.log();


//使用type关键字可以给任意类型加一个别名
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person1 {
    name: string;
}
let people: LinkedList<Person1>;
let s = people.name;
s = people.next.name;
s = people.next.next.name;
s = people.next.next.next.name;
//字符串字面量类型，直接给字符串类型定义一个别名
type Easing = "ease-in" | "ease-out" | "ease-in-out";

//this type 代表一个包含类或者接口的子类或者它自己

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }

    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }

}


let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

let v1 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();


















