import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../store/features/productSlice";

const ProductDetail = () => {
  const { productsDetail, status } = useSelector((state) => state.products);

  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(productsDetail);
  console.log(status);
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  if (status == "loading" || !productsDetail) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {productsDetail && (
          <div className="flex p-14 h-[600px] overflow-hidden">
            <div className="p-10">
              <img src={productsDetail.image} alt="pic" />
            </div>
            <div className="flex flex-col ">
              <div className="text-2xl font-bold">{productsDetail.title}</div>
              <div>
                <p className="text-sm text-gray-600">
                  {productsDetail.description}
                </p>
              </div>

              <div className="font-bold">Price: ${productsDetail.price}</div>
              <button
                type="button"
                className="bg-gray-700 text-white p-2 mt-2 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default ProductDetail;
