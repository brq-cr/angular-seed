import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main Views
export const routes: Routes = [
    { path: '', redirectTo: '/viewA', pathMatch: 'full' },
    {
        path: 'viewA',
        loadChildren: './../viewA/viewA.module#ViewAModule'
    },
    {
        path: 'viewB',
        loadChildren: './../viewB/viewB.module#ViewBModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule{}