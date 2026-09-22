import p1 from "@/assets/products/udy-healthcare-amoxy-ds.webp.asset.json";
import p2 from "@/assets/products/udy-healthcare-amoxy-xl.webp.asset.json";
import p3 from "@/assets/products/udy-healthcare-budexol.webp.asset.json";
import p4 from "@/assets/products/udy-healthcare-colvent-drops.webp.asset.json";
import p5 from "@/assets/products/udy-healthcare-colvent-syrup.webp.asset.json";
import p6 from "@/assets/products/udy-healthcare-emfa-ds.webp.asset.json";
import p7 from "@/assets/products/udy-healthcare-esmozip-jr.webp.asset.json";
import p8 from "@/assets/products/udy-healthcare-fevibru.webp.asset.json";
import p9 from "@/assets/products/udy-healthcare-flutocin.webp.asset.json";
import p10 from "@/assets/products/udy-healthcare-gastrozip.webp.asset.json";
import p11 from "@/assets/products/udy-healthcare-histaxen.webp.asset.json";
import p12 from "@/assets/products/udy-healthcare-mucolox-ls.webp.asset.json";
import p13 from "@/assets/products/udy-healthcare-mucolox.webp.asset.json";
import p14 from "@/assets/products/udy-healthcare-mucolox-cet.webp.asset.json";
import p15 from "@/assets/products/udy-healthcare-mupibex.webp.asset.json";
import p16 from "@/assets/products/udy-healthcare-ranivon.webp.asset.json";
import p17 from "@/assets/products/udy-healthcare-reutibee.webp.asset.json";
import p18 from "@/assets/products/udy-healthcare-saloxol.webp.asset.json";
import p19 from "@/assets/products/udy-healthcare-saloxol-jr.webp.asset.json";
import p20 from "@/assets/products/udy-healthcare-tiny-bell-drops.webp.asset.json";
import p21 from "@/assets/products/udy-healthcare-tiny-tooths.webp.asset.json";
import p22 from "@/assets/products/udy-healthcare-ud-pro-gg.webp.asset.json";
import p23 from "@/assets/products/udy-healthcare-ud-pro-bc.webp.asset.json";
import p24 from "@/assets/products/udy-healthcare-ud3-maxx.webp.asset.json";
import p25 from "@/assets/products/udy-healthcare-udkid-cef.webp.asset.json";
import p26 from "@/assets/products/udy-healthcare-udkid-ls.webp.asset.json";
import p27 from "@/assets/products/udy-healthcare-udkid-ns.webp.asset.json";
import p28 from "@/assets/products/udy-healthcare-udvit-d3.webp.asset.json";
import p29 from "@/assets/products/udy-healthcare-vit-a-drops.webp.asset.json";
import p30 from "@/assets/products/udy-healthcare-up-hunger.webp.asset.json";
import p31 from "@/assets/products/udy-healthcare-vit-maxx-dha-choline-lutein.webp.asset.json";
import p32 from "@/assets/products/udy-healthcare-vit-maxx-dha-epa.webp.asset.json";
import p33 from "@/assets/products/udy-healthcare-zoinic.webp.asset.json";
import p34 from "@/assets/products/udy-healthcare-gestovia-200.webp.asset.json";
import p35 from "@/assets/products/udy-healthcare-ovundra.webp.asset.json";

export type Product = { id: string; name: string; image: string };

export const products: Product[] = [
  { id: "amoxy-ds", name: "Amoxy DS", image: p1.url },
  { id: "amoxy-xl", name: "Amoxy XL", image: p2.url },
  { id: "budexol", name: "Budexol", image: p3.url },
  { id: "colvent-drops", name: "Colvent Drops", image: p4.url },
  { id: "colvent-syrup", name: "Colvent Syrup", image: p5.url },
  { id: "emfa-ds", name: "EMFA-DS", image: p6.url },
  { id: "esmozip-jr", name: "EsmoZip JR", image: p7.url },
  { id: "fevibru", name: "Fevibru", image: p8.url },
  { id: "flutocin", name: "Flutocin", image: p9.url },
  { id: "gastrozip", name: "Gastrozip", image: p10.url },
  { id: "histaxen", name: "Histaxen", image: p11.url },
  { id: "mucolox-ls", name: "Mucolox-LS", image: p12.url },
  { id: "mucolox", name: "Mucolox", image: p13.url },
  { id: "mucolox-cet", name: "Mucolox-CET", image: p14.url },
  { id: "mupibex", name: "Mupibex", image: p15.url },
  { id: "ranivon", name: "Ranivon", image: p16.url },
  { id: "reutibee", name: "ReutiBee", image: p17.url },
  { id: "saloxol", name: "Saloxol", image: p18.url },
  { id: "saloxol-jr", name: "Saloxol-JR", image: p19.url },
  { id: "tiny-bell-drops", name: "Tiny Bell Drops", image: p20.url },
  { id: "tiny-tooths", name: "Tiny Tooths", image: p21.url },
  { id: "ud-pro-gg", name: "UD PRO-GG", image: p22.url },
  { id: "ud-pro-bc", name: "UD PRO-BC", image: p23.url },
  { id: "ud3-maxx", name: "UD3 MAXX", image: p24.url },
  { id: "udkid-cef", name: "UDKID-CEF", image: p25.url },
  { id: "udkid-ls", name: "UDKID-LS", image: p26.url },
  { id: "udkid-ns", name: "UDKID-NS", image: p27.url },
  { id: "udvit-d3", name: "UDVIT D3", image: p28.url },
  { id: "vit-a-drops", name: "VIT-A Drops", image: p29.url },
  { id: "up-hunger", name: "Up Hunger", image: p30.url },
  { id: "vit-maxx-dha-choline-lutein", name: "VIT-MAXX DHA / Choline / Lutein", image: p31.url },
  { id: "vit-maxx-dha-epa", name: "VIT-MAXX DHA / EPA", image: p32.url },
  { id: "zoinic", name: "Zoinic", image: p33.url },
  { id: "gestovia-200", name: "Gestovia 200", image: p34.url },
  { id: "ovundra", name: "Ovundra", image: p35.url },
];

export const featuredProductIds = ["amoxy-xl", "udkid-cef", "udkid-ls", "tiny-bell-drops", "ud-pro-gg", "udvit-d3", "vit-maxx-dha-choline-lutein", "gestovia-200"];
export const featuredProducts = featuredProductIds.map((id) => products.find((p) => p.id === id)).filter((p): p is Product => Boolean(p));
