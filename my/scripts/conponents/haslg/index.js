import React,{Component}from 'react'
import {Link} from 'react-router'
import swiper from '../../../libs/swiper-3.3.1.min'
import Creat from './creat';
import Collection from './collection';
import Cg from './cg';
import { hashHistory } from 'react-router'


import {getUser} from '../../actions'
import {connect} from 'react-redux'
   
@connect(
    (state)=>({user:state.user})
)


export default class my extends Component{
    componentWillMount(){
        const{dispatch} =this.props;
        dispatch(getUser())
    }
    goset=()=>{
        hashHistory.push('/setout')
      
    }
   
    render(){
    
        const {user}=this.props

        return(
            <div className='haslg'>
                <h1><i className='iconfont icon-shezhi' onClick={this.goset}></i><i className='iconfont icon-tianjia'></i></h1>
                <div className='top'>
                   <div>
                       <h2></h2>
                       <h2>{user[0]}</h2>
                   </div>
                   <p>已读7片篇文章</p>
                </div>
                <div className="swiper-container main">     
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><Creat/> </div>
                        <div className="swiper-slide"><Cg/></div>
                        <div className="swiper-slide"><Collection/></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: false,
            pagination:".swiper-pagination",
            paginationClickable:true,
            paginationBulletRender:function(index,className){
                var arr = ["创作","草稿","收藏"]
                return '<span class="' + className + '">' + arr[index] + '</span>';                
            },
           
        })
    }
}