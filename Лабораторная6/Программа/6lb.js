import React from 'react';
import ReactDOM from 'react-dom/client';
/*• для навигационных элементов сайта вывод предупреждения о том, что раздел 
сайта недоступен («Раздел … недоступен!»); */


/*• для формы поиска отмену отправки данных формы. */

/*описание простейшей 
функции с одним параметром, обозначающим название раздела сайта; функция 
должна выводить предупреждение (alert) с текстом «Раздел "…" недоступен!», 
где вместо многоточия должно подставляться значение параметра функции, а 
двойные кавычки обязательно должны обрамлять это значение; */

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Hello"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <h1>hello</h1>
        {new MyComponent().render()}
    </React.StrictMode>
);
