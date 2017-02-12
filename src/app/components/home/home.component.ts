import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemDataService } from '../../services/item-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private items: Item[] = [];
  private filter = [];

  constructor(private itemData: ItemDataService) { }

  ngOnInit() {
    this.itemData.availableItems.subscribe(items => {
      this.items = items;
    })
  }

  updateFilter(color) {
    const colorIndex = this.filter.indexOf(color);
    console.log(this.filter)
    if (colorIndex !== -1) {
      this.filter.splice(colorIndex, 1);
      return;
    }
    this.filter.push(color);
  }

}
