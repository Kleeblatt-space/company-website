"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "./product-data";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="compact-app">
      <header className="compact-topbar">
        <Link className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark"><span className="clover-symbol">✤</span></span>
          <span>Kleeblatt<span className="brand-dot">.</span>space</span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="main-navigation">
          {menuOpen ? "×" : "☰"}<span className="sr-only">Toggle menu</span>
        </button>
        <nav id="main-navigation" className={menuOpen ? "compact-nav is-open" : "compact-nav"} aria-label="Main navigation">
          {products.map((product) => <Link key={product.id} href={`/products/${product.id}`} onClick={closeMenu}>{product.title}</Link>)}
          <a className="nav-cta" href="#products" onClick={closeMenu}>Explore <span aria-hidden="true">→</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="compact-hero">
          <div>
            <span className="eyebrow"><span className="live-dot" /> Open tools for real games</span>
            <h1>Build the pipeline.<br /><em>Play the result.</em></h1>
          </div>
          <div className="hero-side">
            <p>Simple tools for game assets, transparent by default and made for the details that make worlds feel real.</p>
            <a className="hero-link" href="#products">See the three products <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="products" className="product-section" aria-labelledby="product-title">
          <div className="section-line"><span className="eyebrow">The Kleeblatt suite</span><span>Three focused tools · one clear workflow</span></div>
          <h2 id="product-title">Pick your next <em>step.</em></h2>
          <div className="compact-product-grid">
            {products.map((product) => <article className={`compact-product ${product.color}`} key={product.id}>
              <div className="product-heading"><span className="product-number">{product.number}</span><span className="product-label">{product.label}</span></div>
              <h3>{product.title}</h3>
              <p>{product.intro}</p>
              <ul>{product.bullets.map((bullet) => <li key={bullet}><span>✦</span>{bullet}</li>)}</ul>
              <Link className="card-link" href={`/products/${product.id}`}>More about {product.title} <span aria-hidden="true">→</span></Link>
            </article>)}
          </div>
        </section>

        <section className="workflow-strip" aria-label="Simple workflow">
          <div><span>01</span><strong>Make</strong><small>Build assets in Studio</small></div>
          <i>→</i>
          <div><span>02</span><strong>Check</strong><small>Score them with the API</small></div>
          <i>→</i>
          <div><span>03</span><strong>Play</strong><small>Bring them to Adventure</small></div>
        </section>

        <section className="compact-footer-cta" id="bottom">
          <div><span className="eyebrow">Local-first. Fair use. No blackbox.</span><h2>Make the next build<br /><em>more playable.</em></h2></div>
          <a className="primary-button" href="#products">Explore products <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <footer><Link className="brand" href="#top"><span className="brand-mark"><span className="clover-symbol">✤</span></span><span>Kleeblatt<span className="brand-dot">.</span>space</span></Link><span>Transparent tools for real games.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
