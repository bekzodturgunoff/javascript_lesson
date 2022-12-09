"use strict";

// JavaScript birinchi dars

/*
undefined, null, boolen, string, symbol, number, object
*/
// o'zgaruvchi yaratish
var a; // console.log(a);
//o'zgaruvchini data type bilan tenglashtirish

var b = 8; // console.log(b);
//oz'garuvchiga data type berish

a = 10; // console.log(a);
// b o'zgaruvchini data type ni a o'zgaruvchining data type ga o'zgartirdik

b = a; // console.log(b);
////////////

var w = 5;
var e = 10;
var r = "Men"; // console.log(w);
// console.log(e);
// console.log(r);
///////////
// Birinchi usul

w = w + 1;
e = e + 5;
r = r + "text man"; // console.log(w);
// console.log(e);
// console.log(r);
//Ikkinchi usul

w += 1;
e += 5;
r += " qo'shildim"; // console.log(w);
// console.log(e);
// console.log(r);
/////////////////

var buNomer;
var buText;
var buBall;
buNomer = 10;
buText = "text";
buBall = 3999; // console.log(buNomer);
// console.log(buText);
// console.log(buBall);
///////////////
// JavaScriptda nomerlarni bir birga qo'shish

var sum = 10 + 10; // console.log(sum);
// JavaScriptda nomerlarni bir birdan ayrish

var vallue = 20 - 10; // console.log(vallue);
// JavaScriptda nomerlarni bir birga ko'paytirish

var product = 2 * 2;
product *= 5;
product /= 2;
product -= 10;
product += 10; // console.log(product);
// JavaScriptda nomerlarni bir birga bo'lish

var server = 6 / 2; // console.log(server);

/* 

+=
-=
*=
/=

*/
//  JavaScriptda nomer qo'shish

var meningNomerim = 30; // qancha son qo'shmoqchi bo'lsangiz pastdagi code ga qo'shing
// Birinchi usul

meningNomerim = meningNomerim + 1; // Ikkinchi usul

meningNomerim++; //  JavaScriptda nomer ayirish

var meningNomerimIkkinchi = 40; // Birinchi usul

meningNomerimIkkinchi = meningNomerimIkkinchi - 1; // Ikkinchi usul

meningNomerimIkkinchi--; // console.log(meningNomerimIkkinchi);
// JavaScript da kasr son yaratish

var bizningKasrSon = 5.7; // console.log(bizningKasrSon);
////////////////////

var meningKasrim = 0.009; // console.log(meningKasrim);
////////////

var kasrSon = 2.5 + 2.1; // console.log(kasrSon);
/////////////

var text = "Mening ismim";
myName = " Bekzod ";
var textAge = "yoshim ";
var age = 18 + "da";
myName = " Alisher ";
var allTexts = text + myName + textAge + age; // console.log(allTexts);

/*

querySelector(". #")
querySelectorAll("xamma class larni tanlash uchun")
getElementById("id")
getElementByClassName("class")

*/

var heading = document.getElementById("text");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var container = document.getElementById("container");
heading.textContent = "Bu text JavaScriptda o'zgartirildi.";
heading.classList.add("text-two");
heading.classList.remove("text-two"); // console.log(heading);

openBtn.addEventListener("click", function () {
  container.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  container.classList.remove("active");
}); //////////////////////////// JavaScript ikkinchi dars

var thing;
thing = 10 % 2; // console.log(thing);
//////////////////////
// let myString = "Bu mening "javascript ichidagi motivatsiyam" JS" // xato
// let myString = "Bu mening \"javascript ichidagi motivatsiyam\" JS"
// let myString = 'Bu mening "javascript ichidagi motivatsiyam" Js'
// let myString = ` 'Bu mening "javascript ichidagi motivatsiyam" JS' `;
// console.log(myString)
/////////////////////

var ourText = "Birinchi text ";
ourText += "Ikkinchi text"; // console.log(ourText);
////////////////////

var compName = "FullStack";
var textName = "Hello welcome to the " + compName + " Academy"; // console.log(textName);

var someText = "zo'r";
var anotherText = "Fullstack "; // console.log((anotherText += someText));
///////////////////////

birinchiIsimUzunligi = 0;
birinchiIsim = "watch"; // console.log(birinchiIsimUzunligi);

birinchiIsimUzunligi = birinchiIsim.length; // console.log(birinchiIsimUzunligi);

var firstLetterOfFirstName = "";
var firstName = "watch"; // console.log(firstLetterOfFirstName);

firstLetterOfFirstName = firstName[0];
firstLetterOfFirstName = firstName[1];
firstLetterOfFirstName = firstName[2];
firstLetterOfFirstName = firstName[3];
firstLetterOfFirstName = firstName[4]; // console.log(firstLetterOfFirstName);
////////////////////////////

var myText = "Jello World";
myText[0] = "H"; // XATO
// console.log(myText[0]);

myText = "Hello World"; ////////////////////////////
// console.log((birinchiIsimUzunligi = birinchiIsim[birinchiIsim.length - 1]));
// console.log((birinchiIsimUzunligi = birinchiIsim[birinchiIsim.length - 2]));
// console.log((birinchiIsimUzunligi = birinchiIsim[birinchiIsim.length - 3]));
///////////////////

function game(ega, sifat, fel, qoshimcha) {
  var result = ""; // return = qaytarish

  return result += sifat + " " + ega + " magzinga " + qoshimcha + " " + fel;
} // console.log(game("it", "Katta", "yugurdi", "tez"));
//////////////////////////////
// Array // Yangi mavzu
// Array ichidagi xar bir data type (undefined, null, boolen, string, symbol, number, object)
// vergul bilan ajratiladi


var ourArray = ["Alisher", 22]; // console.log(ourArray);
///////////////////////

var ourArrayMulti = [["dunyo", 42], ["barchasi", 101010]];
var myData = ourArrayMulti[0]; // console.log(myData);
//////////////////////

var yangiArray = ["somthing", 50]; // console.log(yangiArray);

yangiArray[1] = 60; // console.log(yangiArray);
// Kop array lar

var moreArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], [13, 14, 15]]]; // console.log(moreArray);
// push() funksiya arrayni oxiriga data type qo'shadi.
///////////////////

var pushArray = ["Alisher", "J", "cat"];
pushArray.push(["Anvar", "joy"]); // console.log(pushArray);
////////////// PUSH

var removeArray = [1, 2, 3]; // pop() funksya array ichidagi eng oxirgi data type ni chiqarib
// o'zini variable ga joylaydi. Misol uchun pastga qarang.

var removedArray = removeArray.pop(); // console.log(removedArray);
/////////////
////////////// SHIFT
// shift() funksya array ichidagi birinchi data type ni chiqarib
// o'zini variable ga joylaydi. Misol uchun pastga qarang.

var shiftArray = [["Anvar", 23], ["cat", 3]];
var shiftedArray = shiftArray.shift(); // console.log(shiftArray);
// console.log(shiftedArray);
//////////// UNSHIFT
// unshift() funksiysi arrayni boshiga data type qo'shadi

var unshiftArray = ["Avaz", "J", "cat"];
unshiftArray.shift(); // console.log(unshiftArray);

unshiftArray.unshift("Bekzod"); // console.log(unshiftArray);
/////////  3 - dars
// Arraylar ichida array

var myList = [["Makaron", 5], ["Tuxum", 9], ["Go'sht", 3], ["Kartoshka", 1], ["Sabzavotlar", 6], [["Shampun", 1], ["Suvun", 2]]]; // console.log(myList);
////
// Function // Funksiya
// Funksyalar bizga qayta ishlatishimiz mumkin
//bo'lgan funksiyalarni yaratishga yordam beradi

function qaytaIshlatadiganFunksiya() {
  console.log("Hello world");
} // qaytaIshlatadiganFunksiya();
//// Funksiyaga malumot o'tqazishda yordam beradi;


function bizningFunksiya(a, b) {
  console.log(a - b);
} // bizningFunksiya(10, 5); // Javob: 5
///// Scope //


function notGlobal() {
  var thisIsNotGlobal = 8;
  console.log(thisIsGlobal + " " + thisIsNotGlobal);
}

var thisIsGlobal = "Hello world";

function global() {
  console.log(thisIsGlobal);
} // notGlobal();
// global();
// console.log(thisIsGlobal);
// console.log(thisIsNotGlobal);
////////////////


var meningKiyimim = "Kiyim";

function kiyim() {
  // let meningKiyimim = "Boshqa kiyim";
  return meningKiyimim;
} // console.log(kiyim());
/////////////////
// funksiyani return orqali qaytarish


function simpleFunc(num) {
  return num - 7;
} // console.log(simpleFunc(10)); // 3
//
// function ichida return ishlatmasak undefiened chiqadi
// Mislo uchun pastga qarang


var zero = 0;

function addThree() {
  zero = zero + 3; // to'g'irlash uchun zero dan oldin return ishlatishimiz kerak
} // console.log(addThree());


var zeroTwo = 0;

function addFive() {
  zeroTwo += 5; // to'g'irlash uchun zeroTwo dan oldin return ishlatishimiz kerak
} // console.log(addFive());
// Yangi mavzu (boolen) true false qanday ishlatish


var isIceCreamOn = false;

if (isIceCreamOn) {// console.log("Alisher muzqaymoq yeyishi mumkin");
} else {// console.log("Alisher muzqaymoq yeyishi mumkin emas");
  }

var personAge = 17;
var isOldEnough = personAge >= 18;

if (isOldEnough) {// console.log("Alisher prava olishi mumkin");
} else {
  var yearsLeft = 18 - personAge; // console.log(
  //   `Alisher hali prava olaolmaydi. Yana ${yearsLeft} yil kutib turing :)`
  // );
} // Falsy values: 0, "", undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// String number vs number


var inputYear = "1991"; // Number() function
// console.log(Number(inputYear), inputYear); // number (1991) // text ('1991')
// console.log(inputYear + 18); // 199118
// console.log(Number(inputYear) + 18);
// console.log(Number("Alisher")); // NaN // Nomer emas // Not a Number // Mavjud bo'lmagan nomer
// console.log(String(20), 20); // text doim oq rangda ko'rinadi