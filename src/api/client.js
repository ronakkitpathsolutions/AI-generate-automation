import client, { METHODS } from ".";

export const api = {
    auth: {
    login: ({ data, ...configs }) =>
      client({
        url: "/auth/login",
        method: METHODS.POST,
        data,
        ...configs,
      }),
    forgotPassword: ({ data, ...configs }) =>
      client({
        url: "/auth/forgot-password",
        method: METHODS.POST,
        data,
        ...configs,
      }),
    restPassword: ({ data, params, ...configs }) =>
      client({
        url: "/auth/reset-password",
        method: METHODS.POST,
        data,
        params,
        ...configs,
      }),
    changePassword: ({ data, ...configs }) =>
      client({
        url: "/auth/change-password",
        method: METHODS.POST,
        data,
        ...configs,
      }),
    profile: ({ data, ...configs }) =>
      client({
        url: "/auth/profile",
        method: METHODS.GET,
        data,
        ...configs,
      }),
    updateProfile: ({ data, ...configs }) =>
      client({
        url: "/auth/profile",
        method: METHODS.PUT,
        data,
        ...configs,
      }),
  },
}