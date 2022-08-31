import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from './features'
import rootSaga from './modules'
// middlewares
import createSagaMiddleware from "@redux-saga/core";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [saga]
})
saga.run(rootSaga)

export const persistor = persistStore(store)
export default store