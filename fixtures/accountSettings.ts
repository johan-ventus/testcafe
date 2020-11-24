import LoginPage from '../page-models/loginPage'
import  { storeUsersAreVisible } from '../tests/AccountSettings'

const login = new LoginPage()

fixture ('Account Settings')
    .beforeEach( async () => {
        await login.loginWithCredentials()
    })

    test('View Account Settings - Users', async () => { 
        await storeUsersAreVisible()
    })