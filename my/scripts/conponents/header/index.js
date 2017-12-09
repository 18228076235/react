import React,{Component}from 'react'
import { hashHistory } from 'react-router'

import {connect} from 'react-redux';

@connect(
    (state)=>({...state})
)

export default class my extends Component{
    goback=()=>{
        hashHistory.go(-1)
    }
    render(){
        const {headData}=this.props
        return(
            <div id='head'>
             <i className='iconfont icon-arrow-fine-left' onClick={this.goback}></i> 
                <span>{headData}</span>
            </div>          
        )
    }
}
