import React from 'react'
import '../css/cardsection.css'
import beaches from '../assets/beaches.jpg'
import flights from '../assets/flights.jpg'
import discounts from '../assets/discount.jpg'

    const CardSection = () => {
        const cards = [
            {
              imgSrc: beaches,
              title: 'Here is the Best Beaches to visit',
            },
            {
              imgSrc: flights,
              title: 'Book Your Flights',
            },
            {
              imgSrc: discounts,
              title: 'Discounts over 20%',
            },
          ];
    
  return (
   
    <>
    <div className="card-container">
    {cards.map((card, index) => (
      <div key={index} className="card">
        <img src={card.imgSrc} alt={card.title} />
        <h3>{card.title}</h3>
      </div>
    ))}

    
  </div>
  <button className='explore-button'>Explore</button>
  </>
  
  )
}

export default CardSection
