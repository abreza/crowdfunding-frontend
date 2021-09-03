export interface UserRo {
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export interface UserResponse {
  user: UserRo;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}
