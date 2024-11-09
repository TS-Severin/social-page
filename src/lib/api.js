// contentmodel for posts

const POSTS_GRAPHQL_FIELDS = `
sys {
  id
}
hashtags
profileusername
profilepicture {
  url
}
postpicturesCollection {
  items {
    description
    url
  }
}
posttext {
  json 
}
`;

// contentmodel for posts

const PROFILE_GRAPHQL_FIELDS = `
sys {
  id
}
profilePic {
  url
}
name
profileTextDe { json } 
profileTextEn { json } 
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["posts", "profile"] },

    }
  ).then((response) => response.json());
}

function extractPosts(fetchResponse) {
  return fetchResponse?.data?.postsCollection?.items;
}

function extractProfile(fetchResponse) {
  return fetchResponse?.data?.profileCollection?.items;
}


export async function getPosts(
  isDraftMode = false) {
  const allPosts = await fetchGraphQL(
    `query {
        postsCollection(preview: ${isDraftMode ? "true" : "false"
    }) { 
          items {
            ${POSTS_GRAPHQL_FIELDS}
          }
        }
      }`, isDraftMode
  );
  return extractPosts(allPosts);
}


export async function getProfile(
  isDraftMode = false) {
  const allProfiles = await fetchGraphQL(
    `query {
        profileCollection(preview: ${isDraftMode ? "true" : "false"
    }) { 
          items {
            ${PROFILE_GRAPHQL_FIELDS}
          }
        }
      }`, isDraftMode
  );
  return extractProfile(allProfiles);
}


