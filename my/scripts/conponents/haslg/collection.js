import React,{Component}from 'react'
import {Link} from 'react-router'
import {myCollectin, collection} from '../../actions'
import {connect} from 'react-redux'

@connect(
    state=>({...state})
       
)
//myCollectin
export default class my extends Component{
    componentWillMount(){
        const{dispatch}=this.props;
        var username=localStorage.user.split(',')[3]
        dispatch(myCollectin('/myCollectin?username='+username,dispatch))
    }
    cke(){
      
    }
    getComponent(){
        const{collectionData}=this.props

        if(collectionData==[]){     
            return  (<h1 className={'nothing'}>还没有收藏文章</h1>)
        }else{
            return (
                <ul>
                {
                  collectionData.map((item,k)=>{
                      return(
                          <li key={k} onClick={this.cke}>
                           <Link to={'/ardetail?artId='+item.artId} >
                              {item.sql.map((it,ky)=>{
                                  return(
                                    <div key={ky}>
                                         <img src={it.artThumb}/>
                                         <h4>{it.artTitle}</h4>
                                         <h6>{it.artEditor}</h6>
                                      </div>
                                  )
                              })}
                               </Link>
                          </li>
                      )
                  }) 
                }
                </ul>
            )
        }
    }
    render(){
        const{collectionData}=this.props
        return(
            <div id='collection'>
               {this.getComponent()}
            </div>
        )
    }
}