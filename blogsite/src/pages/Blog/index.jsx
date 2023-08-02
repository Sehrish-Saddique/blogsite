import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './style.css';
import { Link } from 'react-router-dom';

const Blog = () => {
 const B={
    id: 7,
    title: 'Art & Perception',
    category: 'art',
    subCategory: ['skill', 'design', 'passion'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author4.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/blog6.jpg',
  }
 // const { ID } = useParams();
 const ID = 1;
  console.log(ID);
  const [blog, setBlog] = useState(null);
 
  useEffect(() => {
    let blog = blogList.find((blog) => blog.ID === parseInt(ID));
    if (blog) {
      setBlog(blog);
    }
    
  }, [ID]);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, id) => (
                <div key={id}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
      <p>Sorry , due to not working of useParams this is showing empty list but here hard value is showing how it will look like...</p>
        <br/>
      <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {B.createdAt}</p>
            <h1>{B.title}</h1>
            <div className='blog-subCategory'>
              {B.subCategory.map((category, id) => (
                <div key={id}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={B.cover} alt='cover' />
          <p className='blog-desc'>{B.description}</p>
        </div>
    </>
  );
};

export default Blog;