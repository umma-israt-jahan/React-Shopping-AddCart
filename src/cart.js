import React from 'react';
import { useCart } from 'react-use-cart';
import Header from './component/navbar';

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>;

  return (
    <>
      <Header />
      <section className='py-4'>
        <div className='container mx-auto'>
          <h5 className='text-xl'>Cart ({totalUniqueItems}) - Total Items: ({totalItems})</h5>
          <table className='table-auto w-full mt-4'>
            <thead>
              <tr>
                <th className='p-2'>Image</th>
                <th className='p-2'>Title</th>
                <th className='p-2'>Price</th>
                <th className='p-2'>Quantity</th>
                <th className='p-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt={item.title} className='h-28' />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className='bg-gray-600 text-white px-2 py-1 rounded mr-2'
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <button
                      className='bg-yellow-400 text-white px-2 py-1 rounded mr-2'
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className='bg-green-500 text-white px-2 py-1 rounded'
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-end mt-4'>
            <div className='text-lg font-bold'>Total Price: ${cartTotal}</div>
          </div>
          <div className='flex justify-end mt-4'>
            <button
              className='bg-red-400 text-white px-4 py-2 rounded mr-2'
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
            <button className='bg-blue-300 text-white px-4 py-2 rounded'>Buy Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
