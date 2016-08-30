let symbol1 = Symbol();
let sym2 = Symbol();
const getClassNameSymbol=Symbol();
class C{
    [getClassNameSymbol](){
        return "C";
    }
}

let c=new C();
console.log(c[getClassNameSymbol]());
// console.log(sym2==symbol1);
let obj={
    [sym2 as symbol]:"aaa"
};
// console.log(obj[sym2]);
export default symbol1;