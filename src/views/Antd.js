import React, { Component } from 'react';
import "antd/dist/antd.css";
import store from './store';
// import axios from 'axios';
import {getInputChangeAction,getAddToDoItem,getDeleteToDoItem, sagaListAction,} from './store/actionCreators'
import AntdUI from './AntdUI'
// import { initListAction } from './store/actionCreators';

class Antd extends Component {
    constructor(props){
        super(props);
        this.state =store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleBtnClick =this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return <AntdUI inputValue = {this.state.inputValue}
        handleInputChange ={this.handleInputChange} 
        handleBtnClick ={this.handleBtnClick}
        handleItemDelete ={this.handleItemDelete}
        list={this.state.list}
        />         
    }
    componentDidMount(){
    //   const action = getAntd();
     const action = sagaListAction()
    //   console.log(action)
     store.dispatch(action)
    // axios.get("http://localhost:3000/api/todolist")
    //         .then((res)=>{
    //           const data = res.data;
    //           const action = initListAction(data)
    //           store.dispatch(action)
            // dispatch(action)
    // })
}
    handleInputChange(e){
        // 说的什么话
        // const action ={
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        // const action ={
        //     type:ADD_TODO_ITEM,
            
        // }
        // 把话传给store
        const action = getAddToDoItem()
        store.dispatch(action);
    }
    handleItemDelete(index){
        // const action ={
        //     type:DELETE_IODO_ITEM,
        //     index
        // }
        const action = getDeleteToDoItem(index)
        store.dispatch(action);
    }
}
export default Antd;