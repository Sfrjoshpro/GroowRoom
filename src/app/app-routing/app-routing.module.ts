import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Middle1Component } from '../component/middle1/middle1.component';
import { MothersComponent } from '../component/mothers/mothers.component';
import { Clone1Component } from '../component/clone/clone1/clone1.component';
import { Clone2Component } from '../component/clone/clone2/clone2.component';
import { Veg1Component } from '../component/veg/veg1/veg1.component';
import { Veg2Component } from '../component/veg/veg2/veg2.component';
import { Veg3Component } from '../component/veg/veg3/veg3.component';
import { Flower1Component } from '../component/flower/flower1/flower1.component';
import { Flower2Component } from '../component/flower/flower2/flower2.component';
import { Flower3Component } from '../component/flower/flower3/flower3.component';

const routes: Routes = [
  
  {  path: '', component: Middle1Component },
  {  path: 'mothers', component: MothersComponent },
  {  path: 'clones', component: Clone1Component },
  {  path: 'veg', component: Veg1Component },
  {  path: 'flower', component: Flower1Component },
  {  path: 'veg/week1', component: Veg2Component },
  {  path: 'veg/week2', component: Veg2Component },
  {  path: 'veg/week3', component: Veg2Component },
  {  path: 'veg/week4', component: Veg2Component },
  {  path: 'veg/week5', component: Veg2Component },
  {  path: 'veg/week6', component: Veg2Component },
  {  path: 'veg/week7', component: Veg2Component },
  {  path: 'veg/week8', component: Veg2Component },
  {  path: 'veg/week9', component: Veg2Component },
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
