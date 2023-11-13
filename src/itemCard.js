import React from 'react';
import { useCart } from 'react-use-cart';

export default function ItemCard(props) {
  const { addItem } = useCart();

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={props.image}
          alt={`Product: ${props.title}`}
        />
        <div className="px-6 py-4">
          <div className="font-semibold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">$ {props.price}</p>
          <p className="text-gray-700 text-base">{props.info}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
