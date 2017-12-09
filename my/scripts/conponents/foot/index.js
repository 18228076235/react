import React,{Component}from 'react'
import {Link} from 'react-router'

export default class my extends Component{
    static defaultProps={
        footList:[     
            {path:'/recommend',txt:'推荐',icon:'icon-tuijian1'},     
            {path:'/explore',txt:'探索',icon:'icon-chuan'},
            {path:'/message',txt:'消息',icon:'icon-tuijian'},
            {path:'/my',txt:'我',icon:'icon-wo'}
        ]
    }

    render(){
        const {footList}=this.props
        return(
            <div className='foot'>
                { footList.map((item,i)=>{
                  return(
                      <Link key={i} to={item.path} activeClassName='routactive'>
                        <i className={'iconfont ' +item.icon}></i>
                        <span>{item.txt}</span>
                      </Link>
                  )
              })}
             
            </div>
        )
    }
}