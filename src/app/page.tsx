import { getPosts } from "@/lib/api";

// Define the type for each post object
interface Post {
  sys: {
    id: string;
  };
  profileusername: string;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log("all the posts ", posts);

  return (
    <>
      <main>
        <h1>hello world</h1>
        {/* Iterate over each post and render profileusername */}
        {posts.map((post) => (
          <h1 key={post.sys.id}>{post.profileusername}</h1>
        ))}
      </main>
    </>
  );
}
