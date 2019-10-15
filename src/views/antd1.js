import React from 'react';
import { Input, Button, List} from 'antd';
import "antd/dist/antd.css";
import store from '../store';
// 无状态组件
// const AntdUI =(props) =>{
//     return <div>
//     <div style={{ margin: "10px" }}>
//         <Input value = {props.inputValue} 
//         placeholder="todo" 
//         style={{ width: "300px", marginRight: "10px" }}
//         onChange ={props.handleInputChange}
//         ></Input>
//         <Button type="primary" onClick={props.handleBtnClick}> 提交</Button>
//     </div>
//     <List
//         style={{ marginTop: '10px', width: '300px' }}
//         bordered
//         dataSource={props.list}
//         renderItem={(item,index)=> (
//             <List.Item onClick = {() =>{props.handleItemDelete(index)}}>
//                 {item}
//             </List.Item>
//         )}
//     />
// </div>
// }
class AntdUI extends React.Component{
    constructor(props){
        super(props)
        //固定写法，获取state的值 1
        this.state =store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        store.subscribe(this.handleStoreChange) //第四步
       
    }
    render() {
        return <div>
            <div style={{ margin: "10px" }}>
                <Input value = {this.state.inputValue} 
                placeholder="todo" 
                style={{ width: "300px", marginRight: "10px" }}
                onChange ={this.handleInputChange}
                ></Input>
                <Button type="primary" onClick={this.props.handleBtnClick}> 提交</Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index)=> (
                    <List.Item onClick = {(index) =>{this.props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
              
    }
    handleInputChange(e){
        // 说的什么话 //第二步
        const action ={
            type:'change_input_value',
            value:e.target.value
        }
        // const action = getInputChangeAction(e.target.value)
        store.dispatch(action); //第三步
    }
    handleStoreChange(){
        console.log(111)
        this.setState(store.getState()) 
         //第五步
    }
}
export default AntdUI