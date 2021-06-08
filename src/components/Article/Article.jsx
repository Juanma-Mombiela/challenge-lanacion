import React from 'react';

const Article = ({contentArticle}) => {

  const {
    urlImage,
    volanta,
    bajada,
    title,
    author,
    imageAuthor,
    marquesina,
    url
  } = contentArticle

  return (
    <article className={imageAuthor ? 'articleAuthor' : 'article'}>
      {urlImage ? (
        <div className='article-image'>
          <img src={urlImage} alt={title} title={title} />
        </div>
      ) : null}
      <div className={imageAuthor ? 'articleAuthor-description' : 'article-description'}>
        {title ? (
          <h2 className='article-description-title'>
            <a href={url}>{volanta ? (<em className='article-description-volanta'>{volanta}.</em> ) : null} {title}</a>
          </h2>
        ) : null}
        {bajada ? (
          <p className='article-description-bajada'>
            {bajada}
          </p>
        ) : null}
        {marquesina ? (
          <strong title={marquesina} className='article-description-marquesina'>
            {marquesina}
          </strong>
        ) : null}
        {author ? (
          <div className='article-description-contentImageAuthor'>
            {imageAuthor ? (<img className='article-description-imageAuthor' src={imageAuthor} alt={author} title={author} /> ) : null}
            <strong className='article-description-author'>
              <a href='#' title={author}>
                {author}
              </a>
            </strong>
          </div>
        ) : null}
      </div>
    </article>
  );
};

Article.defaultProps = {
  urlImage: 'There is not image',
  volanta: 'There is not volanta',
  title: 'There is not title',
  author: '',
};

export default Article;
