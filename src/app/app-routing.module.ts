import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './admin/dash/dash.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'users', component: UsersComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: "", redirectTo: 'dash', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
