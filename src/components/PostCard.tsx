import Image from "../../node_modules/next/image";
import { Post } from "../lib/types";

interface PostCardProps {
  postsData: Post[];
}

export const PostCard: React.FC<PostCardProps> = ({ postsData }) => {
  return (
    <>
      <h1>testing</h1>
      {postsData.map((post) => (
        <div key={post.sys.id}>
          <h1>{post.profileusername}</h1>
          <p>{post.hashtags}</p>
        </div>
      ))}
    </>
  );
};

export default PostCard;

{
  /* <div className="max-w-[600px] my-0 mx-auto">
        <div className="relative top-20 mb-6 bg-white border border-gray-300 rounded shadow-sm">
          <div className="flex items-center p-4 border-b border-gray-300">
            <Image
              src={post.profilepicture.url}
              width={500}
              height={500}
              alt="Picture of the author"
            ></Image>
            <div className="text-base font-bold">spiced academy</div>
          </div>

          <section className="relative overflow-hidden">
            
          </section>

          <div className="p-[16px]">
            <p>
              <strong>spiced academy </strong>Am 1. März 2024 habe ich an der
              Spiced Academy mein Capstone Project "Erinnerungsfutur" für das
              Web Development Bootcamp präsentiert - und wir haben mit unserer
              Coriander Cohort die Graduation gefeiert. Danke an alle
              großartigen teachers und die ganze cohort!
            </p>
          </div>
        </div>
      </div> 
    
    */
}
