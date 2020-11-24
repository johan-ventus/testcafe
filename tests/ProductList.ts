import Store from '../page-models/store'
import ProductList from '../page-models/productList'

const store = new Store()
const plist = new ProductList()

export const order = async (): Promise<void> => {
    await store.openProductList()
    await store.selectLocation()
    await plist.selectOrderRow()

}