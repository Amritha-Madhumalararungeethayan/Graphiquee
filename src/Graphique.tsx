import { useState, type CSSProperties, type SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Graphique.css";



type Product = {

  name: string;

  price: number;

  tag: string;

  image: string;

  rotation: number;

  color: string;

};



const products: Product[] = [

  {

    name: "GRAPHIQUE CORE TEE",

    price: 35,

    tag: "LIMITED",

    image: "/r.png",

    rotation: -13,

    color: "#163e5a",

  },

  {

    name: "GRAPHIQUE HOODIE",

    price: 35,

    tag: "BEST SELLER",

    image: "/d.png",

    rotation: -4,

    color: "#33254c",

  },

  {

    name: "GRAPHIQUE STICKERS",

    price: 35,

    tag: "NEW DESIGNS",

    image: "/b.png",

    rotation: 8,

    color: "#334650",

  },

  {

    name: "GRAPHIQUE TOTE BAGS",

    price: 35,

    tag: "NEW DESIGNS",

    image: "/c.png",

    rotation: -4,

    color: "#4b3850",

  },

];



function hideMissingImage(event: SyntheticEvent<HTMLImageElement>) {

  event.currentTarget.style.display = "none";

}



export default function Graphique() {

  const [cart, setCart] = useState(0);
  const navigate = useNavigate();



  const [menuOpen, setMenuOpen] = useState(false);



  return (

    <main className="graphique" id="graphique-home">

      <div className="graphique-stars" aria-hidden="true" />

      <div className="graphique-grid-glow" aria-hidden="true" />



      <header className="graphique-navbar">

        <a href="#graphique-home" className="graphique-brand">

          <img

            className="graphique-brand-image"

            src="/graphique-mark.png"

            alt=""

            onError={hideMissingImage}

          />

          <span className="graphique-brand-fallback">✳</span>

          <span>GRAPHIQUE</span>

        </a>



        <button

          type="button"

          className="graphique-menu-toggle"

          aria-label="Toggle navigation"

          aria-expanded={menuOpen}

          onClick={() => setMenuOpen((open) => !open)}

        >

          {menuOpen ? "✕" : "☰"}

        </button>



        <nav

          className={`graphique-nav-links ${menuOpen ? "is-open" : ""}`}

          aria-label="Main navigation"

        >

          {[

            ["HOME", "#graphique-home"],

            ["SHOP", "#graphique-shop"],

            ["COLLECTIONS", "#graphique-collections"],

            ["ABOUT", "#graphique-about"],

            ["CONTACT", "#graphique-footer"],

          ].map(([label, href]) => (

            <a key={label} href={href} onClick={() => setMenuOpen(false)}>

              {label}

            </a>

          ))}

        </nav>



        <div className="graphique-nav-actions" aria-label="Store actions">
          <a className="graphique-icon-button" href="#graphique-shop" aria-label="Search the shop">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m15.5 15.5 4.2 4.2" /></svg>
          </a>
          <a className="graphique-icon-button" href="#graphique-about" aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.3" /><path d="M5.8 20v-2.2a6.2 6.2 0 0 1 12.4 0V20z" /></svg>
          </a>
          <Link className="graphique-icon-button graphique-cart" to="/cart" aria-label={`Shopping bag with ${cart} items`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1 13H6L5 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>
            <span className="graphique-cart-count">{cart}</span>
          </Link>
        </div>

      </header>



      <section className="graphique-hero">

        <div className="graphique-hero-copy">

          <p className="graphique-eyebrow">

            

            MERCHANDISE

          </p>



          <h1>

            WEAR THE

            <br />

            <span>GRAPHIQUE</span>

            <br />

            UNIVERSE

          </h1>



          <p className="graphique-hero-description">EXPLORE THE LIMITED COSMIC-INSPIRED MERCHANDISE DESIGNED FOR CREATORS, DREAMERS, AND VISUAL STORYTELLERS.</p>



          <div className="graphique-hero-buttons">

            <a

              href="#graphique-collections"

              className="graphique-button graphique-button-primary"

            >

              EXPLORE COLLECTION

            </a>

            <a

              href="#graphique-shop"

              className="graphique-button graphique-button-secondary"

            >

              VIEW CATALOG

            </a>

          </div>

        </div>



        <div className="graphique-hero-art graphique-merch-hero">
          <div className="graphique-merch-glow" aria-hidden="true" />
          <img
            className="graphique-merch-platform"
            src="/hero-platform.png"
            alt=""
            aria-hidden="true"
          />
          <div className="graphique-merch-ring" aria-hidden="true" />

          <div className="graphique-merch-item merch-hoodie">
            <img src="/d.png" alt="Graphique hoodie" />
          </div>

          <div className="graphique-merch-item merch-shirt">
            <img src="/r.png" alt="Graphique T-shirt" />
          </div>

          <div className="graphique-merch-item merch-stickers">
            <img src="/b.png" alt="Graphique sticker collection" />
          </div>

          <div className="graphique-merch-item merch-tote">
            <img src="/c.png" alt="Graphique tote bag" />
          </div>
        </div>
      </section>

      <section

        className="graphique-shop"

        id="graphique-collections"

      >

        <div className="graphique-product-grid" id="graphique-shop">

          {products.map((product) => (

            <article

              className="graphique-product-card"

              key={product.name}

              style={

                {

                  "--tilt": `${product.rotation}deg`,

                  "--product-color": product.color,

                } as CSSProperties

              }

            >

              <div className="graphique-product-visual">

                <span className="graphique-product-tag">{product.tag}</span>



                <div className="graphique-product-image">

                  <img

                    src={product.image}

                    alt={product.name}


                    onError={hideMissingImage}

                  />

                </div>

              </div>



              <div className="graphique-product-info">

                <h3>
                  {product.name === "GRAPHIQUE HOODIE" ? (
                    <Link to="/product">{product.name}</Link>
                  ) : product.name}
                </h3>

                <p>${product.price}</p>

                <button

                  type="button"

                  className="graphique-add-cart"

                  onClick={() => {
                    setCart((count) => count + 1);
                    navigate("/cart");
                  }}

                >

                  <span>Add to Cart</span>
                </button>

              </div>

            </article>

          ))}

        </div>
</section>



      <section className="graphique-about-newsletter" id="graphique-about">
        <div className="graphique-about-block">
          <div className="graphique-about-brand">
            <img className="graphique-about-mark" src="/graphique-mark.png" alt="" />
            <span className="graphique-about-divider" aria-hidden="true" />
            <strong>GRAPHIQUE</strong>
          </div>
          <p>
            Graphique is design club of NITT which is we good a designing bla bla bla
          </p>
        </div>

        <div className="graphique-newsletter">
          <p className="graphique-eyebrow">STAY IN THE ORBIT</p>
          <h2>Get Cosmic Updates</h2>
          <p className="graphique-newsletter-description">
            write here a description you like but 2 lines
          </p>
        </div>
      </section>



      <footer className="graphique-footer" id="graphique-footer">
        <div className="graphique-footer-main">
          <div className="graphique-footer-links">
            <div>
              <h3>EXPLORE</h3>
              <a href="#graphique-home">Home</a>
              <a href="#graphique-shop">Shop</a>
              <a href="#graphique-collections">Collections</a>
              <Link to="/product">Product</Link>
              <Link to="/cart">Cart</Link>
              <a href="#graphique-about">About</a>
              <a href="#graphique-footer">Contacts</a>
            </div>
            <div>
              <h3>FOLLOW US</h3>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="#graphique-about">NITT</a>
            </div>
          </div>

          <div className="graphique-footer-art">
            <img className="graphique-footer-platform" src="/hero-platform.png" alt="" />
          </div>
        </div>

        <div className="graphique-footer-bottom">
          <p><strong>Graphique.</strong> All rights reserved.</p>
          <div className="graphique-legal-links">
            <a href="#graphique-footer">Privacy Policy</a>
            <a href="#graphique-footer">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>

    </main>

  );

}
