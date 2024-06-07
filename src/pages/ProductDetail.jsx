import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../store/features/productSlice";
import { add } from "../store/features/cartSlice";

const ProductDetail = () => {
  const { productsDetail, status } = useSelector((state) => state.products);
  console.log(productsDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  console.log(productsDetail?.rating?.rate);

  const rating = Math.floor((productsDetail?.rating?.rate / 5) * 100);

  console.log(rating);
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  if (status === "loading" || !productsDetail) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="font-sans">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-gray-100 rounded-sm w-full lg:sticky top-0 text-center p-8">
              <img
                src={productsDetail.image}
                alt="Product"
                className="w-9/12 rounded object-cover mx-auto"
              />

              <hr className="border-white border-2 my-6" />
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-800">
                {productsDetail.title}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">
                  ${productsDetail.price}
                </p>
                <p className="text-gray-400 text-xl">
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div className="flex space-x-2 mt-4">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">Description</h3>
                <p>{productsDetail.description}</p>
              </div>

              <div className="mt-8 max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Reviews({productsDetail?.rating?.count || 0})
                </h3>

                <div
                  className="flex w-full h-2 bg-gray-200 overflow-hidden mt-4"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                    style={{ width: `${rating}%` }}
                  ></div>
                </div>

                <button
                  onClick={() => handleAdd(productsDetail)}
                  type="button"
                  className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
