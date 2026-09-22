import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
export function GalleryGrid({ images, preview = false }: { images: {src:string;alt:string}[]; preview?: boolean }) {
 const [selected,setSelected]=useState<number | null>(null);
 useEffect(()=>{ if(selected===null)return; const fn=(e:KeyboardEvent)=>{if(e.key==="Escape")setSelected(null)}; document.addEventListener("keydown",fn); return()=>document.removeEventListener("keydown",fn);},[selected]);
 return <><div className={`gallery-grid ${preview ? "gallery-preview" : ""}`}>{images.map((image,index)=><button className="gallery-item" key={image.src} onClick={()=>setSelected(index)} aria-label={`Enlarge ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy"/><span><ZoomIn aria-hidden="true" /></span></button>)}</div>{selected!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Product photograph"><Button variant="ghost" size="icon" onClick={()=>setSelected(null)} aria-label="Close image"><X/></Button><img src={images[selected]?.src} alt={images[selected]?.alt ?? "UDY Healthcare product photograph"}/></div>}</>;
}
