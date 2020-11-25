import { t } from "testcafe"
import { openPlanogram, planogramcontent, planoName } from "../data/dataSelectors"

export default class Plano {
    private name: Selector
    private content: Selector
    private async getRowId(): Promise<string> { return this.name.parent('div').getAttribute('row-id') }

    constructor() {
        this.name = planoName()
        this.content = planogramcontent()
    }

    public async viewPlanogram(): Promise <void> {
        await t.expect(this.name.visible).ok()
            .click(this.name)
            .click(openPlanogram(await this.getRowId()))
            .expect(this.content.visible).ok()
    }
}