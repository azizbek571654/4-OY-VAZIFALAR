function identity<T>(value: T): T {
    return value;
  }

  console.log(identity<number>(100));
  console.log(identity<string>("Hello World"));
  console.log(identity<object>({ name: "Ali", age: 25 })); 

  class Stack<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    print(): void {
      console.log(this.items);
    }
  }
  
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  numberStack.print();
  console.log(numberStack.pop());

  const stringStack = new Stack<string>();
  stringStack.push("A");
  stringStack.push("B");
  stringStack.print();  
  console.log(stringStack.pop()); 
  