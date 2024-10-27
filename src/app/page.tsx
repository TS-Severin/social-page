import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();
  console.log("all the posts ", posts);

  return (
    <main>
      <h1>hello world</h1>
      {/* { {posts.profileusername.map((profileusername: string) => (
   <h1 key={posts.sys.id}>{profileusername}</h1>
      ))} } */}
    </main>
  );
}
