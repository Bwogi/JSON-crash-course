// this object is in Javascript json format not the real JSON format 
var person = {
    name: "Andrew",
    age: 40,
    email: function() {
        return 'andrew.bwogi@gmail.com';
    },
    address: {
        street: "5 main st.",
        city: "Los Angeles"
    },
    children: ["Myra", "Grace", "Loy", "Emmanuel", "Gabriel", "Nankya", "Elai"]
};

console.log(person.name);
console.log(person.age);
console.log(person.email());
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.children);
console.log(person.children[2]);

// to turn this object into pure JSON, do the following 
person = JSON.stringify(person);
console.log(person);

// answer is undefined because this object is not in pure JSON format 
console.log(person.name);

// to turn back to JSON, do the following 
person = JSON.parse(person);
console.log(person);

var people = [{
        name: "Andrew",
        age: 40
    },
    {
        name: "Phillipo",
        age: 50
    },
    {
        name: "Geoffrey",
        age: 35
    }
];

people = JSON.stringify(people);
console.log(people);

people = JSON.parse(people);
console.log(people);

// this is calling record by record 
console.log(people[1]);
console.log(people[1].name);

// this is pulling out all records at once 
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
    console.log(people[i].name);
    console.log(people[i].age);

    var nameContainer = document.getElementById('name');
    var paraEl = document.createElement('p');
    paraEl.innerHTML = people[i].name;
    nameContainer.appendChild(paraEl);

    var ageContainer = document.getElementById('age');
    var paraEl = document.createElement('p');
    paraEl.innerHTML = people[i].age;
    ageContainer.appendChild(paraEl);
}