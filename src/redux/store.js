import { createStore } from 'redux';

import reducer from './reducer.js';

// 定义一些初识状态
var state = {
    title: '首页',
//  name: '修改',
//  subtitle: '我是子组件'
}

var store = createStore(reducer, state);   //(传一个方法过去)

export default store;




















