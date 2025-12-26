//Всякие переменные и тд
let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')
let c = context

let x = 307.5 //Положение персонажа по X
let room = 1 //Номер комнаты
let text = '' //Текст снизу
let size = 32 //Размер текста в пикселях
let vx = 5 //Скорость по X
let tempvar1 = 0 //Сообщение из скрэтча
let textid = 1 //Напрямую влияет на отображаемый текст
let clickE = 0 //Что-то похожее на темпвар, но чтобы не копировать строчку полностью и оставить её в управлении
let bg1 = new Image() //1 фон
bg1.src = '521b1690-4e83-4bcb-a25d-4ef1793c443e_0.png'
let bg2 = new Image() //2 фон
bg2.src = 'd53b2409-61b0-4f1d-8a4b-71eadff463bd_0.png'
let bg3 = new Image() //3 фон
bg3.src = 'bc6f500c-053a-44a1-a2f1-ef330ce4ca28_0.png'
let bg4 = new Image() //4 фон
bg4.src = '9b26d0a5-d433-4d5d-98bb-86e171659c8d_0.png'
let player = new Image() //Игрок
player.src = 'QKCL-E5cTWqgSe7hgq2j0w-fotor-bg-remover-20251225101351-fotor-20251225101448.png'

//Управление
function controls(key) {
    //Вправо
    if (key.code == 'KeyD' || key.code == 'ArrowRight') {
        x += vx
        if (x > 615) {
            x = 615
        }
    }
    //Влево
    if (key.code == 'KeyA' || key.code == 'ArrowLeft') {
        x -= vx
        if (x < 0) {
            x = 0
        }
    }
    if (key.code == 'KeyE') {
        clickE == 1
    }
}

//Смена комнаты (и локации)
function roomswitcher() {
    tempvar1 = 0
    //Вперёд
    if (x >= 615) {
        if (room < 70) {
            room += 1
            x = 1
        }
    }
    //Назад
    if (x <= 0) {
        if (room > 1) {
            room -= 1
            x = 614
        }
    }
    console.log(room)
}


//Смена текста
function pisanina() {
    //Изменение textid
    textid = room
    //Изменение текста
    if (textid == 1) {
        text = 'Привет! Ты в моей игре "Frozen village".'
        size = 34
    }
    if (textid == 2) {
        text = 'Ты помогаешь жителям заснеженной деревни. Удачи!'
        size = 26
    }
    if (textid == 3) {
        text = 'Поговори с первым NPC'
        size = 26
    }
    console.log(textid)
}

//Отображение визуала
function visual() {
    c.clearRect(0,0,1000, 1000)
    //Фон (И не только кстати) в зависимости от локации
    if (room <= 10) {
        c.drawImage(bg1, 0, 0, 640, 480)
    }
    if (room >= 11 && room <= 25) {
        c.drawImage(bg2, 0, 0, 640, 480)
    }
    if (room >= 26 && room <= 45) {
        c.drawImage(bg3, 0, 0, 640, 480)
    }
    if (room >= 46 && room <= 70) {
        c.drawImage(bg4, 0, 0, 640, 480)
    }
    //Персонаж
    c.drawImage(player,x,430,25,50)
    //Текст
    c.fillStyle = 'rgb(125,125,125)'
    c.fillRect(0,480,640,50)
    c.font = size + 'px segoe ui'
    pisanina()
    c.fillStyle = 'black'
    c.fillText(text,10,520,640,50)
}

//Активация функций
setInterval(visual, 16)
setInterval(roomswitcher, 16)
document.addEventListener('keydown', controls)