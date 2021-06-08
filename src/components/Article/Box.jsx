import React from 'react';

const BoxArticles = ({children, boxes}) => {
  return <div className={`box-articles-${boxes}`}>{children}</div>;
};

export default BoxArticles;
