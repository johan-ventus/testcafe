import LoginPage from "../page-models/loginPage"
import { plano } from "../tests/Plano"

const login = new LoginPage()

fixture ('Floor Planning')
    .beforeEach( async () => {
        await login.loginWithCredentials()
    })

    test('View planogram', async () => {
        await plano()
    })