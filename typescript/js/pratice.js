"use strict";
function greeter(person) {
    return 'hello,' + person;
}
let user = [0, 2, 3];
console.log(greeter('jack'));
function fn_interface(person) {
    console.log(person.firstName);
}
let result = fn_interface({ firstName: 'jack' });
let obj = {
    'name': 'jack',
    'creatFn': function creatFn() {
        console.log(this.name);
        return function sec() {
            return `${this.name}`;
        };
    }
};
