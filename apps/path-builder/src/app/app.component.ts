import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '@path-builder/api/domain';
import {
  BaseResponse,
  UserAuthError,
  UserAuthSuccess,
} from '@path-builder/api/domain';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'path-builder-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pathBuilder';
  //result$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  result$: Observable<BaseResponse | UserAuthSuccess | UserAuthError> =
    new Observable();
  constructor(private authService: ApiAuthService) {}

  ngOnInit() {}

  onTestLogin() {
    this.result$ = this.authService.LoginUser({
      username: 'one@occupation-path-builder.com',
      password: 'pathofleastresistance',
    });
  }

  onTestLoginError() {
    this.result$ = this.authService.LoginUser({
      username: 'one@occupation-path-builder.com',
      password: 'notpassword',
    });
  }
}
