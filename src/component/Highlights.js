import React from 'react'
import HighlightCards from './HighlightCards'

export default function Highlights() {

  const items = [
    {
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80",
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese.garnished with crunchy garlic and rosemary croutons.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Au Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil'
    },
    {
      image: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
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


