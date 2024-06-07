import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, reduceQuantity } from "../store/features/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleReduceQuantity = (product) => {
    dispatch(reduceQuantity(product));
  };
  console.log(items);

  if (items.length === 0) {
    return <div>Cart is Empty</div>;
  }

  return (
    <>
      {items.map((item, index) => (
        <div className="flex justify-between p-4">
          <div className="flex justify-center items-center gap-4">
            <img
              src={item.image}
              alt="image"
              width={70}
              height={50}
              className=" rounded-xl ms-4"
            />
            <p className="font-bold ">{item.title}</p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handleReduceQuantity(item)}
              className="p-3 rounded-lg text-white bg-black text-xl "
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => handleAdd(item)}
              className="p-3 rounded-lg text-white bg-black text-xl"
            >
              +
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-600 rounded-lg text-white p-3"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
