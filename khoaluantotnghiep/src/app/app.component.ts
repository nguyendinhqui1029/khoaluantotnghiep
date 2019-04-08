import { Component } from '@angular/core';
import { DuAnService } from './service/duan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bất động sản';
  constructor() {

  }
}
