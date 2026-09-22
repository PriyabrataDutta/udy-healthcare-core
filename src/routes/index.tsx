import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, PackageCheck, Route as RouteIcon, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Segments } from "@/components/Segments";
import { BusinessProcess } from "@/components/BusinessProcess";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { featuredProducts, products } from "@/data/products";
import { galleryImages } from "@/data/gallery";

const qualityItems = [
  { icon: ShieldCheck, title: "Quality Focus", text: "Maintaining a strong focus on healthcare product quality and appropriate standards." },
  { icon: CheckCircle2, title: "Responsible Practices", text: "Working toward responsible healthcare and compliant business practices." },
  { icon: Sparkles, title: "Growing Portfolio", text: "Continually expanding healthcare brands across different therapeutic requirements." },
  { icon: RouteIcon, title: "Distribution", text: "Working through appropriate healthcare and distribution channels." },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "UDY Healthcare Private Limited | Pharmaceutical & Healthcare Products" },
    { name: "description", content: "UDY Healthcare Private Limited develops, markets and distributes pharmaceutical and healthcare products across pediatric, gynecology, general healthcare and specialized segments." },
    { property: "og:title", content: "UDY Healthcare Private Limited | Pharmaceutical & Healthcare Products" },
    { property: "og:description", content: "Explore UDY Healthcare's pharmaceutical and healthcare portfolio across diverse therapeutic segments." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"Organization", name:"UDY Healthcare Private Limited", foundingDate:"2020-11-02", address:{"@type":"PostalAddress", streetAddress:"Khata No. 108/1, Abhirudhi Layout, Site No. 16, 2nd Floor, Seegehalli Main Rd, opposite Forties Waterscape Apartment", addressLocality:"Bengaluru", addressRegion:"Karnataka", postalCode:"560049", addressCountry:"IN"} }) }] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="hero"><div className="site-container hero-grid"><div className="hero-copy"><p className="eyebrow">UDY HEALTHCARE PRIVATE LIMITED</p><h1>Building Trusted Healthcare Brands for Better Care</h1><p className="hero-lead">UDY Healthcare Private Limited develops and promotes healthcare and pharmaceutical products across pediatric, gynecology, general healthcare, and specialized therapeutic segments.</p><div className="hero-actions"><Button asChild><Link to="/products">Explore Our Products <ArrowRight /></Link></Button><Button asChild variant="secondary"><Link to="/about">About UDY Healthcare</Link></Button></div><div className="hero-stat"><strong>Established 2020</strong><span>Building a growing healthcare portfolio</span></div></div><div className="hero-products" aria-label="Selected UDY Healthcare products">{[products[24],products[19],products[21]].map((product,index)=>product&&<img key={product.id} className={`hero-product hero-product-${index+1}`} src={product.image} alt={`${product.name} product packaging`} />)}</div></div></section>
      <section className="section"><div className="site-container split-section"><SectionHeading eyebrow="ABOUT UDY HEALTHCARE" title="Committed to Quality Healthcare Solutions" description="UDY Healthcare Private Limited is engaged in the development, marketing, and distribution of healthcare and pharmaceutical products across multiple healthcare segments." /><div className="prose-block"><p>The company works with appropriate pharmaceutical manufacturing partners while focusing on product development, brand building, marketing, distribution and expansion of its healthcare portfolio.</p><Button asChild variant="secondary"><Link to="/about">Know More About Us <ArrowRight /></Link></Button></div></div></section>
      <section className="section section-tint"><div className="site-container"><SectionHeading eyebrow="OUR FOCUS" title="Our Healthcare Segments" description="A considered portfolio serving distinct healthcare needs." /><Segments /></div></section>
      <section className="section"><div className="site-container"><div className="section-row"><SectionHeading eyebrow="PRODUCT PORTFOLIO" title="Explore Our Product Portfolio" description="Discover a selection of pharmaceutical, nutraceutical and healthcare products from UDY Healthcare." /><Button asChild variant="secondary"><Link to="/products">View all products <ArrowRight /></Link></Button></div><div className="product-grid featured-grid">{featuredProducts.map(product=><ProductCard key={product.id} product={product}/>)}</div></div></section>
      <section className="section process-section"><div className="site-container"><SectionHeading eyebrow="OUR BUSINESS MODEL" title="From Product Planning to Healthcare Access" description="A focused path built around trusted manufacturing partnerships and responsible distribution." /><BusinessProcess /></div></section>
      <section className="section"><div className="site-container"><SectionHeading eyebrow="OUR COMMITMENT" title="Focused on Quality, Compliance & Responsible Healthcare" /><div className="quality-grid">{qualityItems.map(({icon:Icon,title,text})=><article className="quality-card" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="showcase"><div className="site-container"><div className="showcase-heading"><PackageCheck/><div><p className="eyebrow">A GROWING PORTFOLIO</p><h2>Products made visible. Quality kept in focus.</h2></div></div><div className="showcase-strip">{products.slice(20,25).map(p=><img key={p.id} src={p.image} alt={`${p.name} packaging`} loading="lazy"/>)}</div></div></section>
      <section className="section"><div className="site-container"><div className="section-row"><SectionHeading eyebrow="PRODUCT PHOTOGRAPHY" title="Our Products in Focus" /><Button asChild variant="secondary"><Link to="/gallery">View Gallery <ArrowRight /></Link></Button></div><GalleryGrid images={galleryImages.slice(0,6)} preview /></div></section>
      <CTASection />
    </>
  );
}
