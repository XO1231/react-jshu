import React, { Component, Fragment } from 'react';
import Todoitem from './todoitem'
class TodoList extends Component {
    constructor(pros) {
        super(pros);
        // 当组件的state 或者 props 发生改变时 ,render函数会重新执行
        this.state = {
            inputValue: '',
            list: ['学习英文', '学习REACT']
        };
        //尽量在这个时候把this此时绑定
        this.handleBtnClick = this.handleBtnClick.bind(this)
        // this.handleItemDlete = this.handleItemDlete.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    {/* htmlFor 是为了防止与js中的for循环冲突 */}
                    <label htmlFor="insertArea">输入内容</label>
                    <input id="insertArea"
                        className='input' type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        // ref={(input) => {
                        //     this.input = input
                        // }}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                // <li key={index + item} 
                                // onClick={this.handleItemDlete.bind(this,index)}>
                                //     {item}</li>
                                <Todoitem  content ={item} 
                                index={index}
                                deleteitem ={this.handleItemDlete.bind(this)}
                                key={item+index}
                                // 把this绑定到子组件上
                                /> 
                            )

                        })
                    }

                </ul>
                
            </Fragment>
        )
    }

    handleInputChange(e) {
        const value = e.target.value
        //此时的this.setState是异步
        this.setState(() => {
            return {
                inputValue: value
            }
        })
        // this.setState({
        //     inputValue:e.target.value
        // })
    }
    //增加列表
    handleBtnClick() {
        // this.setState((prevState) =>({
        //     list:[...prevState.list,prevState.inputValue],
        //     inputValue:""
        // }),()=>{
        //     console.log(this.ul.querySelectorAll('div').length)
        // })

        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }
    handleItemDlete(index) {
        // state 不允许我们做任何的改变,所以我们更改副本,因为如果改变了对后期的优化性能有障碍 
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
        // this.setState((prevState) =>{
        //     const list =[...prevState.list]
        //     list.splice(index,1)
        //     return {list}
        // })

    }
}
export default TodoList;