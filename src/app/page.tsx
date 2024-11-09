import { getPosts, getProfile } from "@/lib/api";
import PostCard from "../components/PostCard";
import { Post, Profile } from "../lib/types";

export default async function Home() {
  // Fetch posts directly within the component
  const posts: Post[] = await getPosts();
  // Fetch profile directly within the component
  const profile: Profile = await getProfile();
  console.log(profile);

  return (
    <main>
      <PostCard postsData={posts} />
    </main>
  );
}
