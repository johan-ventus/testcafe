import Plano from "../page-models/plano"
import Store from "../page-models/store"

const store = new Store()
const planogram = new Plano()

export const plano = async () : Promise <void> => {
    await store.openPlano()
    await store.selectLocation()
    await planogram.viewPlanogram()

} 