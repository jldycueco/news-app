import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description, href }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <link rel="icon" type="image/jpg" href={href} sizes="16x16" />
    </Helmet>
  );
};

export default MetaTags;
