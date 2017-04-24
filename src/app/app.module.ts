import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { PizzaQueueService } from './pizza-queue.service';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { PizzaConstructorService } from './pizza-constructor.service';
import { ToppingComponent } from './components/topping/topping.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CreatePizzaComponent } from './components/create-pizza/create-pizza.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/queue', pathMatch: 'full' },
  { path: 'queue', component: ShowcaseComponent },
  { path: 'detail/:id', component: PizzaDetailComponent },
  { path: 'order', component: CreatePizzaComponent },
  { path: 'login', component: LoginComponent, outlet: 'popup' }
  // ,    // {path: '**', component: NotFoundComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    NavBarComponent,
    LoginComponent,
    PizzaCardComponent,
    PizzaDetailComponent,
    ConstructorComponent,
    ToppingComponent,
    PreviewComponent,
    CreatePizzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [PizzaQueueService,
    PizzaConstructorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
