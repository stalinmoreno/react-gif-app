import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  //const categories = ['One puch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One punch']);

  //const handleAdd = () => {

  //   setCategories([...categories, 'hunterX']);
  //   setCategories(cats => [...categories, 'hunterX']);
  // }

  return (
    <>
      <h3>GifExpertApp</h3>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => {
            return <GifGrid
              key={category}
              category={category} />
          })
        }
      </ol>
    </>
  )
}
