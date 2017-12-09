

import React,{Component}from 'react';
import ReactIScroll from 'react-iscroll';
import iScroll from '../../../libs/iscroll-probe';
import src1 from '../../../assets/img/arrow.png';
import src2 from '../../../assets/img/one.gif';

export default class Points extends React.Component {
    constructor(props){
        super(props);
        this.state={
            options: {
                mouseWheel: true,
                scrollbars: true,
                freeScroll: true,
                invertWheelDirection: true,
                momentum: true             
            },
            isshow:'ishide'
        }
    }
    
    onScrollStart=(e)=>{

        if(e.distY>0){
            this.setState({
                isshow:'isshow'
            })
        }
    }
  
    onScrollEnd=()=>{
        this.setState({
            isshow:'ishide'
        })
    }
 
    render() {
    
    return (
      <div className='massge'>
        <h1>消息</h1>
        <div className='main'>
        <span> <i className='iconfont icon-xiaoxi1'></i></span>
        <h3>通知</h3>
        <h4>暂无消息</h4>
           
        </div>
      </div>
    )
    }
}




