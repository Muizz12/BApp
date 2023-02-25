export interface CredentialsType {
  emailAddress: string;
  password: string;
}

export interface UserProfileType {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  emailAddress?: string;
  gender?: string;
  password?: string;
  confirmPassword?: string;
  otp?: string;
  userId?: number;
}

export interface ChangePasswordType {
  currentPassword: string;
  newPassword?: string;
  confirmPassword?: string;
}

export interface UserType {
  profile: UserProfileType;
  token: string;
}

export interface ForgetpassWord {
  emailAddress: string;
}
