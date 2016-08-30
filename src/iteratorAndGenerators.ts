//for of return values
//for of 适用于Array,Map,Set,String等内置了
//Symbol.iterator函数的类型
let someArray=[1,"string",false];

for(let entry of someArray){
    console.log(entry);
}

for(let entry1 in someArray){
    console.log(entry1);
}
//for in return keys
export default someArray; 