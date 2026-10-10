import { useState } from "react";
import "./ProductPage.css";

const hoodieImage = "/d.png";

const particles = [
  { x: 239, y: 787, size: 9, color: "#78797C", blur: 8.2 },
  { x: 1714, y: 606, size: 14, color: "#78797C", blur: 2.55 },
  { x: 1551, y: 72, size: 14, color: "rgba(120,121,124,.8)", blur: 2.55 },
  { x: 413, y: 157, size: 8, color: "rgba(120,121,124,.8)", blur: 8.2 },
  { x: 1133, y: 509, size: 10, color: "#78797C", blur: 2.55 },
  { x: 443, y: 987, size: 14, color: "#169B99", blur: 2.55 },
  { x: 1437, y: 925, size: 11, color: "rgba(22,155,153,.8)", blur: 8.2 },
  { x: 111, y: 551, size: 9, color: "#169B99", blur: 2.55 },
  { x: 793, y: 666, size: 15, color: "#169B99", blur: 2.55 },
  { x: 905, y: 301, size: 14, color: "#281F4A", blur: 2.55 },
  { x: 1728, y: 831, size: 14, color: "#281F4A", blur: 2.55 },
  { x: 582, y: 794, size: 14, color: "#281F4A", blur: 8.2 },
  { x: 1531, y: 636, size: 40, color: "#281F4A", blur: 8.2 },
  { x: 1300, y: 475, size: 14, color: "#152F7B", blur: 2.55 },
  { x: 799, y: 208, size: 11, color: "#152F7B", blur: 2.55 },
  { x: 1848, y: 301, size: 14, color: "rgba(21,47,123,.8)", blur: 8.2 },
  { x: 1257, y: 994, size: 14, color: "#78797C", blur: 1.9 },
  { x: 971, y: 885, size: 14, color: "#78797C", blur: 1.9 },
  { x: 1742, y: 97, size: 11, color: "#169B99", blur: 1.9 },
  { x: 724, y: 27, size: 14, color: "#281F4A", blur: 1.9 },
  { x: 171, y: 960, size: 11, color: "#152F7B", blur: 1.9 },
  { x: 1499, y: 430, size: 14, color: "#152F7B", blur: 1.9 },
  { x: 111, y: 163, size: 32, color: "#152F7B", blur: 1.9 },
];

const gallery = [
  { id: 1, className: "thumb-image-1" },
  { id: 2, className: "thumb-image-2" },
  { id: 3, className: "thumb-image-3" },
  { id: 4, className: "thumb-image-4" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.5 15.5 4.2 4.2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7.5" r="3.3" />
      <path d="M5.8 20v-2.2a6.2 6.2 0 0 1 12.4 0V20z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.4 11.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.5L22 8H6" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="11" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1" />
      <path d="M12 16v2" />
    </svg>
  );
}

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(1);
  const [cartCount, setCartCount] = useState(2);

  return (
    <main className="product-viewport">
      <section className="product-page">
        <div className="background-particles" aria-hidden="true">
          {particles.map((particle, index) => (
            <span
              key={index}
              className="particle"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                background: particle.color,
                filter: `blur(${particle.blur}px)`,
              }}
            />
          ))}
        </div>

        <header className="site-header">
          <div className="brand">MERCHANDISE</div>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">HOME</a>
            <a href="#shop">SHOP</a>
            <a href="#collections">COLLECTIONS</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <div className="header-actions">
            <button className="header-icon search-icon" aria-label="Search">
              <SearchIcon />
            </button>

            <button className="header-icon user-icon" aria-label="Account">
              <UserIcon />
            </button>

            <button className="header-icon cart-icon" aria-label="Shopping cart">
              <CartIcon />
              <span className="cart-badge">{cartCount}</span>
            </button>
          </div>
        </header>

        <aside className="product-gallery" aria-label="Product images">
          {gallery.map((item) => (
            <button
              key={item.id}
              className={`thumbnail ${item.className} ${
                selectedImage === item.id ? "thumbnail-active" : ""
              }`}
              onClick={() => setSelectedImage(item.id)}
              aria-label={`View hoodie image ${item.id}`}
              aria-pressed={selectedImage === item.id}
            >
              <img src={hoodieImage} alt="" />
            </button>
          ))}
        </aside>

        <div className="main-product-image">
          <div className="image-panel" />
          <div className="image-glow" />

          <img
            key={selectedImage}
            className={`hoodie-image hoodie-image-${selectedImage}`}
            src={hoodieImage}
            alt="Cosmic Orbit blue hoodie"
          />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>

        <section className="product-details" aria-label="Product details">
          <div className="new-arrival">NEW ARRIVAL</div>

          <h1 className="product-title">
            <span>COSMIC ORBIT</span>
            <span>HOODIE</span>
          </h1>

          <div className="price-panel">
            <span className="price">₹1,999</span>
          </div>

          <div className="size-section">
            <div className="section-label">SIZE</div>

            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-section">
            <div className="section-label">QUANTITY</div>

            <div className="quantity-control">
              <button
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            className="add-to-cart"
            onClick={() => setCartCount((count) => count + quantity)}
          >
            <LockIcon />
            <span>ADD TO CART</span>
          </button>

          <div className="bottom-divider" />
        </section>
      </section>
    </main>
  );
}
