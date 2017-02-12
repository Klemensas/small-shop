import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ItemDataService } from '../../services/item-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private cartItemCount = 0;

  constructor(private location: Location, private itemData: ItemDataService) { }

  ngOnInit() {
    this.itemData.itemsInCart.subscribe(items => {
      this.cartItemCount = items.length;
    })
  }

  goBack() {
    this.location.back();
  }

}
