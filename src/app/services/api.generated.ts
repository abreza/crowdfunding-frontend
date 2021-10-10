import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'src/app/services/baseQuery';
export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: (build) => ({
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users`,
        method: 'POST',
        body: queryArg.userCreateDto,
      }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users`,
        method: 'PUT',
        body: queryArg.userUpdateDto,
      }),
    }),
    usersControllerFind: build.query<
      UsersControllerFindApiResponse,
      UsersControllerFindApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users`,
        params: {
          username: queryArg.username,
          firstName: queryArg.firstName,
          lastName: queryArg.lastName,
          email: queryArg.email,
        },
      }),
    }),
    usersControllerUserProfile: build.query<
      UsersControllerUserProfileApiResponse,
      UsersControllerUserProfileApiArg
    >({
      query: () => ({ url: `/api/v1/users/profile` }),
    }),
    usersControllerUpdateUserProfile: build.mutation<
      UsersControllerUpdateUserProfileApiResponse,
      UsersControllerUpdateUserProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/profile`,
        method: 'POST',
        body: queryArg.userUpdateDto,
      }),
    }),
    usersControllerSuspend: build.mutation<
      UsersControllerSuspendApiResponse,
      UsersControllerSuspendApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/suspend`,
        method: 'POST',
        body: queryArg.usernameDto,
      }),
    }),
    usersControllerActivate: build.mutation<
      UsersControllerActivateApiResponse,
      UsersControllerActivateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/activate`,
        method: 'POST',
        body: queryArg.usernameDto,
      }),
    }),
    usersControllerAssignRole: build.mutation<
      UsersControllerAssignRoleApiResponse,
      UsersControllerAssignRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/role`,
        method: 'POST',
        body: queryArg.userRoleDto,
      }),
    }),
    usersControllerCheckPermission: build.mutation<
      UsersControllerCheckPermissionApiResponse,
      UsersControllerCheckPermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/checkPermission`,
        method: 'POST',
        body: queryArg.checkPermissionDto,
      }),
    }),
    usersControllerMailResetPassword: build.mutation<
      UsersControllerMailResetPasswordApiResponse,
      UsersControllerMailResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/mailResetPassword`,
        method: 'POST',
        body: queryArg.mailResetPasswordDto,
      }),
    }),
    usersControllerCheckResetPasswordCred: build.query<
      UsersControllerCheckResetPasswordCredApiResponse,
      UsersControllerCheckResetPasswordCredApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/checkResetPasswordCred`,
        params: { resetCode: queryArg.resetCode, email: queryArg.email },
      }),
    }),
    usersControllerResetPassword: build.mutation<
      UsersControllerResetPasswordApiResponse,
      UsersControllerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/resetPassword`,
        method: 'POST',
        body: queryArg.changePasswordDto,
        params: { resetCode: queryArg.resetCode, email: queryArg.email },
      }),
    }),
    usersControllerChangePassword: build.mutation<
      UsersControllerChangePasswordApiResponse,
      UsersControllerChangePasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/changePassword`,
        method: 'POST',
        body: queryArg.changePasswordDto,
      }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth`,
        method: 'POST',
        body: queryArg.loginDto,
      }),
    }),
    authControllerSignup: build.mutation<
      AuthControllerSignupApiResponse,
      AuthControllerSignupApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/signup`,
        method: 'POST',
        body: queryArg.userCreateDto,
      }),
    }),
    authControllerVerify: build.mutation<
      AuthControllerVerifyApiResponse,
      AuthControllerVerifyApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/verifyToken`,
        method: 'POST',
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    rolesControllerReadPermissions: build.query<
      RolesControllerReadPermissionsApiResponse,
      RolesControllerReadPermissionsApiArg
    >({
      query: () => ({ url: `/api/v1/roles/permissions` }),
    }),
    rolesControllerCreateRole: build.mutation<
      RolesControllerCreateRoleApiResponse,
      RolesControllerCreateRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/roles`,
        method: 'POST',
        body: queryArg.roleDto,
      }),
    }),
    rolesControllerUpdateRole: build.mutation<
      RolesControllerUpdateRoleApiResponse,
      RolesControllerUpdateRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/roles`,
        method: 'PUT',
        body: queryArg.updateRoleDto,
      }),
    }),
    rolesControllerFindRole: build.query<
      RolesControllerFindRoleApiResponse,
      RolesControllerFindRoleApiArg
    >({
      query: () => ({ url: `/api/v1/roles` }),
    }),
    rolesControllerDeleteRole: build.mutation<
      RolesControllerDeleteRoleApiResponse,
      RolesControllerDeleteRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/roles`,
        method: 'DELETE',
        body: queryArg.roleIdDto,
      }),
    }),
    rolesControllerReadRole: build.query<
      RolesControllerReadRoleApiResponse,
      RolesControllerReadRoleApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/roles/${queryArg.roleId}` }),
    }),
    mediaControllerGetMedia: build.query<
      MediaControllerGetMediaApiResponse,
      MediaControllerGetMediaApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/media/${queryArg.mediaName}` }),
    }),
    mediaControllerUploadFile: build.mutation<
      MediaControllerUploadFileApiResponse,
      MediaControllerUploadFileApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/media`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    mediaControllerGetAvatar: build.query<
      MediaControllerGetAvatarApiResponse,
      MediaControllerGetAvatarApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/media/avatar/${queryArg.avatarName}`,
      }),
    }),
    mediaControllerUploadAvatar: build.mutation<
      MediaControllerUploadAvatarApiResponse,
      MediaControllerUploadAvatarApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/media/avatar`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    projectControllerCreate: build.mutation<
      ProjectControllerCreateApiResponse,
      ProjectControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/project`,
        method: 'POST',
        body: queryArg.projectCreateDto,
      }),
    }),
    projectControllerFind: build.query<
      ProjectControllerFindApiResponse,
      ProjectControllerFindApiArg
    >({
      query: () => ({ url: `/api/v1/project` }),
    }),
    projectControllerFindForAdmin: build.query<
      ProjectControllerFindForAdminApiResponse,
      ProjectControllerFindForAdminApiArg
    >({
      query: () => ({ url: `/api/v1/project/all` }),
    }),
    projectControllerFindForReviewer: build.query<
      ProjectControllerFindForReviewerApiResponse,
      ProjectControllerFindForReviewerApiArg
    >({
      query: () => ({ url: `/api/v1/project/reviewing` }),
    }),
    projectControllerFindMyProjects: build.query<
      ProjectControllerFindMyProjectsApiResponse,
      ProjectControllerFindMyProjectsApiArg
    >({
      query: () => ({ url: `/api/v1/project/myProjects` }),
    }),
    projectControllerGet: build.query<
      ProjectControllerGetApiResponse,
      ProjectControllerGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/project/${queryArg.projectId}` }),
    }),
    projectControllerUpdate: build.mutation<
      ProjectControllerUpdateApiResponse,
      ProjectControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/project/${queryArg.projectId}`,
        method: 'PUT',
        body: queryArg.projectUpdateDto,
      }),
    }),
    projectControllerDelete: build.mutation<
      ProjectControllerDeleteApiResponse,
      ProjectControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/project/${queryArg.projectId}`,
        method: 'DELETE',
      }),
    }),
    projectControllerAddReward: build.mutation<
      ProjectControllerAddRewardApiResponse,
      ProjectControllerAddRewardApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/project/${queryArg.projectId}/addReward`,
        method: 'POST',
        body: queryArg.rewardDto,
      }),
    }),
    projectControllerAddReview: build.mutation<
      ProjectControllerAddReviewApiResponse,
      ProjectControllerAddReviewApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/project/${queryArg.projectId}/review`,
        method: 'POST',
        body: queryArg.reviewDto,
      }),
    }),
    paymentControllerPayReward: build.mutation<
      PaymentControllerPayRewardApiResponse,
      PaymentControllerPayRewardApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/payment/reward`,
        method: 'POST',
        body: queryArg.payRewardDto,
      }),
    }),
    paymentControllerDonate: build.mutation<
      PaymentControllerDonateApiResponse,
      PaymentControllerDonateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/payment/donate`,
        method: 'POST',
        body: queryArg.donateDto,
      }),
    }),
    paymentControllerVerify: build.query<
      PaymentControllerVerifyApiResponse,
      PaymentControllerVerifyApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/payment/verify`,
        params: { Authority: queryArg.authority, Status: queryArg.status },
      }),
    }),
    paymentControllerFindAll: build.query<
      PaymentControllerFindAllApiResponse,
      PaymentControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/v1/payment/all` }),
    }),
    paymentControllerFindPaymentsOfProject: build.query<
      PaymentControllerFindPaymentsOfProjectApiResponse,
      PaymentControllerFindPaymentsOfProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/payment/project/${queryArg.projectId}`,
      }),
    }),
    paymentControllerFindPaymentsOfUser: build.query<
      PaymentControllerFindPaymentsOfUserApiResponse,
      PaymentControllerFindPaymentsOfUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/payment/user/${queryArg.username}`,
      }),
    }),
  }),
});
export type UsersControllerCreateApiResponse = /** status 201  */ UserRo;
export type UsersControllerCreateApiArg = {
  userCreateDto: UserCreateDto;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  userUpdateDto: UserUpdateDto;
};
export type UsersControllerFindApiResponse = /** status 200  */ UsersRo;
export type UsersControllerFindApiArg = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};
export type UsersControllerUserProfileApiResponse = /** status 200  */ UserRo;
export type UsersControllerUserProfileApiArg = void;
export type UsersControllerUpdateUserProfileApiResponse =
  /** status 200  */ UserRo;
export type UsersControllerUpdateUserProfileApiArg = {
  userUpdateDto: UserUpdateDto;
};
export type UsersControllerSuspendApiResponse = unknown;
export type UsersControllerSuspendApiArg = {
  usernameDto: UsernameDto;
};
export type UsersControllerActivateApiResponse = unknown;
export type UsersControllerActivateApiArg = {
  usernameDto: UsernameDto;
};
export type UsersControllerAssignRoleApiResponse = unknown;
export type UsersControllerAssignRoleApiArg = {
  userRoleDto: UserRoleDto;
};
export type UsersControllerCheckPermissionApiResponse = unknown;
export type UsersControllerCheckPermissionApiArg = {
  checkPermissionDto: CheckPermissionDto;
};
export type UsersControllerMailResetPasswordApiResponse = unknown;
export type UsersControllerMailResetPasswordApiArg = {
  mailResetPasswordDto: MailResetPasswordDto;
};
export type UsersControllerCheckResetPasswordCredApiResponse = unknown;
export type UsersControllerCheckResetPasswordCredApiArg = {
  resetCode: number;
  email: string;
};
export type UsersControllerResetPasswordApiResponse = unknown;
export type UsersControllerResetPasswordApiArg = {
  resetCode: number;
  email: string;
  changePasswordDto: ChangePasswordDto;
};
export type UsersControllerChangePasswordApiResponse = unknown;
export type UsersControllerChangePasswordApiArg = {
  changePasswordDto: ChangePasswordDto;
};
export type AuthControllerLoginApiResponse = /** status 200  */ LoginRo;
export type AuthControllerLoginApiArg = {
  loginDto: LoginDto;
};
export type AuthControllerSignupApiResponse = /** status 201  */ LoginRo;
export type AuthControllerSignupApiArg = {
  userCreateDto: UserCreateDto;
};
export type AuthControllerVerifyApiResponse = /** status 200  */ TokenRo;
export type AuthControllerVerifyApiArg = {
  authorization: string;
};
export type RolesControllerReadPermissionsApiResponse =
  /** status 200  */ PermissionViewRo[];
export type RolesControllerReadPermissionsApiArg = void;
export type RolesControllerCreateRoleApiResponse = /** status 201  */ RoleRo;
export type RolesControllerCreateRoleApiArg = {
  roleDto: RoleDto;
};
export type RolesControllerUpdateRoleApiResponse = unknown;
export type RolesControllerUpdateRoleApiArg = {
  updateRoleDto: UpdateRoleDto;
};
export type RolesControllerFindRoleApiResponse = /** status 200  */ RolesRo;
export type RolesControllerFindRoleApiArg = void;
export type RolesControllerDeleteRoleApiResponse = unknown;
export type RolesControllerDeleteRoleApiArg = {
  roleIdDto: RoleIdDto;
};
export type RolesControllerReadRoleApiResponse = /** status 200  */ RoleRo;
export type RolesControllerReadRoleApiArg = {
  roleId: string;
};
export type MediaControllerGetMediaApiResponse = unknown;
export type MediaControllerGetMediaApiArg = {
  mediaName: string;
};
export type MediaControllerUploadFileApiResponse =
  /** status 201  */ UploadMediaRo;
export type MediaControllerUploadFileApiArg = {
  body: {
    file?: Blob;
  };
};
export type MediaControllerGetAvatarApiResponse = unknown;
export type MediaControllerGetAvatarApiArg = {
  avatarName: string;
};
export type MediaControllerUploadAvatarApiResponse =
  /** status 201  */ UploadMediaRo;
export type MediaControllerUploadAvatarApiArg = {
  body: {
    file?: Blob;
  };
};
export type ProjectControllerCreateApiResponse = /** status 201  */ ProjectRo;
export type ProjectControllerCreateApiArg = {
  projectCreateDto: ProjectCreateDto;
};
export type ProjectControllerFindApiResponse = /** status 200  */ ProjectsRo;
export type ProjectControllerFindApiArg = void;
export type ProjectControllerFindForAdminApiResponse =
  /** status 200  */ ProjectsRo;
export type ProjectControllerFindForAdminApiArg = void;
export type ProjectControllerFindForReviewerApiResponse =
  /** status 200  */ ProjectsRo;
export type ProjectControllerFindForReviewerApiArg = void;
export type ProjectControllerFindMyProjectsApiResponse =
  /** status 200  */ ProjectsRo;
export type ProjectControllerFindMyProjectsApiArg = void;
export type ProjectControllerGetApiResponse = /** status 200  */ ProjectRo;
export type ProjectControllerGetApiArg = {
  projectId: string;
};
export type ProjectControllerUpdateApiResponse = /** status 200  */ ProjectRo;
export type ProjectControllerUpdateApiArg = {
  projectId: string;
  projectUpdateDto: ProjectUpdateDto;
};
export type ProjectControllerDeleteApiResponse = unknown;
export type ProjectControllerDeleteApiArg = {
  projectId: string;
};
export type ProjectControllerAddRewardApiResponse = unknown;
export type ProjectControllerAddRewardApiArg = {
  projectId: string;
  rewardDto: RewardDto;
};
export type ProjectControllerAddReviewApiResponse = unknown;
export type ProjectControllerAddReviewApiArg = {
  projectId: string;
  reviewDto: ReviewDto;
};
export type PaymentControllerPayRewardApiResponse =
  /** status 200  */ PaymentLinkRo;
export type PaymentControllerPayRewardApiArg = {
  payRewardDto: PayRewardDto;
};
export type PaymentControllerDonateApiResponse =
  /** status 200  */ PaymentLinkRo;
export type PaymentControllerDonateApiArg = {
  donateDto: DonateDto;
};
export type PaymentControllerVerifyApiResponse =
  /** status 200  */ PaymentLinkRo;
export type PaymentControllerVerifyApiArg = {
  authority: string;
  status: string;
};
export type PaymentControllerFindAllApiResponse = /** status 200  */ PaymentsRo;
export type PaymentControllerFindAllApiArg = void;
export type PaymentControllerFindPaymentsOfProjectApiResponse =
  /** status 200  */ PaymentsRo;
export type PaymentControllerFindPaymentsOfProjectApiArg = {
  projectId: string;
};
export type PaymentControllerFindPaymentsOfUserApiResponse =
  /** status 200  */ PaymentsRo;
export type PaymentControllerFindPaymentsOfUserApiArg = {
  username: string;
};
export type MailConfigDto = {
  profile: boolean;
  supportedProjects: boolean;
  createdProjects: boolean;
  crowdfundingUpdates: boolean;
  projectReviews: boolean;
  magazine: boolean;
};
export type UserRo = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  roleNames: string[];
  blog: string;
  avatarAddress: string;
  description: string;
  headline: string;
  address: string;
  website: string;
  linkedinAddress: string;
  mailConfig: MailConfigDto;
};
export type UserCreateDto = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarAddress?: string;
  description?: string;
  headline?: string;
  address?: string;
  website?: string;
  linkedinAddress?: string;
};
export type UserUpdateDto = {
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  blog?: string;
  avatarAddress?: string;
  description?: string;
  headline?: string;
  address?: string;
  website?: string;
  linkedinAddress?: string;
  mailConfig?: MailConfigDto;
};
export type UsersRo = {
  users: UserRo[];
};
export type UsernameDto = {
  username: string;
};
export type UserRoleDto = {
  username: string;
  roleIds: string[];
};
export type CheckPermissionDto = {
  username: string;
  permissions: ('ADMIN' | 'REVIEWER')[];
};
export type MailResetPasswordDto = {
  email: string;
};
export type ChangePasswordDto = {
  password: string;
};
export type LoginRo = {
  token: string;
  user: UserRo;
};
export type LoginDto = {
  username: string;
  password: string;
};
export type TokenRo = {
  username: string;
};
export type PermissionViewRo = {
  id: string;
  category: string;
  group: string;
  name: string;
};
export type RoleRo = {
  id: string;
  name: string;
  permissions: ('ADMIN' | 'REVIEWER')[];
};
export type RoleDto = {
  name: string;
  permissions: ('ADMIN' | 'REVIEWER')[];
};
export type UpdateRoleDto = {
  id: string;
  name: string;
  permissions: ('ADMIN' | 'REVIEWER')[];
};
export type RolesRo = {
  roles: RoleRo[];
};
export type RoleIdDto = {
  id?: string;
};
export type UploadMediaRo = {
  path: string;
};
export type Category = 'COMPUTER' | 'PHYSICS' | 'CHEMISTRY' | 'MATHEMATICS';
export type BudgetDto = {
  title: string;
  value: number;
};
export type TechnicalDescriptionDto = {
  name: string;
  value: string;
};
export type TimelineDto = {
  name: string;
  date: string;
};
export type RewardRo = {
  id: string;
  title: string;
  description: string;
  value: number;
};
export type ReviewRo = {
  score: number;
  text: string;
  reviewer: UserRo;
};
export type ProjectRo = {
  id: string;
  subject: string;
  institution: string;
  category: Category;
  summary: string;
  budgets: BudgetDto[];
  budgetReason: string;
  projectFirstIdea: string;
  projectMainIdea: string;
  projectGoal: string;
  technicalDescriptions: TechnicalDescriptionDto[];
  projectAdditionalInfo: string;
  timeDescription: string;
  timelines: TimelineDto[];
  imageUrls: string[];
  state: 'FAILED' | 'FINISHED' | 'FINANCING' | 'REVIEWING' | 'START';
  owner: UserRo;
  rewards: RewardRo[];
  reviews: ReviewRo[];
};
export type ProjectCreateDto = {
  subject: string;
  institution?: string;
  category: Category;
  summary: string;
  budgets: BudgetDto[];
  budgetReason: string;
  projectFirstIdea: string;
  projectMainIdea: string;
  projectGoal: string;
  technicalDescriptions: TechnicalDescriptionDto[];
  projectAdditionalInfo?: string;
  timeDescription: string;
  timelines: TimelineDto[];
  imageUrls: string[];
};
export type ProjectsRo = {
  projects: ProjectRo[];
};
export type ProjectUpdateDto = {
  subject?: string;
  institution?: string;
  category?: Category;
  summary?: string;
  budgets?: BudgetDto[];
  budgetReason?: string;
  projectFirstIdea?: string;
  projectMainIdea?: string;
  projectGoal?: string;
  technicalDescriptions?: TechnicalDescriptionDto[];
  projectAdditionalInfo?: string;
  timeDescription?: string;
  timelines?: TimelineDto[];
  imageUrls?: string[];
  state?: 'FAILED' | 'FINISHED' | 'FINANCING' | 'REVIEWING' | 'START';
};
export type RewardDto = {
  title: string;
  description: string;
  value: number;
};
export type ReviewDto = {
  score: number;
  text: string;
};
export type PaymentLinkRo = {
  link: string;
};
export type PayRewardDto = {
  rewardId: string;
};
export type DonateDto = {
  amount: number;
  projectId: string;
};
export type PaymentRo = {
  amount: number;
  user: UserRo;
  project: ProjectRo;
  reward: RewardRo;
  state: string;
  authority: string;
  status: number;
  refId: number;
};
export type PaymentsRo = {
  payments: PaymentRo[];
};
export const {
  useUsersControllerCreateMutation,
  useUsersControllerUpdateMutation,
  useUsersControllerFindQuery,
  useUsersControllerUserProfileQuery,
  useUsersControllerUpdateUserProfileMutation,
  useUsersControllerSuspendMutation,
  useUsersControllerActivateMutation,
  useUsersControllerAssignRoleMutation,
  useUsersControllerCheckPermissionMutation,
  useUsersControllerMailResetPasswordMutation,
  useUsersControllerCheckResetPasswordCredQuery,
  useUsersControllerResetPasswordMutation,
  useUsersControllerChangePasswordMutation,
  useAuthControllerLoginMutation,
  useAuthControllerSignupMutation,
  useAuthControllerVerifyMutation,
  useRolesControllerReadPermissionsQuery,
  useRolesControllerCreateRoleMutation,
  useRolesControllerUpdateRoleMutation,
  useRolesControllerFindRoleQuery,
  useRolesControllerDeleteRoleMutation,
  useRolesControllerReadRoleQuery,
  useMediaControllerGetMediaQuery,
  useMediaControllerUploadFileMutation,
  useMediaControllerGetAvatarQuery,
  useMediaControllerUploadAvatarMutation,
  useProjectControllerCreateMutation,
  useProjectControllerFindQuery,
  useProjectControllerFindForAdminQuery,
  useProjectControllerFindForReviewerQuery,
  useProjectControllerFindMyProjectsQuery,
  useProjectControllerGetQuery,
  useProjectControllerUpdateMutation,
  useProjectControllerDeleteMutation,
  useProjectControllerAddRewardMutation,
  useProjectControllerAddReviewMutation,
  usePaymentControllerPayRewardMutation,
  usePaymentControllerDonateMutation,
  usePaymentControllerVerifyQuery,
  usePaymentControllerFindAllQuery,
  usePaymentControllerFindPaymentsOfProjectQuery,
  usePaymentControllerFindPaymentsOfUserQuery,
} = api;
