import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup,  } from 'react-transition-group';
import './style.css'
// 添加动画
class Animation3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list:[]
    }
    this.handleItem = this.handleItem.bind(this)
  }
  render() {
    return (
      <Fragment>
           <TransitionGroup>
          { this.state.list.map((item,index)=>{
             return( 
              <CSSTransition 
              timeout={1000}
              classNames='fade'
              //  el是指内部的div元素
              unmountOnExit //是否占茅坑
              onEntered={(el) => { el.style.color = "green" }}
              appear={true}
              key={index}
            >     
             <div> {item} </div>
             </CSSTransition>
           )})
          }
          <button onClick={this.handleItem}>handleItem</button>
        </TransitionGroup>
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
  handleItem(){
    this.setState((prevState) =>{
      return{
        list:[...prevState.list,'123']
      }
    })
 }
}

export default Animation3;