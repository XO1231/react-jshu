import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'
// 添加动画
class Animation2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          //  el是指内部的div元素
          unmountOnExit
          appear={true}
          onEntered={(el) => { el.style.color = "blue" }}
        >
          <div> 1234 </div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
  //in    状态，当前是入场还是出场
  //timeout   时间间隔
  //classNames 与3的入场或者出场clss名的前缀（看下一段代码）
  //unmountOnExit 移除dom (状态是隐藏的时候会自动移除dom)
  //appear 第一次展示是否也需要动画
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default Animation2;