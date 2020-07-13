import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	ListagemComponent,
	AdminComponent
} from './components';

import { AdminGuard } from './services';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

export const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [ AdminGuard ],
		children: [
		  {
			path: '', 
			component: ListagemComponent
		  },
		  {
			path: 'visualizar/:funcionarioId', 
			component: VisualizarComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
