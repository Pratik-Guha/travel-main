import React from 'react'
import Nav from '../components/Nav'
import CardSection from '../components/CardSection'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className='home'> 
      <div >
        <Nav />
        <CardSection />
        <SearchBar />
      </div>
    </div>
  )
}

export default Home
