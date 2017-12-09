import React,{Component}from 'react'
import {connect} from 'react-redux'
import {cghead,findClass,zhuanti} from '../../actions'
import {Link} from 'react-router'
import src2 from '../../../assets/img/one.gif';
import Head from '../../conponents/header'
import ReactIScroll from 'react-iscroll';
import iScroll from '../../../libs/iscroll-probe';
import Main from '../../conponents/main'
@connect(
    state=>({classData:state.classData,ztData:state.ztData})
)

export default class carelog extends Component{
    constructor(props){
        super(props)
        this.state={
            casName:'title',
            imgName:''
        }
    }
    componentWillMount(){
        var crey=this.props.location.query.c
        const{dispatch}=this.props;
        dispatch(cghead(crey))
        dispatch(findClass('/columnDetail?cateName='+crey,dispatch))
        dispatch(zhuanti('/zhuanti',dispatch))
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
    if(sTop>=730){
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

    render(){
        const{classData,ztData}=this.props;
        const id=this.props.location.query.id;
        return(
            <div id='columnDetail' className='allde'>
               {/* <Head/> */}
               <h1 className={this.state.casName}>
                 <i className='iconfont icon-arrow-fine-left' onClick={this.goback}></i>
               </h1>
               <div className={this.state.imgName+' bigimg'}>
               {
                  ztData.map((item,ki)=>{
                      if(item.id==id){
                          return(
                              <Link key={ki}>
                                <img src={item.thumb}/>
                                 <h3>{item.name}</h3>
                                 <h6>{item.description}</h6>
                              </Link>                        
                          )
                      }
                  }) 
               }
                </div>
                <div className='self'>
                    <Main/>
                </div>
              
            </div>
        )
    }
}