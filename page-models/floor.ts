import { t } from 'testcafe'
import { openFp, openFolder } from '../data/dataSelectors'

export default class FloorPlanning {
    private rootFolder: Selector 
    private northFolder: Selector
    private europeFolder: Selector
    private manchester110: Selector
    private fp: Selector

    constructor() {
        this.rootFolder = openFolder('ROOT')
        this.northFolder = openFolder('NORTH')
        this.europeFolder = openFolder('EUROPE')
        this.manchester110 = openFolder('MANCHESTER-110')
        this.fp = openFp('Manchester - Spring_2019')
    }

    public async browseFolders (): Promise <void> {
        await t
            .click('mat-icon[mattooltip="Refresh"]')
            .click(this.rootFolder)
            .click(this.northFolder)
            .click(this.europeFolder)
            .click(this.manchester110)
            .expect(this.fp.visible).ok()
    }
}