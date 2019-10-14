// import { takeEvery,put } from './node_modules/redux-saga/effects'
// import {SAGA_LIST_ACTION } from './actionType';
// import axios from './node_modules/axios';
// import {initListAction} from './actionCreators';

// function* sagaListAction(){
//     try {
//         const res =  yield axios.get('/api/todolist')
//         const action = initListAction(res.data)
//         yield put(action) 
//     }catch(e){
//       alert('error')
//     }
    
// }
// // generator函数
// function* mySaga() {
    
//     yield takeEvery(SAGA_LIST_ACTION, sagaListAction);
// }
  
//   export default mySaga;