// Write your solution here!
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

append.push("Odie");
prepend.unshift("Odie");
removeFirst.slice(1);
removeLast.slice(0, removeLast.length() - 1);