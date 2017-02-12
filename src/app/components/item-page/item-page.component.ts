import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { ItemDataService } from '../../services/item-data.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  private item: Item;
  private pickedColor: string = null;

  constructor(private route: ActivatedRoute, private router: Router, private itemData: ItemDataService) { }

  ngOnInit() {
    this.item = this.route.snapshot.data['item'];
  }

  addToCart(item, color) {
    const cartItem = item;
    cartItem.pickedColor = color;
    this.itemData.addToCart(cartItem);
    this.router.navigate(['']);
  }

}
