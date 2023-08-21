import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "https://liaozhong.stepzen.net/api/stackoverflow/__graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        "Apikey liaozhong::stepzen.net+1000::06986456681ec313087cbb3d36776769826e7d5721abc6c1178f634ceed80770",
    },
  },
});

export default client;
