function LogParam(target: any, methodName: string, parameterIndex: number) {
    console.log(`@LogParam  Method: ${methodName}, Param pozitsiyasi: ${parameterIndex}`);
  }
  
  class UserService {
    greet(@LogParam name: string) {
      console.log(`salom ${name}`);
    }
  }

  const service = new UserService();
  service.greet("Ali");
  