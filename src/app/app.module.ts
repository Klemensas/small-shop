import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, routedComponents } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent, ItemComponent } from './components/';
import { ItemDataService } from './services/item-data.service';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { ItemResolver } from './resolvers/item.resolver';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    ItemComponent,
    ItemComponent,
    HeaderComponent,
    ColorFilterPipe
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ItemDataService,
    ItemResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
