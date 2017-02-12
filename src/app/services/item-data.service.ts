import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ItemDataService {
  // Item generation specific variables
  private availableColors = ['blue', 'green', 'gray'];
  private itemsToGenerate = 10;

  private cartItems = [];
  public items: Item[] = [];
  public availableItems = new BehaviorSubject([]);
  public itemsInCart = new BehaviorSubject([]);

  constructor() {
    this.items = this.generateItems();
    this.availableItems.next(this.items);
  }

  public addToCart(itemToAdd) {
    this.cartItems.push(itemToAdd);
    this.updateCart(this.cartItems, this.items);
  }

  public removeFromCart(itemToRemove) {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
    this.updateCart(this.cartItems, this.items);
  }

  private updateCart(cartItems, allItems) {
    this.availableItems.next(this.items.filter(item => !this.cartItems.includes(item)));
    this.itemsInCart.next(this.cartItems);
  }

  // Item generation specific functionality
  private generateItems() {
    const items:Item[] = [];
    for (let i = 0; i < this.itemsToGenerate; i++) {
      items.push({
        name: '2' + Math.random(),
        price: Number((Math.random() * 100).toFixed(2)),
        image: 'tst',
        colors: pickColors(this.availableColors)
      });
    }
    return items;

    function pickColors(availableColors) {
      const colorRange = [...availableColors];
      const colorCount = 1 + randomArrayIndex(colorRange);
      const activeColors = [];

      for (let i = 0; i < colorCount; i++) {
        activeColors.push(...colorRange.splice(randomArrayIndex(colorRange), 1));
      }
      return activeColors;
    }

    function randomArrayIndex(array) {
      return Math.floor(Math.random() * array.length);
    }
  }
}
