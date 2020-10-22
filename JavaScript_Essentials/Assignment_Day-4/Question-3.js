// Question-3
// Create an array of objects having the following properties
//    1) {name(string),age(number),country(string),hobbies array(string [])}
//    2) Write a function to display all the objects on the console

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

for(let i=0;i<details.length;i++)
{
    console.log(details[i]);
}