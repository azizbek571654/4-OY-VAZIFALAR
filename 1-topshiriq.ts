function Logger(constructor:Function) {
    console.log(" Class yaratildi: ", constructor.name);
    
}

@Logger
class User {
    constructor(public name: string) {}
}