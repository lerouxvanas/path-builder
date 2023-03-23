import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserAuthSuccess, UserAuthError, BaseResponse, AuthenticationCredentials } from '../entities/api.auth';
import { ApiConfig } from '../entities/api.config';
import { 
    createApi, 
    getApiAuth,
    createApiUserWithEmailAndPassword,
    signInApiUserWithEmailAndPassword,
} from './api.util';

@Injectable({ providedIn: 'root' })
export class ApiAuthService {

    apiConfig:ApiConfig = {
        apiKey: "AIzaSyBHW14XdoIKAMzaIjuIvVosgKLmPSkjaoA",
        authDomain: "occupation-path-builder.firebaseapp.com",
        projectId: "occupation-path-builder",
        storageBucket: "occupation-path-builder.appspot.com",
        messagingSenderId: "550034976723",
        appId: "1:550034976723:web:d23b154dc28c71fced8926",
        measurementId: "G-KZEXX17B3V",
    };
    private auth;
    
  constructor(private http: HttpClient) {
    this.auth = getApiAuth(createApi(this.apiConfig));
  }

  RegisterUser = (
    authCreds: AuthenticationCredentials
  ): Observable<BaseResponse | UserAuthSuccess | UserAuthError> => {
    const { username: email, password } = authCreds;
    const result$ = new BehaviorSubject<BaseResponse | UserAuthSuccess | UserAuthError>({ status: 'loading' });
    createApiUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const successResponse = { ...user, status: 'success' };
        result$.next(successResponse as unknown as UserAuthSuccess);
      })
      .catch((error) => {
        const errorResponse = { ...error, status: 'error' } as UserAuthError;
        result$.next(errorResponse);
      });
    return result$;
  };
  
  LoginUser = (
    authCreds: AuthenticationCredentials
  ): Observable<BaseResponse | UserAuthSuccess | UserAuthError> => {
    const { username: email, password } = authCreds;
    const result$ = new BehaviorSubject<BaseResponse | UserAuthSuccess | UserAuthError>({ status: 'loading' });
    signInApiUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        result$.next({ ...user, status: 'success' } as unknown as UserAuthSuccess);
      })
      .catch((error) => {
        result$.next({ ...error, status: 'error' } as UserAuthError);
      });
    return result$;
  };

}

