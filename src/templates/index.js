import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Pagination from '../components/Pagination';
import Announcement from '../components/Announcement';

const IndexPage = ({ data, pageContext }) => {
    const posts = data.allBlogpost.nodes;
    return (
        <Layout>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
            </Helmet>
            <Announcement content="This is the Blog where you can find any kind of information and rich media content.
Use it for your needs, add content and customize in any way"
            />
            {posts.map((post) => (
                <a href={`/${post.slug}`}><p key={post.id}>{post.title}</p></a>
            ))}
            <Pagination page={pageContext.currentPage} numOfPages={pageContext.numPages} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
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
                content
                id
                slug
                title
            }
        }
    }
`;

export default IndexPage;
