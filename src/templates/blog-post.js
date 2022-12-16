import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import { Content, Header } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import BlogPostFeaturedImage from '../components/blog-post/BlogPostFeaturedImage';
import BlogPostAuthor from '../components/blog-post/BlogPostAuthor';
import BlogPostMetaDetails from '../components/blog-post/BlogPostMetaDetails';
import BlogPostNavigation from '../components/blog-post/BlogPostNavigation';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['bg-white px-6']}>
            <Helmet>
                <title>{post.title}</title>
                <meta
                    name="description"
                    content={post.excerpt}
                />
            </Helmet>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <BlogPostFeaturedImage headerImage={post.headerImage} title={post.title} />
                <BlogPostMetaDetails
                    date={moment(post.flotiqInternal.createdAt).format(' Do MMMM yyyy')}
                    readingTime=" 7 min"
                    tags={['#photo', '#cookig', '#food']}
                    additionalClass={['py-6']}
                />
                <Header alignement="center" additionalClasses={['px-4 md:px-12 pt-10 pb-10']}>
                    {post.title}
                </Header>
                <Content
                    blocks={post.content.blocks}
                    additionalClasses={['px-4 md:px-12 text-sm md:text-lg']}
                    fileProps={{
                        audioProps: { additionalClasses: ['px-6 md:px-12 w-full md:w-3/5 mx-auto'] },
                        imageProps: {
                            additionalClasses: ['w-full md:w-9/12 m-auto'],
                            rounded: '3xl',
                            captionAdditionalClasses: ['w-full md:w-9/12 m-auto'],
                        },
                    }}
                    quoteProps={
                        {
                            variant: 'dark',
                            additionalClasses: ['px-12 md:px-28 py-4'],
                            captionAdditionalClasses: ['bg-primary rounded px-8 py-1.5 opacity-100'],
                        }
                    }
                    paragraphProps={{ additionalClasses: ['font-light'] }}
                />
                <BlogPostAuthor authorName=" John Doe" additionalClass={['py-5']} />
            </div>
            <BlogPostNavigation
                additionalClass={['mt-3']}
                prevText="Previous post"
                nextText="Next post"
                pageContext={pageContext}
            />
        </Layout>
    );
};

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
            excerpt
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
            flotiqInternal {
                createdAt
            }
            content {
                blocks {
                    id
                    data {
                        alignment
                        anchor
                        caption
                        code
                        content
                        extension
                        fileName
                        height
                        items {
                            content
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                            items {
                                                content
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        level
                        message
                        stretched
                        style
                        text
                        title
                        url
                        width
                        withBackground
                        withBorder
                        withHeadings
                    }
                    tunes {
                        alignmentTuneTool {
                            alignment
                        }
                    }
                    type
                }
            }
        }
    }
`;

export default BlogPostTemplate;
