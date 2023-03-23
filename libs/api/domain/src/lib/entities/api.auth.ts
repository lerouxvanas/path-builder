
enum ResponseCodes {
    "auth/invalid-email" = "auth/invalid-email",
    "auth/email-already-in-use" = "auth/email-already-in-use",
    "auth/internal-error" = "auth/internal-error",
    "auth/user-not-found" = "auth/user-not-found",
    "auth/weak-password" = "auth/weak-password",
    "auth/wrong-password" = "auth/wrong-password",
}

export interface AuthenticationCredentials {
    username: string;
    password: string;
}

export interface BaseResponse {
    status: string;
}
export interface UserAuthError {
  code: ResponseCodes;
  customData: CustomData;
  name: string;
  status: string;
}
export interface CustomData {
  appName?: string;
  _tokenResponse?: TokenResponse;
}

export interface TokenResponse {
  error: Error2;
}

interface Error2 {
  code: number;
  message: string;
  errors: Error[];
}

interface Error {
  message: string;
  domain: string;
  reason: string;
}
export interface UserAuthSuccess {
    providerId: string;
    proactiveRefresh: ProactiveRefresh;
    reloadUserInfo: ReloadUserInfo;
    reloadListener?: any;
    uid: string;
    auth: Auth;
    stsTokenManager: StsTokenManager;
    accessToken: string;
    displayName?: any;
    email: string;
    emailVerified: boolean;
    phoneNumber?: any;
    photoURL?: any;
    isAnonymous: boolean;
    tenantId?: any;
    providerData: ProviderDatum[];
    metadata: Metadata;
    status: string;
  }
  
  export interface Metadata {
    createdAt: string;
    lastLoginAt: string;
  }
  
  export interface Auth {
    apiKey: string;
    authDomain: string;
    appName: string;
    currentUser: User;
  }
  
  export interface ReloadUserInfo {
    localId: string;
    email: string;
    passwordHash: string;
    emailVerified: boolean;
    passwordUpdatedAt: number;
    providerUserInfo: ProviderUserInfo[];
    validSince: string;
    lastLoginAt: string;
    createdAt: string;
    lastRefreshAt: string;
  }
  
  export interface ProviderUserInfo {
    providerId: string;
    federatedId: string;
    email: string;
    rawId: string;
  }
  
  export interface ProactiveRefresh {
    user: User;
    isRunning: boolean;
    timerId?: any;
    errorBackoff: number;
  }
  
  export interface User {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: ProviderDatum[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  }
  
  export interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  }
  
  export interface ProviderDatum {
    providerId: string;
    uid: string;
    displayName?: any;
    email: string;
    phoneNumber?: any;
    photoURL?: any;
  }