import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../hooks/useFetchDocuments';
import NewsletterDetail from './NewsletterDetail';

const AllPosts = ({ category }) => {
  const { documents: posts, loading } = useFetchDocuments(category);

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>{category}</h1>
            <p>Verifique nossas noticias.</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='post_list'>
          {posts && posts.map(post => (
            <NewsletterDetail key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;