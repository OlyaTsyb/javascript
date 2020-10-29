//1. присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
let string1 = "hello";
console.log(string1);

let string2 = "owu";
console.log(string2);

let string3 = "ua";
console.log(string3);

let int = 1;
console.log(int);


let int2 = 10;
console.log(int2);

let intNeg = -999;
console.log(intNeg);

let int3 = 123;
console.log(int3);

let pi = 3.14;
console.log(pi);


let float1 = 2.7;
console.log(float1);


let int4 = 16;
console.log(int4);

let boolTrue = true;
console.log(boolTrue);

let boolFalse = false;
console.log(boolFalse);

//2.переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
let string1 ='hi';
console.log(string1);
document.write(string1);
alert(string1);


let string2 = "i like js so much";
console.log(string2);
document.write(string2);
alert(string2);

let string3 = 1234567890;
console.log(string3);
document.write(string3);
alert(string3);


let int = "it`s cool";
console.log(int);
document.write(int);
alert(int);

let int2 = 4567.567;
console.log(int2);
document.write(int2);
alert(int2);


let intNeg = "have a nice day";
console.log(intNeg);
document.write(intNeg);
alert(intNeg);


let int3 = "ok";
console.log(int3);
document.write(int3);
alert(int3);


let pi = -678;
console.log(pi);
document.write(pi);
alert(pi);


let float1 = 765;
console.log(float1);
document.write(float1);
alert(float1);


let int4 = "it`s sunny day today";
console.log(int4);
document.write(int4);
alert(int4);

let boolTrue = 23456;
console.log(boolTrue);
document.write(boolTrue);
alert(boolTrue);

let boolFalse = "cat";
console.log(boolFalse);
document.write(boolFalse);
alert(boolFalse);


//3.Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const numb1 = 123;
console.log(numb1);
alert(numb1);
document.write(numb1);

const numb2 = 123.67;
console.log(numb2);
alert(numb2);
document.write(numb2);

const numb3 = -123;
console.log(numb3);
alert(numb3);
document.write(numb3);

const str1 = "hello world";
console.log(str1);
alert(str1);
document.write(str1);

const str2 = "this is...";
console.log(str2);
alert(str2);
document.write(str2);

const str3 = "boolean";
console.log(str3);
alert(str3);
document.write(str3);


//4. при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write


let userName = prompt("What is your firstname?");
alert(userName);
let userLastName = prompt("What is your lastname?");
alert(userLastName);
let userSurName = prompt("What is your surname?");
alert(userSurName);
console.log(userName ,userLastName, userSurName );
document.write(userName , userLastName ,userSurName);


//5.Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = userName + " " + userLastName + " " + userThirdName;
alert(person);
console.log(person);
document.write(person);

//6 .Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let lastName1 = prompt("What is your lastname?");
let firstName1 = prompt("What is your name?");
let surName1 = prompt("What is your surname?");
let mother = {
    lastName1 ,
    firstName1 ,
    surName1 };
console.log(youngerDaughter);

let lastName2 = prompt("What is your lastname?");
let firstName2 = prompt("What is your name?");
let surName2 = prompt("What is your surname?");
let olderDaughter = {
    lastName2 ,
    firstName2 ,
    surName2 }
console.log(olderDaughter);

let lastName3 = prompt("What is your lastname?");
let firstName3 = prompt("What is your name?");
let surName3 = prompt("What is your surname?");
let son = {
    lastName3 ,
    firstName3 ,
    firstName3 };
console.log(son);


let lastName4 = prompt("What is your lastname?");
let firstName4 = prompt("What is your name??");
let surName4 = prompt("What is your surname?");
let youngerDaughter = {
    lastName4 ,
    firstName4 ,
    surName4 }
console.log(youngerDaughter);


//7.при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let number1 = prompt("Enter first number");
let number2 = prompt("Enter second number");
let number3 = prompt("Enter third number");
console.log(+number1, +number2, +number3 );


//8.при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");
let num4 = prompt("Enter fourth number");
let result = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4));
console.log(result);

//9.при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let float1 = prompt("Enter first float number");
let float2 = prompt("Enter second float number");
let float3 = prompt("Enter third float number");
let result = (parseFloat(float1) + parseFloat(float2) + parseFloat(float3));
console.log(result);

//10.при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let Float1 = prompt("Enter first float number");
let Float2 = prompt("Enter second float number");
let Float3 = prompt("Enter third float number");
let result = (Math.round(Float1) + Math.round(Float2) + Math.round(Float3));
console.log(result);

//11.при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let int1 = prompt("Enter first integer number");
let int2 = prompt("Enter second integer number");
let math = Math.pow(parseInt(int1), parseInt(int1));
console.log(math);

//12.При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
-let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

let d = undefined;
console.log(typeof d);

//13Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//В одинаковых выражениях в задании не использовать два одинаковых оператора.
/*5 ? 6 -> true
    5 ? 6 -> false
    5 ? 6 -> false
    5 ? 6 -> false
    10 ? 10 -> true
    10 ? 10 -> true
    10 ? 10 -> false
    10 ? 10 -> false
    10 ? 10 -> false
    123 ? '123' -> false
    123 ? '123' -> true
*/
alert(5 < 6 );
alert(5 > 6);
alert(5 >= 6);
alert(10 == 10);
alert(10 === 10);
alert(10 != 10);
alert(10 > 10);
alert(10 > 10);
alert(123 === '123');
alert(123 == '123');

/*Дополнительно:
- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 );false
console.log(34 > 33 && 23 < 90 );true
console.log(99 > 100 && 45 > 12 );false
console.log(132 > 100 || 45 < 12 );true
console.log(111 > 11 || 45 < 111 );true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));true
console.log(!!'-1');true
console.log(!!-1);true
console.log(!!'0');true
console.log(!!'null');true
console.log(!!'undefined');true
console.log(!!(3/'owu'));false
console.log((111 > 11 || 45 < 111) ||  !!'0');true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false*/


//CLASS

//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str = "Привет";
console.log (typeof str);

let num = 123;
console.log (typeof num);

let flag = true;
console.log (typeof flag);

let txt = "true";
console.log (typeof txt);

/*2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
    5 + 3,
    5 - 3,
    5 * 3,
    5 / 3,
    5 % 3
    поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.*/
let a1 = 5+3;
console.log (a1);

let a2 = 5-3;
console.log (a2);

let a3 = 5*3;
console.log (a3);

let a5 = 5%3;
console.log (a5);


/*3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3,
    75 + 'кг'
*/
let a6 = 5%3;
console.log (a6);

let a7 = 3%5;
console.log (a7);

let a8 = 5+"3";
console.log (a8);

let a9 = "5"-3;
console.log (a9);


let a10 = 75+"кг";
console.log (a9);


//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
 //шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
let height = 23;
let width = 10;
let s = height * width;
console.log (s + "см");

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let v = 3.14 * ((dC/2)**2) * heightC;
console.log (v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = Math.pow((Math.pow(3,2) + Math.pow(4,2)),2);
console.log(k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let str = "Hello world";
document.write
console.log(str);
document.write(str);
alert(str);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
alert("Tsybrivska Olha \n 35 years \n my hobby is programming");

/*9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
  Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
  Вывести в документ содержимое переменной concatenation спомощью document.write*/

let str1 = "Кто";
let str2 = "ты";
let str3 = "такой?"
let concatenation = str1 + " " + str2 + " " + str3;
document.write(concatenation);
