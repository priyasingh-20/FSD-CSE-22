import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 799,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlfxc0ErDreFgOiqKXjTyF6cXILwEttg4exh0S7Dx82XQm0UQvbBRmVQXD-3MJbaNqThvk07wkQE6CqGjlLwB2E72n7d0jdUT4NdczviwnBGbQXcXzIlfpUQW8TStFL4nr6OazrQ&usqp=CAc",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 1299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQv3A32uZO9-wWiZaTEmjzsRIVW24FRNJZyVc-0photA&s=10",
    },
    {
      id: 3,
      title: "Powder Canister",
      price: 899,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3bnp220XIfsRm3ii88IFpmK6Qie7SFpy6TYyGIoSoA&s=10",
    },
    {
      id: 4,
      title: "Red Lipstick",
      price: 599,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzXPjUOCHSZOHshwvwdotK-mtwrjhuamJzzKRXNywtfNAzC-YZTIDm2T9xBwAYSFw8XdZIy-bo1rVGB6DEvwW0UT18ED9HfRGU6rpDLmMrWjUvDBDd6M_XcQ&usqp=CAc",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      price: 299,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRvv-oIuvFowQjV2sEN5IRPLZ6KuPQqSJvDnsILxCRA&s",
    },
    {
      id: 6,
      title: "Classic Makeup Kit",
      price: 999,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH_07Mm3Abp6fBM1q2ivuYxaU6khBtEV3Hx3XQQSEhQ&s",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>My Store</h1>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <div className="cart">🛒 Cart ({cart.length})</div>
      </nav>

      {/* Products */}
      <main className="container">
        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              <h3>{product.title}</h3>

              <p className="price">Price: ₹{product.price}</p>

              <button onClick={() => addToCart(product)} className="add-button">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;