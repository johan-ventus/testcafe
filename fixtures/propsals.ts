
import LoginPage from "../page-models/loginPage"
import { order }  from '../tests/ProductList'

const login = new LoginPage()

fixture ('Floor Planning')
    .beforeEach( async t => {
        await login.loginWithCredentials()
    })

    test('Order List', async () => {
        await order()
    })