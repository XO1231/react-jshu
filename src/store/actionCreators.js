import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_IODO_ITEM,INIT_LIST_ACTION,SAGA_LIST_ACTION } from "./actionType";
// import axios from 'axios';


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
// export const getAntd = () =>{
//     return (dispatch) =>{
//         axios.get("http://localhost:3000/api/todolist")
//         .then((res)=>{
//           const data = res.data;
//           const action = initListAction(data)
//         //   store.dispatch(action)
//         dispatch(action)
//           console.log(data)
//         })
//         .catch(()=>{alert('error')}) 
//     }
// }