
export default function Types() {
    let username: string = "Anass";
    let age: number | string = 25;
    let isStudent: boolean = true;
    let hobbies: string[] = ["Reading", "Coding", "Gaming"];
    let role: [number, string] = [1, "Admin"];
    type Person = {
      name: string;
      age: number;
    }
    let person: Person = {
      name: "Anass",
      age: 25
    };
    let lotsOfPeople: Person[] = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 22 },
      { name: "Charlie", age: 28 }
    ];
    
    let printAge: (name: string) => void;
    
    function printName(name: string): void {
      console.log(`Hello, ${name}!`);
    }
    
    let personName: unknown;
    
    printName(username);
    
    interface Persons {
      name: string;
      age?: number;
    }
    
    interface Guy extends Persons {
      profession: string;
    }
    
    type X = {
      a: string;
      b: number;
    }
    
    type Y = X & {
      c: string;
      d: number;
    }
    
    let y: Y = {
      a: "Hello",
      b: 42,
      c: "World",
      d: 100
    };
}