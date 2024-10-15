import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main>
      <h1>hello world</h1>
      {/* {posts.hashtags.map((hashtag: string) => (
   <h1 key={posts.sys.id}>{hashtag}</h1>
      ))} */}
    </main>
  );
}
