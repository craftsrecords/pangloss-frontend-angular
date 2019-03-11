import { Item } from '../items/item';
import { Links } from '../links';

export class Cart {
    items: Item[]
    address: String
    _links:Links
}