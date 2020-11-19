import { Selector, t} from 'testcafe'
import { findUser }  from '../data/dataSelectors'

export default class AccountSettings {
    private user: Selector
    private userPage: Selector


    constructor() {
        this.user= findUser()
        this.userPage = Selector('div').withAttribute('class','mat-list-item-content').child('div').withText('Users')
    }

    public async fetchUsers(): Promise <void> {
        await t.expect(this.user.visible).ok()
    }

    public async openUsersPage (): Promise <void> {
        await t.click(this.userPage)
    }

}