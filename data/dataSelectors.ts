import { Selector }  from 'testcafe'

export const buttonByValue = (value: string): Selector => {
    return Selector(`button[value='${value}']`);
} 

export const findUser = (): Selector => {
    return Selector('div', { timeout: 30000 }).withText('James Makepeace')
}

export const openDashboard = (value: string): Selector => {
    return  Selector('h4').withText(value)
}

export const openFolder = (value: string): Selector => {
    return Selector('a').withText(value)
}

export const openFp = (value: string): Selector => {
    return Selector('relex-fp-name').child('span').withText(value)
}

export const selectLocation = (): Selector => {
    return Selector('span').withText('Manchester')
}

export const selectRowFromDropdown = (): Selector => {
    return Selector('span').withText('Order Proposal row')
}

export const orderProduct = (): Selector => {
    return Selector('div', { timeout : 60000 }).withText('Farmers Garlic 25')
}

export const planoName = (): Selector => {
    return Selector('div', { timeout: 30000 }).withAttribute('col-id','ContentName').withText('Cereals 1 Bay')
}

export const openPlanogram = (value: string): Selector => {
    return Selector('div').withAttribute('row-id',value).child('div').child('relex-store-planogram-custom-actions').child('div').child('button')
}

export const planogramcontent = (): Selector => {
    return Selector('div').withAttribute('class','planogram-content')
}