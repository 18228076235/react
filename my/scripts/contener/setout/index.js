import React,{Component} from 'react';
import { Switch } from 'antd';
import {changnum,getUser,cghead} from '../../actions'
import {connect} from 'react-redux';
import Head from '../../conponents/header'

   
@connect(
    (state)=>({...state})
)


export default class Setout extends Component{
    componentWillMount(){
        const{dispatch,user}=this.props
         dispatch(getUser())
         dispatch(cghead('设置'))
       
    }
    logout=()=>{
        localStorage.removeItem('user')
        this.props.router.push('/my')
    }
    goback=()=>{
        this.props.router.go(-1)
    }

    render(){
        const{user}=this.props
         
        return (
            <div className='setout'>
                <Head/>
                {/* <h1>
                    <i className='iconfont icon-arrow-fine-left' onClick={this.goback}></i> 
                    <span>设置</span>
                </h1> */}
                <ul>
                    <li>头像<span></span></li>
                    <li>昵称<span>{user[0]}</span></li>
                    <li>签名<span>{user[2]}</span></li>
                    <li>性别<span>{user[1]}</span></li>
                    <li>生日<span>2017-11-17</span></li>
                    <li>评论提醒<span> <Switch defaultChecked={true}/></span></li>
                </ul>
                <h2 onClick={this.logout}>注销</h2>
               
            </div>
        )
    }
}