import { Selector, t } from 'testcafe'
import { openDashboard } from '../data/dataSelectors'


export default class Store {
    private mainMenu: Selector
    private sideNavMenu: Selector
    private accountSettings: Selector
    private FloorPlanning: Selector

    constructor() {
        this.mainMenu = Selector('mat-icon').withText('menu')
        this.sideNavMenu = Selector('mat-icon').withText('menu').nth(-1)
        this.accountSettings = openDashboard('Account Settings')
        this.FloorPlanning =openDashboard('Floor Planning')

    }

    public async openAccountSettings (): Promise <void> {
        await t.click(this.mainMenu).click(this.accountSettings)
    }
    
    public async openFloorPlanning(): Promise <void> {
        await t.click(this.mainMenu)
            .click(this.FloorPlanning)
            .expect(this.sideNavMenu.visible).ok()
            .click(this.sideNavMenu)
    }


}

