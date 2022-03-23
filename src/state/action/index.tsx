export const LOGIN = "LOGIN";
export const SOCIAL_LOGIN = "SOCIAL_LOGIN";
export const USER_ID = "USER_ID";
export const CHANGE = "CHANGE";

// actions creator functions
export const setLogin = (isLogin: any) => {
  return {
    type: LOGIN,
    isLogin,
  };
};

export const setSocialType = (socialType: any) => {
  return {
    type: SOCIAL_LOGIN,
    socialType,
  };
};
export const setUserId = (userId: any) => {
  return {
    type: USER_ID,
    userId,
  };
};
export const setChange = () => {
  return {
    type: CHANGE,
  };
};
