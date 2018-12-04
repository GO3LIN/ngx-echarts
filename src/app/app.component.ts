import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-baidu';

  series = {
    name: 'Hello world',
    data: [ 1, 2, 3, 4, 2, 1]
  };
}
