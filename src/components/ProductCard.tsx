import { Package } from "lucide-react";
import type { Product } from "@/data/products";
export function ProductCard({ product }: { product: Product }) {
 return <article className="product-card"><div className="product-image-wrap"><img src={product.image} alt={`${product.name} product packaging by UDY Healthcare`} loading="lazy" /></div><div className="product-card-copy"><p className="product-kicker">UDY Healthcare</p><h3>{product.name}</h3><span className="detail-label">Product packaging <Package aria-hidden="true" /></span></div></article>;
}
