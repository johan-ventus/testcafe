import FloorPlanning from '../page-models/floor';
import  Store  from '../page-models/store';

const store = new Store()
const floorplan = new FloorPlanning()

export const floorP = async (): Promise<void> => {
    await store.openFloorPlanning()
    await floorplan.browseFolders()
}  