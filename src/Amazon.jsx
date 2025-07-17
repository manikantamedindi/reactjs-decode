import { useSelector } from "react-redux";

function Amazon() {
  const products = useSelector((state) => state.products?.data || []); // Added fallback for undefined state
  console.log("Products state in Amazon component:", products); // Debugging the products state

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} stars</p>
            <p>Likes: {product.likes}</p>
          </div>
        ))
      ) : (
        <p>No products available</p> // Added fallback message for empty data
      )}
    </div>
  );
}

export default Amazon;
