export type employeeType = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  isActive: boolean;
};

export type employeeUpdateType = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  nationalId: string;
};

export type profileAccountComponentStateType =
  | 'employeeProfile'
  | 'profile'
  | 'addNewEmployee';

export type createUserType = {
  username: 'string';
  password: 'string';
  firstName: 'string';
  lastName: 'string';
  nationalId: 'string';
};
