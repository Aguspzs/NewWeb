export interface Data {
  userName: string;
  password: string;
  application: string;
}

export interface LoginResponse {
  ok: boolean;
  data: string;
}

export interface User {
  userName?: string;
  firstName?: string;
  lastName?: string;
  initials?: string;
  role?: string;
  error?: string;
}
