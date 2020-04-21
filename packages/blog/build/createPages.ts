/* eslint-disable @typescript-eslint/no-explicit-any */
const path = require(`path`);
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const [markdownPosts, wordPressPages] = await Promise.all([
    getPostsFromMarkdown(graphql),
    getPostsFromWordPress(graphql),
  ]);

  const posts = [...markdownPosts, ...wordPressPages].sort(
    (post1, post2) => post1.date.getTime() - post2.date.getTime()
  );

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: decodeURI(post.slug),
      component: blogPost,
      context: {
        slug: post.slug,
        previous,
        next,
      },
    });
  });
};

export interface PageContext {
  slug: string;
  previous: Post;
  next: Post;
}

async function getPostsFromMarkdown(graphql: any): Promise<Post[]> {
  const markdownResults: {
    data: {
      allMarkdownRemark: {
        edges: {
          node: {
            fields: { slug: string };
            frontmatter: { title: string; date: string };
          };
        }[];
      };
    };
  } = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date
                title
              }
            }
          }
        }
      }
    `
  );

  const posts = markdownResults.data.allMarkdownRemark.edges;
  return posts.map(post => ({
    slug: post.node.fields.slug,
    title: post.node.frontmatter.title,
    date: new Date(post.node.frontmatter.date),
  }));
}

async function getPostsFromWordPress(graphql: any): Promise<Post[]> {
  const wordpressResult: {
    data: {
      allWordpressPost: {
        edges: {
          node: {
            title: string;
            date: string;
            slug: string;
          };
        }[];
      };
    };
  } = await graphql(
    `
      {
        allWordpressPost {
          edges {
            node {
              title
              date
              slug
            }
          }
        }
      }
    `
  );

  const posts = wordpressResult.data.allWordpressPost.edges;
  return posts.map(post => ({
    slug: post.node.slug,
    title: post.node.title,
    date: new Date(post.node.date),
  }));
}

interface Post {
  slug: string;
  title: string;
  date: Date;
}
