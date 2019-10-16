import React, { Component,} from 'react';
import { Input, Button, List} from 'antd';
import "antd/dist/antd.css";
//UI组件 ui只渲染页面不负责逻辑
class AntdUI1 extends Component{
    render() {
        return <div>
            <div style={{ margin: "10px" }}>
                <Input value = {this.props.inputValue} 
                placeholder="todo" 
                style={{ width: "300px", marginRight: "10px" }}
                onChange ={this.props.handleInputChange}
                ></Input>
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={this.props.list}
                renderItem={(item)=> (
                    <List.Item onClick = {(index) =>{this.props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>         
    }
    componentDidMount(){
        // console.log(this.props.list)
    }
}
export default  AntdUI1