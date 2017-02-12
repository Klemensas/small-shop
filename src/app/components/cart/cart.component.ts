import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../../services/item-data.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private items: Item[] = [];
  private totalSum = 0;

  constructor(private itemData: ItemDataService) { }

  ngOnInit() {
    this.itemData.itemsInCart.subscribe(cartItems => {
      this.items = cartItems;
      this.totalSum = 0;
      this.items.forEach(item => this.totalSum += item.price);
    });
  }

  removeFromCart(item) {
    this.itemData.removeFromCart(item);
  }

}
