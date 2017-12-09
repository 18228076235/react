import React,{Component}from 'react'
import {Link} from 'react-router'
import axios from 'axios'
// import layer from '../../../libs/layer_mobile/layer'
import layer from '../../conponents/layer'
import {changnum} from '../../actions'
import {connect} from 'react-redux'

   
@connect(
    (state)=>({number:state.number})
)

export default class my extends Component{
   
    
    send=()=>{
        var reg=/^(13)|(15)|(18)\d{9}$/
        if(reg.test(this.refs.pho.value)==false){
            layer('请输入正确的电话号码')
        }else{
           
            var k=this.refs.pho.value
            const{dispatch}=this.props
            dispatch(changnum(k))
      
        }
    }
   
    postin=()=>{
        if(this.props.number==null){
            layer('请输入正确的电话号码')
        }else{
            var reg=/^\d{6}$/
            if(reg.test(this.refs.pas.value)==false){
                layer('验证码输入有误')
            }else{
                var number=this.props.number;
                var password=this.refs.pas.value;
                axios.post('/register',{number:number,password:password})
                    .then((res)=>{
                        if(res.data=='1'){
                            this.props.router.push('/set')
                        }else{
                            if(res.data[0].password!=this.refs.pas.value){
                                layer('密码输入有误')
                            }else{   
                                var name=res.data[0].name;
                                var sex=res.data[0].sex;
                                var word=res.data[0].word;                           
                                localStorage.user=[name,sex,word,number];

                               this.props.router.push('/my')
                            }
                        }                   
                    })
            }
        }
    }
    goback=()=>{
        this.props.router.go(-1)
    }
   

    render(){
       
        return(
            <div className='login'>
               <i className='iconfont icon-arrow-fine-left' onClick={this.goback}></i> 
               <div className='main'>
                    <h1>登录</h1>   
                    <p>手机号</p>
                    <input type='text' placeholder='在此输入手机号' ref='pho'/> 
                    <p onClick={this.send}>验证码<span>点击获取</span></p>
                    <input type='password' ref='pas'/> 
               </div>
                <footer>
                   <span><i className='iconfont icon-weixin'></i></span>
                   <span> <i className='iconfont icon-huige'></i></span>
                   <span> <i className='iconfont icon-jiantou1' onClick={this.postin}></i></span>
                </footer>
            </div>
        )
    }
}