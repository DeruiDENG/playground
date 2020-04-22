import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { PageContext } from '../../build/createPages';
import styles from './BlogPost.module.scss';

const BlogPostTemplate = ({
  data,
  pageContext,
  location,
}: PageProps<Data, PageContext>) => {
  const post = usePost(data);
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.description} />
      <article>
        <header>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.info}>{post.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: '1.75rem',
          }}
        />
      </article>

      <nav>
        <ul className={styles.navigator}>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

function usePost(data: Data): Post {
  const { markdownRemark, wordpressPost } = data;
  if (markdownRemark) {
    return {
      title: markdownRemark.frontmatter.title,
      excerpt: markdownRemark.excerpt,
      html: markdownRemark.html,
      date: markdownRemark.frontmatter.date,
      description:
        markdownRemark.frontmatter.description ?? markdownRemark.excerpt,
    };
  }

  return {
    title: wordpressPost.title,
    excerpt: wordpressPost.excerpt,
    html: wordpressPost.content,
    date: wordpressPost.date,
    description: wordpressPost.excerpt,
  };
}

interface Post {
  title: string;
  excerpt: string;
  html: string;
  date: string;
  description: string;
}

interface Data {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
    };
  };
  wordpressPost: {
    title: string;
    excerpt: string;
    content: string;
    date: string;
  };
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      title
      excerpt
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
