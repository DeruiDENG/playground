/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styles from './Bio.module.scss';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-image.jpeg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div className={styles.bioContainer}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className={styles.bioImage}
      />
      <p>
        Personal blog by{' '}
        <strong>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            {author.name}
          </a>
        </strong>
        .<div>{author.summary}</div>
      </p>
    </div>
  );
};

export default Bio;
