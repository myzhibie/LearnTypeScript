interface Named{
    name:string;
}

class Person{
    name:string;
}
let p:Named;
p=new Person();
//X和Y是兼容的，如果Y至少含有和X相同的元素，相互兼容的类型之间
//变量是可以相互赋值的
//函数兼容
let x=(a:number)=>0;
let y=(b:number,s:string)=>0;
//参数少的可以被赋值给参数多的，反之不可以
y=x;
//x=y;
let s=()=>({name:"alice"});
let w=()=>({name:"alicea",location:"China"});
//w=s;
//在返回值中，返回值多的可以被赋值给返回值少的，反之不可以
s=w;
//enum兼容

enum Status{Ready,Wating};
enum Color{ Red,Blue,Green};
let status1=Status.Ready;
let status2=Status.Wating;
//同一枚举的成员是兼容的
status2=status1;
//来自于不同枚举类型的成员之间不能相互赋值
//status1=Color.Red;