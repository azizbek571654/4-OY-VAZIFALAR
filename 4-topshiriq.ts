function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;

    descriptor.get = function () {
      console.log(`Getter chaqirildi: ${name}`);
      return originalGet?.call(this);
    };
  }
  
  class Temperature {
    private _celcius: number = 0;
  
    @LogAccessor
    get celcius() {
        return this._celcius;
    }
    
    set celcius(value: number) {
      this._celcius = value;
    }
  }

  const temp = new Temperature();
  temp.celcius = 25;
  console.log(temp.celcius);
  