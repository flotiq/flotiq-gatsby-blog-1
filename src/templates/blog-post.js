import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import BlogPostText from '../components/blog-post/BlogPostText';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <BlogPostText
                    additionalClass={['py-6']}
                    textContent="Flotiq strongly encourages separation of concerns and isolates the data from the
                     presentation layer (unlike traditional CMS like WordPress). Thanks to that - you can easily use
                      your data anywhere you need them, e.g.: "
                />
            </div>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        blogpost( slug: { eq: $slug } ) {
            id
            title
            content
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
