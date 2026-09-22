import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import { CTASection } from "@/components/CTASection";
export const Route=createFileRoute("/gallery")({head:()=>({meta:[{title:"Product Gallery | UDY Healthcare"},{name:"description",content:"View authentic UDY Healthcare product and packaging photography."},{property:"og:title",content:"Product Gallery | UDY Healthcare"},{property:"og:description",content:"A closer look at UDY Healthcare's product portfolio."},{property:"og:type",content:"website"},{property:"og:url",content:"/gallery"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/gallery"}]}),component:Gallery});
function Gallery(){return <><section className="page-hero"><div className="site-container"><p className="eyebrow">PRODUCT PHOTOGRAPHY</p><h1>Inside UDY Healthcare</h1><p>A closer look at our growing healthcare product portfolio.</p></div></section><section className="section"><div className="site-container"><GalleryGrid images={galleryImages}/></div></section><CTASection/></>}
