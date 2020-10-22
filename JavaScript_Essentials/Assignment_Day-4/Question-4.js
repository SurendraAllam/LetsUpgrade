// Question-4
// Follwing the Question-3
//    1) Write a function to display all the objects having age less than 30
//    2) Write a function to display all the objects having country India

let details = [
    {
        name: "Ram",
        age: 15,
        country: "India",
        hobbies: ["Playing Cricket","Reading Books"],
    },
    {
        name:"Sai",
        age:20,
        country: "America",
        hobbies: ["Reading Books","Drawing"],
    },
    {
        name: "Kumar",
        age:30,
        country: "India",
        hobbies: ["Watching videos","Watching Movies"],
    },
    {
        name: "Ramesh",
        age:40,
        country: "UK",
        hobbies: ["Playing Cricket","Leraning New things"],
    },
    {
        name: "Rajesh",
        age:45,
        country: "India",
        hobbies: ["Painting","Playing Chess","Cooking"],
    },
];

console.log("display all the objects having age less than 30");
for(let i=0;i<details.length;i++)
{
    let ages = details[i].age;
    if (ages < 30){
        console.log(details[i]);
    }
}
console.log("display all the objects having country India");
for(let i=0;i<details.length;i++)
{
    let countries = details[i].country;
    if (countries == "India"){
        console.log(details[i]);
    }
}