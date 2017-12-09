import React,{Component}from 'react'
import layer from '../../conponents/layer'
import axios from 'axios'

import {connect} from 'react-redux'
@connect(
    (state)=>({number:state.number})
)

export default class Set extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            sex:''
        }
    }
    man=()=>{
        if(this.refs.man.checked==true){
            this.setState({
                sex:'男'
            })
        }else{
            this.setState({
                sex:'女'
            })
        }
    }
    wowan=()=>{
        if(this.refs.man.checked==true){
            this.setState({
                sex:'男'
            })
        }else{
            this.setState({
                sex:'女'
            })
        }
    }
    postin=()=>{
        var number=this.props.number;
        var name=this.refs.nik.value;
        var word=this.refs.word.value;  
        var sex=this.state.sex;  
        if(name==''){
            layer('昵称输入不能为空')
        }else{
            localStorage.user=[name,sex,word,number];            
            axios.post('/name',{name:name,word:word,number:number,sex:this.state.sex})
                .then((res)=>{
                    this.props.router.push('/my')
                })
        }
    }
    goback=()=>{
        this.props.router.go(-1)
    }
    render(){
        return(
            <div className='login set'>
               <i className='iconfont icon-arrow-fine-left' onClick={this.goback}></i>
               <div className='main'>
                    <h1>填写昵称</h1>                 
                    <input type='text' placeholder='昵称' ref='nik'/> 
                    <h1>上传头像</h1>
                    <p></p>
                    <h1>性别</h1> 
                    <div className='sex'>
                        <input type='radio' name='sex' ref='man' onClick={this.man}/>男
                        <input type='radio' name='sex' ref='woman' onClick={this.wowan}/>女
                    </div>
                    <input type='text' ref='word' placeholder='签名'/> 
                    <span> <i className='iconfont icon-jiantou1' onClick={this.postin}></i></span>                  
               </div> 
            </div>
        )
    }
}