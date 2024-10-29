import { getPosts } from "@/lib/api";
import PostCard from "../components/PostCard";
import { Post } from "../lib/types";

export default async function Home() {
  // Fetch posts directly within the component
  const posts: Post[] = await getPosts();
  console.log("all the posts", posts);

  return (
    <main>
      <PostCard postsData={posts} />
    </main>
  );
}
