import React,{Component}from 'react'
import {Link} from 'react-router'
import Haslg from '../../conponents/haslg'
import Nolg from '../../conponents/nolg'
export default class my extends Component{
    
    getComponent(){
        if(localStorage.user!=undefined){      
            return <Haslg/>
        }else{
            return <Nolg/>
        }
    }
    render(){
        return(
            <div className='my'>
              {this.getComponent()}              
            </div>
        )
    }
}