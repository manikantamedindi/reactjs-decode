const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    description: "Description for Product 1",
    price: 29.99,
    rating: 4.5,
    likes: 10,
  },
];

function Amazon() {
  return (
    <>
      {products.length ? (
        <ul>
          {products.map((product, index) => {
            return <li key={index}>{product.name}</li>;
          })}
        </ul>
      ) : (
        "No"
      )}
    </>
  );
}

export default Amazon;
