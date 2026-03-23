import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product";
import { useSelector } from "react-redux";

function Products() {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <div className="h-screen p-5 max-w-7xl mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* <h1 className="font-bold text-2xl text-gray-800">Products</h1> */}
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {" "}
            {products &&
              products.map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  className="flex flex-col items-center justify-center"
                  key={product._id}
                >
                  <div className="h-80 w-56 mb-3 overflow-hidden rounded-md">
                    <img
                      className="w-full h-full object-cover"
                      src={`http://localhost:3000/uploads/${product.thumbnail}`}
                      alt={product.productName}
                    />
                  </div>
                  <h1 className="font-semibold self-start pl-1 text-lg text-gray-900">
                    {product.productName}
                  </h1>

                  <p className="self-start pl-1">{`RS. ${product.price} `}</p>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
