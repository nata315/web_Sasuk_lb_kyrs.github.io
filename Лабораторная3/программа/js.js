//#c9d7e7 - цвет фона

/*Реализовать при выборе пункта меню выделение соответствующего раздела документа 
изменением его фона. Если у какого-либо раздела фон уже был изменён, то при выборе 
другого раздела цвет фона необходимо вернуть в начальное состояние. */
const n = 5;// Кол-во секций меню
for(let i=0;i<n;i++){
    const specificNavItem = document.querySelectorAll('.nav-item')[i];// Получаем каждый элетнт меню по очереди
    specificNavItem.addEventListener('click', function(e) {
        // Сбрасываем фон у всех секций
        for(let i = 1; i <= n; i++) {
            const section = document.getElementById('section' + i);
            if (section) {// Проверка на существование секции меню
                section.style.backgroundColor = "#c9d7e7";
            }
        }
        const link = this.querySelector('.nav-link');
        const targetSection = link.getAttribute('href');// Получение ссылки на секцию
        const sectionId = targetSection.substring(1); // Убираем # для getElementById
        const targetElement = document.getElementById(sectionId);
        
        if (targetElement) {
            targetElement.style.backgroundColor = "cadetblue";
        }
    });
}
/*При нажатии на названии столбца таблицы реализовать выделение тенью содержимого 
остальных ячеек данного столбца. При повторном нажатии на названии или при выборе 
названия другого столбца выделение должно пропадать.  */
let t_n=6;// Кол-во столбцов
let t_m=5;// Кол-во строк
let current = -1;// Текущий столбец
for(let j=1;j<t_n;j++){
    const cell = document.querySelectorAll('table tr')[0].querySelectorAll('th')[j];//
    cell.onclick = ()=>{
        for(let j=1;j<t_n;j++){
            for(let i=1;i<t_m;i++){
                    document.querySelectorAll('table tr')[i].querySelectorAll('td')[j].style.textShadow = '';
                    document.querySelectorAll('table tr')[i].querySelectorAll('td')[j].style.boxShadow = '';
            }
        }
        if(current === j) {
            current = -1;
        } else {
            current = j;
            for(let i = 1; i < t_m; i++) {
                document.querySelectorAll('table tr')[i].querySelectorAll('td')[j].style.textShadow = '0px 2px 5px 3px rgba(0, 0, 0, 0.5)';
                document.querySelectorAll('table tr')[i].querySelectorAll('td')[j].style.boxShadow = '0px 2px 5px 3px rgba(0, 0, 0, 0.5)';
            }
        }
        
    }
}
/*Нажатие на элементы страницы, описанные дескриптором <aside>, должно приводить 
к отображению соответствующего содержимого во всплывающем окне браузера. */
function popupFn(name) { // Функция для отображения окна
    document.getElementById("overlay").style.display = "block";
    document.getElementById(name).style.display = "block";
}
function closeFn() { // Функция для закрытия окна 
    document.getElementById("overlay").style.display = "none";
    document.querySelectorAll('[id^="popupDialog"]').forEach(popup => {// Перебор всех окон
        popup.style.display = "none";
    });
}
// Назначаем обработчики для ВСЕХ кнопок закрытия
document.querySelectorAll('.close-btn').forEach(btn => {// Перебор всех кнопок
    btn.addEventListener('click', closeFn);
});
// Назначаем обработчики для кнопок открытия
document.querySelectorAll("aside button").forEach((button, index) => {// Перебор всех кнопок из aside 
    button.addEventListener('click', () => {
        popupFn("popupDialog" + (index + 1));
    });
});
/*Нажатие на кнопку сброса данных (<input type=”reset”>) должно 
сопровождаться появлением диалогового окна запроса на подтверждение сброса. 
Если пользователь подтверждает свои действия, то должен произойти сброс 
содержимого полей в начальное состояние, а также односекундное изменение 
цвета фона каждого из полей на красный цвет. Если пользователь очистку формы 
не подтверждает, она произойти не должна, а фон каждого из полей формы 
должен на одну секунду стать зелёным. */
function form_recolor(color){//функция смены цвета
    const formLabels1 = document.getElementsByClassName('form-control');
    for (let i = 0; i < formLabels1.length; i++) {
        formLabels1[i].style.backgroundColor = color;
    }
    const formLabels2 = document.getElementsByClassName('form-select');
    for (let i = 0; i < formLabels2.length; i++) {
        formLabels2[i].style.backgroundColor = color;
    }
    const formLabels3 = document.getElementsByClassName('form-check-label');
        for (let i = 0; i < formLabels3.length; i++) {
            formLabels3[i].style.backgroundColor = '';
        }
        setTimeout(() =>{ //Функция для выполнения кода спустя время 
        for (let i = 0; i < formLabels1.length; i++) {
            formLabels1[i].style.backgroundColor = '';
        }
        for (let i = 0; i < formLabels2.length; i++) {
            formLabels2[i].style.backgroundColor = '';
        }
        for (let i = 0; i < formLabels3.length; i++) {
            formLabels3[i].style.backgroundColor = '';
        }
    },1000);//  1 сек 
}
document.getElementById("reset").onclick = (event) =>{
    let form = confirm("Подтверждение сброса формы:");
    if(!form){
        event.preventDefault();// Отмена сброса
        form_recolor('green');
    }
    else if(form){
        form_recolor('red');
    }
}
    /*Нажатие на кнопку отправки данных (<input type=”submit”>) должно 
приводить к односекундному изменению фона каждого из полей формы на синий 
цвет и последующему появлению информационного диалогового окна с 
сообщением о том, что данные отправлены. После закрытия этого окна реальная 
отправка данных формы должна быть предотвращена. */
document.getElementById("submit").onclick = (event) =>{
    form_recolor('blue');
    alert("Данные отправлены");
    event.preventDefault();// Отмена отправки
} 
