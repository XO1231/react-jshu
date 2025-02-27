import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_IODO_ITEM, INIT_LIST_ACTION, } from './actionType'
const defaultState = {
    inputValue: "hello",
    list: [
       "aa","bb","cc"
    ]
}
// store 是唯一的.只有store可以改变内容
// reducer 可以接受state ,但是绝不能修改state
// 纯函数是指,给固定的输入,就一定会有固定的输出,而且不会有任何副作用(对参数的修改) 比如说是state.inputValue = action.value
// 比如说是newState.inputValue = new Date() 这就不是纯函数,或者有ajax请求
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ""
        return newState

    }
    if (action.type === DELETE_IODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState

    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data
        return newState

    }
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ""
        return newState
    }
    if (action.type === 'del_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }
    return state
}