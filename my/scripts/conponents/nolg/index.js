import React,{Component}from 'react'
import {Link} from 'react-router'
export default class my extends Component{
    render(){
        return(
            <div className='nolg'>
                <h1><i className='iconfont icon-shezhi'></i>我</h1>
                <div>
                    <h3>登录后可以创作文章</h3>
                    <h2><Link to='/login'>立即登录</Link></h2>
                </div>
            </div>
        )
    }
}