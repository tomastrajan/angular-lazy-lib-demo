import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-some-lib',
  template: `
    <p>
      some-lib works!
    </p>
  `,
  styles: []
})
export class SomeLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
