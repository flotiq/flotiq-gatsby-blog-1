const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve('./src/templates/blog-post.js');
    const result = await graphql(`
      query GetBlogPosts {
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}) {
          edges {
            node{
              headerImage {
                extension
                id
              }
              content
              id
              slug
              title
            }
          }
        }
      }
`);

    if (result.errors) {
        throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allBlogpost.edges;

    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: post.node.slug,
            component: blogPost,
            context: {
                slug: post.node.slug,
                previous,
                next,
            },
        });
    });
};
