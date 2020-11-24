
import LoginPage from "../page-models/loginPage"
import { floorP } from "../tests/FloorPlanning"

const login = new LoginPage()

fixture ('Floor Planning')
    .beforeEach( async () => {
        await login.loginWithCredentials()
    })

    test('Floor Planning', async () => {
        await floorP()
    })