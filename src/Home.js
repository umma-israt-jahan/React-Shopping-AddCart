
import React from 'react'
import ItemCard from './itemCard'
import data from './appData';
import Header from './component/navbar';


export default function Home() {

    return (
      <>
      <Header />
      <h1 className='text-center mt-3 '>All items</h1>
      <section className='py-4 container'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {data.dataProducts.map((item,index) => (
        <ItemCard
        // key={item.id}
         key={index} 
         item={item}
        {...item} 
        img={item.image}
         info={item.info} 
         price={item.price} 
          />
      ))}
    </div>
            
      </section>
      </>
    )
  
}

