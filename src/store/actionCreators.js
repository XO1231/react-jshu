import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_IODO_ITEM,INIT_LIST_ACTION,SAGA_LIST_ACTION } from "./actionType";
import axios from 'axios';
export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddToDoItem = () =>({
    type: ADD_TODO_ITEM,
    
})
export const getDeleteToDoItem = (index) =>({
    type: DELETE_IODO_ITEM,
    index
})
export const initListAction = (data) =>({
    type: INIT_LIST_ACTION,
    data
})
export const sagaListAction = () =>({
    type: SAGA_LIST_ACTION,
    
})
//引入thunk中间件之后 发动ajax请求
//引入thunk中间件的目的是 
//改造store.dispatch,解决异步操作 
export const getAntd = () =>{
    return (dispatch) =>{
        axios.get("/app.json").then((res)=>{
          const data = res.data;
          const action = initListAction(data)
          dispatch(action)
        //   console.log(data)
        })
        //.catch(()=>{alert('error')}) 
    }
}