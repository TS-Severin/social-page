import { getPosts } from "@/lib/api";
import Image from "../../node_modules/next/image";

// Define the type for each post object
interface Post {
  sys: {
    id: string;
  };
  posttext: { json: object };
  hashtags: string[];
  profileusername: string;
  profilepicture: {
    url: string;
  };
  postpicturesCollection: { items: string[] };
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
          <div key={post.sys.id}>
            <h1>{post.profileusername}</h1>
            <Image
              src="{post.profilepicture.url}"
              width={500}
              height={500}
              alt="Picture of the author"
            ></Image>
          </div>
        ))}
      </main>
    </>
  );
}
