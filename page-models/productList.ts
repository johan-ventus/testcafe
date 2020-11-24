import { Selector, t } from 'testcafe'
import { orderProduct, selectRowFromDropdown } from '../data/dataSelectors'

export default class ProductList {
    private listDropdown: Selector
    private selectRow: Selector
    private loadedAngularGrid: Selector
    private gridProduct: Selector

    constructor() {
        this.listDropdown = Selector('span').withText('Please select view')
        this.selectRow = selectRowFromDropdown()
        this.loadedAngularGrid = Selector('ag-grid-angular').withAttribute('class','ag-theme-balham')
        this.gridProduct = orderProduct()
    }

    public async selectOrderRow (): Promise <void> {
        await t.click(this.listDropdown)
            .click(this.selectRow)
            .expect(this.loadedAngularGrid.visible).ok()
            .expect(this.gridProduct.visible).ok()
    }
}