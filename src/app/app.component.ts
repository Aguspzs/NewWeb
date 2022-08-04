import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loginStatus: boolean = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.loginState$.subscribe((status) => {
      this.loginStatus = status;
    });
  }
}
