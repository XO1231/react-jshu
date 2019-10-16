import { takeEvery,put } from 'redux-saga/effects'
import {SAGA_LIST_ACTION } from './actionType';
import axios from 'axios';
import {initListAction} from './actionCreators';

function* sagaListAction(){
    try {
        const res =  yield axios.get('/app.json')
        const action = initListAction(res.data)
        yield put(action) //相当于 store.dispatch(action);
    }catch(e){
      alert('error')
    }
    
}
// generator函数
//takevery可以捕捉传进来的第一个方法 然后执行第二个方法
function* mySaga() {
    yield takeEvery(SAGA_LIST_ACTION, sagaListAction);
}
  
  export default mySaga;