import React from 'react'
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
 const Home = () => {
  return (
    <div> 
    {/* Page header */}

    <Header/>
    {/* Search Bar */}
    <SearchBar/>
    {/* BLogList and EmptyList */}
    </div>
  )
};
export default Home;