"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroes = void 0;
//cuantos heroes hay por cada cuidad y cual es la cuidad que tiene mas heroes
exports.heroes = [
    {
        "name": "Superman",
        "city": "Metropolis",
        "power": "Super strength, flight, x-ray vision",
        "type": "Alien"
    },
    {
        "name": "Batman",
        "city": "Gotham",
        "power": "Peak human condition, martial arts, detective skills",
        "type": "Human"
    },
    {
        "name": "Wonder Woman",
        "city": "Themyscira",
        "power": "Super strength, agility, combat skills",
        "type": "Demigod"
    },
    {
        "name": "Spider-Man",
        "city": "New York",
        "power": "Wall-crawling, spider-sense, agility",
        "type": "Mutated Human"
    },
    {
        "name": "Iron Man",
        "city": "New York",
        "power": "Genius intellect, powered armor suit",
        "type": "Human"
    },
    {
        "name": "Thor",
        "city": "Asgard",
        "power": "God of Thunder, super strength, control over lightning",
        "type": "God"
    },
    {
        "name": "Hulk",
        "city": "New York",
        "power": "Super strength, invulnerability",
        "type": "Mutated Human"
    },
    {
        "name": "Black Widow",
        "city": "Stalingrad",
        "power": "Expert martial artist, spy skills",
        "type": "Human"
    },
    {
        "name": "Captain America",
        "city": "Brooklyn",
        "power": "Super strength, agility, expert tactician",
        "type": "Enhanced Human"
    },
    {
        "name": "Flash",
        "city": "Central City",
        "power": "Super speed",
        "type": "Mutated Human"
    },
    {
        "name": "Green Lantern",
        "city": "Coast City",
        "power": "Power ring with various abilities",
        "type": "Human"
    },
    {
        "name": "Aquaman",
        "city": "Atlantis",
        "power": "Underwater breathing, super strength, control over sea life",
        "type": "Atlantean"
    },
    {
        "name": "Doctor Strange",
        "city": "New York",
        "power": "Mastery of magic, time manipulation",
        "type": "Human"
    },
    {
        "name": "Black Panther",
        "city": "Wakanda",
        "power": "Enhanced strength, agility, advanced technology",
        "type": "Enhanced Human"
    },
    {
        "name": "Scarlet Witch",
        "city": "Sokovia",
        "power": "Reality manipulation, telekinesis",
        "type": "Mutated Human"
    },
    {
        "name": "Vision",
        "city": "New York",
        "power": "Density manipulation, super strength, flight",
        "type": "Android"
    },
    {
        "name": "Ant-Man",
        "city": "San Francisco",
        "power": "Size manipulation, communication with insects",
        "type": "Human"
    },
    {
        "name": "Wasp",
        "city": "San Francisco",
        "power": "Size manipulation, flight, bio-electric energy blasts",
        "type": "Human"
    },
    {
        "name": "Hawkeye",
        "city": "Waverly",
        "power": "Expert marksman, martial artist",
        "type": "Human"
    },
    {
        "name": "Star-Lord",
        "city": "Missouri",
        "power": "Expert pilot, marksman, enhanced durability",
        "type": "Human/Celestial Hybrid"
    }
];
let contador = {}; // héroes por ciudad
let ciudadConMasHeroes = "";
let maxHeroes = 0;
for (let heroe of exports.heroes) {
    let ciudad = heroe.city;
    if (contador[ciudad]) {
        contador[ciudad]++;
    }
    else {
        contador[ciudad] = 1;
    }
    // Ciudad con más héroes
    if (contador[ciudad] > maxHeroes) {
        maxHeroes = contador[ciudad];
        ciudadConMasHeroes = ciudad;
    }
}
console.log("Ciudad con más héroes:", ciudadConMasHeroes);
console.log("heroes por ciudad:", contador);
