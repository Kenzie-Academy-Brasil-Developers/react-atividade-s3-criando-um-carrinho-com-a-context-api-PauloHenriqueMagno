import ProductList from "./components/product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import "./App.css"

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
       <CartProvider>
        <div className="container">
          <h2>Catalogue</h2>
          <ProductList type="catalogue" />
          <h2>Cart</h2>
          <ProductList type="cart" />
        </div>
      </CartProvider>
     </CatalogueProvider>
    </div>
  );
}

export default App;