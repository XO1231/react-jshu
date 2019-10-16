import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './views/todo';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';//pWA离线浏览
//用react-redux的写法
//Provider 是react-redux 的用法
import store from './store'
const App1 = (
    <Provider store = {store}>
        <Todo></Todo>
    </Provider>
    );
ReactDOM.render(App1 , document.getElementById('root'));
// jsx语法中,如果我们要使用自己的组件,组件名要以大写字母开头
//不用react-redux的写法，用redux的写法
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
