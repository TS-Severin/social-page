import Image from "next/image";
import React, { Fragment } from "react";
import { Post } from "../lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, Node } from "@contentful/rich-text-types";
import { ImageSlider } from "./ImageSlider";

interface PostCardProps {
  postsData: Post[];
}

// makes the p take being showed inline to avoid a break between profilename and the posttext
// makes the links in the posttext open links in a new tab
const options = {
  renderNode: {
    paragraph: (node: Node, children: React.ReactNode) => (
      <p className="inline">{children}</p>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export const PostCard: React.FC<PostCardProps> = ({ postsData }) => {
  return (
    <>
      {postsData.map((post) => (
        <Fragment key={post.sys.id}>
          <div className="max-w-[640px] my-0 mx-auto">
            <div className="relative top-16 mb-6 bg-white border border-gray-300 rounded shadow-sm">
              <div className="flex items-center p-4 border-b border-gray-300">
                <Image
                  src={post.profilepicture.url}
                  width={40}
                  height={40}
                  alt="image of author"
                  className="rounded-full mr-3"
                ></Image>
                <div className="text-base font-bold">
                  {post.profileusername}
                </div>
              </div>

              <section className="relative overflow-hidden"></section>
              <ImageSlider
                postpicturesCollection={post.postpicturesCollection}
              />
              <div className="p-[16px]">
                <div>
                  <strong>{post.profileusername} </strong>
                  {documentToReactComponents(post.posttext.json, options)}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
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
              width={40}
              height={40}
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
