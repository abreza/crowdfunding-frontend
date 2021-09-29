export interface MailConfig {
  profile: boolean;
  supportedProjects: boolean;
  createdProjects: boolean;
  crowdfundingUpdates: boolean;
  projectReviews: boolean;
  magazine: boolean;
}

export interface UserRo {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarAddress: string;
  roles: string[];
  description: string;
  headline: string;
  address: string;
  website: string;
  linkedinAddress: string;
  mailConfig: MailConfig;
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

export interface VerifyTokenRequest {
  token: string;
}
