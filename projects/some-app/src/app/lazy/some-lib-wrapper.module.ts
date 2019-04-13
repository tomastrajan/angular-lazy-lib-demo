import { NgModule } from '@angular/core';

import { SomeLibModule } from '@my-org/some-lib';

@NgModule({
  imports: [SomeLibModule]
})
export class SomeLibWrapperModule { }
