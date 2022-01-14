import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../layouts/layout';
import Announcement from '../components/Announcement';

const IndexPage = () => {
    const data = useStaticQuery(query);
    const posts = data.allBlogpost.nodes;
    return (
        <Layout>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
            </Helmet>
            <Announcement />
            {posts.map((post) => (
                <a href={`/${post.slug}`}><p key={post.id}>{post.title}</p></a>
            ))}
        </Layout>
    );
};

const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}) {
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
