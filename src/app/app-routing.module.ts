import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ReactFormsComponent } from './react-forms/react-forms.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {  path: '',  component: HomeComponent,  pathMatch: 'full' },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
     .then(m => m.DashboardModule)
  },
  {  path: 'reactive-form/',  component: FormsComponent, children:
    [{ path: 'title', component: FormsComponent }]
  },
  {  path: 'not-found',  component: Error404Component, },
  {  path: '**',  redirectTo: 'not-found', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
