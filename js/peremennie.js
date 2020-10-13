
var igraPole = document.querySelector("#igra");
/* аудио файлы к игре */
var goTank = new Audio();
var soundGame = new Audio();
var soundShute = new Audio();
var soundGame = new Audio();
/* Создание жизни*/
var lifes = null;
//количество жизни
var colishestvoLifes = 3;


var tankBlock = null;
//максимальное количество жизней
var maxAmountLifes = 3;
var enemies = [ /* создаем кординаты для врагов */
    { left: 150, top: 50 },
    { left: 250, top: 50 },
    { left: 350, top: 50 },
    { left: 450, top: 50 },
    { left: 100, top: 100 },
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 }
]