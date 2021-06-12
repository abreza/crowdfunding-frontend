export type permissionType = {
  id: string;
  category: string;
  group: string;
  name: string;
};
export type childType = {
  id: string;
  name: string;
};
export type contentType = {
  subTitle: string;
  childs: Array<childType>;
};
export type permissionsArrayType = Array<{
  boxTitle: string;
  content: Array<contentType>;
}>;
export type roleType = {
  id: string;
  name: string;
  permissions: Array<string>;
};
