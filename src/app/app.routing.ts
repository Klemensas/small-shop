import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ItemPageComponent, CartComponent } from './components/';
import { ItemResolver } from './resolvers/item.resolver';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        // Used resolver to check if such item exists andd add item data or redirect on no found item
        path: 'item/:name',
        component: ItemPageComponent,
        resolve: {
            item:  ItemResolver
        }
    },
    { path: 'cart', component: CartComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
    HomeComponent,
    ItemPageComponent,
    CartComponent
];