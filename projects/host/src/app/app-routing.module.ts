import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent
},
{
  path: 'mfe1',
  loadChildren: () => import('home/WrapperModule').then((module)=> module.WrapperModule).catch(err => {
    console.error('Failed to load remote module', err);
    throw err;
  }),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
