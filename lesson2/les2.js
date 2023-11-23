// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let arr1=[1,2,'map',true,87, 'book', 3.14, false, 77, 'king']
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])
let book1={title: '3 stones' , pageCount: 128 , genre: 'detective'}
let book2={title: ' Maps of love' , pageCount: 165 , genre: 'roman'}
let book3={title: ' Pirates of Caribian' , pageCount: 218 , genre: 'adventure'}
console.log(book1);
console.log(book2);
console.log(book3);


let book4={title: '3 stones' , pageCount: 128 , genre: 'detective', authors: [{ name:'Jane Austen', age:43}] }
console.log(book4);
let book5={title: ' Maps of love' , pageCount: 165 , genre: 'roman', authors:[{ name: 'Lewis Carroll', age: 56}]}
console.log(book5);
let book6={title: ' Pirates of Caribian' , pageCount: 218 , genre: 'adventure',authors:[{ name: 'George Orwell', age: 32}] }
console.log(book6);

let user1={name: 'olga', username: 'one', password: 45674}
let user2={name: 'oleg', username: 'two', password: 56794}
let user3={name: 'ira', username: 'three', password: 56874}
let user4={name: 'igor', username: 'four', password: 57674}
let user5={name: 'lena', username: 'five', password: 56074}
let user6={name: 'vika', username: 'six', password: 56734}
let user7={name: 'nika', username: 'seven', password: 15674}
let user8={name: 'anton', username: 'eight', password: 85674}
let user9={name: 'nina', username: 'nine', password: 56748}
let user10={name: 'dima', username: 'ten', password: 56174}


console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);

let x=1;
x=0
if (x!=0) {console.log('Вірно')}
else {console.log('Невірно')}

let time=37;
if (0<time && time<=15){console.log('1qu')}
 else if(15<time && time<=30){console.log('2qu')}
 else if(30<time && time<=45){console.log('3qu')}
 else if(45<time && time<=59){ console.log('4qu')}

let day=30;
if (0<day && day<=10){console.log('1dec')}
else if(10<day && day<=20){console.log('2dec')}
else if(20<day && day<=31){console.log('3dec')}

let plan=7
switch (plan){
    case 1:console.log('cinema');
    break;
    case 2:console.log('work');
    break;
    case 3:console.log('school');
    break;
    case 4:console.log('park');
    break;
    case 5:console.log('work');
    break;
    case 6:console.log('work');
    break;
    case 7:console.log('library');
}

let a=7;
let b=3;
if(a>b && a!==b){console.log(a)}
else if(b>a && a!==b){console.log(b)}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let monthDuration=7
if(monthDuration >5){
    console.log('super')}
