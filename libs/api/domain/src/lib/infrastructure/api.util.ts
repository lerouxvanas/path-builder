import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { ApiConfig } from '../entities/api.config';

export { FirebaseApp as ApiApp } from 'firebase/app';

export function createApi(apiConfig: ApiConfig) {
    return initializeApp(apiConfig);
}
  
export function getApiAuth(apiApp: FirebaseApp | undefined) {
    return getAuth(apiApp);
}

export function createApiUserWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string
) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signInApiUserWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string
) {
    return signInWithEmailAndPassword(auth, email, password);
}