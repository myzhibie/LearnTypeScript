//enum可以用来定义一系列number常量
//const enum不能包含计算的元素
const enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
//enum的元素是可以计算的
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}

export default FileAccess;