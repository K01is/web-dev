let a=[]

let b = {
    name: 'Иван',
    phone: '+799999999',
    age: 20
    }
for (let i=0; i<11; i++) {
    a[i] = i;
    }
console.log(a)
console.log(b)

class User {
    constructor() {
        console.log ('Это класс');
    this.a = null;
    }
}

let user=new User(5)
console.log(typeof(user));