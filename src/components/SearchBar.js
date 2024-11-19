
import React,{ useState } from 'react'
import '../css/searchbar.css'
    const SearchBar = () => {
        const [price, setPrice] = useState(2000)
      
        const handlePriceChange = (event) => {
          setPrice(event.target.value)
        }
      
  return (
    <div className="search-container" style={{ backgroundColor: 'lightwhite', padding: '20px', borderRadius: '8px' }}>
    <div className="search-field">
      <label>Search your destination</label>
      <input type="text" placeholder="Enter your destination" />
    </div>
    <div className="search-field">
      <label>Set your Date</label>
      <input type="date" />
    </div>
    <div className="search-field">
      <label>Set Your Price</label>
      <input 
        type="range" 
        min="1000" 
        max="50000" 
        value={price} 
        onChange={handlePriceChange} 
      />
      <p style={{color : 'black'}}>₹{price}</p>
    </div>
  </div>
  )
}

export default SearchBar
