import { getPosts, getProfile } from "@/lib/api";
import { Post, Profile } from "@/lib/types";
export default async function DataFetcher() {
  const posts: Post[] = await getPosts();
  const profile: Profile[] = await getProfile();
  return;

  <></>;
}
