import React, {useState} from 'react'
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import BlogList from '../../components/Home/BlogList';
import {blogList} from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import {Quill} from '../../components/Home/BlogList/BlogItem/Quill/index.jsx';
 const Home = () => {
    const[blogs,setBlogs]= useState(blogList);
    const [searchKey , setSearchKey] = useState('');
    // Submit
    const handleSearchBar = (event) => {
        event.preventDefault();
        handleSearchResult();
    }
    // search for blog categories
    const handleSearchResult = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
        setBlogs(filteredBlogs);
    }

    const handleClearSearch = () => {
        setSearchKey('');
        setBlogs(blogList);
    }
    
  return (
    <div> 
    {/* Page header */}

    <Header/>

    {/* Buuton for add blog */}
    
    {/* Search Bar */}
    <SearchBar 
    value={searchKey} 
    clearSearch ={ handleClearSearch}
    formSubmit={handleSearchBar} 
    handleSearchKey={ (e) => setSearchKey(e.target.value)}/>
    {/* BLogList and EmptyList */}
    

    {!blogs.length ? <EmptyList/> :<BlogList blogs={blogs}/>}
    <br/>
    <hr/>
    <br/>
    <button  >EDIT AND VIEW TEXT </button>
    <Quill/>

    </div>
  )
};
export default Home;