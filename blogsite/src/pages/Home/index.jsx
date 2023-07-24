import React from 'react'
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import BlogList from '../../components/Home/BlogList';
import {blogList} from '../../config/data';
 const Home = () => {
  return (
    <div> 
    {/* Page header */}

    <Header/>
    {/* Search Bar */}
    <SearchBar/>
    {/* BLogList and EmptyList */}
    <BlogList blogs={blogList}/>
    </div>
  )
};
export default Home;