import Link from "next/link";
import { getProduct, products, type ProductId } from "../../product-data";

export function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = getProduct(productId);
  const otherProducts = products.filter((item) => item.id !== product.id);

  return (
    <div className="compact-app detail-page">
      <header className="compact-topbar">
        <Link className="brand" href="/#top"><span className="brand-mark"><span className="clover-symbol">✤</span></span><span>Kleeblatt<span className="brand-dot">.</span>space</span></Link>
        <nav className="detail-nav" aria-label="Product navigation">
          <Link href="/">All products</Link>
          <Link href="/products/studio">Studio</Link>
          <Link href="/products/api">Pipeline API</Link>
          <Link href="/products/adventure">Adventure</Link>
        </nav>
        <Link className="nav-cta" href="/#products">Explore <span aria-hidden="true">→</span></Link>
      </header>

      <main id="top">
        <div className="detail-wrap">
          <Link className="back-link" href="/"><span aria-hidden="true">←</span> Back to all products</Link>
          <section className={`detail-hero ${product.color}`}>
            <div className="detail-hero-top"><span>{product.number}</span><span>{product.label}</span></div>
            <div className="detail-hero-grid"><div><span className="detail-icon">✦</span><h1>{product.title}</h1><p>{product.intro}</p></div><div className="detail-hero-note"><span className="eyebrow">Transparent by default</span><div className="detail-signal"><i /><i /><i /><i /><i /><i /></div><small>built for real game workflows</small></div></div>
          </section>

          <section className="detail-content">
            <div className="detail-copy"><span className="eyebrow">What it does</span><h2>Keep the next step<br /><em>in reach.</em></h2><p>{product.description}</p><Link className="primary-button" href="/#products">Choose this product <span aria-hidden="true">→</span></Link></div>
            <div className="detail-list"><span className="eyebrow">Included</span><ul>{product.bullets.map((bullet) => <li key={bullet}><span aria-hidden="true">✓</span>{bullet}</li>)}</ul></div>
          </section>

          <section className="detail-workflow"><div><span className="eyebrow">A simple workflow</span><h2>From input<br /><em>to outcome.</em></h2></div><ol>{product.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><div><strong>{step}</strong><small>Step {index + 1} · Kleeblatt flow</small></div></li>)}</ol></section>

          <section className="detail-bottom"><div><span className="eyebrow">Keep exploring</span><h2>One suite.<br /><em>Three ways in.</em></h2></div><div className="detail-bottom-links">{otherProducts.map((item) => <Link key={item.id} href={`/products/${item.id}`}>{item.title}<span aria-hidden="true">→</span></Link>)}<a href="https://github.com/Kleeblatt-space/company-website"><span aria-hidden="true">↗</span> View repository</a></div></section>
        </div>
      </main>
      <footer><Link className="brand" href="/#top"><span className="brand-mark"><span className="clover-symbol">✤</span></span><span>Kleeblatt<span className="brand-dot">.</span>space</span></Link><span>Transparent tools for real games.</span><Link href="#top">Back to top ↑</Link></footer>
    </div>
  );
}
