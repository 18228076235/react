import React,{Component}from 'react'
import {connect} from 'react-redux'
import {ardetail} from '../../actions'
import $ from '../../../libs/jquery-1.10.1.min'
import {Link} from 'react-router'

var v=null;

@connect(
    state=>({
        ardetailData:state.ardetailData,
        })
)
export default class redio extends Component{
constructor(props){
    super(props);
    this.state={
        icon:'icon-webtubiaoku16'
    }
}

componentDidMount(){

        v=this.refs.myvideo;
        var that=this;
 
   
    v.addEventListener('play',function(){
   
        that.setState({
            icon:'icon-zanting'
        })
    })
    v.addEventListener('pause',function(){

        that.setState({
            icon:'icon-webtubiaoku16'
        })
    })
         
}

play=()=>{
    if(v.paused){
 
        v.play();
    }else{
        v.pause();
    }
}

render(){
    const{ardetailData}=this.props;
    const{icon}=this.state;
    var ishow='show'
    if(ardetailData.artMedia!=undefined){
        ishow='videoshow'
    }else{
        ishow='videohide'
    }
        return(
            <div className={'vido '+ishow}>
                <div>
                    <h2><i className={'iconfont '+ icon} onClick={this.play}></i></h2>
                    <h4><video ref='myvideo' id='myvideo' src={ardetailData.artMedia} controls/></h4>
                </div>
            </div>
        )
    }
}

