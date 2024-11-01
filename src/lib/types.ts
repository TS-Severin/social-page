import { Document } from "@contentful/rich-text-types";

// Define the type for each post object
export interface Post {
  sys: {
    id: string;
  };
  posttext: { json: Document };
  hashtags: string[];
  profileusername: string;
  profilepicture: {
    url: string;
  };
  postpicturesCollection: { items: { url: string }[] };
}
