import React from 'react';
import { Link, withPrefix, PageProps } from 'gatsby';
import styles from './Layout.module.scss';

interface Props {
  location: PageProps['location'];
  title: React.ReactNode;
  children: React.ReactNode;
}

const Layout = ({ location, title, children }: Props) => {
  const isHomepage = location.pathname === withPrefix('/');
  let header;

  if (isHomepage) {
    header = (
      <h1 className={styles.siteHeader}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h1 className={`${styles.siteHeader} ${styles.smaller}`}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  }
  return (
    <div className={styles.site}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, uilt with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
