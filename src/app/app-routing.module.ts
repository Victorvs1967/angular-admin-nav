import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './admin/dash/dash.component';
import { NavComponent } from './admin/nav/nav.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: NavComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'users', component: UsersComponent },
      { path: 'projects', component: ProjectsComponent },
    ] },
  { path: "", redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
