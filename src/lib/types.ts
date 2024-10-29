// Define the type for each post object
export interface Post {
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
