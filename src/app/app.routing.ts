import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent
  },

   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    // redirectTo: 'dashboard'
    redirectTo: 'login'
  }
]
