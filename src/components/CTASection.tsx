import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CTASection() { return <section className="cta-band"><div className="site-container cta-inner"><div><p className="eyebrow eyebrow-light">CONNECT WITH UDY HEALTHCARE</p><h2>Let’s start a conversation.</h2><p>Whether you would like to know more about our healthcare portfolio or connect with our team, we would be pleased to hear from you.</p></div><Button asChild variant="secondary"><Link to="/contact">Contact Us <ArrowRight /></Link></Button></div></section>; }
