import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { config, products, Product } from './data/products';
import './styles.css';

const product = products[0];

function HeroProductCarousel() {
  const [active, setActive] = useState(0);
  const total = products.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [total]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % total);
  };

  // 3 Exact Slots for Left, Center, Right
  const centerItem = products[active % total];
  const leftItem = products[(active + 1) % total];
  const rightItem = products[(active + 2) % total];

  return (
    <div className="hero-carousel">
      <div className="hero-carousel-glow" />

      {/* Cursive Tag from Banner */}
      <span className="cursive-tag">For every craving</span>

      <div className="carousel-orbit orbit-one" />
      <div className="carousel-orbit orbit-two" />

      {/* Left Navigation Arrow */}
      <button
        type="button"
        className="carousel-arrow carousel-prev"
        onClick={handlePrev}
        aria-label="Previous product"
      >
        ‹
      </button>

      {/* 3 Real Packs Display */}
      <div className="hero-products">
        {/* Left Pack */}
        <div
          className="hero-product hero-product-left"
          key={`left-${leftItem.slug}`}
          onClick={handlePrev}
        >
          <img src={leftItem.image} alt={leftItem.name} draggable="false" />
        </div>

        {/* Center Dominant Front Pack */}
        <div
          className="hero-product hero-product-front"
          key={`front-${centerItem.slug}`}
        >
          <img src={centerItem.image} alt={centerItem.name} draggable="false" />
        </div>

        {/* Right Pack */}
        <div
          className="hero-product hero-product-right"
          key={`right-${rightItem.slug}`}
          onClick={handleNext}
        >
          <img src={rightItem.image} alt={rightItem.name} draggable="false" />
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        className="carousel-arrow carousel-next"
        onClick={handleNext}
        aria-label="Next product"
      >
        ›
      </button>

      {/* 3D Round Pedestal Table with Neon Glow Arrows */}
      <div className="hero-table">
        <div className="table-ring-neon-arrow neon-arrow-left" />
        <div className="table-ring-neon-arrow neon-arrow-right" />
        <div className="table-ring table-ring-one" />
        <div className="table-ring table-ring-two" />
        <div className="table-top" />
        <div className="table-base" />
      </div>

      {/* 3 Dots */}
      <div className="carousel-dots">
        {products.map((p, dot) => (
          <button
            key={p.slug}
            type="button"
            className={active === dot ? 'active' : ''}
            onClick={() => setActive(dot)}
            aria-label={`Show ${p.name}`}
          />
        ))}
      </div>

      <div className="carousel-label">
        <strong>{centerItem.name.replace('TORNATO ', '')}</strong> — {centerItem.weight}
      </div>
    </div>
  );
}

const Logo = ({ dark = false }: { dark?: boolean }) => (
  <a className={`brand ${dark ? 'brand--dark' : ''}`} href="/" aria-label="TORNATO home">
    <img src="/assets/tornato-logo.png" alt="TORNATO — Real Ingredients. Real Crunch." />
  </a>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

const MarketButtons = ({ p = product }: { p?: Product }) => (
  <div className="market-buttons">
    <a className="button button--primary" href={p.marketplaces.amazon} target="_blank" rel="noreferrer">
      Buy on Amazon <Arrow />
    </a>
    <a className="button button--light" href={p.marketplaces.flipkart} target="_blank" rel="noreferrer">
      Buy on Flipkart <Arrow />
    </a>
  </div>
);

const Reveal = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node?.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [['Products', '/products'], ['Our Story', '/our-story'], ['About', '/about'], ['Contact', '/contact']];
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <Logo />
        <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
          <span /><span />
        </button>
        <nav className={open ? 'nav-open' : ''}>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="/products" onClick={() => setOpen(false)}>Explore food <Arrow /></a>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? 'section-label--light' : ''}`}>{children}</p>;
}

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="burst burst-a" />
          <div className="burst burst-b" />

          {/* Floating Snack Elements */}
          <div className="floating-item chip-left-top" />
          <div className="floating-item tomato-slice" />
          <div className="floating-item chip-right-top" />
          <div className="floating-item chili-right" />

          <div className="hero-copy">
            <span className="pill">TORNATO / A FOOD BRAND</span>

            <h1>
              Food, but
              <br />
              <em>with a twist.</em>
            </h1>

            <p>
              Bold flavours, playful ideas and everyday food made
              to feel a little more exciting.
            </p>

            <div className="hero-actions">
              <a className="button" href="/products">
                Explore products <b>↗</b>
              </a>

              <a className="hero-story-link" href="/our-story">
                Discover our story ↗
              </a>
            </div>
          </div>

          <HeroProductCarousel />

          {/* Yellow Banner with 4 Features & Icons */}
          <div className="hero-bottom">
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75C6.2 7.5 4.5 9 4 11c1.5-1 3.5-1.5 6-1.5 3 0 5 .5 7-1.5z" />
              </svg>
              <span>REAL INGREDIENTS</span>
            </div>
            <div className="bar-separator" />

            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <span>REAL FLAVOUR</span>
            </div>
            <div className="bar-separator" />

            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.8 15.6c-.7 1.8-2.1 3.2-3.8 3.9-2.3 1-5 .6-7.3-.6-2.8-1.5-4.7-4.1-5.3-7.2-.3-1.6-.1-3.3.6-4.8.4-.9 1.4-1.2 2.2-.7.8.4 1.1 1.4.7 2.2-.4 1-.5 2.1-.3 3.2.4 2.2 1.8 4 3.8 5.1 1.6.8 3.5 1.1 5.1.4 1.1-.5 2-1.4 2.5-2.5.5-.9 1.5-1.2 2.4-.7.8.4 1.2 1.5.7 2.4z" />
              </svg>
              <span>REAL CHARACTER</span>
            </div>
            <div className="bar-separator" />

            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <span>MADE TO ENJOY</span>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="intro-v2 section-pad">
            <div className="intro-kicker">01 — THE WORLD OF TORNATO</div>
            <div className="intro-grid">
              <h2>One brand.<br /><span>Many food moods.</span></h2>
              <div>
                <p className="intro-lead">TORNATO is growing into a bold world of food — from crunchy favourites to future everyday staples.</p>
                <p className="muted-copy">We are starting with Banana Chips. But the brand is built from day one to welcome whatever delicious idea comes next.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="food-world">
            <div className="section-pad world-head">
              <div><SectionLabel>02 / FOOD UNIVERSE</SectionLabel><h2>What are you<br /><em>in the mood for?</em></h2></div>
              <p>Different products, one unmistakable TORNATO point of view.</p>
            </div>
            <div className="world-grid">
              <a className="world-card world-card--red" href="/products">
                <span>CRUNCH</span><strong>01</strong><p>Crispy things that keep you reaching back in.</p><b>Explore →</b>
              </a>
              <a className="world-card world-card--yellow" href="/products">
                <span>FLAVOUR</span><strong>02</strong><p>Big taste, bright ideas and food worth talking about.</p><b>Discover →</b>
              </a>
              <a className="world-card world-card--green" href="/products">
                <span>EVERYDAY</span><strong>03</strong><p>Future favourites designed for real life, not just special occasions.</p><b>See what’s next →</b>
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="feature-v2 section-pad">
            <div className="feature-topline"><SectionLabel>03 / CURRENTLY CRAVING</SectionLabel><span>01 / 01</span></div>
            <div className="feature-v2-grid">
              <div className="product-stage">
                <div className="stage-grid" />
                <span className="stage-label">TORNATO</span>
                <div className="product-glow" />
                <img src={product.image} alt="Golden TORNATO banana chips" />
                <span className="stage-sticker">CRISPY<br />GOOD</span>
              </div>
              <div className="feature-v2-copy">
                <SectionLabel>FIRST ON THE SHELF</SectionLabel>
                <h2>Banana Chips.<br /><em>Big personality.</em></h2>
                <p>{product.shortDescription} A simple first step into the TORNATO food universe.</p>
                <div className="product-facts">
                  <div><small>FORMAT</small><strong>{product.weight}</strong></div>
                  <div><small>CATEGORY</small><strong>{product.category}</strong></div>
                  <div><small>AVAILABILITY</small><strong>Marketplace</strong></div>
                </div>
                <MarketButtons />
                <a className="under-link" href="/products/banana-chips">View full product details <Arrow /></a>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="manifesto">
            <div className="manifesto-word">TORNATO</div>
            <div className="manifesto-copy section-pad">
              <SectionLabel light>04 / THE TORNATO POINT OF VIEW</SectionLabel>
              <h2>Less ordinary.<br /><em>More food energy.</em></h2>
              <p>We want food to feel expressive, approachable and full of character — without taking itself too seriously.</p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="story-v2 section-pad">
            <div className="story-v2-head"><SectionLabel>05 / OUR STORY</SectionLabel><a className="under-link" href="/our-story">Read the full story <Arrow /></a></div>
            <div className="story-v2-grid">
              <h2>Built for the<br /><span>next bite.</span></h2>
              <div>
                <p className="intro-lead">TORNATO is being built as a modern food brand with room to grow.</p>
                <p className="muted-copy">The story will evolve as our products, people and food ideas come to life. For now, we are beginning with one unmistakable crunch.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="market-v2">
            <div className="market-v2-inner section-pad">
              <div>
                <SectionLabel>06 / FIND TORNATO</SectionLabel>
                <h2>See us<br /><em>out there.</em></h2>
                <p>Until direct ordering arrives, shop TORNATO through our marketplace partners.</p>
              </div>
              <div className="market-cards">
                <a href={product.marketplaces.amazon} target="_blank" rel="noreferrer" className="market-card market-card--dark"><span>AMAZON</span><b><Arrow /></b></a>
                <a href={product.marketplaces.flipkart} target="_blank" rel="noreferrer" className="market-card market-card--light"><span>FLIPKART</span><b><Arrow /></b></a>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="closing section-pad">
            <div className="closing-shape" />
            <SectionLabel>07 / STAY CURIOUS</SectionLabel>
            <h2>More food.<br /><em>More to come.</em></h2>
            <p>New products, new flavours and new reasons to make TORNATO part of the everyday.</p>
            <a className="button button--dark" href="/products">Explore the shelf <Arrow /></a>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="product-card-v2">
      <a className="card-image-v2" href={`/products/${p.slug}`}>
        <span className="card-category">{p.category}</span>
        <img src={p.image} alt={p.name} loading="lazy" />
      </a>
      <div className="card-copy-v2">
        <div><small>{p.weight}</small><h3>{p.name.replace('TORNATO ', '')}</h3></div>
        <a className="circle-arrow" href={`/products/${p.slug}`} aria-label={`View ${p.name}`}><Arrow /></a>
      </div>
      <p>{p.shortDescription}</p>
    </article>
  );
}

function Listing() {
  return (
    <><Header /><main className="page-v2"><div className="section-pad page-hero"><SectionLabel>THE TORNATO SHELF</SectionLabel><h1>Food worth<br /><em>making room for.</em></h1><p>Our current products today, with plenty more to come tomorrow.</p></div><div className="section-pad product-list-grid">{products.map(p => <ProductCard p={p} key={p.slug} />)}<div className="future-card"><span>+</span><strong>More products<br />coming soon.</strong><p>New food ideas are on the way.</p></div></div></main><Footer /></>
  );
}

function ProductDetail() {
  return (
    <><Header /><main className="page-v2"><section className="section-pad detail-v2"><a href="/products" className="under-link">← Back to products</a><div className="detail-grid-v2"><div className="detail-stage"><span>{product.category}</span><img src={product.image} alt={product.name} /></div><div className="detail-copy-v2"><SectionLabel>{product.category} / {product.weight}</SectionLabel><h1>{product.name.replace('TORNATO ', '')}<br /><em>with TORNATO energy.</em></h1><p className="intro-lead">{product.description}</p><div className="detail-placeholder"><span>MRP</span><strong>{product.mrp}</strong></div><MarketButtons /><div className="detail-info"><div><b>Ingredients</b><p>{product.ingredients}</p></div><div><b>Nutrition</b><p>{product.nutrition}</p></div><div><b>Storage</b><p>{product.storage}</p></div><div><b>Shelf life</b><p>{product.shelfLife}</p></div></div></div></div></section></main><Footer /></>
  );
}

function BasicPage({ title, eyebrow, copy, children }: { title: string; eyebrow: string; copy: string; children?: React.ReactNode }) {
  return <><Header /><main className="page-v2"><section className="section-pad basic-v2"><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1><p className="basic-lead">{copy}</p>{children}</section></main><Footer /></>;
}

function FAQ() {
  const [active, setActive] = useState(0);
  const items = [
    ['Where can I buy TORNATO?', 'TORNATO is currently available through selected online marketplaces. Product pages contain the latest marketplace links.'],
    ['Will TORNATO add more food products?', 'Yes. The brand and website are designed to grow into multiple food categories over time.'],
    ['Where can I find product information?', 'Ingredients, nutrition, storage and shelf-life information will be published on each product page once finalised.'],
    ['Can I buy directly from TORNATO?', 'Not yet. Direct ordering is planned for a future phase. For now, purchases are made through marketplace partners.'],
  ];
  return <section className="faq-v2 section-pad"><SectionLabel>FAQ / GOOD TO KNOW</SectionLabel><h2>Questions, answered.</h2><div className="faq-v2-list">{items.map(([q, a], i) => <div className={`faq-row ${active === i ? 'faq-row--open' : ''}`} key={q}><button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span>{q}</span><b>{active === i ? '−' : '+'}</b></button>{active === i && <p>{a}</p>}</div>)}</div></section>;
}

function Footer() {
  return <footer className="footer-v2"><div className="footer-top section-pad"><div className="footer-brand"><Logo /><p>A modern food brand with a little more flavour, character and movement.</p></div><div><b>Explore</b><a href="/products">Products</a><a href="/our-story">Our Story</a><a href="/about">About</a><a href="/contact">Contact</a></div><div><b>Information</b><a href="/faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/shipping">Marketplace info</a></div><div><b>Stay in the loop</b><a href={config.social}>Instagram — coming soon</a><p className="footer-note">© {new Date().getFullYear()} TORNATO. All rights reserved.</p></div></div><div className="footer-bottom"><span>REAL INGREDIENTS</span><span>REAL FLAVOUR</span><span>REAL TORNATO</span></div></footer>;
}

function App() {
  const path = location.pathname.replace(/\/$/, '') || '/';
  if (path === '/') return <Home />;
  if (path === '/products') return <Listing />;
  if (path.startsWith('/products/banana-chips')) return <ProductDetail />;
  if (path === '/faq') return <><Header /><FAQ /><Footer /></>;
  if (path === '/our-story') return <BasicPage eyebrow="OUR STORY" title="Built for the next bite." copy="TORNATO was created with a clear purpose: honest ingredients, unapologetic crunch, and everyday snacking joy." />;
  if (path === '/about') return <BasicPage eyebrow="ABOUT TORNATO" title="A food brand with room to grow." copy="TORNATO is building an expressive, accessible food brand for everyday moments." />;
  if (path === '/contact') return <BasicPage eyebrow="CONTACT" title="Let’s talk food." copy="Final contact details will appear here once confirmed."><div className="placeholder-box"><p>Email: {config.email}</p><p>Phone: {config.phone}</p><p>Address: {config.address}</p></div></BasicPage>;
  if (path === '/privacy') return <BasicPage eyebrow="LEGAL" title="Privacy Policy" copy="PRIVACY_POLICY_CONTENT_HERE" />;
  if (path === '/terms') return <BasicPage eyebrow="LEGAL" title="Terms & Conditions" copy="TERMS_AND_CONDITIONS_CONTENT_HERE" />;
  if (path === '/shipping') return <BasicPage eyebrow="MARKETPLACE" title="Marketplace information" copy="TORNATO purchases are currently made through marketplace partners. Final marketplace and delivery information will be published here before launch." />;
  return <BasicPage eyebrow="404" title="That page took a wrong turn." copy="The page you’re looking for does not exist." />;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);