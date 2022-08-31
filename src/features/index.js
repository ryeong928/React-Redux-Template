import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import session from 'redux-persist/lib/storage/session'
// reducers
import { testReducers } from './testSlice'

const localPersistConfig = {
    key: 'root/local',
    storage,
    whitelist: ['isOkay']
}
const sessionPersistConfig = {
    key: 'root/session',
    storage: session,
    whitelist: []
}

export default combineReducers({
    test: persistReducer(localPersistConfig, testReducers)
})