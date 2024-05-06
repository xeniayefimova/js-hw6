// Конкатенація рядків

// через +

let film = "Harry Potter and the prisoner of Azkaban, "
let genre = "Fantasy, "
let year = "2004"

const result = film + genre + year //Harry Potter and the prisoner of Azkaban, Fantasy, 2004
console.log(result);

// шаблонні рядки

let year1 = 2004
let film1 = `Harry Potter and the prisoner of Azkaban, Fantasy, ${year1} ` //Harry Potter and the prisoner of Azkaban, Fantasy, 2004
console.log(film1);

// Робота з екрануванням символів:

let message = "Happiness can be found,\n even in the \"darkest\" of times,\n\t if one only remembers to turn on the light."
// let message = "Це \"особливий\" рядок:\n\t*з новим рядком;\n\t*з табуляцією;\n\t*і з екранованими лапками "
console.log(message);


//Пошук у рядку

//на якій позиції знаходиться слово "світло" та "тьма" у вірші

let verse = "Світло кінця тунелю, а за спиною лише темрява"

let positionLight = verse.indexOf("Світло")
let positionDark = verse.indexOf("темрява")

console.log(positionLight); //0
console.log(positionDark);  //38

console.log(verse.search("Світло")); //0
console.log(verse.search("темрява")) //38
console.log(verse.length)   //45

//чи зустрічається слово "світло" на початку чи в кінці рядка


console.log(verse.startsWith('Світло')); //true
console.log(verse.endsWith('Світло')); //false

//Зміна регістру та заміна частини рядка

let phrase = "Сонце світить яскраво" 
let phraseCopy = phrase.toLocaleLowerCase()
console.log(phraseCopy);  //сонце світить яскраво

let phrase2 = phrase.replace('Сонце', 'місяць')
console.log(phrase2); //місяць світить яскраво