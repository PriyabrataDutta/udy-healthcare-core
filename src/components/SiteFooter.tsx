import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import logo from "@/assets/brand/udy-healthcare-logo.webp.asset.json";
import { officeAddress } from "@/data/site";

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-grid">
    <div><img src={logo.url} alt="UDY Healthcare" className="footer-logo" /><p>UDY Healthcare Private Limited is committed to developing and promoting healthcare products across diverse therapeutic segments.</p></div>
    <div><h2>Quick Links</h2><div className="footer-links"><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/products">Products</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact Us</Link></div></div>
    <div><h2>Healthcare Segments</h2><ul><li>Pediatric</li><li>Gynecology</li><li>General Healthcare</li><li>Specialized Segments</li></ul></div>
    <div><h2>Registered Office</h2><address><MapPin aria-hidden="true" /> <span>{officeAddress.slice(1).join(" ")}</span></address></div>
  </div><div className="site-container footer-bottom">© 2026 UDY Healthcare Private Limited. All Rights Reserved.</div></footer>;
}
