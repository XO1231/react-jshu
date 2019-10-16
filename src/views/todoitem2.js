import React ,{Component} from 'react';
class Test extends Component {
    render() {
        // 当父组件的render函数被运行时,它的子组件render将被重新运行
        // console.log('Test render')
        return <div> {this.props.content}</div>    
    }
}
export default Test;
//测试这句话  当父组件的render函数被运行时,它的子组件render将被重新运行 当组件的state 或者 props 发生改变时 ,render函数会重新执行