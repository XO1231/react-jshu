import React from 'react';
import { connect } from 'react-redux';
const Todo =(props) => {
        const {inputValue,changeInputValue,handleClick,handleDelete,list} = props
        return  <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}></input>
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {list.map((item,index) =>{
                        return <li  key={index+item} onClick = {handleDelete}> {item} </li>
                    })}
                </ul>
            </div>
        
    

}
// class Todo extends Component {
//     constructor(props) {
//         super(props)
//         this.state = store.getState()
//     }
//     render() {
        
//     }
// }

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action = {
                type: 'add_item', 
            }  
            dispatch(action)
        },
        handleDelete(index){
            const action = {
                type: 'del_item',
                index 
            }
            dispatch(action) 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
