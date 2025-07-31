const orgArray = [1,2,3];
const copyArray = [...orgArray];

console.log(orgArray);
console.log(copyArray);




const arr1 = [1,2,3];
const arr2 = [4,5,6,7,8,9,10];

const newArr= [...arr1,...arr2];
console.log(newArr);




const user = {
    name: "ali",
    age: 25,
};

const copyUser = {...user};
console.log(user);
console.log(copyUser);





const user1 = {
    name: "ahmet",
};
const user2 = {
    age: 30,
};

const newUser = {...user1,...user2};
console.log(newUser);








