//- Знайти та вивести довижину настипних стрінгових значень
let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool'
console.log(c.length);


//- Перевести до великого регістру наступні стрінгові значення
let d='hello world';
console.log(d.toUpperCase());
let e='lorem ipsum';
console.log(e.toUpperCase());
let f='javascript is cool'
console.log(f.toUpperCase());
//- Перевести до нижнього регістру настипні стрінгові значення
let j='HELLO WORLD';
console.log(j.toLowerCase());
let h='LOREM IPSUM';
console.log(h.toLowerCase());
let g='JAVASCRIPT IS COOL'
console.log(g.toLowerCase());
//- Є "брудна" стрінга
let str = ' dirty string   '
console.log(str.length);
//Почистити її від зайвих пробілів.
let str1=str.trim()
console.log(str1);
console.log(str1.length);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні';
let arr=str2.split(' ')
// let arr = stringToarray(str2); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr);

//- є масив чисел
let numbers=[10,8,-7,55,987,-1011,0,1050,0]
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbTostring= numbers.map(num=>num+``)
console.log(numbTostring);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
let nums1=nums.sort(function (a,b){return a-b});
console.log(nums1);

//sortNums(nums,'descending') // [21,11,3]
let nums2=nums.sort(function (a,b){return b-a});
console.log(nums2);
//==========================
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let courses=coursesAndDurationArray.sort
(function (a,b)
{return b.monthDuration-a.monthDuration})
console.log(courses);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let courses1=coursesAndDurationArray.filter(item=>item.monthDuration>5)
    console.log(courses1)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let courses2=coursesAndDurationArray.map((course,index)=>{course.id=index+1;return course} )
console.log(courses2);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards=[
    {cardSuit:'spade' , value: `6`, color: `black`,},
    {cardSuit:'spade' , value: `7`, color: `black`,},
    {cardSuit:'spade' , value: `8`, color:`black` ,},
    {cardSuit:'spade' , value: `9`, color:`black` ,},
    {cardSuit:'spade' , value: `10`, color: `black`,},
    {cardSuit:'spade' , value: `ace`, color: `black`,},
    {cardSuit:'spade' , value:`jack` , color: `black`,},
    {cardSuit:'spade' , value: `queen`, color: `black`,},
    {cardSuit:'spade' , value: `king`, color: `black`,},
    {cardSuit:'diamond' , value: `6`, color: `red`,},
    {cardSuit:'diamond' , value: `7`, color: `red`,},
    {cardSuit:'diamond' , value: `8`, color:`red` ,},
    {cardSuit:'diamond' , value: `9`, color: `red`,},
    {cardSuit:'diamond' , value: `10`, color:`red` ,},
    {cardSuit:'diamond' , value: `ace`, color: `red`,},
    {cardSuit:'diamond' , value: `jack`, color:`red` ,},
    {cardSuit:'diamond' , value: `queen`, color: `red`,},
    {cardSuit:'diamond' , value: `king`, color: `red`,},
    {cardSuit: 'heart' , value: `6`, color: `red`,},
    {cardSuit: 'heart' , value: `7`, color: `red`,},
    {cardSuit: 'heart' , value: `8`, color:`red` ,},
    {cardSuit: 'heart' , value: `9`, color:`red` ,},
    {cardSuit: 'heart' , value: `10`, color: `red`,},
    {cardSuit: 'heart' , value: `ace`, color:`red` ,},
    {cardSuit: 'heart' , value: `jack`, color:`red` ,},
    {cardSuit: 'heart' , value: `queen`, color: `red`,},
    {cardSuit: 'clubs' , value: `6`, color:`black` ,},
    {cardSuit: 'clubs' , value: `7`, color: `black`,},
    {cardSuit: 'clubs' , value: `8`, color: `black`,},
    {cardSuit: 'clubs' , value: `9`, color: `black`,},
    {cardSuit: 'clubs' , value: `10`, color:`black` ,},
    {cardSuit: 'clubs' , value: `ace`, color: `black`,},
    {cardSuit: 'clubs' , value: `jack`, color:`black` ,},
    {cardSuit: 'clubs' , value:`queen`, color: `black`,},
    {cardSuit: 'clubs' , value:`king`, color: `black`,},

]
// - знайти піковий туз
const findCard=cards.find((card)=>card.value===`ace`&& card.cardSuit===`spade`);
console.log(findCard);

// - всі шістки
const findCard1=cards.filter(item=>item.value===`6`);
console.log(findCard1);
// - всі червоні карти
const findCard2=cards.filter(item=>item.color===`red`);
console.log(findCard2);
// - всі буби
const findCard3=cards.filter(item=>item.cardSuit===`diamond`);
console.log(findCard3);
// - всі трефи від 9 та більше
const findCard4=cards.filter(item=>item.value>`8`&&item.cardSuit===`clubs`);
console.log(findCard4);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================

    // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardSuite=cards.reduce((accumulator,card)=>{
    if(card.cardSuit===`spade`){
        accumulator[0].push(card);
    } else if (card.cardSuit===`diamond`) {
        accumulator[1].push(card);
    } else if (card.cardSuit===`heart`) {
        accumulator[2].push(card)
    } else if (card.cardSuit===`clubs`) {
        accumulator[3].push(card);
    } return accumulator
        },[[],[],[],[]])
console.log(cardSuite);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

for (const item of coursesArray) {
    let v=item.modules
    for (const vElement of v) {
        if(vElement===`sass`){
            console.log(item);
        }

    }
}

// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray1 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const item of coursesArray1) {
    let p=item.modules
    for (const vElement of p) {
        if(vElement===`docker`){
            console.log(item);
        }

    }
}