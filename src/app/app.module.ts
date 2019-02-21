import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    UsersModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
