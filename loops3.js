let dizi = ["elma", "armut", "kiraz", "portakal"];
const kelime = dizi.filter((eleman) => eleman.length >= 5);
console.log(kelime);


let users = [
    { id: 1, name: "ali"},
    { id: 2, name: "ayşe"},
    { id: 3, name: "mahmet"},
];

const user = users.find((item) => item.name.length > 4);
console.log(user);