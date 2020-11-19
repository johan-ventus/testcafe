
import LoginPage from "../page-models/loginPage"
import { floorP } from "../tests/FloorPlanning"

const login = new LoginPage()

fixture ('Floor Planning')
    .beforeEach( async t => {
        await login.loginWithCredentials()
    })

    test('Floor Planning', async t => {
        await floorP()
    })