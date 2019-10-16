import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import store from '../store';
// import axios from 'axios';
import { getInputChangeAction, getAddToDoItem, getDeleteToDoItem,getAntd,sagaListAction} from '../store/actionCreators'
import AntdUI from './antdUi'
import AntdUI1 from './antd2'
// import { initListAction } from './store/actionCreators';

class Antd extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        //无状态组件
        return (
            <Fragment>
                <AntdUI
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                    list={this.state.list} >
                </AntdUI>
                <AntdUI1 inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                    list={this.state.list}
                />
            </Fragment>
        )

    }
    componentDidMount() {
        //在这个组件中请求axios 
        // axios.get("http://ai.baidu.com/")  
        // .then((res)=>{
        //   const data = res.data;
        //   console.log(data)
        // })
        // -----------------------
        // 在store请求action
        // axios.get("/app.json")  
        // .then((res)=>{
        //   const data = res.data;
        //   const action = initListAction(data)
        //    store.dispatch(action)
        //    console.log(action)
        // })
        // -------------------------------------
        //引入thunk中间件之后
        //   const action = getAntd();
        //   store.dispatch(action);
        // -------------------------------
        //引入redux-saga中间件之后
        const action = sagaListAction()
         store.dispatch(action) 
    }
    handleInputChange(e) {
        // 说的什么话
        // const action ={
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        // const action ={
        //     type:ADD_TODO_ITEM,       
        // }
        
        const action = getAddToDoItem();
        // 把话传给store
        store.dispatch(action);
    }
    handleItemDelete(index) {
        // const action ={
        //     type:DELETE_IODO_ITEM,
        //     index
        // }
        const action = getDeleteToDoItem(index)
        store.dispatch(action);
    }
}
export default Antd;