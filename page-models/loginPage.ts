import { Selector, t } from "testcafe"
import { buttonByValue } from "../data/dataSelectors"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loginData = require('../data/rc_login.json') 


export default class LoginPage {
    private inputUserName: Selector
    private inputPassword: Selector

    constructor() {
        this.inputUserName = Selector('#Username')
        this.inputPassword = Selector('#Password')
    }

    public async loginWithCredentials (): Promise <void> {
            await t
            .navigateTo(loginData.url)
            .typeText(this.inputUserName, loginData.username)
            .typeText(this.inputPassword, loginData.password)
            .click(buttonByValue('login'))
            .expect('div[class="full-size"]').ok()
            .maximizeWindow()
    }

}