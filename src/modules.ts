export interface StringValidator{
    isAcceptable(s:string):boolean;
}

export const numberRegexp=/^[0-9]+$/;

 class ZipCodeValidator implements StringValidator{
    isAcceptable(s:string){
        return s.length==5&&numberRegexp.test(s);
    }
}

//export {ZipCodeValidator};

//可以用过tsconfig.json来定义模块机制的类型
