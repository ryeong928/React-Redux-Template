import { call, put, delay, takeLeading } from 'redux-saga/effects'
import { testActions } from '../features/testSlice'

function* fetchUsers(){
    try{
        const users = yield call(() => fetch('http://jsonplaceholder.typicode.com/users'))
        const temp1 = yield users.json()
        const temp2 = temp1.slice(0, 10)
        yield delay(2000)
        yield put(testActions.fetchUsersSuccess(temp2))
    }catch(err){
        yield put(testActions.fetchUsersFailure(err))
    }
}

export default function* testSaga(){
    yield takeLeading(testActions.fetchUsersPending, fetchUsers)
}