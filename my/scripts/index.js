import ReactDOM,{render} from 'react-dom';
var app=document.getElementById('app');

import '../styles/index.less'
import '../libs/flexible'
import Contener  from './contener'
import React from 'react'

import {Provider} from "react-redux"

import store from './store'

var hotRender=()=>{
    render(
        <Provider store={store}>
            <Contener/>
        </Provider>,
        app
    )
}
hotRender()