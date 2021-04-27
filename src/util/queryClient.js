import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createLocalStoragePersistor } from "react-query/createLocalStoragePersistor-experimental";
import { QueryClient } from "react-query";
import { broadcastQueryClient } from "react-query/broadcastQueryClient-experimental";

const queryClientSettings = {
  defaultOptions: {
    queries: {
      retry: true,
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      cacheTime: 604800000,
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
      suspense: false,
      staleTime: 1000,
    },
  },
};
export const queryClient = new QueryClient(queryClientSettings);
const localStoragePersistor = createLocalStoragePersistor({
  localStorageKey: "BEJAMAS_ARTWORK_CACHE",
  throttleTime: 1000,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

broadcastQueryClient({
  queryClient,
  broadcastChannel: "bejamas",
});
