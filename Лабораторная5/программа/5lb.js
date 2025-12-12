//$(document).ready(function(){alert("jquery подключен")});


/*Реализовать анимированное меню, в котором элементы первого уровня соответствуют 
названиям разделов, описываемых дескриптором <article>, а элементы второго 
уровня – разделам, описываемым дескриптором <section>.*/
let n =3;
for(let i =1;i<=n;i++){
    $('.nav-item'+[i]).hover(
        function(){
            $('.article'+[i]).css("display","block");
        },
        function(){
            setTimeout(function() {
                $('.article'+[i]).css("display","none");
            }, 2000);
        }
    );
}


/*Реализовать при выборе пункта меню выделение соответствующего раздела документа 
изменением его фона. Если у какого-либо раздела фон уже был изменён, то при выборе 
другого раздела цвет фона необходимо вернуть в начальное состояние. */
const m = 6;// Кол-во секций меню
for(let i=1;i<=m;i++){
    $('.nav-link'+[i]).click(function(){
        for(let j=1;j<=3;j++){
            $('#article'+[j]).css("background-color","");
        }
        for(let j=1;j<=m;j++){
            $('#section'+[j]).css("background-color","");
        }
        $('#section'+[i]).css("background-color","beige");
    })
}
for(let i=1;i<=3;i++){
    $('.nav-link-article'+[i]).click(function(){
        for(let j=1;j<=3;j++){
            $('#article'+[j]).css("background-color","");
        }
        for(let j=1;j<=m;j++){
            $('#section'+[j]).css("background-color","");
        }
        $('#article'+[i]).css("background-color","aquamarine");
    })
}


/*При нажатии на названии столбца таблицы реализовать выделение тенью содержимого 
остальных ячеек данного столбца. При повторном нажатии на названии или при выборе 
названия другого столбца выделение должно пропадать. */
let t_n = 6; // Кол-во столбцов
let t_m = 5; // Кол-во строк
let current = -1; // Текущий столбец
// Вешаем обработчик на все заголовки
$('.myTable thead th').click(function() {
    let j = $(this).index() + 1; 
    if (j === 1) return;
    for(let col = 1; col <= t_n; col++) {
        for(let row = 1; row < t_m; row++) { 
            $('tr:eq(' + row + ') td:nth-child(' + col + ')')
                .css("textShadow", "")
                .css("boxShadow", "");
        }
    }
    if(current === j) {
        current = -1;
    } else {
        current = j;
        for(let row = 1; row <= t_m; row++) {
            $('tr:eq(' + row + ') td:nth-child(' + j + ')')
                .css("textShadow", "0px 2px 5px 3px rgba(0, 0, 0, 0.5)")
                .css("boxShadow", "0px 2px 5px 3px rgba(0, 0, 0, 0.5)");
        }
    }
});


/*Нажатие на элементы страницы, описанные дескриптором <aside>, должно приводить 
к перемещению содержимого этого элемента в центр экрана и анимированному 
увеличению размера шрифта. Повторное нажатие на элемент должно возвращать его на 
прежнее место и анимированно возвращать размер шрифта. Данное поведение 
реализовать с использованием собственного плагина jQuery. */
$('#section2 aside .btn-outline-light').click(function(){
    let j = $(this).index(); 
    if(!$('.list-group li:eq('+j+')').hasClass('changeSize')){
        $('.list-group li:eq('+j+')').addClass('changeSize').animate({fontSize: "25px"});
    }
    else{
        $('.list-group li:eq('+j+')').removeClass('changeSize').animate({fontSize: "14px"});
    }
    

})

$('#section5 aside .btn-outline-light').click(function(){
    let j = $(this).index(); 
    if(!$('.list-group-2 li:eq('+j+')').hasClass('changeSize')){
        $('.list-group-2 li:eq('+j+')').addClass('changeSize').animate({fontSize: "25px"});
    }
    else{
        $('.list-group-2 li:eq('+j+')').removeClass('changeSize').animate({fontSize: "14px"});
    }
    

})


/*Логотип в шапке страницы должен при наведённом на него указателе мыши «мигать», 
меняя свою прозрачность от 0% до 50%. При отведении указателя логотип должен 
приобретать изначальную степень прозрачности. */
function startBlinking() {    
    $('.logo').css("opacity","0");
    $('.logo').stop().fadeTo(1000, 0.5, function() { startBlinking()});
}
 $('.logo').hover(
        function(){
            startBlinking()},
        function() {
            $('.logo').stop().fadeTo(1000, 1);
        }
    );

