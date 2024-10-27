// contentmodel for posts

const POSTS_GRAPHQL_FIELDS = `
sys {
  id
}
profileusername
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
      next: { tags: ["posts"] },

    }
  ).then((response) => response.json());
}

function extractPosts(fetchResponse) {
  return fetchResponse?.data?.postsCollection?.items;
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


