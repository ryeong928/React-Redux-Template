/*
--saga
특정 action이 dispatch가 되는지 감시하고, 
해당 action이 dispatch되면 필요한 비동기 로직을 수행하고
다음 action을 dispatch하며 동기 작업이 진행되도록 한다
*/
import { call, put, delay, takeLeading } from 'redux-saga/effects'
import { testActions } from '../features/testSlice'

// 감시중인 action이 dispatch되면, 실행할 비동기 로직 함수
function* fetchUsers(){
    try{
        const users = yield call(() => fetch('http://jsonplaceholder.typicode.com/users')) // 비동기작업
        const temp1 = yield users.json()
        const temp2 = temp1.slice(0, 10)
        yield delay(2000)
        yield put(testActions.fetchUsersSuccess(temp2)) // 비동기작업 성공시 동기작업
    }catch(err){
        yield put(testActions.fetchUsersFailure(err)) // 비동기작업 실패시 동기작업
    }
}

export default function* testSaga(){
    yield takeLeading(testActions.fetchUsersPending, fetchUsers) // 감시할 action과, 실행할 비동기 로직
}