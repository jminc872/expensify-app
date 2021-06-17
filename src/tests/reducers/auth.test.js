import authReducer from '../../reducers/auth'

test('should do login reducer', () => {
    const authStatus = {}
    const action = {
        type: 'LOGIN',
        uid: 1
    }
    const state = authReducer(authStatus, action)
    expect(state).toEqual({
        uid: 1
    })
})

test('should do LOGOUT reducer', () => {
    const authStatus = {}
    const action = {
        type: 'LOGIN'
    }
    const state = authReducer(authStatus, action)
    expect(state).toEqual({})
})