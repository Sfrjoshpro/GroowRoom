import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Middle1Component } from '../component/middle1/middle1.component';
import { MothersComponent } from '../component/mothers/mothers.component';

const routes: Routes = [
  
  {  path: '', component: Middle1Component },
  {  path: 'mothers', component: MothersComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
