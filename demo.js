function greeter(person) {
    return "Hello, " + person.firstname + "," + person.lastname;
}
var user = { firstname: "Janet", lastname: "User" };
document.body.innerHTML = greeter(user);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.red;
console.log(c);
var list = [1, 2, 3];
console.log(list[0]);
var fullname = "bob";
console.log(fullname);
