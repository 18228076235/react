import React,{Component}from 'react'
import{connect} from 'react-redux';
import{getIndex,cghead,zhuanti}from '../../actions';
import{Link} from 'react-router';

import ReactIScroll from 'react-iscroll';
import iScroll from '../../../libs/iscroll-probe';
import src2 from '../../../assets/img/one.gif';
import Head from '../../conponents/header'

var i=0;

@connect(
    state=>({ztData:state.ztData})
)

export default class my extends Component{
 

    componentWillMount(){
        const{dispatch}=this.props;
        dispatch(cghead('全部专题'))
        dispatch(zhuanti('/zhuanti',dispatch))
    }
    render(){
        const{ztData}=this.props;
        return(
            <div id="column" className='allde'>
               <Head/>
               <ul className='main'>
                {ztData.map((item,ki)=>{
                    return(
                    <Link key={ki} to={'/columnDetail?c='+item.name+'&id='+item.id}>
                        <img src={item.thumb}/>
                        <h3>{item.name}</h3>
                        <p>—————————————</p>
                        <h6>{item.description}</h6>
                    </Link>
                    )   
                })}
            </ul>
            </div>
        )
    }
}