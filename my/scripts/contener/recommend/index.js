import React,{Component}from 'react'
import{connect} from 'react-redux';
import{getIndex}from '../../actions';
import{Link} from 'react-router';

import ReactIScroll from 'react-iscroll';
import iScroll from '../../../libs/iscroll-probe';

import src2 from '../../../assets/img/one.gif';

var i=0;

@connect(
    state=>({recommend:state.recommend})
)

export default class my extends Component{
    constructor(props){
        super(props);
        this.state={
            options: {
                mouseWheel: true,
                scrollbars: true,
                freeScroll: true,
                invertWheelDirection: true,
                momentum: true             
            },
            isshow:'ishide'
        }
    }
      
    onScrollStart=(e)=>{
        if(e.distY>0){
            this.setState({
                isshow:'isshow'
            })
        }else{
            const{dispatch}=this.props;
            i++;
            if(i==1){
                dispatch(getIndex('/recommend',dispatch))
            }
           
        }
    }
  
    onScrollEnd=()=>{
        this.setState({
            isshow:'ishide'
        })
    }

    componentWillMount(){
        const{dispatch}=this.props;
        dispatch(getIndex('recommend_limit',dispatch))
    }
    render(){
        const{recommend}=this.props;
        return(
            <div id="recommend" className='allde'>
                <h1>推荐<i className='iconfont icon-rili'></i></h1>
                <img className={this.state.isshow +' shoi'} src={src2}></img>
                <ReactIScroll iScroll={iScroll}     
                            onScrollStart={this.onScrollStart}                   
                            onScrollEnd={this.onScrollEnd}
                        >
                <ul>          
                {
                    recommend.map((item,k)=>{
                        return (           
                            <li key={k}>
                            <Link to={'/ardetail?artId='+item.artId}>
                            <img src={item.artThumb}/>    
                            <h5>{item.artTitle}</h5>
                            <p>
                                <span>{item.artEditor}</span>
                                <span>{item.cateName}</span>
                                <span><i className='iconfont icon-yan'></i><span>{item.artView}</span><i className='iconfont icon-xiaoxi'></i><span>{item.commentCount}</span></span>
                            </p>
                            </Link>
                        </li>
                       
                        )
                    })
                }
                </ul>
                </ReactIScroll>
            </div>
        )
    }
}