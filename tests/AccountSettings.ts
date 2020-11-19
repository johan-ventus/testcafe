import  Store  from '../page-models/store';
import AccountSettings from '../page-models/accountSettings'

const store = new Store()
const account = new AccountSettings()

export const storeUsersAreVisible = async () => {
    await store.openAccountSettings()
    await account.openUsersPage()
    await account.fetchUsers()
}
