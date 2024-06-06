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
          <div className="container p-14">
            <div>
              <div>
                <img src={productsDetail.image} alt="pic" />
              </div>
              <div>{productsDetail.title}</div>
              <div>
                <p>{productsDetail.description}</p>
              </div>

              <div>Price ${productsDetail.price}</div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default ProductDetail;
