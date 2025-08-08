import client, { METHODS } from ".";

export const api = {
  tester: {
    run: ({ data, ...configs }) =>
      client({
        url: "/tests",
        method: METHODS.POST,
        data,
        ...configs,
      }),
  },
};
