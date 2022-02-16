const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve('./src/templates/blog-post.js');
    const result = await graphql(`
      query GetBlogPosts {
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}) {
          edges {
            node {
              slug
            }
          }
        }
      }
`);

    if (result.errors) {
        throw result.errors;
    }
    const posts = result.data.allBlogpost.edges;

    // Create paginated index
    const postsPerPage = 4;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Create blog posts pages.
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
