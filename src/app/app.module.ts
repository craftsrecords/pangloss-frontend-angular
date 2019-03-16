import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule, MatInputModule,  MatDialogModule,  MatTableModule,  MatProgressSpinnerModule } from '@angular/material';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { ItemsComponent } from './shop/items/items.component';
import { CategoryDetailsComponent } from './shop/category/category-details/category-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { UnauthorizedInterceptor } from './security/unauthorized-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    LoginComponent,
    HeaderComponent,
    ShopComponent,
    ItemsComponent,
    CategoryDetailsComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
