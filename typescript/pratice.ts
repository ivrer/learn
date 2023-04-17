function greeter(person:string){
    return 'hello,' + person
}
let user = [0,2,3]
console.log(greeter('jack'));

//对对象类型的类型限制
interface Person{
  firstName?:string,
  lastName?:string
}
function fn_interface(person:Person){
  console.log(person.firstName);


}

let result = fn_interface({firstName:'jack'})


let obj = {
  'name':'jack',
  'creatFn':function creatFn(){
    console.log(this.name);
    return function sec(){
      return `${this.name}`

    }
  }
}


