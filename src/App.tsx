import "./App.css";
import ProductList from "./components/products/ProductList";

interface User {
  name: string;
  age: number;
  isLoggedIn: boolean;
}
function App() {
  const currentUser: User = {
    name: "John Doe",
    age: 30,
    isLoggedIn: true,
  };
  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
