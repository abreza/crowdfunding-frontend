export interface ProfileDto {
  username: string;
  firstName: string;
  lastName: string;
  description: string;
  headline: string;
  address: string;
  website: string;
  linkedinAddress: string;
}

export interface MailConfig {
  profile: boolean;
  supportedProjects: boolean;
  createdProjects: boolean;
  crowdfundingUpdates: boolean;
  projectReviews: boolean;
  magazine: boolean;
}

export interface MailSettingsDto {
  username: string;
  mailConfig: MailConfig;
  email: string;
}

export interface Account extends ProfileDto, MailSettingsDto {
  avatarAddress: string;
  roleNames: string[];
}

export interface AuthRo {
  user: Account;
  token: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface SignUpDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface TokenDto {
  token: string;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface UsernameDto {
  username: string;
}
