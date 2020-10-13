function start() { //создаем имя функции для изменения стилей на стороне клиента старта игры
    //создаем стартовый блок
    sozdanieStartBlock();
    //при клике на кнопку начать запускаем игру
    startKnopka.onclick = nachat;
}

function nachat() {
    //удалить стартовый блок
    udalenieStartBlock();
    //создаем жизни
    sozdanieLifesBlock();
    //создаем танк
    sozdanieTank();
    preload();
    gameLoop();
}
//начало
start();