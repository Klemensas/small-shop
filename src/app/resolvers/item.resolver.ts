import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ItemDataService } from '../services/item-data.service';

@Injectable()
export class ItemResolver implements Resolve<any> {
  
  constructor(private itemData: ItemDataService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    const foundItem = this.itemData.items.find(item => item.name === route.params['name']);
    if (foundItem) {
      return foundItem;
    }
    // Redirect to homepage if no item found
    this.router.navigate(['']);
  }
}