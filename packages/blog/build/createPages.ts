/* eslint-disable @typescript-eslint/no-explicit-any */
const path = require(`path`);
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const [markdownPosts, wordPressPages] = await Promise.all([
    getPostsFromMarkdown(graphql),
    getPostsFromWordPress(graphql),
  ]);

  const posts = [...markdownPosts, ...wordPressPages].sort(
    (post1, post2) => post2.date.getTime() - post1.date.getTime()
  );

  createBlogPages(posts);
  await createBlogIndexPages(posts);

  function createBlogPages(posts: Post[]) {
    const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      createPage<PageContext>({
        path: decodeURI(post.slug),
        component: blogPost,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      });
    });
  }

  async function createBlogIndexPages(posts: Post[]) {
    const template = path.resolve(`./src/templates/BlogList.tsx`);
    const postsPerPage = await getPostsPerPage();
    let pageIndex = 0;
    while (true) {
      const postsForOnePage = posts.slice(
        pageIndex * postsPerPage,
        (pageIndex + 1) * postsPerPage
      );

      if (!postsForOnePage.length) {
        break;
      }

      const mdStartIndex = postsForOnePage.find(post => post.source === 'md')
        ?.index;
      const mdLastIndex = postsForOnePage
        .slice()
        .reverse()
        .find(post => post.source === 'md')?.index;
      const mdCount =
        mdStartIndex === undefined
          ? 0
          : (mdLastIndex as number) - mdStartIndex + 1;

      const wpStartIndex = postsForOnePage.find(post => post.source === 'wp')
        ?.index;
      const wpLastIndex = postsForOnePage
        .slice()
        .reverse()
        .find(post => post.source === 'wp')?.index;
      const wpCount =
        wpStartIndex === undefined
          ? 0
          : (wpLastIndex as number) - wpStartIndex + 1;

      createPage<BlogListContext>({
        path: pageIndex === 0 ? '/' : `/page/${pageIndex}`,
        component: template,
        context: {
          pageIndex,
          mdStartIndex: mdStartIndex === undefined ? -1 : mdStartIndex,
          mdCount,
          wpStartIndex: wpStartIndex === undefined ? -1 : wpStartIndex,
          wpCount,
        },
      });

      pageIndex++;
    }
  }

  async function getPostsPerPage() {
    const siteConfig = await graphql(
      `
        {
          site {
            siteMetadata {
              blogList {
                pagination
              }
            }
          }
        }
      `
    );

    return (siteConfig.data as {
      site: { siteMetadata: { blogList: { pagination: number } } };
    }).site.siteMetadata.blogList.pagination;
  }
};

export interface PageContext {
  slug: string;
  previous: Post | null;
  next: Post | null;
}

export interface BlogListContext {
  pageIndex: number;
  mdStartIndex: number;
  mdCount: number;
  wpStartIndex: number;
  wpCount: number;
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
  return posts
    .map(post => ({
      slug: post.node.fields.slug,
      title: post.node.frontmatter.title,
      date: new Date(post.node.frontmatter.date),
      source: 'md' as const,
    }))
    .sort((post1, post2) => post2.date.getTime() - post1.date.getTime())
    .map((post, index) => ({ ...post, index }));
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
  return posts.map((post, index) => ({
    slug: post.node.slug,
    title: post.node.title,
    date: new Date(post.node.date),
    index,
    source: 'wp',
  }));
}

interface Post {
  slug: string;
  title: string;
  date: Date;
  index: number;
  source: 'md' | 'wp';
}
