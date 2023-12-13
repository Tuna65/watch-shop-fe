import Api from "./restclient";

export const pathAuth = `/auth` as const;
export const pathUsers = `/users` as const;

const authService = {
  register() {
    return Api.post(`${pathAuth}/register`);
  },
};
export default authService;
