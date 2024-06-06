import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchProducts } from "../store/features/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading" || products === undefined) {
    return <div>Loading....</div>;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="font-bold text-2xl text-center">Products we offer</h2>

        {status === "error" && (
          <p>Error fetching products. Please try again later.</p>
        )}

        {status === "idle" && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products &&
              products.map((product) => (
                <div
                  key={product.id}
                  className="group relative border-2 border-blue-50 p-6"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      alt={product.category}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-col justify-center items-center">
                    <div>
                      <h3 className="font-bold text-gray-700">
                        <Link to={`products/${product.id}`}>
                          {product.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>

                    <p className="text-sm mt-3 font-bold text-gray-900">
                      Price: ${product.price}
                    </p>
                  </div>
                  <div className="flex justify-around">
                    <button className="bg-gray-700 text-white p-2 mt-2 rounded-md">
                      Add to Cart
                    </button>
                    <Link
                      to={`products/${product.id}`}
                      className="bg-gray-700 text-white p-2 mt-2 rounded-md"
                    >
                      Check
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
