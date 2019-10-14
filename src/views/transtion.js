import React, {Component,Fragment} from 'react';
// import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import './style.css'
// 添加动画
class Animation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show:true,
      }
      this.handleToggle = this.handleToggle.bind(this)
    }
    render() {
      return (
        <Fragment>
            <div className = {this.state.show ?'show' :'hide'}>hello dell</div>
            <button onClick={this.handleToggle}>toggle</button>
        </Fragment>
      )
    }
    handleToggle() {
      this.setState({
        show: this.state.show ? false : true
      })
    }
  }
  
  export default Animation;