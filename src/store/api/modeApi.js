import { $api } from './api';

export const modeApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getGameMode: builder.query({
      query: () => '/',
    }),
  }),
});

export const { useGetGameModeQuery } = modeApi;
