import { useState } from "react";
import { Minus, ChevronLeft, ChevronRight, Star  } from "lucide-react";
import "../styles/feedback.css";
import { testimonials } from "../data/testimonial.js";

const Feedback = () => {

  const [ index, switchIndex ] = useState(0);

  const [windowStart, setWindowStart] = useState(0);
  const visibleCount = Math.min(5, testimonials.length);

  const nextTestimonial = () => {
    const newIndex = (index + 1) % testimonials.length;
    
    if (newIndex === 0) {
      setWindowStart(0);
      
    } else if (newIndex >= windowStart + visibleCount) {
      setWindowStart(newIndex - visibleCount + 1);
    }
    
    switchIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = index === 0 ? testimonials.length - 1 : index - 1;
    
    if (newIndex === testimonials.length - 1) {
      setWindowStart(Math.max(testimonials.length - visibleCount, 0));

    } else if (newIndex < windowStart) {
      setWindowStart(newIndex);
    }
    
    switchIndex(newIndex);
  };

  const visibleIndices = Array.from(
    { length: visibleCount }, 
    (_, i) => windowStart + i
  );

  return (
    <section id="feedback" className="feedback">
      
      <span className="feedback-span"><Minus /> TESTIMONIALS <Minus /></span>

      <h2 className="feedback-h2">What Clients Are Saying</h2>

      <div className="testimonial-card">

        <span className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} fill={i < testimonials[index].rating ? "currentColor" : "none"} />
          ))}
        </span>

        <p className="description">{testimonials[index].description}</p>

        <strong className="full-name">{testimonials[index].name}</strong>
      </div>

      <div className="navigations">
        <button className="prev" onClick={prevTestimonial}><ChevronLeft /></button>

        <div className="dots">
          {visibleIndices.map((i) => (
            <button 
              key={i} 
              onClick={() => switchIndex(i)}
              className={i === index ? "dot active" : "dot"}
            />
          ))}
        </div>

        <button className="next" onClick={nextTestimonial}><ChevronRight /></button>
      </div>
    </section>
  )
}

export default Feedback
