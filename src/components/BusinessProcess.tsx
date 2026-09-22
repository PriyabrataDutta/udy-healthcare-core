import { processSteps } from "@/data/site";
export function BusinessProcess() { return <ol className="process-timeline">{processSteps.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,"0")}</span><p>{step}</p></li>)}</ol>; }
