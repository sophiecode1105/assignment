export type UserDataList = Array<UserData>;

export interface UserData {
  data: [string, number, number];
  subDataList: UserSubDataList;
}
export type UserSubDataList = UserSubData[];
export interface UserSubData {
  clicked: boolean;
  data: number[];
}
