import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from './item';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnChanges {

  @Input() categoryId: String
  items: Item[]

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.retrieveItems()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryId'] !== undefined)
      this.retrieveItems()
  }

  private retrieveItems() {
    this.itemsService.getItemsOfCategory(this.categoryId)
      .subscribe(items => this.items = items)
  }
}
