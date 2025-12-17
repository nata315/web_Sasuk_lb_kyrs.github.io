let date = new Date();
let map = new Map();
let current_month="";//переменная для хранения текущего месяца
let current_day = "";//переменная для хранения текущего дня
let new_month = date.getMonth();//переменная для хранения индекса нового месяца
let month = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
let current_week_day = date.getDay();//текущий день недели
let year = document.getElementById("year");//получаем год из поля календаря
year.addEventListener('input', set_table);//изменение таблицы при изменении года
map.set("2025-ноябрь-24","· задача1\n· задача2");//пробная заметка 

// функция при запуске программы
window.onload = () => {
    current_month = month[date.getMonth()];//текущий месяц  
    document.getElementById("month").textContent = current_month;//добавление текущего месяца в календарь
    document.getElementById("year").value = date.getFullYear();//добавление текущего года в календарь
    set_table();//заполнение табличной части календаря
}

//переключение месяца
//месяц назад
document.getElementById("left").onclick =()=>{
    new_month-=1;
    if(new_month < 0){//для зацикливания месяцев и не выйти за границы
        new_month = 11;
        current_month = month[new_month];
    }
    else{
        current_month = month[new_month];
    }
    document.getElementById("month").textContent = current_month;
    set_table();
}
//месяц вперед
document.getElementById("right").onclick =()=>{
    new_month+=1;
    if(new_month > 11){//для зацикливания месяцев и не выйти за границы
        current_month = month[0];
        new_month = 0;
    }
    else{
        current_month = month[new_month];
    }
    document.getElementById("month").textContent = current_month;
    set_table();
}

//функция заполнения табличной части календаря
function set_table(){
    const firstDay = new Date(year.value, new_month, 1);//полная дата первого числа месяца 
    const lastDay = new Date(year.value, new_month + 1, 0);// полная дата последнего числа месяца 
    const daysInMonth = lastDay.getDate();//кол-во дней в месяце 
    const startingDay = firstDay.getDay()-1;//день начала заполнения 

    //для проверки совпадения текущей даты
    let key = false;
    if(date.getMonth()==new_month && year.value==date.getFullYear()){//проверка совпадения реальных данных и табличных
        key = true;
        current_day = date.getDate();
    }


    // получение дней с заметками для текущего месяца и года
    let daysWithNotes = [];//даты дней с заметками 
    let keys = Array.from(map.keys());//список ключей всех заметок 
    
    keys.forEach(key => {//перебор ключей
        let parts = key.split("-");
        if (parts.length === 3) {
            let keyYear = parts[0];
            let keyMonth = parts[1];
            let keyDay = parseInt(parts[2]);
            
            // проверка совпадения года и месяца
            if (keyYear === year.value && keyMonth === current_month) {
                // проверка, есть ли заметка для этого дня
                let noteValue = map.get(key);
                if (noteValue && noteValue.trim() !== "") {
                    daysWithNotes.push(keyDay);
                }
            }
        }
        if(map.get(key) && map.get(key).trim()==""){
            map.delete(key);
        }
    });

    let table = '<tr>';			
            // Пустые ячейки перед первым днем
            for (let i = 0; i < startingDay; i++) {
                table += '<td></td>';
            }			
            // Дни месяца
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(document.getElementById("year").value, new_month, day);
                const dayOfWeek = currentDate.getDay()-1;
                
                if (dayOfWeek === 0 && day !== 1) {
                    table += '</tr><tr>';
                }
                
                if(key && day==current_day){//отметка красным текущей даты
                    if(daysWithNotes.includes(day)){ // дни с заметками
                        table += `<td style="border: 2px solid blue;" bgcolor="#F24F13" onclick="click_td(${day})">${day}</td>`;
                    }
                    else{
                        table += `<td bgcolor="#F24F13" onclick="click_td(${day})">${day}</td>`;
                    }
                    
                }
                else if(daysWithNotes.includes(day)){ // дни с заметками
                    table += `<td style="border: 2px solid blue;" onclick="click_td(${day})">${day}</td>`;
                }	
                else{
                    table += `<td onclick="click_td(${day})">${day}</td>`;
                }			
                
            }		
    table += '</tr>';
     // Вставляем таблицу в DOM
    document.getElementById("calendar-body").innerHTML = table;
}


//открытие заметки 
function popupFn() { // Функция для отображения окна
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupDialog").style.display = "grid";
}
//кнопка закрытия 
document.getElementById("close-btn").onclick = () => {
    //closeFn();//закрыть
    map.customSet();//обновлние заметки
    document.getElementById("note").placeholder="Планов нет";
    map.divideKey();//добавление ключа в класс
}
function closeFn() { // Функция для закрытия окна 
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupDialog").style.display = "none";
}
//функция нажатия на ячейку таблицы
function click_td(i){
    current_day = i;
    popupFn();//открытие окна
    map.customGetKey();//создание новой заметки/открытие старой
}

//при закрытии заметки 
Map.prototype.customSet = function(){
   let current_key = year.value +"-"+current_month+"-"+current_day;
    if(map.has(current_key)){
        map.set(current_key,document.getElementById("note").value);//сохранит новую запись 

        console.log("заметка существует "+current_key);

        if(document.getElementById("note").value!=""){
            closeFn();//закрыть
        }
        else{
            if(confirm("заметка пустая, отменить сохранение?")){
                closeFn();//закрыть
            }
            else{
                this.delete(current_key);
            }
            console.log("поле пустое"+current_key);
        }
    }
    else{
        if(document.getElementById("note").value!=""){
           map.set(current_key,document.getElementById("note").value);//создаст новую заполненую 
            console.log("заметка новая "+current_key); 

            closeFn();//закрыть
        }
        else{
            if(confirm("заметка пустая, отменить сохранение?")){
                closeFn();//закрыть
            }
            else{
                
            }
            console.log("поле пустое"+current_key);
        }
        
    }
    set_table(); // Обновляем таблицу после сохранения заметки
}

//при открытии окна с заметкой 
Map.prototype.customGetKey = function(){
    let current_key = year.value +"-"+current_month+"-"+current_day;//ключ
    document.getElementById("currentDate").textContent = year.value +"-"+(new_month+1)+"-"+current_day;//заполнение даты в окне
    if(map.has(current_key)){//проверка на существование ключа-заметки
        let noteValue = map.get(current_key);
        if(noteValue && noteValue.trim() !== "") {//проверка на пустоту 
            document.getElementById("note").value = noteValue;//заполнение старой заметкой
        } else {
            document.getElementById("note").value = "";//очистка поля
            document.getElementById("note").placeholder = "Планов нет";
        }
        console.log("заметка существует "+current_key+" прошлая запись :"+ noteValue);
    }
    else{
        document.getElementById("note").value = "";
        document.getElementById("note").placeholder = "Планов нет";
        //map.set(current_key,"");//создаст новую пустую
        //console.log("заметка новая "+current_key );
    }
    
}
//функция разделения ключа на составляющие для записи в объект класса
Map.prototype.divideKey = function(){
    let keys = Array.from(this.keys());
    let divideKeys = keys.map(key => {
        let parts = key.split("-");
        if(map.get(key) && map.get(key).trim()!=""){
            return new divideDate(parseInt(parts[2]), parts[1], parts[0]);
        }       
        
    });

    console.log("\nВсе заметки:");
    divideKeys.forEach(dateObj => {
        console.log(dateObj.toString());
        console.log(dateObj.isNote());

    });
    console.log("\n");
    
}


class divideDate{
    constructor(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    
    // Переименован в более подходящее название
    toString() {
        return `${this.day} ${this.month} ${this.year}`;
    }
    
    getMonth(){
        return this.month;
    }
    getDay(){
        return this.day;
    }
    getYear(){
        return this.year;
    }
    //метод проверки наличия заметки у ключа
    isNote(){
        let currentKey=this.year+"-"+this.month+"-"+this.day;
        if(map.get(currentKey)==""){
            return("Заметка пустая, удаление");
        }
        else{
            return("Заметка не пустая : "+map.get(currentKey));
        }
    }

}