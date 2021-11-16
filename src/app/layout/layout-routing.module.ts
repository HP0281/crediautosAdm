import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            {
                path: 'dashboardnetworking',
                loadChildren: () => import('./dashboardnetworking/dashboardnetworking.module').then(m => m.DashboardNetworkingModule)
            },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'usuario', loadChildren: () => import('./components/modules/usuario/usuario.module').then(m => m.UsuarioModule)},
            { path: 'category', loadChildren: () => import('../admin/categorias/categorias.module').then(m => m.CategoriasModule)},
            { path: 'marcas', loadChildren: () => import('../admin/marcas/marcas.module').then(m => m.MarcasModule)},
            { path: 'modelos', loadChildren: () => import('../admin/modelos/modelos.module').then(m => m.ModelosModule)},
            { path: 'versiones', loadChildren: () => import('../admin/versiones/versiones.module').then(m => m.VersionesModule)},
            { path: 'vehiculos', loadChildren: () => import('../admin/vehiculos/vehiculos.module').then(m => m.VehiculosModule)},
            {path:"editar/vehicle", loadChildren: () => import('../admin/vehiculos/new-vehicles/new-vehicles.module').then(m => m.NewVehiclesModule)},
            {path:"ver/vehicle", loadChildren: () => import('../admin/vehiculos/new-vehicles/new-vehicles.module').then(m => m.NewVehiclesModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
