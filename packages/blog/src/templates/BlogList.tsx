import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { BlogListContext } from '../../build/createPages';
import Pagination from '../components/Pagination';

const BlogList = ({
  data,
  location,
  pageContext,
}: PageProps<Data, BlogListContext>) => {
  const siteTitle = data.site.siteMetadata.title;
  const { totalPages, pageIndex } = pageContext;
  const posts = getPostAbstracts(data);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ title, slug, excerpt, date }) => {
        return (
          <article key={slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={slug}>
                  {title}
                </Link>
              </h3>
              <small>{date.toDateString()}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
      <Pagination current={pageIndex} total={totalPages} />
    </Layout>
  );
};

function getPostAbstracts(data: Data): PostAbstract[] {
  const { allMarkdownRemark, allWordpressPost } = data;
  const { excerptLength } = data.site.siteMetadata.blogList;
  const markdownPosts: PostAbstract[] = allMarkdownRemark.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    slug: edge.node.fields.slug,
    excerpt: edge.node.frontmatter.description ?? edge.node.excerpt,
    date: new Date(edge.node.frontmatter.date),
  }));

  const wordPressPosts: PostAbstract[] = allWordpressPost.edges.map(edge => ({
    title: edge.node.title,
    slug: edge.node.slug,
    excerpt:
      edge.node.excerpt.length < excerptLength
        ? edge.node.excerpt
        : `${edge.node.excerpt.substring(0, excerptLength)}...`,
    date: new Date(edge.node.date),
  }));

  return [...markdownPosts, ...wordPressPosts].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
}

export default BlogList;

interface PostAbstract {
  title: string;
  slug: string;
  excerpt: string;
  date: Date;
}

interface Data {
  site: {
    siteMetadata: {
      title: string;
      blogList: {
        excerptLength: number;
      };
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
          description: string;
        };
      };
    }[];
  };
  allWordpressPost: {
    edges: {
      node: {
        title: string;
        slug: string;
        excerpt: string;
        date: string;
      };
    }[];
  };
}

export const pageQuery = graphql`
  query blogListQuery(
    $mdStartIndex: Int!
    $mdCount: Int!
    $wpStartIndex: Int!
    $wpCount: Int!
  ) {
    site {
      siteMetadata {
        title
        blogList {
          excerptLength
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $mdCount
      skip: $mdStartIndex
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
    allWordpressPost(limit: $wpCount, skip: $wpStartIndex) {
      edges {
        node {
          title
          slug
          excerpt
          date
        }
      }
    }
  }
`;
