import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/brand/udy-healthcare-logo.webp.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  ["Home", "/"], ["About Us", "/about"], ["Products", "/products"], ["Gallery", "/gallery"], ["Contact Us", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-container header-inner">
      <Link to="/" aria-label="UDY Healthcare home" onClick={() => setOpen(false)}><img className="brand-logo" src={logo.url} alt="UDY Healthcare" /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label,to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "nav-link active" }} className="nav-link">{label}</Link>)}
      </nav>
      <Button className="menu-button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="mobile-nav-link">{label}</Link>)}</nav>}
  </header>;
}
