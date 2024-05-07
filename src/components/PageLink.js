import React from 'react';
import { Link } from 'react-router-dom';

const PageLink = ({ href, text, className }) => {
  return (
    <li>
      {/* <a className={className} href={href}>
        {text}
      </a> */}
      <Link className={className} to={href}>{text}</Link>
    </li>
  );
};

export default PageLink;
