import { Baby, HeartPulse, Stethoscope, Microscope } from "lucide-react";
import { segments } from "@/data/site";
const icons = [Baby, HeartPulse, Stethoscope, Microscope];
export function Segments() { return <div className="segment-grid">{segments.map((segment,index) => { const Icon=icons[index] ?? Stethoscope; return <article className="segment-card" key={segment.title}><span className="line-icon"><Icon aria-hidden="true" /></span><p className="card-number">0{index+1}</p><h3>{segment.title}</h3><p>{segment.description}</p></article>; })}</div>; }
