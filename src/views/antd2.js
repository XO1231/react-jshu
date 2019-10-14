import React from 'react';
import { Input, Button, List} from 'antd';
import "antd/dist/antd.css";
// 无状态组件
const AntdUI =(props) =>{
    return <div>
    <div style={{ margin: "10px" }}>
        <Input value = {props.inputValue} 
        placeholder="todo" 
        style={{ width: "300px", marginRight: "10px" }}
        onChange ={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleBtnClick}> 提交</Button>
    </div>
    <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item,index)=> (
            <List.Item onClick = {() =>{props.handleItemDelete(index)}}>
                {item}
            </List.Item>
        )}
    />
</div>
}
export default AntdUI