import { Selector, t } from 'testcafe'
import { openDashboard, selectLocation } from '../data/dataSelectors'

export default class Store {
    private mainMenu: Selector
    private sideNavMenu: Selector
    private accountSettings: Selector
    private floorPlanning: Selector
    private productList: Selector
    private location: Selector
    private locationDropdown: Selector
    private plano: Selector

    constructor() {
        this.mainMenu = Selector('mat-icon').withText('menu')
        this.sideNavMenu = Selector('mat-icon').withText('menu').nth(-1)
        this.accountSettings = openDashboard('Account Settings')
        this.floorPlanning = openDashboard('Floor Planning')
        this.productList = openDashboard('Lists')
        this.location = selectLocation()
        this.locationDropdown = Selector('mat-icon').withText('arrow_drop_down')
        this.plano = openDashboard('Store Planograms')
    }

    public async openAccountSettings (): Promise <void> {
        await t.click(this.mainMenu).click(this.accountSettings)
    }
    
    public async openFloorPlanning(): Promise <void> {
        await t.click(this.mainMenu)
            .click(this.floorPlanning)
            .expect(this.sideNavMenu.visible).ok()
            .click(this.sideNavMenu)
    }

    public async openProductList(): Promise <void> {
        await t.click(this.mainMenu)
            .click(this.productList)
    }

    public async openPlano(): Promise <void> {
        await t.click(this.mainMenu)
            .click(this.plano)
    }

    public async selectLocation(): Promise <void> {
        await t.click(this.locationDropdown)
            .expect(this.location.visible).ok()
            .click(this.location)
    }


}

