import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ 
  path: 'home', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) 
},
  { path: 'list_page', loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule) },
{ path: '**', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
