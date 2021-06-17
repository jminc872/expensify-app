import { login, logout } from '../../actions/auth';

test('should login', () => {
    const action = login(1)
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 1
    })
})

test('should logout', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})