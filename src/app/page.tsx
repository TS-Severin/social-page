"use client";
import { getPosts } from "@/lib/api";
import PostCard from "../components/PostCard";
import { Post } from "../lib/types";
import { Header } from "@/components/Header";
import { Profile } from "../lib/types";
import { getProfile } from "@/lib/api";
import { useEffect } from "react";

export default function Home() {
  //const [posts, setPosts] = useState<Post[]>();
  // const [profile, setProfile] = useState<Profile[]>();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts: Post[] = await getPosts();
      const fetchedProfile: Profile[] = await getProfile();
      console.log("asdfasdfasdfasdnvrelk", fetchedPosts);
    };

    fetchData();
  }, []);

  // if (!profile) return <p>Loading...</p>;

  // Set state for language switch De / EN
  // const [isEnglish, setIsEnglish] = useState(false);
  // const handleToggleLanguage = () => {
  //   setIsEnglish(!isEnglish);
  // };
  // console.log("EN? ", isEnglish);

  return (
    <main>
      <Header
        profileData={profile[0]}
        // onHandleToggleLanguage={handleToggleLanguage}
        // isEnglish={isEnglish}
      />
      <PostCard postsData={posts} />
    </main>
  );
}
