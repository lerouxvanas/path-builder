import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '@path-builder/api/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'path-builder-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pathBuilder';
  result:any = null;

  constructor(private authService:ApiAuthService) {
  }
 
  ngOnInit() {
    
  }

  onTestLogin(){
    this.authService.LoginUser({
      username: 'one@occupation-path-builder.com',
      password: 'pathofleastresistance'
    }).subscribe((results) => {
      console.log('Results == ', results);
      this.result = results;
    });
  }

  onTestLoginError(){
    this.authService.LoginUser({
      username: 'one@occupation-path-builder.com',
      password: 'notpassword'
    }).subscribe((results) => {
      console.log('Results == ', results);
      this.result = results;
    });
  }

  
}
