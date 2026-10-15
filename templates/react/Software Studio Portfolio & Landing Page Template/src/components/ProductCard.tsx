import type { Product } from "../data";
import { ArrowUpRight, Check } from "./Icons";

export function ProductScreen({ product }: { product: Product }) {
  return (
    <div className={`app-screen app-screen--${product.accent}`} aria-hidden="true">
      <div className="app-screen__chrome">
        <i></i>
        <i></i>
        <i></i>
        <span>{product.screen.title}</span>
      </div>
      <div className="app-screen__rows">
        {product.screen.rows.map((row) => (
          <div key={row.label} className={`app-screen__row app-screen__row--${row.state}`}>
            <span>{row.label}</span>
            <em></em>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`terminal-product terminal-product--${product.accent}`}>
      <a
        className="terminal-product__image"
        href={product.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${product.name} live site`}
      >
        <ProductScreen product={product} />
      </a>
      <div className="terminal-product__body">
        <div className="terminal-product__title">
          <h3>{product.name}</h3>
          <ArrowUpRight size={18} />
        </div>
        <p className="terminal-product__category">{product.category}</p>
        <p>{product.description}</p>
        <div className="terminal-tags">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="terminal-links">
          <a href={product.liveUrl} target="_blank" rel="noreferrer">
            [live]
          </a>
          {product.extraLinks?.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <p className="terminal-proof">
          <Check size={14} /> {product.proof}
        </p>
      </div>
    </article>
  );
}
