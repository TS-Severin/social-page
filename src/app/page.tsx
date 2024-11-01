import { getPosts } from "@/lib/api";
import PostCard from "../components/PostCard";
import { Post } from "../lib/types";

export default async function Home() {
  // Fetch posts directly within the component
  const posts: Post[] = await getPosts();

  return (
    <main>
      <PostCard postsData={posts} />
    </main>
  );
}
