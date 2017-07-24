class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting=message;
    }
    greet(): string {
        return "Hello, " + this.greeting;
    }
}
let oGreeter = new Greeter("world"); 
document.body.innerText=oGreeter.greet();

