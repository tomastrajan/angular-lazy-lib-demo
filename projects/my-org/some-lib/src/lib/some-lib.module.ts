import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SomeLibComponent } from './some-lib.component';

const routes: Routes = [
  {
    path: '',
    component: SomeLibComponent
  }
];

@NgModule({
  declarations: [SomeLibComponent],
  imports: [RouterModule.forChild(routes)]
})
export class SomeLibModule { }
