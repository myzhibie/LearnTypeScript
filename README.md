##Why TypeScript
TypeScript is a superset of JavaScript which provides static typing,classes  and interfaces.With it you can enalbe IDE's  intellisense,debug your code easier and build more robust application,especially large project.From the point of view of a front end developer, TS means ES6+Typings System+other new featurs similar to other dynamic languages such as Java,C#.Angular2 aims to help developers with building large applictions so the ng2 team choose TypeScript instead of JavaScript. 
##About this repo
Learning  TypeScript from scratch is not an easy task for some beginners even if you are a good JSer.TypeScript is not out of box running in browser or back end. You may waste time to build necessary env and are frustrated by a huge number of official docs.This repo comes to rescue and it guides you to learn typescript step by step.
##Usage
* clone this repo  
``git clone``  
* install dependecies  
``npm install``  
* start server and browser  
``gulp``  
* generate dist files   
``gulp build``  

##Learning TypeScript step by step
###Basic Types  

* Boolean  

```
   let isDone: boolean = true
```  
* Number 

```let decimal: number = 6; 
   let hex: number = 0xf00d;
   let binary: number = 0b1010;  
   let octal: number = 0o744;
```

* String  

```
	let color: string = 'red';  
	color = 'green';
```  
* Array

```
	let list: number[]=[1,2,3];
	let list1:Array<number>=[1,2,3];
```
* Tuple

```
	let x:[string,number];
	x=['123',10];
	x[2]=14;//ok,you can add some specified elements
	x[3]=false;//error,incorrect type   
```
* Enum

```
	enum Color{Red,Green,Blue};
	let c:Color=Color.Red;
	console.log(c);//0
	enum Color2{Red=1,Green=2,Blue=4};//specify the element 's index of enum
	let colorName:string=Color2[2];
	console.log(colorName);//"Green"
```

* Any

```
	let notSure:any=4;//unknown type,compiler infer it 
	notSure="eeree";
	notSure=123;
	let listNotSure:any[]=[1,true,'free'];
```
* Void

```
	function nullFunc():void{
  		console.log('nullFunc');
	} 
	nullFunc();//return value is void
```
* Type assertions

```
	let someValue:any="this is a string";
	let strLength: number = (<string>someValue).length;
	let strLength: number = (someValue as string).length;
```

### Variable Declarations

`let` and `const` is used to declare variable which is similar to ES6

### Interfaces

* declaration

```
	 interface LabeledValue{
   		label: string;
	 }
	 function printLabel(labelObj:LabeledValue){
   		console.log(labelObj.label);
	 } 
	 let myObj = { label: "size of 10 object", size: 10 };
	 printLabel(myObj);
```
* optional members	 

```
	 interface SqaureConfig{
	   	color?: string;
	   	width?: number;
 	 }
```
* function members	

``` 
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
```
* indexable members

```
 	interface StringArray{
  		[index:number]:string
	}
	let myArray: StringArray;
	myArray = ['bob', 'fred'];
	console.log(myArray[0]);//'bob'
```
* implement interface

```
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
```
* interfaces extend

```
	interface A{
  		color: string;
	}

	interface B extends A{
  		name: string;
	}
	let ab = <B>{};
	ab.name = "name";
	ab.color = 'red';
```

### Classes

* declaration

```
	class Greeter {
		greeting: string;
		constructor(message: string) {
		    this.greeting = message;
		}
		greet() {
		    return "Hello, " + this.greeting;
		}
	}

	let greeter = new Greeter("world");
```
* inheritance

```
	class Animal {
	    name: string;
	    constructor(theName: string) { this.name = theName; }
	    move(distanceInMeters: number = 0) {
	        console.log(`${this.name} moved ${distanceInMeters}m.`);
	    	}
	}

	class Snake extends Animal {
		constructor(name: string) { super(name); }
		move(distanceInMeters = 5) {
		    console.log("Slithering...");
		    super.move(distanceInMeters);
		}
	}

	class Horse extends Animal {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 45) {
	        console.log("Galloping...");
	        super.move(distanceInMeters);
	    }
	}

	let sam = new Snake("Sammy the Python");
	let tom: Animal = new Horse("Tommy the Palomino");
	
	sam.move();
	tom.move(34);

```
* public,protected and private modifiers
	+ public by default,all memebers are avaliable
	
	```
		class Animal {
		    public name: string;
		    public constructor(theName: string) { this.name = theName; }
		    public move(distanceInMeters: number) {
		        console.log(`${this.name} moved ${distanceInMeters}m.`);
		    }
		}
	```
	+ private,it cannot be accessed from outside of its containing class
	
	```
		class Animal {
	    	private name: string;
	    	constructor(theName: string) { this.name = theName; }
		}
		new Animal("Cat").name; // Error: 'name' is private;
	```
	+ protected,members declared protected can also be accessed by instances of deriving classes
	
	```
		class Person {
		    protected name: string;
		    constructor(name: string) { this.name = name; }
		}
		
		class Employee extends Person {
		    private department: string;
		
		    constructor(name: string, department: string) {
		        super(name);
		        this.department = department;
		    }
		
		    public getElevatorPitch() {
		        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
		    }
		}
		
		let howard = new Employee("Howard", "Sales");
		console.log(howard.getElevatorPitch());
		console.log(howard.name); // error
	```
* Accessors
	
	```
		let passcode = "secret passcode";

		class Employee {
		    private _fullName: string;
		
		    get fullName(): string {
		        return this._fullName;
		    }
		
		    set fullName(newName: string) {
		        if (passcode && passcode == "secret passcode") {
		            this._fullName = newName;
		        }
		        else {
		            console.log("Error: Unauthorized update of employee!");
		        }
		    }
		}
	```
* Static Properties

	```
	class Grid {
		static origin = {x: 0, y: 0};
		calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		    let xDist = (point.x - Grid.origin.x);
		    let yDist = (point.y - Grid.origin.y);
		    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
		}
		constructor (public scale: number) { }
	}
	console.log(Grid.origin);//{x:0,y:0}
```
* Abstract Classes

```
	abstract class Department {

	    constructor(public name: string) {
	    }
	
	    printName(): void {
	        console.log("Department name: " + this.name);
	    }
	
	    abstract printMeeting(): void; // must be implemented in derived classes
	}

	class AccountingDepartment extends Department {
	
	    constructor() {
	        super("Accounting and Auditing"); // constructors in derived classes must call super()
	    }
	
	    printMeeting(): void {
	        console.log("The Accounting Department meets each Monday at 10am.");
	    }
	
	    generateReports(): void {
	        console.log("Generating accounting reports...");
	    }
	}
```

###Functions

* overloads and function types

 ```
 	function pickCard(x: {suit: string; card: number; }[]): number;
	function pickCard(x: number): {suit: string; card: number; };
	function pickCard(x): any {
	    // Check to see if we're working with an object/array
	    // if so, they gave us the deck and we'll pick the card
	    if (typeof x == "object") {
	        let pickedCard = Math.floor(Math.random() * x.length);
	        return pickedCard;
	    }
	    // Otherwise just let them pick the card
	    else if (typeof x == "number") {
	        let pickedSuit = Math.floor(x / 13);
	        return { suit: suits[pickedSuit], card: x % 13 };
	    }
	}
```

###Generics

* Generic Types

	```
		interface GenericIdentityFn {
		    <T>(arg: T): T;
		}
		
		function identity<T>(arg: T): T {
		    return arg;
		}
		
		let myIdentity: GenericIdentityFn = identity; 
	```
 	
* Generic Classes

 	```
		 class GenericNumber<T> {
		    zeroValue: T;
		    add: (x: T, y: T) => T;
		}
		
		let myGenericNumber = new GenericNumber<number>();
		myGenericNumber.zeroValue = 0;
		myGenericNumber.add = function(x, y) { return x + y; };
 		
 	```

###Advanced Types

* `Union` Types,A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.it has members that both A and B have.

	```
		interface Bird {
		    fly();
		    layEggs();
		}
		
		interface Fish {
		    swim();
		    layEggs();
		}
		
		function getSmallPet(): Fish | Bird {
		    // ...
		}
		
		let pet = getSmallPet();
		pet.layEggs(); // okay
		pet.swim();    // errors
		
	```
* `Intersection` Types,An intersection type, Person & Serializable & Loggable, for example, is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.
 
 ```
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
		log() {
		    // ...
		}
	}
	var jim = extend(new Person("Jim"), new ConsoleLogger());
	var n = jim.name;
	jim.log();
 ```
 
 * Type Aliases,Type aliases create a new name for a type.
 
 ```
	type Name = string;
	type NameResolver = () => string;
	type NameOrResolver = Name | NameResolver;
	function getName(n: NameOrResolver): Name {
	    if (typeof n === "string") {
	        return n;
	    }
	    else {
	        return n();
	    }
	}
	
	//type Aliases with intersection type
	type LinkedList<T> = T & { next: LinkedList<T> };
	interface Person {
	    name: string;
	}
	
	var people: LinkedList<Person>;
	var s = people.name;
	var s = people.next.name;
	var s = people.next.next.name;
	var s = people.next.next.next.name;
 ```
###Modules

* `import` and `export` are same as ES6's usage.
* export = and import = require(),TypeScript supports export = to model the traditional CommonJS and AMD workflow.The export = syntax specifies a single object that is exported from the module. This can be a class, interface, namespace, function, or enum.When importing a module using export =, TypeScript-specific import let = require("module") must be used to import the module.

	```
		//ZipCodeValidator.ts
		let numberRegexp = /^[0-9]+$/;
		class ZipCodeValidator {
		    isAcceptable(s: string) {
		        return s.length === 5 && numberRegexp.test(s);
		    }
		}
		export = ZipCodeValidator;
		
		//Test.ts
		import zip = require("./ZipCodeValidator");
		
		// Some samples to try
		let strings = ["Hello", "98052", "101"];
		
		// Validators to use
		let validator = new zip();
		
		// Show whether each string passed each validator
		strings.forEach(s => {
		console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
		});
		
	```
###Namespaces
	
* declaration

  ```
  	namespace Validation {
	    export interface StringValidator {
	        isAcceptable(s: string): boolean;
	    }
	
	    const lettersRegexp = /^[A-Za-z]+$/;
	    const numberRegexp = /^[0-9]+$/;
	
	    export class LettersOnlyValidator implements StringValidator {
	        isAcceptable(s: string) {
	            return lettersRegexp.test(s);
	        }
	    }
	
	    export class ZipCodeValidator implements StringValidator {
	        isAcceptable(s: string) {
	            return s.length === 5 && numberRegexp.test(s);
	        }
	    }
	}
	
	// Some samples to try
	let strings = ["Hello", "98052", "101"];
	
	// Validators to use
	let validators: { [s: string]: Validation.StringValidator; } = {};
	validators["ZIP code"] = new Validation.ZipCodeValidator();
	validators["Letters only"] = new Validation.LettersOnlyValidator();
	
	// Show whether each string passed each validator
	for (let s of strings) {
	    for (var name in validators) {
	        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
	    }
	}
  ```
* namespaces acroll multiple files

```
	//Validation.ts
	
	namespace Validation {
    	export interface StringValidator {
         isAcceptable(s: string): boolean;
    	}
	}
	//LettersOnlyValidator.ts
	
	/// <reference path="Validation.ts" />
	namespace Validation {
	    const lettersRegexp = /^[A-Za-z]+$/;
	    export class LettersOnlyValidator implements StringValidator {
	        isAcceptable(s: string) {
	            return lettersRegexp.test(s);
	        }
	    }
	}
	//ZipCodeValidator.ts
	
	/// <reference path="Validation.ts" />
	namespace Validation {
	    const numberRegexp = /^[0-9]+$/;
	    export class ZipCodeValidator implements StringValidator {
	        isAcceptable(s: string) {
	            return s.length === 5 && numberRegexp.test(s);
	        }
	    }
	}
	
	//Test.ts

	/// <reference path="Validation.ts" />
	/// <reference path="LettersOnlyValidator.ts" />
	/// <reference path="ZipCodeValidator.ts" />
	
	// Some samples to try
	let strings = ["Hello", "98052", "101"];
	
	// Validators to use
	let validators: { [s: string]: Validation.StringValidator; } = {};
	validators["ZIP code"] = new Validation.ZipCodeValidator();
	validators["Letters only"] = new Validation.LettersOnlyValidator();
	
	// Show whether each string passed each validator
	for (let s of strings) {
	    for (let name in validators) {
	        console.log(""" + s + "" " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
	    }
	}
	
```
###Declaration Merging  

“declaration merging” means that the compiler merges two separate declarations declared with the same name into a single definition. 

* Merging Interfaces

```
	interface Cloner {
	    clone(animal: Animal): Animal;
	}
	
	interface Cloner {
	    clone(animal: Sheep): Sheep;
	}
	
	interface Cloner {
	    clone(animal: Dog): Dog;
	    clone(animal: Cat): Cat;
	}
	//The three interfaces will merge to create a single declaration as so:
	interface Cloner {
	    clone(animal: Dog): Dog;
	    clone(animal: Cat): Cat;
	    clone(animal: Sheep): Sheep;
	    clone(animal: Animal): Animal;
	}
```
* Merging Namespaces

```
	namespace Animals {
    	export class Zebra { }
	}

	namespace Animals {
	    export interface Legged { numberOfLegs: number; }
	    export class Dog { }
	}
	//will merge to,must have export key words
	namespace Animals {
	    export interface Legged { numberOfLegs: number; }
	
	    export class Zebra { }
	    export class Dog { }
	}
```
* Merging Namespaces with Classes

```
	class Album {
	    label: Album.AlbumLabel;
	}
	namespace Album {
	    export class AlbumLabel { }
	}
```
* Merging Namespaces with Functions

```
	function buildLabel(name: string): string {
		return buildLabel.prefix + name + buildLabel.suffix;
	}
	
	namespace buildLabel {
		export let suffix = "";
		export let prefix = "Hello, ";
	}
	alert(buildLabel("Sam Smith"));
```

* Merging Namespaces with enum

```
	enum Color {
		red = 1,
		green = 2,
		blue = 4
	}
	
	namespace Color {
		export function mixColor(colorName: string) {
		    if (colorName == "yellow") {
		        return Color.red + Color.green;
		    }
		    else if (colorName == "white") {
		        return Color.red + Color.green + Color.blue;
		    }
		    else if (colorName == "magenta") {
		        return Color.red + Color.blue;
		    }
		    else if (colorName == "cyan") {
		        return Color.green + Color.blue;
		    }
		}
	}
```

###Writing Declaration Files

When using an external JavaScript library, or new host API, you’ll need to use a declaration file (.d.ts) to describe the shape of that library.

* Usage    

index.ts  
`/// <reference path="./dts.d.ts" />`

index.js

```
	var w = widget(32, 16);
	var y = new widget("sprocket");
	// w and y are both widgets
	w.sprock();
	y.sprock();
```
* Typings  

typings.d.ts

```
	interface Widget {
	   sprock(): void;
	}
	interface WidgetFactory {
		new(name: string): Widget;
		(width: number, height: number): Widget;
	}
	declare var widget: WidgetFactory;
```
install [typings](https://www.npmjs.com/package/typings) and search TypeScript type definitions from [DefinitelyTyped](http://definitelytyped.org/)

###Decorators
Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.

tsconfig.json:

```
	{
	    "compilerOptions": {
	        "target": "ES5",
	        "experimentalDecorators": true
	    }
	}
```
A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

```
	function f() {
	    console.log("f(): evaluated");
	    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
	        console.log("f(): called");
	    }
	}
	
	function g() {
	    console.log("g(): evaluated");
	    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
	        console.log("g(): called");
	    }
	}
	
	class C {
	    @f()
	    @g()
	    method() {}
	}
```
* Class Decorators

```
	@sealed
	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        return "Hello, " + this.greeting;
	    }
	}
	//argument is the constructor of the class
	function sealed(constructor: Function) {
	    Object.seal(constructor);
	    Object.seal(constructor.prototype);
	}
```
* Method Decorators
	
```
	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }
	
	    @enumerable(false)
	    greet() {
	        return "Hello, " + this.greeting;
	    }
   }
   //three arguments 
   //Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
   //The name of the member
   //The Property Descriptor for the member
   function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
```
* Accessor Decorators

```
	class Point {
	    private _x: number;
	    private _y: number;
	    constructor(x: number, y: number) {
	        this._x = x;
	        this._y = y;
	    }
	
	    @configurable(false)
	    get x() { return this._x; }
	
	    @configurable(false)
	    get y() { return this._y; }
 	}
 	//arguments same as methods decorators
 	function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```
* Property Decorators

```
	class Greeter {
	    @format("Hello, %s")
	    greeting: string;
	
	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        let formatString = getFormat(this, "greeting");
	        return formatString.replace("%s", this.greeting);
	    }
	}
	import "reflect-metadata";
	
	const formatMetadataKey = Symbol("format");
	
	function format(formatString: string) {
	    return Reflect.metadata(formatMetadataKey, formatString);
	}
	
	function getFormat(target: any, propertyKey: string) {
	    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
	}
```
* Parameter Decorators

```
	class Greeter {
	    greeting: string;
	
	    constructor(message: string) {
	        this.greeting = message;
	    }
	
	    @validate
	    greet(@required name: string) {
	        return "Hello " + name + ", " + this.greeting;
	    }
	}
	function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {}

	function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {}
```
