import { cache } from "react";

export const gql = async ({
  query,
  variables,
  token,
}: {
  query: string;
  variables?: Record<string, any>;
  token?: string;
}) => {
  const getData = cache(async () => {
    const response = await fetch(process.env.API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ?? process.env.JWT}`,
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });
    const data = await response.json();
    return data;
  });

  const data = await getData();
  return data;
};
