import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashComponent } from './admin/dash/dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './admin/nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { CardComponent } from './admin/card/card.component';
import { UsersComponent } from './admin/users/users.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavComponent,
    CardComponent,
    UsersComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
