import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../features/testSlice";
import { FancyBtn, SpiningBtn, DarkBtn } from '../../styled'

export default () => {
    const testState = useSelector(state => state.test)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(testActions.fetchUsersPending())
    }, [])

    return(
        <div>
            <section>
                <h2>sync state</h2>
                <div>
                    <span>name: {testState.name}</span>
                    <button onClick={() => {dispatch(testActions.changeName())}}>change name</button>
                </div>
                <div>
                    <button onClick={() => {dispatch(testActions.incre(2))}}>+</button>
                    <span>count: {testState.count}</span>
                    <button onClick={() => {dispatch(testActions.decre(2))}}>-</button>
                </div>
                <div>
                    <span>isOkay: {testState.isOkay ? 'true' : 'false'}</span>
                    <button onClick={() => {dispatch(testActions.toggle())}}>{testState.isOkay ? 'not okay' : 'okay'}</button>
                </div>
            </section>
            <br />
            <section>
                <h2>async state : user names</h2>
                {testState.loading && <div>loading...</div>}
                {!testState.loading && testState.users.length !== 0 && (
                    <ul>{testState.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
                )}
                {!testState.loading && testState.error && <div>{testState.error.message}</div>}
            </section>
            <section>
                <br />
                <FancyBtn>it's good</FancyBtn>
                <SpiningBtn>으아아</SpiningBtn>
                <DarkBtn>theme btn</DarkBtn>
                <br/>
            </section>
        </div>
    )
}