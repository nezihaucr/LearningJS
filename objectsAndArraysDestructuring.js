let user = {
    name : "ahmet",
    age : 25,
    isLogin: true,
    skills: ["html","css","javascript"],
    color: "red",
    user2: {
        name:"ayşe",
        age: 15,
    },
};
let {
    user2: {age,name},
} = user;
console.log(age,name);