import React from 'react'
import HighlightCards from './HighlightCards'

export default function Highlights() {

  const items = [
    {
      image: "greek-salad.jpg",
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese.garnished with crunchy garlic and rosemary croutons.'
    },
    {
      image: 'bruschetta.jpg',
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Au Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil'
    },
    {
      image: 'lemon-dessert.jpg',
      title: 'Lemon Dessert',
      price: '$5.00',
      description: "Thie comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
    }
  ]

  return (
    <section className='highlights-section'>
      <div className='highlights-container'>
        <div className='highlights-banner'>
          <h3>This weeks specals!</h3>
          <button>Online Menu</button>
        </div>
        <div className='highlights-cards'>
          {items.map(item => {
            return (
              <HighlightCards 
                key={item.title}
                {...item}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}


