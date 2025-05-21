function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor){
    console.log(`Shu method ${methodName} chaqirildi`);
}

class Car {
    @LogMethod
    drive(speed: number, gear: number) {
      console.log(`Haydalmoqda: ${speed} km, \n${gear}-uzatma`);
    }
}


  const car = new Car();
  car.drive(80, 3);