import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, reduceQuantity, add } from "../store/features/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleReduceQuantity = (productId) => {
    dispatch(reduceQuantity(productId));
  };

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (items.length === 0) {
    return <div>Cart is Empty</div>;
  }

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
          >
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              <div className="img-box">
                <img
                  src={item.image}
                  alt="perfume bottle"
                  className="xl:w-[140px]"
                />
              </div>
              <div className="pro-data w-full max-w-sm">
                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                  {item.title}
                </h5>
                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                  {item.category}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
              <div className="flex items-center w-full mx-auto justify-center">
                <button
                  onClick={() => handleReduceQuantity(item)}
                  className=" px-6 py-[18px] border text-xl flex items-center justify-center"
                >
                  -
                </button>
                <p className=" px-6 py-[18px] border text-xl flex items-center justify-center">
                  {item.quantity}
                </p>
                <button
                  onClick={() => handleAdd(item)}
                  className="px-6 py-[18px] border text-xl flex items-center justify-center"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className=" px-6 py-[18px] border bg-red-300 text-white text-xl flex items-center justify-center"
                >
                  X
                </button>
              </div>
              <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                ${item.price}
              </h6>
            </div>
          </div>
        ))}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="text-xl leading-8 font-bold">Total</p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              $
              {items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
