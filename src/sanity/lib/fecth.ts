import { createClient } from "next-sanity";

const client = createClient({
  projectId: "mhrgglzq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-01-17",
});

export async function sanityFetch({ query, params = {} }: { query: string, params?: any }) {
  return await client.fetch(query, params);
}
