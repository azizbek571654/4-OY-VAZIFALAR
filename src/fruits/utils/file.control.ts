import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const filepath = join('src/fruits/data/fruits.json');

const readData = () =>{
    return JSON.parse(readFileSync(filepath, 'utf-8'))
}
const WriteData = (data: any) => {
    writeFileSync(filepath, JSON.stringify(data, null, 2));
}

export {
    readData,
    WriteData
}