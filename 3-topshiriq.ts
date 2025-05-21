function LogProperty(target: any, propertyKey: string){
    console.log(`Bu maxsulot nomi: ${propertyKey}`);
}

class Product {
    @LogProperty
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}
