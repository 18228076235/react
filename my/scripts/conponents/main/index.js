import React,{Component}from 'react'
import {connect} from 'react-redux'
import {cghead,findClass} from '../../actions'
import {Link} from 'react-router'
import src2 from '../../../assets/img/one.gif';
import { hashHistory } from 'react-router'

import ReactIScroll from 'react-iscroll';
import iScroll from '../../../libs/iscroll-probe';
import Video from '../../conponents/redio'
@connect(
    state=>({classData:state.classData})
)

export default class carelog extends Component{
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
   getComponet(){
    const{classData}=this.props;
    return(
        <ul>
        {
            classData.map((item,k)=>{
                var change='hide'
                var icon=''
                if(item.cateName=='声音'||item.cateName=='音乐'){
                    change='vioce',
                    icon='icon-yinle'
                }
                if(item.cateName=='影像'){
                    change='audio',
                    icon='icon-ic_videocam_px'
                }
                return(
                <li key={k}>
                    <span className={change}><i className={'iconfont '+icon}></i></span>
                    <Link to={'/ardetail?artId='+item.artId}>
                    <img src={item.artThumb}/>    
                    <h5>{item.artTitle}</h5>
                    <p>
                        <span>{item.artEditor}</span>
                        <span>{item.cateName}</span>
                        <span><i className='iconfont icon-yan'></i><span>{item.artView}</span><i className='iconfont icon-xiaoxi'></i><span>{item.commentCount}</span></span>
                    </p>
                    </Link>
                </li>                   
                )
            })
        }
   </ul>
    )
     
   
   }
       render(){
        const{classData}=this.props;
        return(
            <div id='carelog' className='allde'>
             
                <img className={this.state.isshow +' shoi'} src={src2}></img>

                <ReactIScroll className='main'
                             iScroll={iScroll}     
                            onScrollStart={this.onScrollStart}                   
                            onScrollEnd={this.onScrollEnd}
                        >
           
                {this.getComponet()}
               </ReactIScroll>
              
            </div>
        )
    }
}