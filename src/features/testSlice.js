import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
    name: 'test',
    count: 0,
    isOkay: true,

    loading: false,
    users: [],
    error: '',
}

// const changeName = createAction('test/changeName')
// changeName.toString() === `${changeName}` === 'test/changeName'

// changeName() === {type: 'test/changeName'}
// changeName('TEST') === {type: 'test/changeName', payload: 'TEST}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        changeName: (state) => {state.name = state.name === 'test' ? 'TEST' : 'test'},
        incre: (state, action) => {state.count += action.payload},
        decre: (state, action) => {state.count -= action.payload},
        toggle: (state) => {state.isOkay = !state.isOkay},

        fetchUsersPending: (state) => {
            state.loading = true
            state.users = []
            state.error = ''
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export const testActions = {
    // changeName,
    ...testSlice.actions
}
export const testReducers = testSlice.reducer