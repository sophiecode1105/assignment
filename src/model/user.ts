export type UserDataList = Array<UserData>;

export interface UserData {
  id: string;
  data: [string, number, number];
  subDataList: UserSubDataList;
  subDataClicked: number[];
  clicked: boolean;
}
export type UserSubDataList = UserSubData[];
export interface UserSubData {
  clicked: boolean;
  data: number[];
}
