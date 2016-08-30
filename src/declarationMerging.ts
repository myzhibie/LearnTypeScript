
//不能定义非函数类型的相同名称的成员
//merge interface
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };

interface Cloner {
    clone(animal: string): string;
}
interface Cloner {
    clone(sheep: string): string;
}

//合并后的namespace只能看到export成员
namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
//合并后
// namespace Animals{
//     export class Zebra{}
//     export interface Legged{numberOfLegs:number;}
//     export class Dog{}
// }



//合并namespace和class
class Album {
    label: Album.AlbumLabel;
}

namespace Album {
    export class AlbumLabel { }
}

let album: Album = new Album();
console.log(album.label);

//合并fucntio和namespace

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

console.log(buildLabel("lily"));

//合并enum和namespace

enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == 'yellow') {
            return Color.red + Color.green;
        }
        if (colorName == 'white') {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == 'magenta') {
            return Color.red + Color.blue;
        }
        else if(colorName=='cyan'){
            return Color.green+Color.blue;
        }
    }
}

console.log(Color.mixColor('yellow'));
//class不能和class merge以及不能class和其他类型变量merge
export default box;