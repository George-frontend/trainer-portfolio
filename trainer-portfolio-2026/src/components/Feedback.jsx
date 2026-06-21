import { useState } from "react";
import { Minus, ChevronLeft, ChevronRight, Star  } from "lucide-react";
import "../styles/feedback.css";

const Feedback = () => {

  const testimonials = [
    {
      rating: 5,
      description: `I have tried every program out there...`,
      name: "George"
    },
    {
      rating: 3,
      description: `James completely changed how I think about training...`,
      name: "Kevin"
    }
  ];

  const [ index, switchIndex ] = useState(0);

  const nextTestimonial = () => {
    switchIndex((index + 1) % testimonials.length);
  }

  const prevTestimonial = () => {
    
    if (index === 0) {
      switchIndex(testimonials.length - 1);

    } else {
      switchIndex(index - 1);
    }
  }

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
          {testimonials.map((_, i) => (
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
