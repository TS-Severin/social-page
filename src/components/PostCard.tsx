import Image from "next/image";
import { Post } from "../lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface PostCardProps {
  postsData: Post[];
}

export const PostCard: React.FC<PostCardProps> = ({ postsData }) => {
  return (
    <>
      {postsData.map((post) => (
        <div className="max-w-[600px] my-0 mx-auto">
          <div className="relative top-20 mb-6 bg-white border border-gray-300 rounded shadow-sm">
            <div className="flex items-center p-4 border-b border-gray-300">
              <Image
                src={post.profilepicture.url}
                width={500}
                height={500}
                alt="Picture of the author"
              ></Image>
              <div className="text-base font-bold">{post.profileusername}</div>
            </div>

            <section className="relative overflow-hidden"></section>

            <div className="p-[16px]">
              <div>
                <strong>spiced academy </strong>
                {documentToReactComponents(post.posttext.json)}
              </div>
            </div>
          </div>
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
            <div className="text-base font-bold">{post.profileusername}</div>
          </div>

          <section className="relative overflow-hidden">
            
          </section>

          <div className="p-[16px]">
            <p>
              <strong>spiced academy </strong>{documentToReactComponents(post.posttext.json)}
            </p>
          </div>
        </div>
      </div> 
    
    */
}
