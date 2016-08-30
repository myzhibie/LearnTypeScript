// class Greeter{
//   greeting: string;
//   constructor(message:string){
//     this.greeting = message;
//   }
//   greet(){
//     return "hello, " + this.greeting;
//   }

// }
// class Animal{
//   //默认public,都可获取
//   public name: string;
//   public constructor(theName: string) { this.name = theName;}
//   public move(distanceInMeters:number=0){
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// //private在本类外部不允许获取
// class Snake extends Animal{
//   constructor(name: string) { super(name);}

//    move(distanceInMeters=5){
//     console.log('slithering...');
//     super.move(distanceInMeters);
//   }
// }

// //如果两个类含有private,protected即使他们的属性方法都是一致的
// //但是这两个类不兼容，不能相互赋值
// class Horse extends Animal{
//   constructor(name: string) { super(name);}
//   move(distanceInMeters=45){
//     console.log('Galloping...');
//     super.move(distanceInMeters);
//   }
// }

// let sam = new Snake('Sammy the Python');

// let tom: Animal = new Horse('Tommy the palomino');

//sam.move();
//可以相互赋值，因为其类定义中不存在private或者protected关键字
// sam = tom;
// tom.move(34);
//protected关键字允许子类的实例使用protected修饰的属性或者方法

// class Person{
//   protected name: string;
//   constructor(name: string) { this.name = name;}
// }


// class Person{
//   constructor(protected name:string){}
// }
// class Employee extends Person{
//   private department: string;
//   constructor(name:string,department:string){
//     super(name);
//     this.department = department;
//   }
//   public getElevatorPitch(){
//     return `Hello,my name is ${this.name} and I work in ${this.department}`;
//   } 
// }

//可以直接使用protected，public，private在构造函数的参数里
//来定义类的属性


// let howard = new Employee('Howrrd', "Sales");
// let person = new Person('person');
// console.log(Person.name);

//get set控制获取或设置类属性的逻辑
// let passcode = "secret passcode";

// class Employee{
//   private _fullName: string;
//   get fullName():string{
//     return this._fullName;
//   }

//   set fullName(newName:string){
//     if(passcode&&passcode=='secret passcode'){
//       this._fullName = newName;
//     }else{
//       console.log("Error:unauthrized update of employee!");
//     }
//   }
// }

// let employee = new Employee();
// employee.fullName = 'Bob Smith';
// if(employee.fullName){
//   console.log(employee.fullName);
// }

//static类型属性,直接使用类名.索引来获取使用
class Grid{
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number;}){
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale:number){}
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(Grid.origin);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

//抽象类Abstract class,不能被实例化，只能被继承，和接口相比
//抽象类可以包含实现细节,被abstract关键字修饰的方法不能有是实现细节
//只能继承类去实现

// abstract class Animal{
//   abstract makeSound(): void;
//   move():void{
//     console.log('roaming the earth...');
//   }
// }

// abstract class Department{
//   constructor(public name:string){}
//   printName():void{
//     console.log("Department name: " + this.name);
//   }
//   abstract printMeeting(): void;
// }


// class AccountingDepartment extends Department{
//   constructor(){
//     super('AccountingDepartment');
//   }

//   printMeeting():void{
//     console.log('The Accounting Department meets each Monday at 10am.');
//   }

//   generateReports():void{
//     console.log("Generating accounting reports...");
//   }
// }
// let department: AccountingDepartment;
// //error,不能直接实例化抽象类型
// //department = new Department();

// department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// department.generateReports();

//error
//let animal = new Animal();













export default Grid;