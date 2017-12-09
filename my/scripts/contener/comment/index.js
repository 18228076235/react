import React,{Component}from 'react'
import {connect} from 'react-redux';
import Head from '../../conponents/header';
import {changnum,getUser,cghead,ardetail,commentsend,getcomment,pushcoment} from '../../actions';
import headimg from '../../../assets/img/1.png';

var c=0;



@connect(
    (state)=>({...state})
)

export default class my extends Component{
    constructor(props){
        super(props);
        this.state={
            spanName:'show'
        }
    }
    componentWillMount(){
        const{dispatch,user,ardetailData}=this.props;
        var artId=this.props.location.query.artId;     
        // dispatch(ardetail('/ardetail?artId='+artId,dispatch))
         dispatch(getUser())        
         var k=this.props.location.query.t
         dispatch(cghead(`查看全部${k}条评论`))
         dispatch(getcomment('/commentdata?artId='+artId,dispatch))
    }
   
    // zan=()=>{ 
       componentDidUpdate(){
           var that=this;
        var m=document.getElementsByClassName('zan')     
        for(var i=0;i<m.length;i++){
            var a=m[i];
            a.index=i;
            a.onclick=function(){
                m[this.index].style.color='red'
               
                if(this.checked==true){
                    c++;
                    this.previousSibling.style.color='rgb(250, 84, 84)' 
                    this.nextSibling.innerHTML++;

                }else{
                    this.previousSibling.style.color='#a19c9c';
                    this.nextSibling.innerHTML--;
                    c--;
                }
                const{dispatch}=that.props;
                var all={commentId:this.getAttribute('data-id'),isadd:this.nextSibling.innerHTML}
                dispatch(commentsend(all,dispatch))
            }
        }   
       }
   
    send=()=>{
        if(localStorage.user){
        const{dispatch,user}=this.props;
        dispatch(getUser())
        var t=new Date();
       var cont=this.refs.sentcom.value;
       var artId=this.props.location.query.artId;
        var all={time:t,cont:cont,name:user[0],artId:artId}
       dispatch(commentsend(all,dispatch))
       dispatch(pushcoment({time:t,cont:cont,name:user[0],artId:artId}))
        }else{
            this.props.router.push('/login')
        }
    }
   
    render(){
        const{dispatch,user,ardetailData,commentDate}=this.props;
        return(
            <div id='comment'>
                <Head/>
                <div className='main'>
                    <ul>
                        {commentDate.map((item,k)=>{
                            return(
                                <li key={k}>             
                                <div>
                                    <img src={headimg}/>
                                    <h5>
                                        <span>{item.name}</span>
                                        <span>11分钟前</span>
                                    </h5>                           
                                    <h3>
                                        <i className='iconfont icon-zhuanfa'></i>
                                        <i className='iconfont icon-zan' ></i><input type='checkbox' className='zan' onClick={this.zan} data-id={item._id}/><span>{item.isadd}</span>
                                    </h3>
                                </div>                         
                                <h5>
                                    {item.cont}
                                </h5>   
                            </li>
                            )
                        })}
                       
                    </ul>
                    <footer>
                        <input type='text' placeholder='发表评论:' ref='sentcom' onInput={this.changeInp}/>
                        <span className={this.state.spanName} onClick={this.send}>发送</span>
                    </footer>
                </div>
            </div>
        )
    }
}


