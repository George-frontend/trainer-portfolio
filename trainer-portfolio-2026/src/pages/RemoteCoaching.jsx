import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Target, Users, BarChart2, Calendar, Award, CheckCircle } from "lucide-react";
import "../styles/program-pages.css";

const RemoteCoaching = () => {
  return (
    <>
      <section className="program-hero">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Home</Link>

        <span className="program-icon"><Monitor /></span>

        <span className="program-label">TRAIN FROM ANYWHERE</span>

        <h1 className="program-h1">Your Coach. Your Schedule. Anywhere.</h1>

        <p className="program-description">
          Fully personalized online coaching with regular communication, video 
          technique corrections, workout tracking, and program adjustments 
          whenever your progress demands it.
        </p>
      </section>

      <section className="program-features">

        <span className="primary-span">What You Get</span>

        <h2 className="features-h2">Everything That Is Included</h2>

        <div className="features-grid">

          <article className="feature-card">

            <span className="feature-icon"><Target /></span>

            <h3 className="feature-title">Individual Approach</h3>

            <p className="feature-p">
              Every program is built from scratch around your goals, fitness 
              level, equipment, and schedule. No templates — just what works for you.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Calendar /></span>

            <h3 className="feature-title">Train Anywhere, Anytime</h3>

            <p className="feature-p">
              At the gym, at home, or on the road — your program travels 
              with you. No fixed location, no fixed time.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Users /></span>

            <h3 className="feature-title">Regular Communication</h3>

            <p className="feature-p">
              Consistent check-ins and direct messaging to keep you on 
              track, answer questions, and keep motivation high throughout the week.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><BarChart2 /></span>

            <h3 className="feature-title">Workout Tracking</h3>
            
            <p className="feature-p">
              Every session is logged and tracked so your progress is always 
              visible — to you and to your coach.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Calendar /></span>

            <h3 className="feature-title">Progress Tracking</h3>

            <p className="feature-p">
              Data-driven reviews that go beyond the scale. Strength, 
              endurance, body composition — all measured and evaluated regularly.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Monitor /></span>

            <h3 className="feature-title">Video Technique Corrections</h3>

            <p className="feature-p">
              Submit exercise videos and receive detailed, specific feedback 
              on your form and execution — the same quality of coaching you get in person.
            </p>
          </article>
        </div>

        <div className="requirements-card">

          <span className="feature-icon"><Target /></span>

          <div className="requirements-content">

            <h3 className="requirements-title">Client Requirements</h3>

            <span className="requirement-item"> Minimum 1 exercise video per session</span>

            <span className="requirement-item"> Log your working weights in the session tracker after each workout</span>
          </div>
        </div>
      </section>

      <hr className="program-line" />

      <section className="program-pricing">

        <span className="primary-span">Pricing</span>

        <h2 className="pricing-h2">Simple, Transparent Pricing</h2>


        <div className="pricing-cards">

          <div className="pricing-card">

            <span className="price">€50 / mo</span>

            <span className="price-title">Monthly — Online Training</span>

            <p className="price-description">Full remote coaching program</p>
          </div>

          <div className="pricing-card popular">

            <span className="badge-popular">MOST POPULAR</span>

            <span className="price">€80 / mo</span>

            <span className="price-title">Monthly — Online + Nutrition</span>

            <p className="price-description">Training & nutrition combined</p>
          </div>
        </div>

        <div className="special-offers">

          <h3 className="offers-title"><Award size={16} /> Special Offers</h3>

          <div className="offers-grid">

            <div className="offer-card">

              <span className="offer-badge">-10%</span>

              <span className="offer-name">3-Month Prepay</span>

              <p className="offer-description">Pay for 3 months upfront and save 10% on any package.</p>
            </div>

            <div className="offer-card">

              <span className="offer-badge">-15%</span>

              <span className="offer-name">6-Month Prepay</span>

              <p className="offer-description">Pay for 6 months upfront and save 15% on any package.</p>
            </div>

            <div className="offer-card">

              <span className="offer-badge free">Free</span>

              <span className="offer-name">First Session Free</span>

              <p className="offer-description">Your very first live training session is completely free — no commitment required.</p>
            </div>
          </div>
        </div>

        <Link to="/#contact" className="primary-btn">Book Now</Link>
      </section>
    </>
  )
}

export default RemoteCoaching