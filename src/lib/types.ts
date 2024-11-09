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
  postpicturesCollection: { items: { description: string; url: string }[] };
}

// Define the type for profile object
export interface Profile {
  sys: {
    id: string;
  };
  profilePic: {
    url: string;
  };
  name: string;
  profileTextDe: { json: Document };
  profileTextEn: { json: Document };
}
