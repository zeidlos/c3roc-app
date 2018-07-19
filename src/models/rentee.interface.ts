import { Item } from './item.interface'
export interface Rentee {
  id: String;
  name: String;
  currentDevices: Item;
  phone?: String;
  email?: String;
}