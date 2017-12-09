import React,{Component} from 'react'

import {Router,Route,hashHistory,IndexRoute,Redirect,IndexRedirect} from 'react-router'
// axios.defaults.baseURL='http://localhost:8000'
axios.defaults.baseURL="http://101.132.180.228:8000"
import axios from 'axios'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import App from './app'
import My from './my'
import Recommend from './recommend'
import Message from './message'
import Explore from './explore'
import Login from './login'
import Set from './set'
import Setout from './setout'
import Ardetail from './ardetail'
import Comment from './comment'
import Carelog from './carelog'
import Column from './column'
import ColumnDetail from './columnDetail'

export default class Mian extends Component{
    render(){
        return(
        //     <ReactCSSTransitionGroup
        //     transitionLeaveTimeout = {800}
        //     transitionEnterTimeout = {800}
        //     transitionName = {
        //         {
        //             enter: 'enter',
        //             leave: 'leave',
        //         }
        //     }
        // >
            <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRedirect to='/recommend'/>
                <Redirect from="/react/dist" to="/" />
                <Route path='my' component={My}/>
                <Route path='recommend' component={Recommend}/>
                <Route path='message' component={Message}/>
                <Route path='explore' component={Explore}/>
            </Route>
            <Route path='/login' component={Login}/>
            <Route path='/set' component={Set}/>
            <Route path='/setout' component={Setout}/>
            <Route path='/ardetail' component={Ardetail}/>
            <Route path='/comment' component={Comment}/>
            <Route path='/carelog' component={Carelog}/>
            <Route path='/column' component={Column}/>
            <Route path='/columnDetail' component={ColumnDetail}/>
       </Router>
    //    </ReactCSSTransitionGroup>
        )
    }
}

