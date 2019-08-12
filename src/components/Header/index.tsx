import { Link } from 'gatsby';
import React from 'react';

import { useStyles } from './styles';

export interface HeaderProps {
  siteTitle?: string;
}

export const Header: React.SFC<HeaderProps> = props => {
  const { siteTitle = '' } = props;
  const classes = useStyles(props);
  return (
    <header className={classes.root}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
