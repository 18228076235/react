import React,{Component}from 'react'
import {connect} from 'react-redux'
import {cghead,findClass} from '../../actions'
import {Link} from 'react-router'
import src2 from '../../../assets/img/one.gif';
import Head from '../../conponents/header'
import ReactIScroll from 'react-iscroll';
import iScroll from '../../../libs/iscroll-probe';
import Main from '../../conponents/main'
@connect(
    state=>({classData:state.classData})
)

export default class carelog extends Component{
    componentWillMount(){
        var crey=this.props.location.query.c
        const{dispatch}=this.props;
        dispatch(cghead(crey))
        dispatch(findClass('/carelog?cateName='+crey,dispatch))
    }
    render(){
        const{classData}=this.props;
        return(
            <div id='carelog' className='allde'>
               <Head/>
               <Main/>
            </div>
        )
    }
}