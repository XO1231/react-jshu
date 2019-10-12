import React, { Component } from 'react';
import PropTypes from 'prop-types';//PropTypes类型校验
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleDel = this.handleDel.bind(this);
    }
    render() {
        const { content ,test} = this.props;
        return (<div onClick={this.handleDel}>
            {/* {this.props.content} */}
            {test}-{content}
        </div>)   
    }
    handleDel(){
        const { deleteitem ,index} = this.props
        deleteitem(index)
        // this.props.deleteitem(this.props.index)
      } 
}
TodoItem.propTypes = {
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    // content:PropTypes.string,
    // content:PropTypes.arrayOf(PropTypes.number),//数字 
    deleteitem:PropTypes.func,
    index:PropTypes.number,
    test:PropTypes.string.isRequired
}
// 给test 一个默认值 如果不传 就用这个值
TodoItem.defaultProps ={
    test:'hello'
}
export default TodoItem;