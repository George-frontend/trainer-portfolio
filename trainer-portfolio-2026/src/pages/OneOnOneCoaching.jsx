import { Link } from "react-router-dom";
import { ArrowLeft, Dumbbell, Award, Calendar, Target, BarChart2 } from "lucide-react";
import "../styles/program-pages.css";

const OneOnOneCoaching = () => {
  return (
    <>
      <section className="program-hero">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Home</Link>

        <div className="hero-badges">
          <span className="program-icon"><Dumbbell /></span>

          <span className="free-session-badge"><Award size={14} /> First Session Free</span>
        </div>

        <span className="program-label">IN-PERSON COACHING</span>

        <h1 className="program-h1">Train in Person. See Real Results.</h1>

        <p className="program-description">
          Personalized in-person sessions with a structured training program, 
          flexible scheduling, and full progress tracking. Your first session 
          is completely free — no commitment needed.
        </p>
      </section>

      <section className="program-features">

        <span className="primary-span">What You Get</span>

        <h2 className="features-h2">Everything That Is Included</h2>

        <div className="features-grid">

          <article className="feature-card">

            <span className="feature-icon"><Award /></span>

            <h3 className="feature-title">First Session Is Free</h3>

            <p className="feature-p">
              Get started with zero risk. See how it works, and decide from there.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Calendar /></span>

            <h3 className="feature-title">Flexible Scheduling</h3>

            <p className="feature-p">
              You pick the time that fits your life. Sessions are booked around your schedule, not the other way around.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Dumbbell /></span>

            <h3 className="feature-title">Unlimited Sessions</h3>

            <p className="feature-p">
              No session caps or limits. The focus is your progress, not a session count.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Target /></span>

            <h3 className="feature-title">Individual Training Program</h3>

            <p className="feature-p">
              Every program is designed specifically for your body, goals, 
              and starting point. Nothing generic, nothing copy-pasted.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><BarChart2 /></span>

            <h3 className="feature-title">Progress Tracking</h3>

            <p className="feature-p">
              Ongoing measurement and regular reviews of your results so 
              you always have a clear picture of where you stand and where you are headed.
            </p>
          </article>
        </div>
      </section>

      <section className="program-pricing">

        <span className="primary-span">Pricing</span>

        <div className="pricing-cards">

          <div className="pricing-card">

            <span className="price">€25</span>

            <span className="price-title">Single Individual Session</span>

            <p className="price-description">One-off, no subscription</p>
          </div>

          <div className="pricing-card">

            <span className="price">€10</span>

            <span className="price-title">Single Parallel Session</span>

            <p className="price-description">Train alongside another client</p>
          </div>

          <div className="pricing-card">

            <span className="price">€75</span>

            <span className="price-title">Monthly — Parallel Training</span>

            <p className="price-description">Unlimited parallel sessions</p>
          </div>

          <div className="pricing-card">

            <span className="price">€200</span>

            <span className="price-title">Monthly — Individual Training</span>

            <p className="price-description">Up to 2 people</p>
          </div>

          <div className="pricing-card">

            <span className="price">€215</span>

            <span className="price-title">Monthly — Nutrition + Individual Training</span>

            <p className="price-description">Best value full package</p>
          </div>

          <div className="pricing-card popular">

            <span className="badge-popular">MOST POPULAR</span>

            <span className="price">€115</span>

            <span className="price-title">Monthly — Nutrition + Parallel Training</span>

            <p className="price-description">Group training with nutrition</p>
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

            <div className="offer-card">

              <span className="offer-badge free">Hot offer</span>

              <span className="offer-name">Recommend me</span>

              <p className="offer-description">Get a free month for every new client who joins through your recommendation.</p>
            </div>
          </div>
        </div>

        <Link to="/#contact" className="primary-btn">Book Your Free Session</Link>
      </section>
    </>
  )
}

export default OneOnOneCoaching