var tank = { /* создаем переменную для измениния кординат такнка и врагов */
	top: 355,
	left: 275
}

var missiles = []; /* создаем массив для ракеты так как у ракеты кодрдинаты будут двойными */


function sozdanieStartBlock() {
    // создаем блок <div id="start-block">
    startBlock = document.createElement("div");
    startBlock.id = "start-block";
    //создаем кнопку <button id="start-knopka">Начать</button>
    startKnopka = document.createElement("button");
    //Присваеваем уникальный индитификатор кнопке
    startKnopka.id = "start-knopka";
    //Выводим текст в кнопке
    startKnopka.innerText = "Начать";
    //Добавояем кнопку стартовый блок
    startBlock.appendChild(startKnopka);
    //Добавляем стартовый блок в игра поле
    igraPole.appendChild(startBlock);
}


function preload() { /* выводим музыку для игры */
	goTank.src = "audio/drive_tank_two.mp3"; /* Обращаемся к файлу с музикой для танка */
	soundGame.src = "audio/batl.mp3"; /* музыка для игры */
	soundShute.src = "audio/shut_tank.mp3";
	soundGame.src = "audio/batl.mp3";
	soundGame.play();
	soundGame.volume = 0.05;
}

/* function draws() {
	var musicRate = map(Space, 0.1, height, 2, 0);
	musicRate = constrain(musicRate, 0.01, 4);
	soundShute.rate(musicRate);
	line(0, Space, width, Space);
	Text("rate: " + round(musicRate * 100) + "%", 10, 20);
} */


function sozdanieTank() {  /* функция срздание танка */
	//шарик
var tank = document.createElement("div"); /* создаем контейнер для танка */
	tank.id = "tank";
	igraPole.appendChild(tank); /* ложим котейнер для танка в igraPole */
	tankBlock = document.createElement("span"); /* содаем span элемент в который будем ложить катринку танка */
	tankBlock.id = "image"; /* обращаемся к катринке танка стилю */
	tank.appendChild(tankBlock); /* ложим переменную tankBlock в appendChild -- ball для того чтобы можно было работать с размером картинки находящейсяв контейнере ball*/
//онкейпрес смотрет какая клавиша нажата
}

document.onkeypress = function(event) {
	//если нажата  то едем вверх
	if (event.code == "KeyW") {
		//меняем картинку с помощю стилей
		tankBlock.id = "image";/* обращаемся к катринке танка 
		стилю */
		//проверка чтобы не выйти за приделы поля
			if (tank.top != 15) {
				tank.top = tank.top - 10; /* перемещение такна вверх на 10 пиеселей */
			goTank.play(); /* запуск музыки передвижения */
			moveHero(); /* запуск функции перевидения */
			}
		//если нажата  то едем вниз
	}else if (event.code == "KeyS") {
		//меняем картинку с помощю стилей
		tankBlock.id = "image2";/* обращаемся к катринке танка стилю */
		//проверка чтобы не выйти за приделы поля
			if (tank.top != 365) {
			tank.top = tank.top + 10;
			goTank.play();
			moveHero();
		}
		//если нажата  то едем влево
	}else if (event.code == "KeyA") {
		//меняем картинку с помощю стилей
		tankBlock.id = "image3";/* обращаемся к катринке танка стилю */
		//проверка чтобы не выйти за приделы поля
			if(tank.left != 15) {
				tank.left = tank.left - 10;
				goTank.play();
				moveHero();
			}
		//если нажата  то едем вправо
	}else if (event.code == "KeyD") {
		//меняем картинку с помощю стилей
		tankBlock.id = "image4";/* обращаемся к катринке танка стилю */
		//проверка чтобы не выйти за приделы поля
			if(tank.left != 555) {
				tank.left = tank.left + 10;
				goTank.play();
				moveHero();
			}
		
	}else if (event.code == "Space") { /* Садим на пробел выстрел нашего корабля */
		soundShute.play();
        missiles.push({ /* обращаемся к переменной ракеты делаем ей свойство push но внем задаем кординаты к правому и левому отступу */
            left: tank.left + 15, /* если герой передвинется то кракете будет прибавляться 15 пиксов -- при каждом коике координата меняется непосредственно обекту герою*/
			top: tank.top + -10 /* топ без изменения кординат */
		})
        /* console.log(missiles); проверяем отработку ракеты */
		drawMissiles() /* выводим функцию выстрела */
    }
}

/* console.dir(igraPole.appendChild); */
/* конец функции sozdanieTank */

/* Создаем функцию по передвижению танка потом запускаем эту функцию в document.onkeypress = function(event)*/
function moveHero() {
	document.getElementById("tank").style.left = tank.left + "px"; /* такн бвигается по бокам */
	document.getElementById("tank").style.top = tank.top + "px";/* Танк двигается верз или низ  JSOобращаемся к document похоже на цикл но значение лежит в обращения к стилю герою и прибавления 1 единицы для пременения ее согласно данным заданым в event.code == "KeyW"  и e.event.code == "KeyA"*/
}


/* создаем функцию появления ракеты */
function drawMissiles() {
    document.getElementById("missiles").innerHTML = ""; /* JSOОбращаемс=мся к id missiles к innerHTML */
    /* alert(drawMissiles) -- искали проблему в коде*/
    for( var missile = 0; missile < missiles.length; missile = missile + 1 ) {
		document.getElementById("missiles").innerHTML += `<div class="missile" style="left:${missiles[missile].left}px;top:${missiles[missile].top}px;"></div>`;
    }
}

/* создаем движение ракеты */
function moveMisseles() { 
    for( var missile = 0; missile < missiles.length; missile = missile + 1 ) { missiles[missile].top = missiles[missile].top - 5;
	}
}



/* Создаем врагов  */
function drawEnemies() {
    document.getElementById("enemies").innerHTML = ""; 
    for( var enemy = 0; enemy < enemies.length; enemy = enemy + 1 ) {
        document.getElementById("enemies").innerHTML += `<div class="enemy" style="left:${enemies[enemy].left}px;top:${enemies[enemy].top}px;"></div>`;
	}
}

/* создаем движение врагов */
function moveEnemies() { 
	for( var enemy = 0; enemy < enemies.length; enemy = enemy + 1 ) { enemies[enemy].top = enemies[enemy].top + 1;} 
}

/* Создаем функциюдля повреждения ракетой противника */
function collisionDetection() {
    for( var enemy = 0; enemy < enemies.length; enemy = enemy + 1 ) {
        for( var missile = 0; missile < missiles.length; missile = missile + 1 ) {
            /* console.log("enemies[enemy].top", enemies[enemy].top); проверка полета корабля противника*/
            if( /* пишем проверку если ракета шашла за кардинаты или промох и пошла дальше тогда все гуд */
                 (missiles[missile].top <= enemies[enemy].top + 40) && /*проверка когда ракета меньше позиции до врага  на 40 писелей  */
				 (missiles[missile].top >= enemies[enemy].top)  && 
				 /* && проверка когда ракета болmit позиции top dhfuf */
                 (missiles[missile].left >= enemies[enemy].left)  &&
                 (missiles[missile].left <= enemies[enemy].left + 40)
                 /* в этой проверке мы проверяем если ракета попала в колаблю тогда консоле лог выводит ("HIT!!!") если мимо просто пролетае снаряд */

                ){
                /* console.log("HIT!!!") проверка снаряд дошел до врага*/
                enemies.splice(enemy, 1); /* splice удаляем элементы массива в элементах js  */
                missiles.splice(missile, 1); /* удаляет ракету после столкновения с врагом */

            }
        }
    }
}

function gameLoop() { /* задаем создание ракеты и выстрел каждую мил сек  */
    setTimeout(gameLoop, 100)
    moveMisseles();
	drawMissiles();
	drawEnemies();
	moveEnemies();
	collisionDetection();
}


/* //создаем блок жизней
function creationLifes(){
	var lifes = document.createElement("div");
	igraPole.appendChild(lifes);
	lifes.id = "lifes";
	//создаем текущие количество жизней
	var amountLifes = 0;
	//фунция генерации жизней
	while (amountLifes < maxAmountLifes){
		amountLifes = amountLifes + 1;
		var span = document.createElement("span");
		lifes.appendChild(span);
	}
} */

function sozdanieLifesBlock() {
    lifes = document.createElement("div");// Создаем коробочку жизни для блока
    lifes.id = "lifes"; //Назначаем id жизням переменную
    var tekucheeColichestvoLifes = 0; // создаем коробочку для цикла while текущее количесто отображенных жизней
    while(tekucheeColichestvoLifes < colishestvoLifes) { //цикл если что то больше colishestvoLifes тогда false
        var span = document.createElement("span");// Создаем переменную с создание span
        lifes.appendChild(span); //переменная span помещаем в блок к ребенку жизни
        tekucheeColichestvoLifes++; //добавляем 1 к переменой i для того чтобы цикл был не бесконечным увеличиваем количество отбраженных жизней на единицу
    }
    igraPole.appendChild(lifes);// Отобразить sozdanieLifesBlock в игровом поле 
}



function udalenieStartBlock() {
    startBlock.remove(); //Удалить статовый блок 
}

function udalenieLifesBlock() {
    lifes.remove(); //Удалить жизненый блок
}