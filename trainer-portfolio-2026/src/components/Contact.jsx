import { Phone } from "lucide-react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      
      <span className="contact-span">FREE CONSULTATION</span>

      <h2 className="contact-h2">Ready to Start Your Transformation?</h2>

      <p className="contact-p">
        Book a free 30-minute call. We will talk through your goals, 
        assess your current situation, and determine the right program for you. No commitment required.
      </p>

      <a href="tel:+359877742858" className="phone">
        <Phone size={12} /> +359 87 7742 858
      </a>
    </section>
  )
}

export default Contact
