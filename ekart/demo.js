//spread operator
const address={
    city:"hyd",
    state:"TS"
}
const person = {
    name:'kiran',
    age:30,
    homeAddress:address
};


const person2 = {...person,...address,age:40};
// console.log(person2);
// console.log(person);

const marks=[1,2,3,5,6,9];
const marks2 =[...marks,67898,988];
//console.log(marks2)
//Destrucring
const {homeAddress,name,age,city} = person2;
const [first,second] = marks2;
console.log(first);
console.log(second);
