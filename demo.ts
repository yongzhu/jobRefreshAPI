interface Person{
    firstname: string;
    lastname: string;
}

function greeter(person: Person)
{
    return "Hello, " + person.firstname + "," + person.lastname;

}
var user={firstname: "Janet", lastname: "User" }
document.body.innerHTML=greeter(user);

enum Color {red, green, blue}
let c: Color=Color.red ;
console.log(c);

let list: Array<number> =[1,2,3];
console.log(list[0]);


let fullname: string ="bob";
console.log(fullname);

