import { useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

type Item = { name: string; price: number; image: string; quantity: number };
const initialItems: Item[] = [
  { name: "GRAPHIQUE COSMIC HOODIE", price: 1999, image: "/d.png", quantity: 1 },
  { name: "GRAPHIQUE COSMIC CAP", price: 200, image: "", quantity: 1 },
  { name: "GRAPHIQUE COSMIC T-SHIRT", price: 599, image: "/r.png", quantity: 1 },
];
const icon = (type: string) => type === "bag" ? <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg> : type === "search" ? <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 4.2 4.2"/></svg> : <svg viewBox="0 0 24 24"><circle cx="12" cy="7.5" r="3.3"/><path d="M5.8 20v-2.2a6.2 6.2 0 0 1 12.4 0V20z"/></svg>;

export default function CartPage() {
  const [items, setItems] = useState(initialItems);
  const [discount, setDiscount] = useState("");
  const [applied, setApplied] = useState(false);
  const [changed, setChanged] = useState(false);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = changed ? items.reduce((sum, item) => sum + item.price * item.quantity, 0) : 2096;
  return <main className="cart-page"><div className="cart-stars" aria-hidden="true" />
    <header className="cart-header"><Link to="/graphique" className="cart-wordmark">MERCHANDISE</Link><nav><Link to="/graphique">HOME</Link><a href="/graphique#graphique-shop">SHOP</a><a href="/graphique#graphique-collections">COLLECTIONS</a><a href="/graphique#graphique-about">ABOUT</a><a href="/graphique#graphique-footer">CONTACT</a></nav><div className="cart-actions"><a href="/graphique#graphique-shop" aria-label="Search">{icon("search")}</a><a href="/graphique#graphique-about" aria-label="Account">{icon("user")}</a><Link to="/cart" aria-label={`Shopping bag, ${changed ? count : 2} items`} className="cart-bag">{icon("bag")}<span>{changed ? count : 2}</span></Link></div></header>
    <section className="cart-content"><div className="cart-heading"><div><h1>YOUR CART</h1><p>{count} ITEMS</p></div><Link to="/graphique" className="continue-shopping">Continue Shopping <span>→</span></Link></div>
      <div className="cart-columns"><section className="cart-items-panel" aria-label="Cart items">{items.map((item) => <article className="cart-item" key={item.name}><div className="cart-item-image">{item.image ? <img src={item.image} alt="" className={item.image.includes("d.png") ? "hoodie" : "tee"}/> : <span className="cap-placeholder" aria-hidden="true"/>}</div><div className="cart-item-details"><h2>{item.name}</h2><strong>₹{item.price}</strong><p>SIZE : M <span>•</span> COLOR : COSMIC BLUE</p></div><div className="cart-quantity"><button aria-label="Decrease quantity" onClick={() => {setChanged(true); setItems(list => list.map(row => row.name === item.name ? {...row, quantity: Math.max(1, row.quantity - 1)} : row));}}>−</button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => {setChanged(true); setItems(list => list.map(row => row.name === item.name ? {...row, quantity: row.quantity + 1} : row));}}>+</button></div><button className="cart-remove" onClick={() => {setChanged(true); setItems(list => list.filter(row => row.name !== item.name));}}><svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3m3 0-.8 13H6.8L6 7m4 3v7m4-7v7"/></svg>Remove</button></article>)}{items.length===0 && <p className="empty-cart">Your cart is empty.</p>}</section>
      <aside className="order-summary"><h2>ORDER SUMMARY</h2><div className="summary-line"><span>Subtotal ({count} items)</span><strong>₹{total}</strong></div><form className="discount-form" onSubmit={event => {event.preventDefault(); setApplied(Boolean(discount.trim()));}}><input placeholder="Enter Discount Code" aria-label="Discount code" value={discount} onChange={event => {setDiscount(event.target.value); setApplied(false);}}/><button>{applied ? "APPLIED" : "APPLY"}</button></form><div className="summary-total"><div><strong>Total</strong><span>Exclusive of all taxes</span></div><strong>₹{total}</strong></div><button className="checkout-button"><svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15" r="1"/></svg>PROCEED TO CHECKOUT</button><p className="secure-note">Secure checkout by RazorPay</p></aside></div><div className="cart-bottom-rule"/>
    </section></main>;
}
