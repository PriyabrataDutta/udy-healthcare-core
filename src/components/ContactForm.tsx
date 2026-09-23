import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ContactForm() {
 const [status,setStatus]=useState<"idle"|"success"|"error">("idle");
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault(); const form=e.currentTarget; if(!form.checkValidity()){setStatus("error");form.reportValidity();return;} setStatus("success");form.reset();}
 return <form className="contact-form" onSubmit={submit} noValidate><div className="field-grid"><label>Full Name<input name="name" autoComplete="name" required /></label><label>Phone Number<input name="phone" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{7,20}" required /></label></div><div className="field-grid"><label>Email Address<input name="email" type="email" autoComplete="email" required /></label><label>Subject<input name="subject" required /></label></div><label>Message<textarea name="message" rows={6} required /></label><p className="form-note">Please do not include sensitive personal medical information.</p><Button type="submit">Submit Enquiry <Send /></Button>{status==="success"&&<p className="form-success" role="status">Thank you. Your enquiry form has been completed successfully.</p>}{status==="error"&&<p className="form-error" role="alert">Please review the highlighted fields and try again.</p>}</form>;
}
