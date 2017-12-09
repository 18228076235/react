import React,{Component}from 'react'
import {connect} from 'react-redux'
import {getExplore} from '../../actions'
import $ from '../../../libs/jquery-1.10.1.min'
import {Link} from 'react-router'
import { Carousel } from 'antd';
import Swiper from '../../../libs/swiper-3.3.1.min';


@connect(
    state=>({exportData:state.exportData})
)
export default class my extends Component{
    componentWillMount(){
        const{dispatch}=this.props;
        dispatch(getExplore('/explore',dispatch))
    }
    componentDidMount(){
        setTimeout(() => {
            var mySwiper = new Swiper ('.swiper-container', {               
             })  
        }, 1000);
             
    }
    render(){
        const{exportData}=this.props;
        return(
            <div id='explore'>
                <h1>编辑精选</h1>
                   {exportData.map((item,k)=>{
                       return(
                        <div key={k} className='main'>
                            <div className='banner'>
                            <Carousel autoplay>
                            {item.banner.map((bneri,bk)=>{
                                return(
                                    <Link to={'/ardetail?artId='+bneri.extend}  key={bk}><img src={bneri.thumb}/> </Link>)
                            })}
                             </Carousel>
                            </div> 
                            <div className='column'> 
                                <h1>专题<Link to='/column'><span>显示全部</span></Link></h1>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {item.column.map((bneri,bk)=>{
                                            return(
                                            <Link to={'/columnDetail?c='+bneri.name+'&id='+bneri.id} className="swiper-slide" key={bk}>
                                                <img src={bneri.thumb}/>
                                                <h6>{bneri.name}</h6>
                                            </Link>)
                                        })}
                                     </div>
                                </div>    
                            </div>
                            <div className='hotArticle'>
                                <h1>热读</h1>
                                {item.hotArticle.map((bneri,bk)=>{
                                    return(
                                    <div key={bk}>
                                    <Link to={'/ardetail?artId='+bneri.artId}>                                     
                                        <h6>{bneri.artTitle}<span>{bneri.artEditor}</span></h6>
                                        <img src={bneri.artThumb}/>
                                    </Link>    
                                    </div>)
                                })}       
                            </div>

                            <div className='author'>
                                <h1>作者 <span>显示全部</span></h1>
                                {item.author.map((bneri,bk)=>{
                                    return(
                                    <li key={bk}>                                     
                                        <div>
                                            <h5>{bneri.name}</h5>
                                            <p>{bneri.intro}</p>
                                        </div>
                                        <img src={bneri.avatar}/>
                                    </li>)
                                })}       
                            </div>

                            <div className='category'>
                                <h1>分类</h1>
                                {item.category.map((bneri,bk)=>{
                                    return(
                                    <Link to={'/carelog?c='+bneri.cateName} key={bk}>                                    
                                        <h5>{bneri.cateName}</h5>
                                        <img src={bneri.cateThumb}/>
                                    </Link>)
                                })}       
                            </div>
                        </div>    
                       )         
                   })}
            </div>
        )
    }
}