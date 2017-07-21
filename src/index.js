import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './lib/hotcss.js';
import './css/reset.css';
import './css/style.css';



//引入 store
//import store from './redux/store.js';
//引入 react-redux
//import { Provider } from 'react-redux';


//处理render函数
function render() {
    ReactDOM.render(
//      <Provider store={store}>
            <App />
//      </Provider>
		,
        document.getElementById('root')
    );
}

render();

store.subscribe(render);



registerServiceWorker();
