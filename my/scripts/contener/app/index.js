import React ,{Component} from 'react'
import Foot from '../../conponents/foot'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class App extends Component{
    render(){
        return(
            <div>
               {/* <div className='home'>
            <ReactCSSTransitionGroup
            component="div"
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}> 
            <div key={this.props.location.pathname}>
                {this.props.children}
            </div>                 
          </ReactCSSTransitionGroup>   
            </div> */}
            {this.props.children}
                <Foot/>
            </div>
        )
    }
}