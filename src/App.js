import Menu from './Menu'
import Catagories from './Catagories'
import items from './data'

import React, { useState, useEffect } from 'react'

const allCatagories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCatagories);


function App() {

  const [menuItems, setMenuItems] = useState(items)
  const [catagories, setCatagories] = useState(allCatagories)

  const filterItems = (catagory) => {
    if (catagory === 'all') {
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === catagory)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Umami's Menu</h2>
          <div className="underline">
          </div>
        </div>
        <Catagories catagories={catagories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
