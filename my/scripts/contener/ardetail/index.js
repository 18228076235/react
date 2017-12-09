import React,{Component}from 'react'
import {connect} from 'react-redux'
import {ardetail,getcomment,soucang,getUser,collection,check} from '../../actions'

import {Link} from 'react-router'
import layer from '../../conponents/layer'
import Video from '../../conponents/redio'


@connect(
    state=>({...state})
      
)
export default class my extends Component{
    constructor(props){
        super(props)
        this.state={
            casName:'title',
            imgName:'',
        }
    }
    componentWillMount(){
        
        const{dispatch,user}=this.props;
        var artId=this.props.location.query.artId; 
        dispatch(getUser()) 
        dispatch(ardetail('/ardetail?artId='+artId,dispatch))
        dispatch(getcomment('/commentdata?artId='+artId,dispatch))
        if(localStorage.user){
            var username=localStorage.user.split(',')[3]
            dispatch(check('/check?artId='+artId+'&username='+username,dispatch))
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll.bind(this))
    }
    handleScroll(e){
        var sTop=document.documentElement.scrollTop||document.body.scrollTop
    if(sTop>=200){
        this.setState({
            imgName:'oke'
        })
    }else{
        this.setState({
            imgName:''
        }) 
    }    
    if(sTop>=530){
      this.setState({
        casName:'chatitle'
      })
    }else{
        this.setState({
            casName:'title'
          })
    }     
    }
    goback=()=>{
        this.props.router.go(-1)
    }

    //收藏
    soue=(k)=>{
        const{dispatch,user,sc}=this.props; 

        if(user[0]==''){
   
            this.props.router.push('/login')
        }else{           
            dispatch(soucang())
            var artId=this.props.location.query.artId;
            var artId=this.props.location.query.artId
            dispatch(collection({artId:artId,username:user[3],check:!k},dispatch))
            if(sc==true){
                layer('取消收藏')
            }else{
                layer('收藏成功')
            }
        }    
    }

   
    render(){
     const{ardetailData,commentDate,icon,sc}=this.props;
        return(
            <div id='ardetail'>
              
               <h1 className={this.state.casName}>
                 <i className='iconfont icon-arrow-fine-left' onClick={this.goback}></i>
                   <span>
                   <Link to={'/comment?artId='+ardetailData.artId+'&&t='+commentDate.length}> <i className='iconfont icon-xxxi'></i><span>{commentDate.length}</span></Link>
                       <i className='iconfont icon-zhuanfa1'></i>
                       <i className={'iconfont '+icon} onClick={()=>{this.soue(sc)}}></i>
                   </span>
               </h1>
               <div className={this.state.imgName+' bigimg'}>
                   <img src={ardetailData.artThumb}/>
                   <Video/>
               </div>
             
               <div className='main' id='one'>
                    <h1>{ardetailData.artTitle}</h1>
                    <p className='imgp'><img src={ardetailData.artAvatar}/><span>{ardetailData.artEditor}</span><i>6天前</i></p>
                    <div dangerouslySetInnerHTML={{__html:ardetailData.artContent}} id='changimg'></div> 
               </div>
               
            </div>
        )
    }
}